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
        
        if (espoCrmUrl && espoCrmApiKey) {
          // Prepare lead data for EspoCRM
          const crmLeadData = {
            firstName: contactInfo?.fullName?.split(' ')[0] || '',
            lastName: contactInfo?.fullName?.split(' ').slice(1).join(' ') || contactInfo?.fullName || '',
            emailAddress: contactInfo?.email,
            phoneNumber: contactInfo?.phone || '',
            accountName: contactInfo?.company,
            title: contactInfo?.jobTitle,
            industry: businessContext?.industry,
            source: 'Website',
            status: 'New',
            description: `
Business Context:
- Company Size: ${businessContext?.companySize}
- Tech Maturity: ${businessContext?.techMaturity}
- Industry: ${businessContext?.industry}

AI Transformation Goals:
- Business Challenges: ${aiNeeds?.businessChallenges}
- Improvement Areas: ${aiNeeds?.improvementAreas?.join(', ')}
- Driving Factor: ${aiNeeds?.drivingFactor}
- Timeline: ${aiNeeds?.timeline}

Investment & Decision Making:
- Investment Range: ${qualification?.investmentRange}
- ROI Timeline: ${qualification?.roiTimeline}
- Decision Process: ${qualification?.decisionProcess}
            `.trim(),
            // Custom fields for additional data
            customField1: businessContext?.companySize,
            customField2: qualification?.investmentRange,
            customField3: aiNeeds?.timeline
          };

          const crmResponse = await fetch(`${espoCrmUrl}/api/v1/Lead`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Api-Key': espoCrmApiKey
            },
            body: JSON.stringify(crmLeadData)
          });

          if (crmResponse.ok) {
            const crmResult = await crmResponse.json();
            console.log('Lead created in EspoCRM:', crmResult.id);
          } else {
            console.error('EspoCRM API error:', crmResponse.status, await crmResponse.text());
          }
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
