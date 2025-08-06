import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCareerApplicationSchema, insertLeadCaptureSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Newsletter subscription endpoint
  app.post('/api/subscribe', async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Email is required' });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }

      // Forward to n8n webhook
      const response = await fetch('https://adk.defiantintegration.com/webhook/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() })
      });

      if (response.ok) {
        res.json({ success: true, message: 'Successfully subscribed!' });
      } else {
        console.error('Webhook error:', response.status, response.statusText);
        res.status(500).json({ error: 'Subscription service temporarily unavailable' });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Comprehensive EspoCRM diagnostic endpoint
  app.get('/api/diagnose-espocrm', async (req, res) => {
    try {
      const espoCrmUrl = process.env.ESPOCRM_URL;
      const espoCrmApiKey = process.env.ESPOCRM_API_KEY;
      
      if (!espoCrmUrl || !espoCrmApiKey) {
        return res.json({ 
          error: 'Missing EspoCRM configuration',
          hasUrl: !!espoCrmUrl,
          hasApiKey: !!espoCrmApiKey
        });
      }

      const baseUrl = espoCrmUrl.replace(/#.*$/, '').replace(/\/$/, '');
      const results: any[] = [];
      
      // Test different URL patterns and auth methods
      const urlPatterns = [
        `${baseUrl}/api/v1`,
        `${baseUrl}/api`,
        `${baseUrl}/espocrm/api/v1`,
        `${baseUrl}/espocrm/api`,
        `${baseUrl}/public/api/v1`,
        `${baseUrl}/crm/api/v1`
      ];
      
      const authMethods = [
        { name: 'X-Api-Key', headers: { 'X-Api-Key': espoCrmApiKey } },
        { name: 'Authorization Bearer', headers: { 'Authorization': `Bearer ${espoCrmApiKey}` } },
        { name: 'Authorization ApiKey', headers: { 'Authorization': `ApiKey ${espoCrmApiKey}` } },
        { name: 'Espo-Api-Key', headers: { 'Espo-Api-Key': espoCrmApiKey } }
      ];
      
      const endpoints = ['/App/info', '/Lead', '/Leads', ''];
      
      for (const urlPattern of urlPatterns) {
        for (const auth of authMethods) {
          for (const endpoint of endpoints) {
            try {
              const testUrl = `${urlPattern}${endpoint}`;
              const response = await fetch(testUrl, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  ...auth.headers
                } as HeadersInit
              });
              
              const contentType = response.headers.get('content-type') || '';
              const isJson = contentType.includes('application/json');
              const responseText = await response.text();
              
              results.push({
                url: testUrl,
                authMethod: auth.name,
                status: response.status,
                contentType,
                isJson,
                isSuccess: response.ok && isJson,
                responsePreview: responseText.substring(0, 200),
                redirected: response.redirected,
                finalUrl: response.url
              });
              
              // If we found a working endpoint, also test Lead creation
              if (response.ok && isJson && endpoint === '/Lead') {
                const createResponse = await fetch(testUrl, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    ...auth.headers
                  } as HeadersInit,
                  body: JSON.stringify({
                    name: 'Test Lead',
                    firstName: 'Test',
                    lastName: 'Lead',
                    emailAddress: 'test@example.com'
                  })
                });
                
                results.push({
                  url: testUrl,
                  authMethod: auth.name,
                  method: 'POST',
                  status: createResponse.status,
                  contentType: createResponse.headers.get('content-type'),
                  isJson: createResponse.headers.get('content-type')?.includes('application/json'),
                  isSuccess: createResponse.ok,
                  responsePreview: (await createResponse.text()).substring(0, 200)
                });
              }
            } catch (error) {
              results.push({
                url: `${urlPattern}${endpoint}`,
                authMethod: auth.name,
                error: (error as Error).message
              });
            }
          }
        }
      }
      
      // Find working configurations
      const workingConfigs = results.filter(r => r.isSuccess);
      
      res.json({
        baseUrl,
        totalTests: results.length,
        workingConfigurations: workingConfigs,
        allResults: results.sort((a, b) => (b.isSuccess ? 1 : 0) - (a.isSuccess ? 1 : 0))
      });
      
    } catch (error) {
      const err = error as Error;
      res.json({ error: err.message, stack: err.stack });
    }
  });

  // Lead capture form submission endpoint
  app.post('/api/lead-capture', async (req, res) => {
    try {
      // Extract the form data from the nested structure
      const {
        contactInfo,
        businessContext,
        aiNeeds,
        qualification,
        source = "website_typeform"
      } = req.body;

      // Flatten the data structure for database storage
      const flattenedData = {
        fullName: contactInfo?.fullName,
        email: contactInfo?.email,
        phone: contactInfo?.phone,
        company: contactInfo?.company,
        jobTitle: contactInfo?.jobTitle,
        industry: businessContext?.industry,
        companySize: businessContext?.companySize,
        techMaturity: businessContext?.techMaturity,
        businessChallenges: aiNeeds?.businessChallenges,
        improvementAreas: Array.isArray(aiNeeds?.improvementAreas) 
          ? aiNeeds.improvementAreas 
          : [aiNeeds?.improvementAreas].filter(Boolean),
        drivingFactor: aiNeeds?.drivingFactor,
        timeline: aiNeeds?.timeline,
        investmentRange: qualification?.investmentRange,
        roiTimeline: qualification?.roiTimeline,
        decisionProcess: qualification?.decisionProcess,
        source
      };

      // Validate the flattened data
      const validatedData = insertLeadCaptureSchema.parse(flattenedData);
      
      // Store in database
      const leadCapture = await storage.createLeadCapture(validatedData);
      
      console.log('Lead capture stored:', leadCapture.id);

      // Primary: Send to n8n webhook (most reliable)
      // Secondary: Try EspoCRM direct integration
      let webhookSuccess = false;
      let crmSuccess = false;
      
      // Send to multiple webhook endpoints (try all possible endpoints)
      const webhookEndpoints = [
        'https://adk.defiantintegration.com/webhook/lead-capture',
        'https://defiantintegration.com/webhook/lead-capture',
        'https://n8n.defiantintegration.com/webhook/lead-capture',
        'https://hooks.zapier.com/hooks/catch/17775041/b8x7abr/',
        'https://adk.defiantintegration.com/webhook-test/lead-capture'
      ];
      
      try {
        console.log('📤 Sending lead to webhook endpoints...');
        const webhookData = {
          type: 'lead_capture',
          timestamp: new Date().toISOString(),
          leadId: leadCapture.id,
          contact: {
            name: contactInfo?.fullName,
            email: contactInfo?.email,
            phone: contactInfo?.phone,
            company: contactInfo?.company,
            title: contactInfo?.jobTitle
          },
          business: {
            industry: businessContext?.industry,
            size: businessContext?.companySize,
            techMaturity: businessContext?.techMaturity
          },
          goals: {
            challenges: aiNeeds?.businessChallenges,
            improvements: aiNeeds?.improvementAreas,
            driver: aiNeeds?.drivingFactor,
            timeline: aiNeeds?.timeline
          },
          qualification: {
            investment: qualification?.investmentRange,
            roiTimeline: qualification?.roiTimeline,
            process: qualification?.decisionProcess
          },
          source: source
        };
        
        // Try each webhook endpoint
        for (const endpoint of webhookEndpoints) {
          try {
            console.log(`📤 Trying webhook: ${endpoint}`);
            const webhookResponse = await fetch(endpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(webhookData)
            });
            
            if (webhookResponse.ok) {
              console.log(`✅ Webhook success at: ${endpoint}`);
              console.log(`Response status: ${webhookResponse.status}`);
              webhookSuccess = true;
              break; // Stop trying other endpoints if one succeeds
            } else {
              console.log(`❌ Webhook failed at ${endpoint}:`, webhookResponse.status, await webhookResponse.text());
            }
          } catch (singleWebhookError) {
            console.log(`❌ Webhook error at ${endpoint}:`, singleWebhookError);
          }
        }
      } catch (webhookError) {
        console.error('❌ All webhook attempts failed:', webhookError);
      }
      
      // Also attempt direct EspoCRM integration (secondary method)
      try {
        const espoCrmUrl = process.env.ESPOCRM_URL;
        const espoCrmApiKey = process.env.ESPOCRM_API_KEY;
        
        if (espoCrmUrl && espoCrmApiKey) {
          const baseUrl = espoCrmUrl.replace(/#.*$/, '').replace(/\/$/, '');
          console.log('🔄 Attempting direct EspoCRM integration...');
          console.log('Form data received:', { contactInfo, businessContext, aiNeeds, qualification });
          
          // Properly map form data to EspoCRM fields
          const fullName = contactInfo?.fullName || '';
          const nameParts = fullName.trim().split(' ');
          const firstName = nameParts[0] || 'Unknown';
          const lastName = nameParts.slice(1).join(' ') || '';
          
          // Convert investment range to numeric opportunity amount
          const investmentRange = qualification?.investmentRange || '';
          let opportunityAmount = null;
          
          if (investmentRange.includes('$500K+') || investmentRange.includes('$500,000+')) {
            opportunityAmount = 500000;
          } else if (investmentRange.includes('$100K+') || investmentRange.includes('$100,000+')) {
            opportunityAmount = 100000;
          } else if (investmentRange.includes('$50K-$100K') || investmentRange.includes('$50,000-$100,000')) {
            opportunityAmount = 75000;
          } else if (investmentRange.includes('$25K-$50K') || investmentRange.includes('$25,000-$50,000')) {
            opportunityAmount = 37500;
          } else if (investmentRange.includes('$15K-$25K') || investmentRange.includes('$15,000-$25,000')) {
            opportunityAmount = 20000;
          } else if (investmentRange.includes('$10K-$15K') || investmentRange.includes('$10,000-$15,000')) {
            opportunityAmount = 12500;
          } else if (investmentRange.includes('$5K-$15K') || investmentRange.includes('$5,000-$15,000')) {
            opportunityAmount = 10000;
          } else if (investmentRange.includes('$5K-$10K') || investmentRange.includes('$5,000-$10,000')) {
            opportunityAmount = 7500;
          } else if (investmentRange.includes('$1K-$5K') || investmentRange.includes('$1,000-$5,000')) {
            opportunityAmount = 3000;
          } else if (investmentRange.includes('Under $1K') || investmentRange.includes('Under $1,000')) {
            opportunityAmount = 500;
          }

          // Map form data to actual EspoCRM field names
          const crmLeadData: any = {
            // Primary contact fields
            firstName: firstName,
            lastName: lastName || 'Contact',
            emailAddress: contactInfo?.email || '',
            // phoneNumber: contactInfo?.phone || '', // Temporarily disabled due to EspoCRM validation
            
            // Company and job information
            accountName: contactInfo?.company || '',
            title: contactInfo?.jobTitle || '',
            
            // Lead management fields
            status: 'New',
            source: 'Web Site',
            
            // Investment as opportunity amount
            opportunityAmount: opportunityAmount,
            
            // Comprehensive description with business details
            description: [
              `Lead ID: ${leadCapture.id} | Submitted: ${new Date().toLocaleDateString()}`,
              `Phone: ${contactInfo?.phone || 'Not provided'}`,
              '',
              `Business Challenge: ${aiNeeds?.businessChallenges || 'Not specified'}`,
              `Improvement Areas: ${aiNeeds?.improvementAreas?.join(', ') || 'Not specified'}`,
              `Driving Factor: ${aiNeeds?.drivingFactor || 'Not specified'}`,
              `Timeline: ${aiNeeds?.timeline || 'Not specified'}`,
              '',
              `Industry: ${businessContext?.industry || 'Not specified'}`,
              `Company Size: ${businessContext?.companySize || 'Not specified'}`,
              `Tech Maturity: ${businessContext?.techMaturity || 'Not specified'}`,
              `ROI Timeline: ${qualification?.roiTimeline || 'Not specified'}`,
              `Decision Process: ${qualification?.decisionProcess || 'Not specified'}`
            ].join('\n')
          };

          // Remove empty fields and ensure opportunity amount is properly set
          Object.keys(crmLeadData).forEach(key => {
            if (crmLeadData[key] === '' || crmLeadData[key] === null || crmLeadData[key] === undefined) {
              delete crmLeadData[key];
            }
          });
          
          // Ensure opportunity amount is set as a number, not null
          if (opportunityAmount !== null) {
            crmLeadData.opportunityAmount = opportunityAmount;
          }

          console.log('Mapped EspoCRM data:', JSON.stringify(crmLeadData, null, 2));

          const leadResponse = await fetch(`${baseUrl}/api/v1/Lead`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Api-Key': espoCrmApiKey
            } as HeadersInit,
            body: JSON.stringify(crmLeadData)
          });
          
          if (leadResponse.ok && leadResponse.headers.get('content-type')?.includes('application/json')) {
            const leadResult = await leadResponse.json();
            console.log('✅ Lead created in EspoCRM:', leadResult.id);
            console.log('EspoCRM Response:', JSON.stringify(leadResult, null, 2));
            crmSuccess = true;
          } else {
            const errorText = await leadResponse.text();
            console.log('❌ EspoCRM API Error:', leadResponse.status, errorText);
          }
        }
      } catch (crmError) {
        console.log('❌ Direct EspoCRM attempt failed, webhook is primary method');
      }
      
      // Log final status
      if (webhookSuccess || crmSuccess) {
        console.log(`✅ Lead delivery status: Webhook=${webhookSuccess}, DirectCRM=${crmSuccess}`);
      } else {
        console.error('❌ All lead delivery methods failed');
      }

      res.json({ 
        success: true, 
        message: 'Lead capture submitted successfully!',
        leadId: leadCapture.id 
      });
    } catch (error) {
      console.error('Lead capture error:', error);
      if (error instanceof Error && error.name === 'ZodError') {
        res.status(400).json({ error: 'Invalid lead capture data', details: (error as any).errors });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  });

  // Test endpoint to check EspoCRM field names
  app.get('/api/test-espocrm-fields', async (req, res) => {
    try {
      const espoCrmUrl = process.env.ESPOCRM_URL;
      const espoCrmApiKey = process.env.ESPOCRM_API_KEY;
      
      if (!espoCrmUrl || !espoCrmApiKey) {
        return res.json({ error: 'EspoCRM credentials not configured' });
      }

      const baseUrl = espoCrmUrl.replace(/#.*$/, '').replace(/\/$/, '');
      
      // Get a sample lead to see what fields exist
      const leadResponse = await fetch(`${baseUrl}/api/v1/Lead?maxSize=1`, {
        headers: { 'X-Api-Key': espoCrmApiKey }
      });
      
      if (leadResponse.ok) {
        const leads = await leadResponse.json();
        res.json({ 
          message: 'EspoCRM Lead field analysis',
          sampleLead: leads.list?.[0] || {},
          totalLeads: leads.total,
          availableFields: leads.list?.[0] ? Object.keys(leads.list[0]) : [],
          apiStatus: 'Working'
        });
      } else {
        res.json({ 
          error: 'Could not fetch EspoCRM data',
          status: leadResponse.status,
          statusText: leadResponse.statusText
        });
      }
    } catch (error) {
      res.json({ error: 'Failed to connect to EspoCRM', details: error.message });
    }
  });

  // Career application submission endpoint
  app.post('/api/career-application', async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertCareerApplicationSchema.parse(req.body);
      
      // Store in database
      const application = await storage.createCareerApplication(validatedData);
      
      // Prepare data for Google Sheets via n8n
      const sheetData = {
        id: application.id,
        careerPath: application.careerPath,
        firstName: application.firstName,
        lastName: application.lastName,
        email: application.email,
        phone: application.phone,
        resumeFileName: application.resumeFileName || 'No resume uploaded',
        randomQuestion: application.randomQuestion,
        randomAnswer: application.randomAnswer,
        submittedAt: application.submittedAt?.toISOString() || new Date().toISOString(),
        status: application.status
      };

      // Forward to n8n webhook for Google Sheets
      const webhookResponse = await fetch('https://adk.defiantintegration.com/webhook/career-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheetData)
      });

      if (!webhookResponse.ok) {
        console.error('n8n webhook error:', webhookResponse.status, webhookResponse.statusText);
      }

      res.json({ 
        success: true, 
        message: 'Application submitted successfully!',
        applicationId: application.id 
      });
    } catch (error) {
      console.error('Career application error:', error);
      if (error instanceof Error && error.name === 'ZodError') {
        res.status(400).json({ error: 'Invalid application data', details: (error as any).errors });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
