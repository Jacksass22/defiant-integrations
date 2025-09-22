import { IndustryData } from './types';

export const barbershopsData: IndustryData = {
  slug: 'barbershops',
  seo: {
    title: 'Barbershop Automation | AI-Powered Barber Business Growth | Defiant Integrations',
    description: 'Transform your barbershop with AI automation that attracts loyal regulars, manages appointments, and builds neighborhood reputation. Free assessment available.',
    keywords: ['barbershop automation', 'AI for barbers', 'barber shop marketing', 'automated booking', 'barbershop CRM', 'barber business growth']
  },
  theme: {
    primaryColor: 'slate',
    gradientFrom: 'slate-900',
    gradientVia: 'slate-800',
    gradientTo: 'slate-900'
  },
  hero: {
    title: 'Barbershops: Smart Technology That Actually Works for Your Business',
    subtitle: 'Attract loyal regulars, reduce wait times, and build the kind of neighborhood reputation that keeps chairs busy and customers coming back every few weeks.',
    backgroundEffect: 'silk'
  },
  problem: {
    title: 'What Barbershops Are Dealing With Right Now',
    description: 'Running a barbershop means balancing tradition with modern customer expectations. You\'re building regular relationships with guys who want consistent cuts, competing with chain salons and quick-cut places, while trying to keep chairs filled during slow periods and managing walk-ins during busy times.',
    stats: [
      { value: '200%', label: 'Regular Client Increase', description: 'More consistent regulars with loyalty programs' },
      { value: '45%', label: 'Higher Service Value', description: 'When positioned as traditional craftsmanship' },
      { value: '6x', label: 'More Referrals', description: 'From satisfied regular customers' },
      { value: '70%', label: 'Wait Time Reduction', description: 'With smart appointment scheduling' }
    ],
    painPoints: [
      'Lost customers during slow periods with empty chairs',
      'Walk-ins disrupting appointment schedules and creating chaos',
      'Difficulty building regular clientele for newer barbers',
      'Phone calls interrupting cuts and customer conversations',
      'Customers forgetting appointments or showing up at wrong times',
      'Amazing work that doesn\'t get seen by potential new customers'
    ]
  },
  solutions: {
    title: 'How Smart Technology Fixes These Problems',
    subtitle: 'Let AI handle the phone while you handle the clippers - focus on your craft',
    items: [
      {
        icon: 'Scissors',
        title: 'Build Regular Clientele & Neighborhood Reputation',
        problem: 'Inconsistent customer flow and difficulty building loyal regulars',
        solution: 'Professional marketing that showcases traditional barbershop experience',
        features: [
          'Google Ads targeting "barber near me" and traditional barbershop searches',
          'Social media content showcasing classic cuts and barbershop atmosphere',
          'Customer testimonials highlighting quality cuts and experience',
          'Local SEO optimization for neighborhood search results',
          'Professional website that builds trust and showcases expertise'
        ],
        results: 'Real Results: 200% more regular clients and 45% higher service values'
      },
      {
        icon: 'Smartphone',
        title: 'AI Phone & Appointment Management',
        problem: 'Phone calls interrupt cuts and appointment chaos wastes time',
        solution: 'AI-powered phone system that handles appointments automatically',
        features: [
          'AI assistant answers calls, books appointments, and provides information',
          'Automated appointment confirmations and reminders',
          'Smart scheduling that balances appointments with walk-in availability',
          'Customer preference tracking for consistent service',
          'Integration with existing point-of-sale systems'
        ],
        results: 'Real Results: 70% reduction in wait times and uninterrupted service'
      },
      {
        icon: 'Users',
        title: 'Customer Loyalty & Referral Systems',
        problem: 'Customers don\'t return consistently or refer friends',
        solution: 'Automated loyalty programs that turn customers into regulars',
        features: [
          'Automated loyalty programs with cut tracking and rewards',
          'Regular appointment reminders based on hair growth cycles',
          'Referral incentives with tracking and rewards',
          'Birthday and special occasion reminder campaigns',
          'Customer history tracking for personalized service'
        ],
        results: 'Real Results: 6x more referrals and consistent regular customer base'
      }
    ]
  },
  implementation: {
    title: 'Your 90-Day Implementation Timeline',
    subtitle: 'Get your barbershop transformation up and running quickly',
    phases: [
      {
        phase: 'Days 1-30',
        title: 'Foundation & AI Phone System',
        items: [
          'AI phone assistant setup and training',
          'Professional website with online booking',
          'Google Ads campaigns for local customers',
          'Basic CRM for customer management'
        ]
      },
      {
        phase: 'Days 31-60',
        title: 'Marketing & Operations',
        items: [
          'Social media automation showcasing barbershop atmosphere',
          'Customer preference tracking and personalization',
          'Automated appointment confirmation and reminder systems',
          'Staff training on new systems'
        ]
      },
      {
        phase: 'Days 61-90',
        title: 'Loyalty & Growth Systems',
        items: [
          'Automated loyalty and referral programs',
          'Regular appointment scheduling automation',
          'Review generation and reputation management',
          'Performance analytics and optimization'
        ]
      }
    ]
  },
  cta: {
    title: 'Ready to Transform Your Barbershop?',
    subtitle: 'Join successful barbershops who are building loyal regular clientele while focusing on their craft, not their phone.',
    primaryButton: 'Start Your Free Assessment',
    secondaryButton: 'See Case Studies',
    features: [
      'Free business assessment and strategy consultation',
      'Custom implementation plan for your barbershop',
      'No long-term contracts or hidden fees',
      'Results-focused approach with measurable outcomes'
    ]
  }
};