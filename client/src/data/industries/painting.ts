import { IndustryData } from './types';

export const paintingData: IndustryData = {
  slug: 'painting',
  seo: {
    title: 'Painting Contractor Automation | AI-Powered Business Growth | Defiant Integrations',
    description: 'Transform your painting business with AI automation that generates quality leads, showcases professional results, and builds reputation for premium pricing. Free assessment available.',
    keywords: ['painting contractor automation', 'AI for painters', 'painting business growth', 'automated lead generation', 'painting marketing', 'contractor CRM']
  },
  theme: {
    primaryColor: 'purple',
    gradientFrom: 'purple-900',
    gradientVia: 'indigo-800',
    gradientTo: 'purple-900'
  },
  hero: {
    title: 'Painting: Smart Technology That Actually Works for Your Business',
    subtitle: 'Generate quality leads, showcase professional results, and build a reputation that commands premium pricing.',
    backgroundEffect: 'none'
  },
  problem: {
    title: 'What Painting Companies Are Dealing With Right Now',
    description: 'Running a painting company means competing with everyone from handymen to big franchises while convincing customers that quality painting is worth paying for. You\'re dealing with weather delays, color consultations, and customers who think painting is "easy" until they try it themselves.',
    stats: [
      { value: '180%', label: 'Lead Increase', description: 'More qualified leads with quality-focused marketing' },
      { value: '50%', label: 'Higher Project Value', description: 'When customers value professional craftsmanship' },
      { value: '5x', label: 'Social Engagement', description: 'More referrals from transformation content' },
      { value: '60%', label: 'Repeat Business', description: 'Customers return for additional rooms' }
    ],
    painPoints: [
      'Competing against unlicensed handymen and weekend warriors',
      'Customers don\'t understand the value of prep work and quality materials',
      'Scheduling gets complicated with weather and customer availability',
      'Word-of-mouth referrals happen slowly in neighborhoods',
      'Administrative work takes time away from actual painting'
    ]
  },
  solutions: {
    title: 'How Smart Technology Fixes These Problems',
    subtitle: 'Transform your painting business with AI-powered quality showcase and efficiency',
    items: [
      {
        icon: 'Palette',
        title: 'Showcase Quality & Attract Premium Clients',
        problem: 'Customers don\'t see the difference between professional and amateur work',
        solution: 'Visual marketing that demonstrates expertise and builds trust in your craftsmanship',
        features: [
          'Before/after galleries showcasing transformation results',
          'Educational content about paint quality, prep work, and techniques',
          'Customer testimonials highlighting professionalism and results',
          'Google Ads targeting "quality painter" and "professional painting"',
          'Social media automation with transformation content'
        ],
        results: 'Real Results: 180% more qualified leads and 50% higher project values'
      },
      {
        icon: 'Clock',
        title: 'Smart Scheduling & Project Management',
        problem: 'Weather delays and customer schedules create chaos',
        solution: 'Automated scheduling and communication systems that adapt to changes',
        features: [
          'Weather-aware scheduling with automatic rescheduling alerts',
          'Customer communication automation for project updates',
          'Digital color consultation and approval workflows',
          'Automated estimate generation with material calculations',
          'Project progress tracking with photo documentation'
        ],
        results: 'Real Results: 60% better project completion rates and happier customers'
      },
      {
        icon: 'Camera',
        title: 'Neighborhood Referral Generation',
        problem: 'Referrals happen slowly and inconsistently',
        solution: 'Visual content marketing that showcases your work in neighborhoods',
        features: [
          'Automated before/after documentation for every project',
          'Neighborhood-specific social media campaigns during active projects',
          'Customer referral programs with visual testimonials',
          'Google My Business optimization with project photos',
          'Review generation campaigns after project completion'
        ],
        results: 'Real Results: 5x more social engagement and consistent neighborhood referrals'
      }
    ]
  },
  implementation: {
    title: 'Your 90-Day Implementation Timeline',
    subtitle: 'Get your painting business transformation up and running quickly',
    phases: [
      {
        phase: 'Days 1-30',
        title: 'Visual Marketing & Lead Generation',
        items: [
          'Professional website with project galleries',
          'Google Ads campaigns for immediate lead flow',
          'Before/after photo systems for every project',
          'Basic CRM setup for lead management'
        ]
      },
      {
        phase: 'Days 31-60',
        title: 'Operations & Automation',
        items: [
          'Digital estimate and approval systems',
          'Weather-aware scheduling automation',
          'Customer communication workflows',
          'Color consultation and approval processes'
        ]
      },
      {
        phase: 'Days 61-90',
        title: 'Referral & Growth Systems',
        items: [
          'Social media automation with project content',
          'Neighborhood marketing campaigns',
          'Review and referral generation systems',
          'Performance analytics and optimization'
        ]
      }
    ]
  },
  cta: {
    title: 'Ready to Transform Your Painting Business?',
    subtitle: 'Join successful painting contractors who are attracting premium clients, showcasing quality work, and building systematic referral networks.',
    primaryButton: 'Start Your Free Assessment',
    secondaryButton: 'See Case Studies',
    features: [
      'Free business assessment and strategy consultation',
      'Custom implementation plan for your painting company',
      'No long-term contracts or hidden fees',
      'Results-focused approach with measurable outcomes'
    ]
  }
};