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

  // EspoCRM connection test endpoint
  app.get('/api/test-espocrm', async (req, res) => {
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

      // Clean the URL - remove hash fragments and trailing slashes
      let baseUrl = espoCrmUrl.replace(/#.*$/, ''); // Remove hash fragment
      baseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
      
      // Test connection with a simple GET request first
      const testResponse = await fetch(`${baseUrl}/api/v1/App/info`, {
        method: 'GET',
        headers: {
          'X-Api-Key': espoCrmApiKey
        }
      });

      const responseText = await testResponse.text();
      
      res.json({
        url: baseUrl,
        status: testResponse.status,
        statusText: testResponse.statusText,
        headers: Object.fromEntries(testResponse.headers.entries()),
        response: responseText.substring(0, 500)
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
        improvementAreas: aiNeeds?.improvementAreas,
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

      // Send to EspoCRM
      try {
        const espoCrmUrl = process.env.ESPOCRM_URL;
        const espoCrmApiKey = process.env.ESPOCRM_API_KEY;
        
        console.log('EspoCRM URL:', espoCrmUrl);
        console.log('EspoCRM API Key exists:', !!espoCrmApiKey);
        
        if (espoCrmUrl && espoCrmApiKey) {
          // Clean the URL - remove hash fragments and trailing slashes
          let baseUrl = espoCrmUrl.replace(/#.*$/, ''); // Remove hash fragment
          baseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
          
          // Prepare lead data for EspoCRM with simpler field mapping
          const crmLeadData = {
            name: contactInfo?.fullName,
            firstName: contactInfo?.fullName?.split(' ')[0] || '',
            lastName: contactInfo?.fullName?.split(' ').slice(1).join(' ') || 'Unknown',
            emailAddress: contactInfo?.email,
            phoneNumber: contactInfo?.phone || '',
            accountName: contactInfo?.company,
            title: contactInfo?.jobTitle,
            source: 'Website',
            status: 'New',
            description: `Business: ${contactInfo?.company}\nIndustry: ${businessContext?.industry}\nSize: ${businessContext?.companySize}\nChallenges: ${aiNeeds?.businessChallenges}\nInvestment: ${qualification?.investmentRange}`
          };

          console.log('Sending to EspoCRM:', JSON.stringify(crmLeadData, null, 2));

          // Try the most common EspoCRM authentication methods
          const authMethods: Record<string, string>[] = [
            { 'X-Api-Key': espoCrmApiKey },
            { 'Authorization': `ApiKey ${espoCrmApiKey}` },
            { 'Authorization': `Bearer ${espoCrmApiKey}` },
            { 'Espo-Api-Key': espoCrmApiKey }
          ];

          // Try different API endpoints that EspoCRM commonly uses
          const apiEndpoints = [
            '/api/v1/Lead',
            '/api/v1/Leads',
            '/api/Lead',
            '/api/Leads'
          ];
          
          let success = false;
          
          for (const endpoint of apiEndpoints) {
            console.log(`\n🔄 Trying endpoint: ${endpoint}`);
            
            for (const authHeaders of authMethods) {
              try {
                console.log('  Auth method:', Object.keys(authHeaders)[0]);
                
                const headers: Record<string, string> = {
                  'Content-Type': 'application/json',
                  ...authHeaders
                };
                
                const crmResponse = await fetch(`${baseUrl}${endpoint}`, {
                  method: 'POST',
                  headers,
                  body: JSON.stringify(crmLeadData)
                });

                console.log('  Response status:', crmResponse.status);
                console.log('  Content-Type:', crmResponse.headers.get('content-type'));
                
                if (crmResponse.ok && crmResponse.headers.get('content-type')?.includes('application/json')) {
                  try {
                    const crmResult = await crmResponse.json();
                    console.log('✅ Lead created in EspoCRM:', crmResult);
                    success = true;
                    break;
                  } catch (parseError) {
                    console.log('❌ JSON parse error despite content-type');
                  }
                } else if (crmResponse.ok) {
                  const responseText = await crmResponse.text();
                  if (responseText.includes('<!DOCTYPE') || responseText.includes('<html>')) {
                    console.log('❌ Received HTML response - API endpoint may be incorrect');
                  } else {
                    console.log('✅ Lead created (non-JSON response):', responseText.substring(0, 100));
                    success = true;
                    break;
                  }
                } else {
                  const errorText = await crmResponse.text();
                  console.log(`❌ Failed (${crmResponse.status}):`, errorText.substring(0, 100));
                }
              } catch (methodError) {
                const error = methodError as Error;
                console.log('❌ Auth error:', error.message);
              }
            }
            
            if (success) break;
          }
          
          if (!success) {
            console.error('❌ All authentication methods failed');
            console.error('Please check:');
            console.error('1. EspoCRM URL is correct and accessible');
            console.error('2. API Key is valid and has Lead creation permissions');
            console.error('3. EspoCRM API is enabled in Administration > API');
          }
        } else {
          console.error('Missing EspoCRM configuration');
        }
      } catch (crmError) {
        console.error('EspoCRM integration error:', crmError);
        // Don't fail the entire request if CRM integration fails
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
