import { IndustryData } from './types';

export const plumbingData: IndustryData = {
  slug: 'plumbing',

  seo: {
    title: 'Plumbing Business Automation | AI Emergency Response | Defiant Integrations',
    description: 'Transform your plumbing business with AI-powered emergency response and automated scheduling. Never miss another emergency call.',
    keywords: ['plumbing automation', 'AI for plumbers', 'emergency call handling', 'plumbing business growth', 'automated plumbing']
  },

  theme: {
    primaryColor: 'blue-600',
    accentColor: 'blue-300',
    gradientFrom: 'blue-900',
    gradientVia: 'blue-800',
    gradientTo: 'blue-900',
    iconColor: 'blue-600',
    backgroundEffect: 'tech-pattern'
  },

  hero: {
    title: 'Plumbing: Smart Technology That Actually Works for Your Business',
    subtitle: 'Handle more calls, keep customers informed, and grow your plumbing business without burning out.',
    ctaText: 'Start Your Free Assessment'
  },

  problem: {
    title: 'The Plumbing Industry\'s Daily Reality',
    description: 'Running a plumbing company means dealing with emergencies at all hours, managing a crew that\'s scattered across town, and trying to keep customers happy when their pipes burst at the worst possible time. You\'re competing with the big franchises who have fancy systems while you\'re still juggling calls on your personal phone.',
    statistics: [
      {
        number: '60%',
        title: 'Emergency Calls',
        description: 'Of plumbing calls are urgent situations that can\'t wait'
      },
      {
        number: '24/7',
        title: 'Customer Expectations',
        description: 'Immediate responses and real-time updates'
      },
      {
        number: '70%',
        title: 'Missed Calls',
        description: 'Lost revenue from unanswered emergency calls'
      },
      {
        number: '3x',
        title: 'Competition',
        description: 'Big franchises with call centers and automated systems'
      }
    ],
    summary: {
      title: 'What This Means for Your Business',
      points: [
        'Emergency calls come in when you\'re already on a job',
        'Customers get frustrated when they can\'t reach you immediately',
        'Scheduling gets chaotic when emergencies bump regular appointments',
        'You lose business to companies that answer the phone faster',
        'Administrative work eats up time you could spend plumbing'
      ]
    }
  },

  solutions: {
    title: 'How Smart Technology Fixes These Problems',
    subtitle: 'Transform your plumbing operations with AI-powered solutions designed for emergency response',
    items: [
      {
        icon: 'Phone',
        iconBgColor: 'blue-100',
        iconColor: 'blue-600',
        title: 'Never Miss Another Emergency Call',
        subtitle: 'The Problem: Customers with burst pipes don\'t wait - they call the next plumber',
        description: 'The Solution: AI phone systems that answer every call and handle urgent situations properly',
        features: [
          'AI answers calls 24/7, even when you\'re under a sink',
          'Emergency calls get prioritized and you\'re notified immediately',
          'Service calls can be booked directly, messages taken for complex issues, quotes provided for standard jobs',
          'Routine questions (hours, pricing, services) get answered instantly',
          'Only calls that need human attention get transferred. You decide.',
          'Customer information gets captured automatically for follow-up'
        ],
        results: 'Real Results: 70% fewer missed calls and 50% more emergency bookings',
        image: 'emergencyWorkflowImage'
      },
      {
        icon: 'Calendar',
        iconBgColor: 'green-100',
        iconColor: 'green-600',
        title: 'Emergency-First Scheduling',
        subtitle: 'The Problem: Emergency calls destroy your carefully planned schedule',
        description: 'The Solution: Smart scheduling that adapts to urgent situations automatically',
        features: [
          'Emergency slots automatically protected in your calendar',
          'Non-urgent appointments get rescheduled with customer approval',
          'Customers get real-time updates when emergencies affect their appointment',
          'Route optimization keeps travel time minimal',
          'Recurring maintenance gets scheduled around seasonal patterns'
        ],
        results: 'Real Results: 80% fewer scheduling conflicts and 60% better on-time performance',
        image: 'emergencyWorkflowImage'
      },
      {
        icon: 'MessageSquare',
        iconBgColor: 'purple-100',
        iconColor: 'purple-600',
        title: 'Customer Communication That Never Stops',
        subtitle: 'The Problem: Customers panic when they don\'t know what\'s happening',
        description: 'The Solution: Automated updates that keep customers informed every step of the way',
        features: [
          'Arrival time estimates sent automatically',
          'Job completion photos and explanations',
          'Follow-up maintenance reminders',
          'Emergency preparedness tips sent seasonally',
          'Review requests after successful jobs'
        ],
        results: 'Real Results: 90% customer satisfaction increase and 4x more referrals'
      }
    ],
    winsSection: {
      title: 'Real Plumbing Success Stories',
      backgroundColor: 'blue-900',
      textColor: 'white',
      stats: [
        { number: '70%', label: 'fewer missed calls' },
        { number: '50%', label: 'more emergency bookings' },
        { number: '80%', label: 'fewer scheduling conflicts' },
        { number: '4x', label: 'more referrals' }
      ]
    }
  },

  timeline: {
    title: 'Your 90-Day Transformation (From Chaos to Control)',
    phases: [
      {
        month: 'Month 1',
        title: 'Emergency Response Setup',
        color: 'blue-600',
        tasks: [
          'Install AI phone system with emergency prioritization',
          'Connect to your existing scheduling system',
          'Set up customer notification workflows'
        ]
      },
      {
        month: 'Month 2',
        title: 'Optimization & Training',
        color: 'blue-600',
        tasks: [
          'Fine-tune emergency vs. routine call routing',
          'Add seasonal maintenance campaigns',
          'Implement customer feedback loops'
        ]
      },
      {
        month: 'Month 3+',
        title: 'Growth Mode',
        color: 'blue-600',
        tasks: [
          'Launch referral automation programs',
          'Add predictive maintenance alerts',
          'Scale service area with optimized routing'
        ]
      }
    ]
  },

  benefits: {
    title: 'Why This Works (And Why Your Competitors Are Still Struggling)',
    subtitle: 'While they\'re still missing calls and playing scheduling Tetris, you\'ll have:',
    description: '',
    points: [
      'A phone system that never sleeps',
      'Emergency response that builds customer loyalty',
      'Scheduling that adapts to reality',
      'Communication that reduces anxiety and builds trust'
    ],
    highlightText: 'You\'ll become the plumber people trust in emergencies—and remember for everything else.'
  },

  cta: {
    title: 'Ready to Stop Missing Emergency Calls?',
    paragraphs: [
      'Your customers are already stressed when they call you. The last thing they need is to wonder if you\'ll show up, when you\'ll arrive, or what\'s going wrong.',
      'Smart automation gives you the systems that big franchise operations have—but with the personal touch that only local plumbers can provide.'
    ],
    question: 'Ready to see how this works for your plumbing business?',
    buttonText: 'Start Your Free Assessment'
  },

  modal: {
    title: 'Plumbing AI Assessment',
    subtitle: 'Get a customized emergency response strategy for your plumbing business'
  }
};