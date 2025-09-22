import { IndustryData } from './types';

export const cleaningServicesData: IndustryData = {
  slug: 'cleaning-services',
  seo: {
    title: 'Cleaning Service Automation | AI-Powered Business Growth | Defiant Integrations',
    description: 'Transform your cleaning service with AI automation that streamlines operations, reduces no-shows, and builds reputation for premium pricing. Free assessment available.',
    keywords: ['cleaning service automation', 'AI for cleaning companies', 'cleaning business growth', 'automated scheduling', 'cleaning service marketing', 'maid service automation']
  },
  theme: {
    primaryColor: 'cyan',
    gradientFrom: 'cyan-600',
    gradientVia: 'blue-600',
    gradientTo: 'blue-800'
  },
  hero: {
    title: 'Cleaning Services: Smart Technology That Actually Works for Your Business',
    subtitle: 'Streamline operations, reduce no-shows, and build a reputation that commands premium pricing in a crowded market.',
    backgroundEffect: 'none'
  },
  problem: {
    title: 'What Cleaning Services Are Dealing With Right Now',
    description: 'Running a cleaning service means managing teams, juggling schedules, and building trust with customers who are letting you into their most personal spaces. You\'re competing against big franchises and individual cleaners while trying to maintain quality across multiple locations and time slots.',
    stats: [
      { value: '200%', label: 'Lead Increase', description: 'More qualified leads from quality-focused customers' },
      { value: '60%', label: 'Higher Customer Value', description: 'When positioned as premium professional service' },
      { value: '4x', label: 'More Engagement', description: 'On professional service content and testimonials' },
      { value: '50%', label: 'No-Show Reduction', description: 'With automated confirmation and reminder systems' }
    ],
    painPoints: [
      'Lost revenue from last-minute cancellations and no-shows',
      'Difficulty maintaining full schedules for all cleaning teams',
      'Customer complaints when quality varies between visits',
      'Administrative time spent on scheduling and rescheduling',
      'Slow growth because satisfied customers don\'t automatically refer others'
    ]
  },
  solutions: {
    title: 'How Smart Technology Fixes These Problems',
    subtitle: 'Transform your cleaning service with AI-powered operations and customer management',
    items: [
      {
        icon: 'Calendar',
        title: 'Smart Scheduling & No-Show Prevention',
        problem: 'Lost revenue from cancellations and empty time slots',
        solution: 'Automated scheduling with confirmation and reminder systems',
        features: [
          'Automated appointment confirmations 24-48 hours before service',
          'Smart reminder systems via text, email, and phone calls',
          'Last-minute booking system to fill cancelled slots',
          'Customer preference tracking for consistent scheduling',
          'Team optimization for route efficiency and time management'
        ],
        results: 'Real Results: 50% reduction in no-shows and fuller schedules'
      },
      {
        icon: 'Sparkles',
        title: 'Quality Assurance & Professional Branding',
        problem: 'Inconsistent service quality and difficulty standing out',
        solution: 'Professional systems that ensure consistent quality and build trust',
        features: [
          'Digital checklists and quality control systems for teams',
          'Customer feedback systems with immediate resolution protocols',
          'Professional branding with uniforms, vehicles, and marketing materials',
          'Before/after photo documentation for premium services',
          'Customer portal for service history and communication'
        ],
        results: 'Real Results: 60% higher customer value and consistent quality ratings'
      },
      {
        icon: 'Users',
        title: 'Automated Referral & Growth Systems',
        problem: 'Slow growth because referrals happen randomly',
        solution: 'Systematic referral generation and customer retention programs',
        features: [
          'Automated satisfaction surveys after each cleaning',
          'Referral incentive programs with tracking and rewards',
          'Google My Business optimization with review generation',
          'Neighborhood marketing campaigns in active service areas',
          'Loyalty programs that encourage regular service upgrades'
        ],
        results: 'Real Results: 200% more leads and 4x engagement on content'
      }
    ]
  },
  implementation: {
    title: 'Your 90-Day Implementation Timeline',
    subtitle: 'Get your cleaning service transformation up and running quickly',
    phases: [
      {
        phase: 'Days 1-30',
        title: 'Foundation & Scheduling',
        items: [
          'Professional website with online booking system',
          'Automated confirmation and reminder systems',
          'Basic CRM setup for customer management',
          'Google Ads campaigns for immediate lead flow'
        ]
      },
      {
        phase: 'Days 31-60',
        title: 'Quality & Operations',
        items: [
          'Digital quality control systems for teams',
          'Customer feedback and resolution protocols',
          'Professional branding and marketing materials',
          'Route optimization for team efficiency'
        ]
      },
      {
        phase: 'Days 61-90',
        title: 'Growth & Referral Systems',
        items: [
          'Automated referral generation campaigns',
          'Loyalty and retention programs',
          'Review generation and reputation management',
          'Performance analytics and optimization'
        ]
      }
    ]
  },
  cta: {
    title: 'Ready to Transform Your Cleaning Service?',
    subtitle: 'Join successful cleaning services who are reducing no-shows, ensuring consistent quality, and building systematic referral networks.',
    primaryButton: 'Start Your Free Assessment',
    secondaryButton: 'See Case Studies',
    features: [
      'Free business assessment and strategy consultation',
      'Custom implementation plan for your cleaning service',
      'No long-term contracts or hidden fees',
      'Results-focused approach with measurable outcomes'
    ]
  }
};