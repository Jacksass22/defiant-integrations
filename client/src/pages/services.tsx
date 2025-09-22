import { useState } from 'react';

import { LeadCaptureModal } from '@/components/lead-capture-modal';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  Code,
  Database,
  Globe,
  Phone,
  BarChart3,
  Settings,
  Shield,
  Users,
  TrendingUp,
  Search,
  MessageSquare,
  Cloud,
  Workflow,
  Target,
  Award,
  Lightbulb,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import BlurText from '@/components/BlurText';
import GridDistortion from '@/components/GridDistortion';

export default function Services() {
  useScrollToTop();
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const coreServices = [
    {
      id: 'ai-strategy',
      icon: Brain,
      title: 'AI Strategy Development',
      description: 'Strategic AI implementation roadmaps and business transformation planning',
      services: [
        'AI readiness assessment and evaluation',
        'Strategic AI implementation roadmaps',
        'Business case development and ROI planning',
        'AI use case identification and prioritization',
        'Organizational readiness evaluation',
        'Technology roadmapping and future planning',
        'Digital transformation strategy'
      ]
    },
    {
      id: 'custom-ai',
      icon: Zap,
      title: 'Custom AI Solutions',
      description: 'Bespoke AI systems tailored to your specific business needs',
      services: [
        'Custom AI assistants for specific business tasks',
        'AI voice agents and intelligent receptionists',
        'RAG (Retrieval-Augmented Generation) systems',
        'Personalization engines for customer experience',
        'Intelligent workflow automation',
        'AI-powered decision support systems'
      ]
    },
    {
      id: 'system-integration',
      icon: Code,
      title: 'System Integration & Development',
      description: 'Seamless integration with existing systems and custom development',
      services: [
        'Custom API development and integration',
        'Data pipeline engineering and optimization',
        'CRM/ERP integration and modernization',
        'Legacy system modernization',
        'Cloud migration and architecture',
        'Database optimization and management',
        'Enterprise architecture design',
        'Full-stack application development'
      ]
    },
    {
      id: 'process-automation',
      icon: Workflow,
      title: 'Process Automation',
      description: 'Intelligent automation that eliminates busywork forever',
      services: [
        'Intelligent workflow design and implementation',
        'Task automation systems',
        'AI-powered customer service automation',
        'Document processing automation',
        'Communication and scheduling automation',
        'Follow-up system automation',
        'Repetitive task elimination'
      ]
    }
  ];

  const digitalServices = [
    {
      id: 'web-solutions',
      icon: Globe,
      title: 'Website & Web Applications',
      description: 'Modern, responsive web solutions that drive results',
      services: [
        'Custom website development (responsive, SEO-optimized)',
        'Web application development and deployment',
        'E-commerce platform development',
        'Progressive web applications (PWAs)',
        'Mobile-responsive design'
      ]
    },
    {
      id: 'digital-communication',
      icon: MessageSquare,
      title: 'Digital Communication Tools',
      description: 'AI-powered communication systems for better customer engagement',
      services: [
        'AI-powered chatbots for websites',
        'Intelligent website search and recommendations',
        'Customer portal development',
        'Interactive web forms and surveys',
        'Live chat integration'
      ]
    },
    {
      id: 'seo-marketing',
      icon: TrendingUp,
      title: 'SEO & Digital Marketing',
      description: 'Automated marketing systems that generate consistent results',
      services: [
        'SEO automation and optimization',
        'Lead generation systems',
        'Social media automation',
        'Email marketing automation',
        'Content marketing systems',
        'Google Ads optimization and management'
      ]
    }
  ];

  const voiceServices = [
    {
      id: 'ai-voice',
      icon: Phone,
      title: 'AI Voice Solutions',
      description: '24/7 intelligent voice systems that never miss a call',
      services: [
        'AI phone call answering services (24/7)',
        'Intelligent voice agents and receptionists',
        'Voice call automation and routing',
        'Multi-language support systems',
        'Customer service voice bots',
        'Appointment booking automation via phone'
      ]
    },
    {
      id: 'communication-automation',
      icon: Settings,
      title: 'Communication Automation',
      description: 'Automated communication workflows that nurture relationships',
      services: [
        'Automated customer communication workflows',
        'SMS and text message automation',
        'Email automation and sequencing',
        'Customer notification systems',
        'Emergency communication protocols'
      ]
    },
    {
      id: 'sms-text-automation',
      icon: MessageSquare,
      title: 'SMS & Text Automation',
      description: 'Intelligent text messaging systems for instant customer engagement',
      services: [
        'Automated SMS marketing campaigns',
        'Two-way text conversation management',
        'Appointment reminders and confirmations',
        'Lead nurturing via text sequences',
        'Customer support via SMS chatbots',
        'Bulk messaging with personalization'
      ]
    }
  ];

  const dataServices = [
    {
      id: 'business-intelligence',
      icon: BarChart3,
      title: 'Business Intelligence & Analytics',
      description: 'Data-driven insights that power better decisions',
      services: [
        'Data architecture design and implementation',
        'Performance dashboards and reporting',
        'Business intelligence systems',
        'KPI tracking and monitoring',
        'Real-time analytics and insights'
      ]
    },
    {
      id: 'predictive-analytics',
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Future-focused analytics that give you competitive advantage',
      services: [
        'Customer behavior prediction',
        'Demand forecasting and planning',
        'Predictive maintenance systems',
        'Risk assessment and mitigation',
        'Market trend analysis'
      ]
    },
    {
      id: 'data-management',
      icon: Database,
      title: 'Data Management',
      description: 'Robust data systems that scale with your business',
      services: [
        'Data pipeline development',
        'Database optimization and management',
        'Data warehouse design',
        'Analytics implementation',
        'Data governance and compliance'
      ]
    }
  ];

  const onlineBusinessServices = [
    {
      id: 'revenue-optimization',
      icon: TrendingUp,
      title: 'Revenue Optimization',
      description: 'AI-powered systems that maximize your revenue potential',
      services: [
        'AI-powered conversion tools and optimization',
        'Dynamic pricing algorithms',
        'Intelligent sales funnels',
        'User behavior analysis and tracking',
        'Customer journey mapping',
        'A/B testing automation'
      ]
    },
    {
      id: 'scaling-solutions',
      icon: Cloud,
      title: 'Scaling Solutions',
      description: 'Infrastructure that grows seamlessly with your business',
      services: [
        'Cloud-native architecture development',
        'Automated load balancing',
        'Resource allocation systems',
        'Infrastructure scaling (startup to enterprise)',
        'Performance optimization',
        'Cost optimization strategies'
      ]
    },
    {
      id: 'customer-retention',
      icon: Users,
      title: 'Customer Retention & Growth',
      description: 'AI-driven strategies that maximize customer lifetime value',
      services: [
        'Predictive churn prevention systems',
        'Personalized retention campaigns',
        'Customer lifetime value optimization',
        'Intelligent upselling and cross-selling',
        'Loyalty program automation',
        'Behavioral engagement triggers'
      ]
    }
  ];

  const supportServices = [
    {
      id: 'training-development',
      icon: Users,
      title: 'Training & Development',
      description: 'Comprehensive training that ensures successful AI adoption',
      services: [
        'AI literacy and fluency programs',
        'Tool-specific training',
        'Best practices education',
        'Leadership coaching',
        'Cultural transformation support',
        'Ongoing skill development'
      ]
    },
    {
      id: 'bilingual-voice-systems',
      icon: Globe,
      title: 'Bilingual Software & Voice Systems',
      description: 'Multi-language AI solutions that serve diverse customer bases',
      services: [
        'Bilingual voice agent setup and training',
        'Multi-language chatbot implementation',
        'Spanish/English customer service automation',
        'Cross-language data processing systems',
        'Cultural context adaptation and localization',
        'Real-time translation and communication tools'
      ]
    },
    {
      id: 'security-compliance',
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance management',
      services: [
        'Data protection systems',
        'Access control implementation',
        'Audit trail systems',
        'Compliance management',
        'Risk mitigation strategies',
        'Security assessment and monitoring'
      ]
    }
  ];

  const employeeOnboardingServices = [
    {
      id: 'ai-onboarding',
      icon: Users,
      title: 'AI-Powered Employee Onboarding',
      description: 'Streamline new hire training with intelligent documentation and personalized learning paths',
      services: [
        'Automated SOP and process documentation systems',
        'Interactive AI training assistants for new employees',
        'Custom knowledge bases with smart search capabilities',
        'Personalized learning paths based on role and experience',
        'Real-time Q&A chatbots for instant policy clarification',
        'Progress tracking and competency assessment tools',
        'Integration with existing HR and training platforms'
      ]
    },
    {
      id: 'process-documentation',
      icon: Code,
      title: 'Smart Process Documentation',
      description: 'AI-driven documentation that keeps your processes up-to-date and accessible',
      services: [
        'Automated workflow documentation and mapping',
        'Video-to-text training material conversion',
        'Dynamic procedure updates based on process changes',
        'Multi-format content generation (text, video, interactive)',
        'Role-based access control for sensitive procedures',
        'Version control and change tracking systems'
      ]
    },
    {
      id: 'custom-training-ai',
      icon: Brain,
      title: 'Custom AI Training Systems',
      description: 'Build intelligent training assistants that understand your business inside and out',
      services: [
        'Company-specific AI trainers with your processes',
        'Interactive simulation environments for hands-on learning',
        'AI-powered mentoring and coaching systems',
        'Adaptive learning that adjusts to employee progress',
        'Integration with company tools and systems',
        'Performance analytics and improvement recommendations'
      ]
    }
  ];

  const salesTrainingServices = [
    {
      id: 'ai-sales-training',
      icon: Target,
      title: 'AI Sales Training Platform',
      description: 'Train your sales team with AI prospects that respond like real buyers',
      services: [
        'Custom AI prospects trained on your ideal customer profiles',
        'Advanced objection handling practice with realistic scenarios',
        'Full sales cycle training from intro to close',
        'Real-time performance feedback and coaching',
        'Multiple language support for diverse markets',
        'Voice and text-based training environments'
      ]
    },
    {
      id: 'objection-handling',
      icon: Shield,
      title: 'Objection Handling Mastery',
      description: 'AI-powered systems that prepare your team for any sales challenge',
      services: [
        'Industry-specific objection simulation and training',
        'Adaptive difficulty scaling based on rep performance',
        'Custom objection libraries for your products/services',
        'Tone and pacing analysis for optimal delivery',
        'Team performance tracking and benchmarking',
        'Integration with existing CRM and sales tools'
      ]
    },
    {
      id: 'sales-coaching',
      icon: TrendingUp,
      title: 'AI Sales Coaching & Analytics',
      description: 'Intelligent coaching that identifies strengths and improvement areas',
      services: [
        'Personalized coaching recommendations based on performance data',
        'Call analysis and conversation intelligence',
        'Win/loss analysis with AI-driven insights',
        'Sales methodology reinforcement and training',
        'Competitive intelligence and response training',
        'ROI tracking with measurable performance improvements'
      ]
    }
  ];

  const coldEmailServices = [
    {
      id: 'ai-cold-email',
      icon: MessageSquare,
      title: 'AI-Powered Cold Email Systems',
      description: 'Intelligent email outreach that generates consistent leads and responses',
      services: [
        'AI-written personalized email sequences at scale',
        'Dynamic email personalization based on prospect data',
        'Automated follow-up sequences with smart timing',
        'A/B testing and optimization for maximum open rates',
        'Lead scoring and qualification automation',
        'CRM integration and pipeline management'
      ]
    },
    {
      id: 'email-automation',
      icon: Workflow,
      title: 'Advanced Email Automation',
      description: 'Complete email marketing automation that nurtures leads into customers',
      services: [
        'Multi-stage drip campaigns with behavioral triggers',
        'Smart send-time optimization for each recipient',
        'Email deliverability optimization and monitoring',
        'Reply detection and automatic response routing',
        'Performance analytics and conversion tracking',
        'Integration with sales and marketing tools'
      ]
    },
    {
      id: 'lead-generation',
      icon: Search,
      title: 'AI Lead Generation & Qualification',
      description: 'Intelligent prospecting systems that find and qualify your ideal customers',
      services: [
        'AI-powered prospect research and data enrichment',
        'Automated lead qualification and scoring',
        'Custom audience building based on ideal customer profiles',
        'Social media prospecting and engagement automation',
        'Intent data analysis for optimal timing',
        'Seamless handoff to sales teams with qualified leads'
      ]
    }
  ];

  const ServiceSection = ({
    services,
    title,
    description,
    bgColor = "bg-acquisition-dark"
  }: {
    services: any[],
    title: string,
    description: string,
    bgColor?: string
  }) => (
    <section className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-acquisition-primary mb-6">
            {title.split(' ').map((word, index) => {
              if (word.toLowerCase().includes('ai') || word.toLowerCase().includes('training') || word.toLowerCase().includes('onboarding') || word.toLowerCase().includes('sales') || word.toLowerCase().includes('email')) {
                return <span key={index} className="text-acquisition-accent">{word} </span>
              }
              return <span key={index}>{word} </span>
            })}
          </h2>
          <p className="text-xl text-acquisition-secondary max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedSections[service.id];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3 }
                }}
                className="group relative acquisition-card overflow-hidden flex flex-col h-full"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6b8bb8]/5 via-transparent to-[#7b9bd1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6b8bb8]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                <div className="relative p-8 flex-1 flex flex-col z-10">
                  <div className="flex items-center mb-4">
                    <motion.div
                      className="inline-flex items-center gap-2 rounded-lg bg-[#6b8bb8]/20 px-3 py-2 text-[#6b8bb8] mr-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <h3 className="font-sans text-xl font-bold text-acquisition-primary group-hover:text-[#6b8bb8] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-acquisition-secondary mb-6 leading-relaxed group-hover:text-acquisition-primary transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Desktop: Always show services */}
                  <div className="hidden md:block flex-1">
                    <ul className="space-y-3">
                      {service.services.map((item: string, serviceIndex: number) => (
                        <motion.li 
                          key={serviceIndex} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: serviceIndex * 0.05 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#6b8bb8] mt-2 mr-3 flex-shrink-0 group-hover:bg-acquisition-primary transition-colors duration-300" />
                          </motion.div>
                          <span className="text-acquisition-secondary text-sm leading-relaxed group-hover:text-acquisition-primary transition-colors duration-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile: Expandable sections */}
                  <div className="md:hidden">
                    <motion.button
                      onClick={() => toggleSection(service.id)}
                      className="flex items-center text-[#6b8bb8] hover:text-acquisition-primary font-medium transition-colors mb-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="w-4 h-4 mr-1" />
                      </motion.div>
                      {isExpanded ? "Hide Details" : "View Services"}
                    </motion.button>
                    
                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#6b8bb8]/20 pt-4">
                        <ul className="space-y-2">
                          {service.services.map((item: string, serviceIndex: number) => (
                            <motion.li
                              key={serviceIndex}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: serviceIndex * 0.05 }}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-[#6b8bb8] mt-2 mr-2 flex-shrink-0" />
                              <span className="text-acquisition-secondary text-sm">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Bottom glow effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6b8bb8]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );

  return (
    <div className="bg-acquisition-dark text-acquisition-secondary font-sans min-h-screen">
      
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-16 overflow-hidden">
        {/* Dark gradient background - nearly black to deep navy */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#6b8bb8]" />
        <div className="absolute inset-0 bg-gradient-radial from-[#6b8bb8]/10 via-transparent to-transparent" />

        {/* Grid Distortion Effect */}
        <div className="absolute inset-0 opacity-20">
          <GridDistortion
            imageSrc="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1920&h=1080&q=80"
            grid={10}
            mouse={0.1}
            strength={0.15}
            relaxation={0.9}
          />
        </div>

        {/* Subtle animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#6b8bb8] rounded-full animate-pulse blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7b9bd1] rounded-full animate-pulse blur-3xl" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#5a7aa0] rounded-full animate-pulse blur-2xl" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-acquisition-primary leading-tight">
              Complete <span className="gradient-text">AI Transformation</span> Services
            </h1>
            <p className="text-xl sm:text-2xl text-acquisition-secondary mb-12 leading-relaxed max-w-4xl mx-auto">
              From strategy development to full implementation - we deliver end-to-end AI solutions across 27+ industries with measurable results and 24/7 operation capability.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button
                onClick={() => setShowLeadCaptureModal(true)}
                className="btn-acquisition inline-flex items-center space-x-2 hover:scale-105 transform transition-all duration-300"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary-acquisition inline-flex items-center space-x-2 hover:scale-105 transform transition-all duration-300">
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-acquisition-darker border-y border-[#6b8bb8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group glow-hover">
              <div className="text-3xl sm:text-4xl font-bold text-acquisition-primary mb-2 group-hover:text-[#6b8bb8] transition-colors duration-300">27+</div>
              <div className="text-acquisition-muted">Industries Served</div>
            </div>
            <div className="text-center group glow-hover">
              <div className="text-3xl sm:text-4xl font-bold text-acquisition-primary mb-2 group-hover:text-[#6b8bb8] transition-colors duration-300">90%</div>
              <div className="text-acquisition-muted">Efficiency Improvement</div>
            </div>
            <div className="text-center group glow-hover">
              <div className="text-3xl sm:text-4xl font-bold text-acquisition-primary mb-2 group-hover:text-[#6b8bb8] transition-colors duration-300">10x</div>
              <div className="text-acquisition-muted">Speed Increases</div>
            </div>
            <div className="text-center group glow-hover">
              <div className="text-3xl sm:text-4xl font-bold text-acquisition-primary mb-2 group-hover:text-[#6b8bb8] transition-colors duration-300">24/7</div>
              <div className="text-acquisition-muted">System Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Strategy & Implementation Services */}
      <ServiceSection
        services={coreServices}
        title="Core AI Strategy & Implementation"
        description="Strategic AI development and implementation services that transform your business operations"
        bgColor="bg-acquisition-dark"
      />

      {/* Web & Digital Solutions */}
      <ServiceSection
        services={digitalServices}
        title="Web & Digital Solutions"
        description="Modern digital platforms and marketing systems that drive growth"
        bgColor="bg-acquisition-darker"
      />

      {/* Voice & Communication Systems */}
      <ServiceSection
        services={voiceServices}
        title="Voice & Communication Systems"
        description="AI-powered communication solutions that never miss an opportunity"
        bgColor="bg-acquisition-dark"
      />

      {/* Data & Analytics Solutions */}
      <ServiceSection
        services={dataServices}
        title="Data & Analytics Solutions"
        description="Comprehensive data systems that turn information into competitive advantage"
        bgColor="bg-acquisition-darker"
      />

      {/* Online Business Acceleration */}
      <ServiceSection
        services={onlineBusinessServices}
        title="Online Business Acceleration"
        description="Revenue optimization and scaling solutions for digital businesses"
        bgColor="bg-acquisition-dark"
      />

      {/* Training & Support Services */}
      <ServiceSection
        services={supportServices}
        title="Training & Support Services"
        description="Comprehensive support ensuring your AI transformation succeeds"
        bgColor="bg-acquisition-darker"
      />

      {/* Employee Onboarding & Training */}
      <ServiceSection
        services={employeeOnboardingServices}
        title="AI-Powered Employee Onboarding"
        description="Transform your onboarding process with intelligent documentation, custom AI trainers, and personalized learning paths that get new hires productive faster"
        bgColor="bg-gradient-to-br from-acquisition-dark via-acquisition-darker to-[#161b22]"
      />

      {/* Sales Team Training */}
      <ServiceSection
        services={salesTrainingServices}
        title="AI Sales Team Training"
        description="Train your sales team with AI prospects that respond like real buyers, master objection handling, and boost performance with measurable results"
        bgColor="bg-gradient-to-br from-acquisition-darker via-[#161b22] to-acquisition-dark"
      />

      {/* Cold Email Systems */}
      <ServiceSection
        services={coldEmailServices}
        title="Cold Email & Lead Generation Systems"
        description="AI-powered email outreach that generates consistent leads, personalizes at scale, and converts prospects into customers automatically"
        bgColor="bg-gradient-to-br from-acquisition-dark via-acquisition-darker to-[#161b22]"
      />


      {/* Service Delivery Models */}
      <section className="py-20 bg-acquisition-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-acquisition-primary mb-6">
              Service <span className="text-acquisition-accent">Delivery</span> Models
            </h2>
            <p className="text-xl text-acquisition-secondary max-w-3xl mx-auto leading-relaxed">
              Flexible engagement options designed to meet your specific needs and preferences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Award,
                title: "Done-for-You",
                description: "Complete hands-off implementation with full project management",
                gradient: "from-[#6b8bb8] to-[#5a7aa0]"
              },
              {
                icon: Users,
                title: "Done-with-You",
                description: "Collaborative implementation with comprehensive training",
                gradient: "from-[#6b8bb8] to-[#4a6a90]"
              },
              {
                icon: Lightbulb,
                title: "Do-It-Yourself",
                description: "Guided self-implementation with ongoing support",
                gradient: "from-[#6b8bb8] to-[#5a7aa0]"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-sans text-xl font-bold text-acquisition-primary mb-2 group-hover:text-[#6b8bb8] transition-colors duration-300">{item.title}</h3>
                  <p className="text-acquisition-secondary group-hover:text-acquisition-primary transition-colors duration-300">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="acquisition-card p-8">
            <h3 className="font-sans text-2xl font-bold text-acquisition-primary mb-4 text-center">
              Key <span className="text-acquisition-accent">Differentiators</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#6b8bb8] mr-3 flex-shrink-0" />
                  <span className="text-acquisition-secondary"><strong className="text-acquisition-primary">Real Developers:</strong> Custom code and solutions, not just consultancy</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#6b8bb8] mr-3 flex-shrink-0" />
                  <span className="text-acquisition-secondary"><strong className="text-acquisition-primary">Industry-Specific:</strong> Deep expertise across 27+ industries</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#6b8bb8] mr-3 flex-shrink-0" />
                  <span className="text-acquisition-secondary"><strong className="text-acquisition-primary">End-to-End:</strong> Strategy through implementation and ongoing support</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#6b8bb8] mr-3 flex-shrink-0" />
                  <span className="text-acquisition-secondary"><strong className="text-acquisition-primary">Measurable Results:</strong> 90% efficiency improvements, 3-10x speed increases</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#6b8bb8] mr-3 flex-shrink-0" />
                  <span className="text-acquisition-secondary"><strong className="text-acquisition-primary">Scalable Solutions:</strong> From small business to enterprise-level</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#6b8bb8] mr-3 flex-shrink-0" />
                  <span className="text-acquisition-secondary"><strong className="text-acquisition-primary">ROI-Focused:</strong> Business-first approach with clear value delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-acquisition-darker to-acquisition-dark text-acquisition-primary relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6b8bb8]/10 via-transparent to-[#6b8bb8]/5" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32 bg-[#6b8bb8] rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#7b9bd1] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-sans text-3xl sm:text-4xl font-bold mb-6">
            Ready to <span className="text-acquisition-accent">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-acquisition-secondary mb-8 leading-relaxed">
            Let's discuss which services are the perfect fit for your business goals and growth objectives.
          </p>
          <button
            onClick={() => setShowLeadCaptureModal(true)}
            className="btn-acquisition inline-flex items-center space-x-2 hover:scale-105 transform transition-all duration-300 text-lg"
          >
            <span>Get Your Custom Service Plan</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Lead Capture Modal */}
      <LeadCaptureModal 
        open={showLeadCaptureModal}
        onOpenChange={setShowLeadCaptureModal}
      />
    </div>
  );
}