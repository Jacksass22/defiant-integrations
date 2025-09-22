import { IndustryData } from './types';

export const golfCoursesData: IndustryData = {
  slug: 'golf-courses',
  seo: {
    title: 'Golf Course Automation | AI-Powered Golf Business Growth | Defiant Integrations',
    description: 'Transform your golf course with AI automation that increases rounds, manages tee times, and builds member loyalty. Free assessment available.',
    keywords: ['golf course automation', 'golf club marketing', 'AI for golf courses', 'golf tee time management', 'golf course CRM', 'golf business growth']
  },
  theme: {
    primaryColor: 'green',
    gradientFrom: 'green-700',
    gradientVia: 'emerald-600',
    gradientTo: 'green-600'
  },
  hero: {
    title: 'Golf Courses: Smart Technology That Actually Works for Your Business',
    subtitle: 'Increase rounds played, optimize tee time management, and build the kind of member loyalty that keeps golfers coming back season after season.',
    backgroundEffect: 'none'
  },
  problem: {
    title: 'What Golf Courses Are Dealing With Right Now',
    description: 'Running a golf course means managing seasonal demand, optimizing tee times, and competing with other courses while providing exceptional experiences that justify premium pricing. You\'re balancing member satisfaction with public play revenue while dealing with weather-dependent operations and changing golfer expectations.',
    stats: [
      { value: '140%', label: 'Round Increase', description: 'With optimized tee time management and marketing' },
      { value: '45%', label: 'Higher Revenue per Round', description: 'With upselling and premium service positioning' },
      { value: '65%', label: 'Member Retention', description: 'With engagement and loyalty programs' },
      { value: '50%', label: 'Operational Efficiency', description: 'With automated booking and communication' }
    ],
    painPoints: [
      'Empty tee times during off-peak hours and weekdays',
      'Seasonal revenue fluctuations affecting annual profitability',
      'Member satisfaction challenges and retention issues',
      'Competition from other courses and entertainment options',
      'Manual tee time management and customer communication',
      'Weather-related disruptions affecting revenue and scheduling'
    ]
  },
  solutions: {
    title: 'How Smart Technology Fixes These Problems',
    subtitle: 'Transform your golf course with AI-powered operations and member experience management',
    items: [
      {
        icon: 'Calendar',
        title: 'Optimize Tee Times & Increase Rounds',
        problem: 'Empty tee times and suboptimal course utilization',
        solution: 'Smart tee time management and dynamic pricing that maximizes course usage',
        features: [
          'Dynamic pricing based on demand, weather, and time of day',
          'Automated waitlist management and last-minute booking alerts',
          'Weather contingency planning with automatic rescheduling',
          'Group and tournament booking optimization',
          'Online tee time booking with mobile-friendly interface'
        ],
        results: 'Real Results: 140% increase in rounds and 50% better operational efficiency'
      },
      {
        icon: 'Users',
        title: 'Build Member Loyalty & Engagement',
        problem: 'Member retention issues and declining engagement',
        solution: 'Member engagement and loyalty programs that create lasting relationships',
        features: [
          'Automated member communication with course updates and events',
          'Loyalty programs with round tracking and rewards',
          'Member milestone celebrations and recognition campaigns',
          'Social events and tournament promotion automation',
          'Member feedback collection and satisfaction tracking'
        ],
        results: 'Real Results: 65% better member retention and higher engagement'
      },
      {
        icon: 'TrendingUp',
        title: 'Increase Revenue Through Upselling & Premium Services',
        problem: 'Low revenue per round and underutilized premium services',
        solution: 'Revenue optimization through strategic upselling and premium experience marketing',
        features: [
          'Automated pro shop and dining upselling at booking',
          'Premium service promotion (cart upgrades, lessons, events)',
          'Corporate and group event marketing automation',
          'Seasonal package promotion and membership drive campaigns',
          'Cart and merchandise inventory management with promotions'
        ],
        results: 'Real Results: 45% higher revenue per round and increased premium service uptake'
      }
    ]
  },
  implementation: {
    title: 'Your 90-Day Implementation Timeline',
    subtitle: 'Get your golf course transformation up and running quickly',
    phases: [
      {
        phase: 'Days 1-30',
        title: 'Tee Time Optimization & Booking',
        items: [
          'Online tee time booking system with mobile optimization',
          'Dynamic pricing setup based on demand and conditions',
          'Automated waitlist management and booking alerts',
          'Basic member and customer communication systems'
        ]
      },
      {
        phase: 'Days 31-60',
        title: 'Member Engagement & Communication',
        items: [
          'Member loyalty and rewards program implementation',
          'Automated member communication and event promotion',
          'Customer feedback collection and satisfaction tracking',
          'Staff training on new booking and member management systems'
        ]
      },
      {
        phase: 'Days 61-90',
        title: 'Revenue Optimization & Growth',
        items: [
          'Upselling automation for pro shop, dining, and premium services',
          'Corporate and group event marketing campaigns',
          'Seasonal promotion and membership drive automation',
          'Performance analytics and revenue optimization tracking'
        ]
      }
    ]
  },
  cta: {
    title: 'Ready to Transform Your Golf Course?',
    subtitle: 'Join successful golf courses who are optimizing tee times, building member loyalty, and maximizing revenue per round.',
    primaryButton: 'Start Your Free Assessment',
    secondaryButton: 'See Case Studies',
    features: [
      'Free business assessment and strategy consultation',
      'Custom implementation plan for your golf course',
      'No long-term contracts or hidden fees',
      'Results-focused approach with measurable outcomes'
    ]
  }
};