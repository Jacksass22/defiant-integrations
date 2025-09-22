import { IndustryData } from './types';

export const electricalData: IndustryData = {
  slug: 'electrical',

  seo: {
    title: 'Electrical Business Automation | AI-Powered Project Management | Defiant Integrations',
    description: 'Transform your electrical business with AI automation that manages leads, handles permits, and streamlines complex project workflows. Built for electrical contractors.',
    keywords: ['electrical automation', 'AI for electricians', 'electrical business growth', 'project management automation', 'electrical contractor software']
  },

  theme: {
    primaryColor: 'teal-600',
    accentColor: 'teal-300',
    gradientFrom: 'slate-900',
    gradientVia: 'teal-900',
    gradientTo: 'slate-800',
    iconColor: 'teal-600',
    backgroundEffect: 'lightning'
  },

  hero: {
    title: 'Electrical: Smart Technology That Actually Works for Your Business',
    subtitle: 'Handle more projects, stay compliant, and grow your electrical business without the administrative headaches.',
    ctaText: 'Start Your Free Assessment'
  },

  problem: {
    title: 'What Electrical Companies Are Dealing With Right Now',
    description: 'Running an electrical company means balancing safety-critical work with business demands. You\'re dealing with everything from simple outlet installations to complex commercial projects, all while customers expect quick responses and accurate estimates. Safety regulations are getting stricter, insurance costs are rising, and finding qualified electricians is nearly impossible.',
    statistics: [
      {
        number: '85%',
        title: 'Missed Follow-ups',
        description: 'of leads that never get proper follow-up contact are lost'
      },
      {
        number: '40%',
        title: 'Admin Time',
        description: 'Of your day spent on paperwork instead of billable electrical work'
      },
      {
        number: '3x',
        title: 'Permit Delays',
        description: 'Projects delayed due to missed permit deadlines and compliance issues'
      },
      {
        number: '72hr',
        title: 'Response Window',
        description: 'Maximum time before customers call your competitors for estimates'
      }
    ],
    summary: {
      title: 'What This Means for Your Business',
      points: [
        'Big estimates sit for weeks without proper follow-up',
        'Scheduling gets complicated with jobs of different sizes and complexity',
        'Administrative work pulls you away from billable hours',
        'Customers comparison shop and go with faster responders',
        'Code updates and permit requirements slow everything down'
      ]
    }
  },

  solutions: {
    title: 'How Smart Technology Fixes These Problems',
    subtitle: 'Transform your electrical business with AI-powered solutions designed for project complexity',
    items: [
      {
        icon: 'Zap',
        iconBgColor: 'teal-100',
        iconColor: 'teal-600',
        title: 'Capture Every Lead and Follow Up Properly',
        subtitle: 'No more lost opportunities.',
        description: 'AI systems that answer calls professionally and nurture leads automatically',
        features: [
          'AI phone system handles initial inquiries and qualifies leads',
          'Basic questions (service areas, licensing, availability) answered instantly',
          'Complex project calls get routed to you with customer details pre-captured',
          'Automatic follow-up sequences for estimates over $1,000',
          'Appointment confirmations and reminders for site visits'
        ],
        results: 'Real Results: 60% better lead conversion and 40% more large project wins',
        image: 'electricianImage2'
      },
      {
        icon: 'Calendar',
        iconBgColor: 'blue-100',
        iconColor: 'blue-600',
        title: 'Professional Project Management',
        subtitle: 'No more project chaos.',
        description: 'Smart scheduling and communication systems that handle project complexity',
        features: [
          'Separate workflows for service calls vs. major installations',
          'Automatic permit reminder notifications before project start dates',
          'Customer updates at key milestones: "Permits approved," "Materials ordered"',
          'Inspection scheduling and compliance tracking',
          'Professional invoicing with detailed labor and material breakdowns'
        ],
        results: 'Real Results: 50% fewer project delays and dramatically improved customer satisfaction',
        image: 'electricianImagePM'
      },
      {
        icon: 'Shield',
        iconBgColor: 'green-100',
        iconColor: 'green-600',
        title: 'Safety and Compliance Automation',
        subtitle: 'No more compliance nightmares.',
        description: 'AI assistants that help with documentation and compliance tracking',
        features: [
          'Automatic safety checklist generation for different job types',
          'Code compliance reminders based on project specifications',
          'Photo documentation requirements built into job workflows',
          'Warranty and maintenance reminder systems for commercial clients',
          'Professional reporting that satisfies insurance and regulatory requirements'
        ],
        results: 'Real Results: 30% reduction in compliance issues and faster insurance claim processing',
        image: 'electricianImageSC'
      }
    ],
    winsSection: {
      title: 'Real Electrical Contractor Success Stories',
      backgroundColor: 'slate-900',
      textColor: 'white',
      stats: [
        { number: '60%', label: 'better lead conversion' },
        { number: '40%', label: 'more large project wins' },
        { number: '50%', label: 'fewer project delays' },
        { number: '30%', label: 'reduction in compliance issues' }
      ]
    }
  },

  timeline: {
    title: 'Your 90-Day Implementation (From Chaos to Control)',
    phases: [
      {
        month: 'Month 1',
        title: 'Lead Capture & Communication Setup',
        color: 'teal-600',
        tasks: [
          'Install AI phone system for lead qualification and basic inquiries',
          'Set up automated follow-up sequences for large project estimates',
          'Connect calendar and scheduling systems'
        ]
      },
      {
        month: 'Month 2',
        title: 'Project Management Integration',
        color: 'teal-600',
        tasks: [
          'Configure project-specific workflows and milestone tracking',
          'Implement permit and compliance reminder systems',
          'Add customer communication automation for project updates'
        ]
      },
      {
        month: 'Month 3+',
        title: 'Advanced Automation & Growth',
        color: 'teal-600',
        tasks: [
          'Launch referral and repeat customer programs',
          'Add predictive maintenance offers for commercial clients',
          'Optimize routing and scheduling for maximum efficiency'
        ]
      }
    ]
  },

  benefits: {
    title: 'Why This Works (While Your Competitors Are Still Struggling)',
    subtitle: 'While they\'re still chasing leads and drowning in paperwork, you\'ll have:',
    description: '',
    points: [
      'Professional lead capture and follow-up that wins more projects',
      'Project management that keeps customers informed and happy',
      'Compliance tracking that prevents costly delays and rework',
      'Systems that let you focus on electrical work, not administration'
    ],
    highlightText: 'You\'ll become the electrical contractor that customers trust for complex projects—and remember for everything else.'
  },

  cta: {
    title: 'Ready to Stop Losing Projects to Poor Follow-Up?',
    paragraphs: [
      'Your customers need reliable electrical work, clear communication, and projects that finish on time and on budget. But managing complex projects while chasing new leads is nearly impossible without the right systems.',
      'Smart automation gives you the project management capabilities that large electrical companies have—but with the personal attention that only local contractors can provide.'
    ],
    question: 'Ready to see how this works for your electrical business?',
    buttonText: 'Start Your Free Assessment'
  },

  modal: {
    title: 'Electrical Business AI Assessment',
    subtitle: 'Get a customized automation strategy for your electrical contracting business'
  }
};