import { IndustryData } from './types';

export const restaurantsCafesData: IndustryData = {
  slug: 'restaurants-cafes',
  seo: {
    title: 'Restaurant & Café Automation | AI-Powered Food Service Growth | Defiant Integrations',
    description: 'Transform your restaurant or café with AI automation that attracts hungry customers, manages operations smoothly, and builds loyalty. Free assessment available.',
    keywords: ['restaurant automation', 'café marketing automation', 'AI for restaurants', 'restaurant lead generation', 'food service automation', 'restaurant CRM']
  },
  theme: {
    primaryColor: 'orange',
    gradientFrom: 'orange-600',
    gradientVia: 'red-600',
    gradientTo: 'red-800'
  },
  hero: {
    title: 'Restaurants & Cafés: Smart Technology That Actually Works for Your Business',
    subtitle: 'Attract more customers, manage operations smoothly, and build loyalty that keeps people coming back even when competitors offer delivery discounts.',
    backgroundEffect: 'none'
  },
  problem: {
    title: 'What Restaurants and Cafés Are Dealing With Right Now',
    description: 'Running a restaurant or café means balancing great food with customer service, managing staff schedules, and competing with delivery apps that are changing how people dine. You\'re dealing with online reviews that can make or break your reputation while trying to fill tables during slow periods and manage rushes when you\'re slammed.',
    stats: [
      { value: '150%', label: 'New Customer Increase', description: 'More new customer visits with targeted marketing' },
      { value: '40%', label: 'Higher Party Size', description: 'When showcasing atmosphere and group dining experiences' },
      { value: '8x', label: 'More Engagement', description: 'On food photography and social media content' },
      { value: '30%', label: 'No-Show Reduction', description: 'With automated reservation confirmations' }
    ],
    painPoints: [
      'Empty tables during slow periods while competitors stay busy',
      'Customers discover you once but don\'t return or recommend to friends',
      'Negative reviews outweigh positive experiences in search results',
      'Administrative work takes time away from food quality and customer service',
      'Missing opportunities to showcase your food and atmosphere online'
    ]
  },
  solutions: {
    title: 'How Smart Technology Fixes These Problems',
    subtitle: 'Transform your restaurant with AI-powered marketing and customer experience systems',
    items: [
      {
        icon: 'Coffee',
        title: 'Generate Hungry Customers and Food Lovers',
        problem: 'Potential customers don\'t know you exist or what makes you special',
        solution: 'Professional lead generation and content that showcases your food and atmosphere',
        features: [
          'Google Ads targeting "restaurants near me," "best coffee shop," and cuisine-specific searches',
          'Local SEO optimization for "brunch," "date night," "business lunch" in your area',
          'Food photography and menu highlights that make people want to visit',
          'Content about chef specialties, seasonal dishes, and unique ingredients',
          'Event and catering lead generation for private parties and corporate clients'
        ],
        results: 'Real Results: 150% more new customers and 40% higher party sizes'
      },
      {
        icon: 'Calendar',
        title: 'Smart Reservation & Customer Management',
        problem: 'No-shows and poor communication hurt revenue and customer experience',
        solution: 'Automated reservation and customer communication systems',
        features: [
          'Automated reservation confirmations and reminders',
          'Waitlist management for busy periods',
          'Customer preference tracking for personalized service',
          'Special occasion reminders (birthdays, anniversaries)',
          'Table optimization and seating management'
        ],
        results: 'Real Results: 30% reduction in no-shows and improved table turnover'
      },
      {
        icon: 'Camera',
        title: 'Build Social Buzz & Customer Loyalty',
        problem: 'Customers don\'t return consistently or bring friends',
        solution: 'Social media automation and loyalty programs that create buzz',
        features: [
          'Professional food photography and social media content',
          'Customer review generation and reputation management',
          'Loyalty programs with automated rewards and promotions',
          'Event marketing and special occasion campaigns',
          'Social media contests and user-generated content campaigns'
        ],
        results: 'Real Results: 8x more social engagement and consistent repeat customers'
      }
    ]
  },
  implementation: {
    title: 'Your 90-Day Implementation Timeline',
    subtitle: 'Get your restaurant transformation up and running quickly',
    phases: [
      {
        phase: 'Days 1-30',
        title: 'Marketing & Customer Acquisition',
        items: [
          'Professional website with online reservation system',
          'Google Ads campaigns for immediate customer flow',
          'Food photography and social media setup',
          'Basic CRM for customer management'
        ]
      },
      {
        phase: 'Days 31-60',
        title: 'Operations & Communication',
        items: [
          'Automated reservation confirmation systems',
          'Customer preference tracking and personalization',
          'Review generation and reputation management',
          'Staff training on new systems'
        ]
      },
      {
        phase: 'Days 61-90',
        title: 'Loyalty & Growth Systems',
        items: [
          'Automated loyalty and reward programs',
          'Social media automation and content marketing',
          'Event marketing and special occasion campaigns',
          'Performance analytics and optimization'
        ]
      }
    ]
  },
  cta: {
    title: 'Ready to Transform Your Restaurant?',
    subtitle: 'Join successful restaurants and cafés who are attracting more customers, improving operations, and building loyal customer bases.',
    primaryButton: 'Start Your Free Assessment',
    secondaryButton: 'See Case Studies',
    features: [
      'Free business assessment and strategy consultation',
      'Custom implementation plan for your restaurant or café',
      'No long-term contracts or hidden fees',
      'Results-focused approach with measurable outcomes'
    ]
  }
};