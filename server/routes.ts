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

      // Send to EspoCRM with webhook fallback
      let crmSuccess = false;
      
      try {
        const espoCrmUrl = process.env.ESPOCRM_URL;
        const espoCrmApiKey = process.env.ESPOCRM_API_KEY;
        
        if (espoCrmUrl && espoCrmApiKey) {
          // Clean the URL - remove hash fragments and trailing slashes
          let baseUrl = espoCrmUrl.replace(/#.*$/, ''); // Remove hash fragment
          baseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
          
          // Test basic API access first
          console.log('🔍 Testing EspoCRM API access...');
          const testResponse = await fetch(`${baseUrl}/api/v1/App/info`, {
            method: 'GET',
            headers: { 'X-Api-Key': espoCrmApiKey }
          });
          
          console.log('API Test Response:', testResponse.status, testResponse.headers.get('content-type'));
          
          if (testResponse.ok && testResponse.headers.get('content-type')?.includes('application/json')) {
            console.log('✅ EspoCRM API is accessible');
            
            // Prepare lead data for EspoCRM
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

            // Try creating the lead
            const leadResponse = await fetch(`${baseUrl}/api/v1/Lead`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': espoCrmApiKey
              },
              body: JSON.stringify(crmLeadData)
            });
            
            if (leadResponse.ok && leadResponse.headers.get('content-type')?.includes('application/json')) {
              const leadResult = await leadResponse.json();
              console.log('✅ Lead created in EspoCRM:', leadResult.id);
              crmSuccess = true;
            } else {
              const errorText = await leadResponse.text();
              console.log('❌ Lead creation failed:', leadResponse.status, errorText.substring(0, 200));
            }
          } else {
            console.log('❌ EspoCRM API not accessible - permissions may be insufficient');
          }
        }
      } catch (crmError) {
        console.error('EspoCRM API error:', crmError);
      }
      
      // Fallback: Send to n8n webhook as backup
      if (!crmSuccess) {
        try {
          console.log('📤 Sending lead to n8n webhook as backup...');
          const webhookData = {
            type: 'lead_capture',
            timestamp: new Date().toISOString(),
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
            }
          };
          
          const webhookResponse = await fetch('https://adk.defiantintegration.com/webhook/lead-capture', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(webhookData)
          });
          
          if (webhookResponse.ok) {
            console.log('✅ Lead sent to n8n webhook successfully');
          } else {
            console.log('❌ Webhook also failed:', webhookResponse.status);
          }
        } catch (webhookError) {
          console.error('Webhook error:', webhookError);
        }
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
