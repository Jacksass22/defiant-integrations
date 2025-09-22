import { IndustryData } from './types';

export const roofingData: IndustryData = {
  slug: 'roofing',
  seo: {
    title: 'Roofing Automation Solutions | AI-Powered Business Growth | Defiant Integrations',
    description: 'Transform your roofing business with AI automation that generates trust-building leads, handles insurance processes efficiently, and builds referral networks. Free assessment available.',
    keywords: ['roofing automation', 'AI for roofing contractors', 'roofing business growth', 'automated lead generation', 'roofing CRM', 'insurance claim automation']
  },
  theme: {
    primaryColor: 'red',
    gradientFrom: 'slate-900',
    gradientVia: 'slate-800',
    gradientTo: 'slate-900'
  },
  hero: {
    title: 'Roofing: Smart Technology That Actually Works for Your Business',
    subtitle: 'Generate quality leads, handle insurance processes efficiently, and build the trust that turns one roof into an entire neighborhood.',
    backgroundEffect: 'none'
  },
  problem: {
    title: 'What Roofing Companies Are Dealing With Right Now',
    description: 'Running a roofing company means dealing with storm damage, insurance claims, and customers who need major work done on their biggest investment - their home. You\'re competing against door-to-door storm chasers while building trust with homeowners who\'ve heard horror stories about roofing contractors.',
    stats: [
      { value: '150%', label: 'Lead Increase', description: 'More qualified leads with trust-building content' },
      { value: '60%', label: 'Higher Close Rates', description: 'When homeowners trust your expertise' },
      { value: '200%', label: 'Neighborhood Growth', description: 'Same-neighborhood projects increase' },
      { value: '40%', label: 'Faster Insurance', description: 'Claim processing with smart systems' }
    ],
    painPoints: [
      'Homeowners are skeptical and shop multiple contractors',
      'Insurance delays can kill cash flow and project momentum',
      'Storm damage creates urgency but also brings out competitors',
      'Referrals are gold, but you need systems to generate them consistently',
      'Administrative work (estimates, claims, follow-ups) eats up profitable time'
    ]
  },
  solutions: {
    title: 'How Smart Technology Fixes These Problems',
    subtitle: 'Transform your roofing business with AI-powered trust building and efficiency',
    items: [
      {
        icon: 'Shield',
        title: 'Generate Trust-Building Leads',
        problem: 'Homeowners don\'t trust roofing contractors and fear high-pressure sales',
        solution: 'Professional lead generation and content that builds credibility before you ever meet',
        features: [
          'Educational content about roofing materials, insurance processes, and contractor selection',
          'Google Ads targeting "roof inspection," "roof repair," and "honest roofer near me"',
          'Before/after galleries showing quality workmanship and attention to detail',
          'Customer testimonials and reviews prominently featured online',
          'Professional website that builds confidence in your expertise'
        ],
        results: 'Real Results: 150% more qualified leads and 60% higher close rates'
      },
      {
        icon: 'Clock',
        title: 'Smart Insurance & Administrative Systems',
        problem: 'Insurance paperwork and administrative tasks consume profitable hours',
        solution: 'Automated systems that handle documentation and follow-up processes',
        features: [
          'Automated insurance documentation and claim tracking',
          'Digital estimate generation and approval workflows',
          'Automated follow-up sequences for quotes and completed projects',
          'Customer communication automation for project updates',
          'Digital contract management and e-signature integration'
        ],
        results: 'Real Results: 40% faster insurance processing and 3 hours saved daily'
      },
      {
        icon: 'Home',
        title: 'Neighborhood Referral Machine',
        problem: 'Referrals happen randomly instead of systematically',
        solution: 'Automated referral generation and neighborhood marketing systems',
        features: [
          'Automated referral request campaigns after project completion',
          'Neighborhood-specific marketing campaigns during active projects',
          'Customer satisfaction surveys that turn into reviews and referrals',
          'Social proof campaigns showcasing recent neighborhood work',
          'Loyalty programs that reward referrals with service discounts'
        ],
        results: 'Real Results: 200% increase in neighborhood project clusters'
      }
    ]
  },
  implementation: {
    title: 'Your 90-Day Implementation Timeline',
    subtitle: 'Get your roofing business transformation up and running quickly',
    phases: [
      {
        phase: 'Days 1-30',
        title: 'Foundation & Lead Generation',
        items: [
          'Professional website with trust-building elements',
          'Google Ads campaigns for immediate lead flow',
          'Customer testimonial and review collection systems',
          'Basic CRM setup for lead management'
        ]
      },
      {
        phase: 'Days 31-60',
        title: 'Operations & Automation',
        items: [
          'Insurance documentation automation',
          'Digital estimate and contract systems',
          'Customer communication workflows',
          'Project management automation'
        ]
      },
      {
        phase: 'Days 61-90',
        title: 'Referral & Growth Systems',
        items: [
          'Automated referral generation campaigns',
          'Neighborhood marketing automation',
          'Advanced analytics and reporting',
          'Performance optimization based on data'
        ]
      }
    ]
  },
  cta: {
    title: 'Ready to Transform Your Roofing Business?',
    subtitle: 'Join successful roofing contractors who are generating more qualified leads, closing deals faster, and building systematic referral networks.',
    primaryButton: 'Start Your Free Assessment',
    secondaryButton: 'See Case Studies',
    features: [
      'Free business assessment and strategy consultation',
      'Custom implementation plan for your roofing company',
      'No long-term contracts or hidden fees',
      'Results-focused approach with measurable outcomes'
    ]
  }
};