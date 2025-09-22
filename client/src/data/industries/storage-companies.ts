import { IndustryData } from './types';

export const storageCompaniesData: IndustryData = {
  slug: 'storage-companies',
  seo: {
    title: 'Storage Company Automation | AI-Powered Self Storage Growth | Defiant Integrations',
    description: 'Transform your storage facility with AI automation that increases occupancy, manages rentals, and builds customer loyalty. Free assessment available.',
    keywords: ['storage facility automation', 'self storage marketing', 'AI for storage companies', 'storage unit management', 'storage business CRM', 'mini storage growth']
  },
  theme: {
    primaryColor: 'orange',
    gradientFrom: 'orange-600',
    gradientVia: 'amber-600',
    gradientTo: 'yellow-600'
  },
  hero: {
    title: 'Storage Companies: Smart Technology That Actually Works for Your Business',
    subtitle: 'Increase occupancy rates, streamline rental management, and build the kind of customer loyalty that reduces churn and maximizes lifetime value.',
    backgroundEffect: 'none'
  },
  problem: {
    title: 'What Storage Companies Are Dealing With Right Now',
    description: 'Running a storage facility means managing diverse customer needs, optimizing pricing across unit types, and competing with other facilities while maintaining high occupancy rates. You\'re balancing customer service, security, and operational efficiency while trying to minimize vacancy and maximize revenue per square foot.',
    stats: [
      { value: '85%', label: 'Occupancy Rate Increase', description: 'With optimized pricing and targeted marketing' },
      { value: '40%', label: 'Higher Revenue per Unit', description: 'With dynamic pricing and upselling strategies' },
      { value: '60%', label: 'Customer Retention', description: 'With automated communication and service' },
      { value: '70%', label: 'Administrative Time Saved', description: 'With automated rental and payment processes' }
    ],
    painPoints: [
      'High vacancy rates and pricing competition with nearby facilities',
      'Customer churn due to poor communication and service gaps',
      'Manual rental processes and payment collection inefficiencies',
      'Difficulty upselling customers to larger units or additional services',
      'Seasonal demand fluctuations affecting consistent revenue',
      'Administrative work taking time away from facility management and customer service'
    ]
  },
  solutions: {
    title: 'How Smart Technology Fixes These Problems',
    subtitle: 'Transform your storage facility with AI-powered operations and customer management',
    items: [
      {
        icon: 'Building2',
        title: 'Optimize Occupancy & Dynamic Pricing',
        problem: 'High vacancy rates and suboptimal pricing strategies',
        solution: 'Smart pricing and marketing that maximizes occupancy and revenue per unit',
        features: [
          'Dynamic pricing based on demand, location, and competitor analysis',
          'Google Ads targeting "storage near me" and moving-related searches',
          'Automated promotional campaigns for vacant units and seasonal demand',
          'Online rental system with instant availability and booking',
          'Referral programs with incentives for customer recommendations'
        ],
        results: 'Real Results: 85% occupancy rates and 40% higher revenue per unit'
      },
      {
        icon: 'Calendar',
        title: 'Automate Rental Management & Customer Service',
        problem: 'Manual processes and poor customer communication',
        solution: 'Automated rental workflows and customer communication systems',
        features: [
          'Automated rental agreements and digital contract management',
          'Payment processing automation with late payment reminders',
          'Customer communication for lease renewals and unit changes',
          'Maintenance request tracking and resolution automation',
          'Security incident notification and customer alert systems'
        ],
        results: 'Real Results: 70% less administrative time and better customer service'
      },
      {
        icon: 'TrendingUp',
        title: 'Increase Customer Lifetime Value & Retention',
        problem: 'High customer churn and missed upselling opportunities',
        solution: 'Customer retention and value optimization programs',
        features: [
          'Automated upselling campaigns for larger units and climate control',
          'Customer loyalty programs with long-term rental discounts',
          'Moving services and supply upselling at rental and renewal',
          'Customer satisfaction surveys and feedback collection',
          'Win-back campaigns for customers considering termination'
        ],
        results: 'Real Results: 60% better customer retention and increased lifetime value'
      }
    ]
  },
  implementation: {
    title: 'Your 90-Day Implementation Timeline',
    subtitle: 'Get your storage facility transformation up and running quickly',
    phases: [
      {
        phase: 'Days 1-30',
        title: 'Pricing Optimization & Online Rental',
        items: [
          'Dynamic pricing setup based on demand and competition',
          'Online rental system with instant booking and availability',
          'Google Ads campaigns targeting storage searches',
          'Basic customer management and communication systems'
        ]
      },
      {
        phase: 'Days 31-60',
        title: 'Automation & Customer Service',
        items: [
          'Automated rental agreement and payment processing',
          'Customer communication workflows for renewals and changes',
          'Maintenance request and security incident management',
          'Staff training on new rental management systems'
        ]
      },
      {
        phase: 'Days 61-90',
        title: 'Retention & Growth Systems',
        items: [
          'Customer upselling and loyalty program automation',
          'Win-back campaigns and customer retention strategies',
          'Moving services and supply upselling programs',
          'Performance analytics and occupancy optimization'
        ]
      }
    ]
  },
  cta: {
    title: 'Ready to Transform Your Storage Facility?',
    subtitle: 'Join successful storage companies who are optimizing occupancy rates, automating operations, and building customer loyalty.',
    primaryButton: 'Start Your Free Assessment',
    secondaryButton: 'See Case Studies',
    features: [
      'Free business assessment and strategy consultation',
      'Custom implementation plan for your storage facility',
      'No long-term contracts or hidden fees',
      'Results-focused approach with measurable outcomes'
    ]
  }
};