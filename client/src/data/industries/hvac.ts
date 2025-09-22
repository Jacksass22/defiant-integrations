import { IndustryData } from './types';

export const hvacData: IndustryData = {
  slug: 'hvac',

  seo: {
    title: 'HVAC Automation Solutions | AI-Powered Business Growth | Defiant Integrations',
    description: 'Transform your HVAC business with AI automation that eliminates missed follow-ups, scheduling chaos, and customer churn. Free assessment available.',
    keywords: ['HVAC automation', 'AI for HVAC', 'HVAC business growth', 'automated scheduling', 'HVAC CRM']
  },

  theme: {
    primaryColor: 'blue-600',
    accentColor: 'blue-300',
    gradientFrom: 'blue-900',
    gradientVia: 'blue-800',
    gradientTo: 'blue-900',
    iconColor: 'blue-600',
    backgroundEffect: 'none'
  },

  hero: {
    title: 'HVAC: Automation That Pays for Itself',
    subtitle: 'We help HVAC businesses grow by eliminating missed follow-ups, scheduling chaos, and customer churn with AI-powered systems that run your business while you run the jobs.',
    ctaText: 'Start Your Free Assessment'
  },

  problem: {
    title: 'The Real Problem: It\'s Not the Tech Shortage—It\'s the System Shortage',
    description: 'You\'re not losing money because your service is bad. You\'re losing money because no one follows up after a quote, customers forget about maintenance, calls go unanswered when you\'re on the job, and techs get double-booked. 225,000 open HVAC positions by 2025? That\'s not your fault. But letting $45,000 in revenue slip away from missed appointments and forgotten reminders? That can be fixed.',
    statistics: [
      {
        number: '225,000',
        title: 'Open Positions by 2025',
        description: 'Nearly 2 jobs for every available technician in the market'
      },
      {
        number: '$12,000',
        title: 'Average System Cost',
        description: 'Double what it was just a few years ago'
      },
      {
        number: '$45,000',
        title: 'Annual Revenue Lost',
        description: 'Due to scheduling and follow-up mistakes'
      },
      {
        number: '24/7',
        title: 'Customer Expectations',
        description: 'Instant responses and proactive communication'
      }
    ],
    summary: {
      title: 'The Transformation: From Reactive to Revenue',
      points: [
        'We help HVAC companies go from chaotic scheduling and lost leads to automated, high-retention operations—without adding more staff.'
      ]
    }
  },

  solutions: {
    title: 'Our Offer: The System That Never Forgets',
    subtitle: 'These are our core service packages tailored for HVAC businesses—but we also offer custom integrations and software development solutions upon consultation. If you have a unique system, workflow, or need, we can build a solution that fits. We install a 3-part AI-powered sales and service system:',
    items: [
      {
        icon: 'Users',
        iconBgColor: 'blue-100',
        iconColor: 'blue-600',
        title: '1. Follow-Up Machine',
        subtitle: 'No more "they ghosted us."',
        description: 'Automated reminders (email/text) for estimates, service, and maintenance. Re-engagement campaigns for old customers. Birthday and seasonal messages that build loyalty.',
        features: [
          'Automated reminders (email/text) for estimates, service, and maintenance',
          'Re-engagement campaigns for old customers',
          'Birthday and seasonal messages that build loyalty'
        ],
        results: 'Real Results: 40% drop in no-shows, 3x increase in repeat bookings',
        image: 'workflowImage'
      },
      {
        icon: 'Calendar',
        iconBgColor: 'green-100',
        iconColor: 'green-600',
        title: '2. Smart Scheduler',
        subtitle: 'No more wasted hours moving appointments around.',
        description: 'Auto-sync calendar + CRM. Drag-and-drop job board. Customer alerts for time changes or ETA.',
        features: [
          'Auto-sync calendar + CRM',
          'Drag-and-drop job board',
          'Customer alerts for time changes or ETA'
        ],
        results: 'Real Results: 40% drop in no-shows, 60% more maintenance sign-ups',
        image: 'schedulerImage'
      },
      {
        icon: 'MessageSquare',
        iconBgColor: 'purple-100',
        iconColor: 'purple-600',
        title: '3. AI Front Desk',
        subtitle: 'No more missed calls or late-night messages.',
        description: 'Phone AI that answers, qualifies, and books. Website chatbot that closes leads while you sleep. FAQ-trained assistant that saves your techs\' time.',
        features: [
          'Phone AI that answers, qualifies, and books',
          'Website chatbot that closes leads while you sleep',
          'FAQ-trained assistant that saves your techs\' time'
        ],
        results: 'Real Results: 70% fewer phone interruptions',
        image: 'aiFrontDeskImage'
      }
    ],
    winsSection: {
      title: 'Real HVAC Wins (Because We Built This With You in Mind)',
      backgroundColor: 'blue-900',
      textColor: 'white',
      stats: [
        { number: '40%', label: 'drop in no-shows' },
        { number: '3x', label: 'increase in repeat bookings' },
        { number: '60%', label: 'more maintenance sign-ups' },
        { number: '70%', label: 'fewer phone interruptions' }
      ]
    }
  },

  timeline: {
    title: 'The Implementation Roadmap (90 Days to Freedom)',
    phases: [
      {
        month: 'Month 1',
        title: 'Foundations',
        color: 'blue-600',
        tasks: [
          'Connect calendar, CRM, and email',
          'Install AI chatbot + phone AI',
          'Launch estimate + booking follow-up automations'
        ]
      },
      {
        month: 'Month 2',
        title: 'Optimization',
        color: 'blue-600',
        tasks: [
          'Build seasonal marketing calendar',
          'Train AI with your top FAQs and service types',
          'Add review request + customer check-in workflows'
        ]
      },
      {
        month: 'Month 3+',
        title: 'Automation Flywheel',
        color: 'blue-600',
        tasks: [
          'Turn installs into recurring maintenance clients',
          'Segment customers by equipment type',
          'Automate slow-season promos and reactivations'
        ]
      }
    ]
  },

  benefits: {
    title: 'Why This Works (And Why Your Competitors Won\'t Do It)',
    subtitle: 'They\'re still chasing techs and playing scheduling Tetris.',
    description: 'You\'ll have:',
    points: [
      'A system that follows up for you',
      'A phone line that qualifies leads 24/7',
      'A schedule that runs itself',
      'A brand that customers remember'
    ],
    highlightText: 'This isn\'t just automation. It\'s elevation.'
  },

  cta: {
    title: 'The Bottom Line',
    paragraphs: [
      'Your customers want to feel valued and remembered. They want quick responses and proactive communication. You want to grow your business without spending all day managing schedules and chasing follow-ups.',
      'Smart automation isn\'t about replacing the personal touch—it\'s about making sure you never miss an opportunity to provide it. While your competitors are still playing phone tag and forgetting to follow up, you\'ll be the company that customers can count on.'
    ],
    question: 'Ready to see what this looks like for your business?',
    buttonText: 'Start Your Free Assessment'
  },

  modal: {
    title: 'HVAC AI Assessment',
    subtitle: 'Get a customized automation strategy for your HVAC business'
  }
};