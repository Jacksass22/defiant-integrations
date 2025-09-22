import { IndustryData } from './types';

export const lawFirmsData: IndustryData = {
  slug: 'law-firms',
  seo: {
    title: 'Law Firm Automation | AI-Powered Legal Practice Growth | Defiant Integrations',
    description: 'Transform your law firm with AI automation that streamlines casework, increases client retention, and grows your practice securely. Free assessment available.',
    keywords: ['law firm automation', 'legal practice marketing', 'AI for lawyers', 'attorney lead generation', 'legal CRM', 'law practice management']
  },
  theme: {
    primaryColor: 'slate',
    gradientFrom: 'slate-50',
    gradientVia: 'slate-50',
    gradientTo: 'white'
  },
  hero: {
    title: 'Law Firms: Smart Technology That Actually Works for Your Practice',
    subtitle: 'Streamline casework, increase client retention, and grow your firm with systems that prioritize security, compliance, and data control—so you can focus on winning, not worrying.',
    backgroundEffect: 'none'
  },
  problem: {
    title: 'What Law Firms Are Dealing With Right Now',
    description: 'Running a law firm means balancing complex casework with business development, managing client expectations, and maintaining the highest standards of confidentiality and compliance. You\'re competing for quality clients while handling administrative burdens that pull you away from practicing law.',
    stats: [
      { value: '180%', label: 'Quality Lead Increase', description: 'With targeted legal marketing' },
      { value: '50%', label: 'Higher Case Value', description: 'When positioned as specialized experts' },
      { value: '60%', label: 'Administrative Time Saved', description: 'With automated workflows' },
      { value: '40%', label: 'Client Retention Increase', description: 'With better communication systems' }
    ],
    painPoints: [
      'Difficulty attracting quality clients who can afford legal fees',
      'Administrative work taking time away from billable hours',
      'Client communication gaps leading to dissatisfaction and disputes',
      'Manual case management and document organization inefficiencies',
      'Referral relationships that don\'t generate consistent business',
      'Marketing restrictions and ethical considerations limiting growth options'
    ]
  },
  solutions: {
    title: 'How Smart Technology Fixes These Problems',
    subtitle: 'Transform your legal practice with secure, compliant automation systems',
    items: [
      {
        icon: 'Scale',
        title: 'Attract Quality Clients & Build Authority',
        problem: 'Difficulty attracting clients who need and can afford legal services',
        solution: 'Professional marketing that positions you as the go-to expert in your practice areas',
        features: [
          'Google Ads targeting specific legal issues and practice area searches',
          'Educational content marketing that demonstrates legal expertise',
          'Professional website with case results and client testimonials',
          'Local SEO optimization for "lawyer near me" and practice-specific searches',
          'Thought leadership content that builds trust and authority'
        ],
        results: 'Real Results: 180% more quality leads and 50% higher case values'
      },
      {
        icon: 'FileText',
        title: 'Streamline Case Management & Documentation',
        problem: 'Manual case management and administrative work reducing billable time',
        solution: 'Automated case workflows and secure document management systems',
        features: [
          'Automated client intake and case setup workflows',
          'Secure document management with version control and access logging',
          'Case milestone tracking with automated client progress updates',
          'Billing and time tracking automation with detailed reporting',
          'Court date and deadline reminder systems for attorneys and staff'
        ],
        results: 'Real Results: 60% reduction in administrative time and better case organization'
      },
      {
        icon: 'Users',
        title: 'Improve Client Communication & Generate Referrals',
        problem: 'Poor client communication and inconsistent referral generation',
        solution: 'Secure client communication systems and referral relationship management',
        features: [
          'Automated client communication with case status updates and milestones',
          'Secure client portals for document sharing and case information access',
          'Client satisfaction surveys and feedback collection systems',
          'Professional referral partner programs with tracking and reciprocity',
          'Past client relationship management for future legal needs'
        ],
        results: 'Real Results: 40% better client retention and consistent referral pipeline'
      }
    ]
  },
  implementation: {
    title: 'Your 90-Day Implementation Timeline',
    subtitle: 'Get your legal practice transformation up and running securely',
    phases: [
      {
        phase: 'Days 1-30',
        title: 'Professional Marketing & Lead Generation',
        items: [
          'Professional website with practice area focus and client testimonials',
          'Google Ads campaigns targeting legal service searches',
          'Educational content creation demonstrating legal expertise',
          'Basic secure CRM setup for lead and client management'
        ]
      },
      {
        phase: 'Days 31-60',
        title: 'Case Management & Client Communication',
        items: [
          'Automated client intake and case setup workflows',
          'Secure client communication and progress update systems',
          'Case milestone tracking and deadline management',
          'Staff training on new case management systems'
        ]
      },
      {
        phase: 'Days 61-90',
        title: 'Client Retention & Referral Systems',
        items: [
          'Client satisfaction and feedback collection systems',
          'Professional referral partner programs and tracking',
          'Past client relationship management for future needs',
          'Performance analytics and practice growth metrics'
        ]
      }
    ]
  },
  cta: {
    title: 'Ready to Transform Your Law Firm?',
    subtitle: 'Join successful law firms who are attracting quality clients, streamlining case management, and building sustainable referral networks.',
    primaryButton: 'Start Your Free Assessment',
    secondaryButton: 'See Case Studies',
    features: [
      'Free business assessment and strategy consultation',
      'Custom implementation plan for your law firm',
      'No long-term contracts or hidden fees',
      'Results-focused approach with measurable outcomes'
    ]
  }
};