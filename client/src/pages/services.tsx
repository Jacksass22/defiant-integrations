import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import { useScrollToTop } from '@/hooks/useScrollToTop';
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

  const ServiceSection = ({ 
    services, 
    title, 
    description, 
    bgColor = "bg-white" 
  }: { 
    services: any[], 
    title: string, 
    description: string, 
    bgColor?: string 
  }) => (
    <section className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedSections[service.id];
            
            return (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <button
                    onClick={() => toggleSection(service.id)}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors mb-4"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronDown className="w-4 h-4 mr-1" />
                        Hide Details
                      </>
                    ) : (
                      <>
                        <ChevronRight className="w-4 h-4 mr-1" />
                        View Services
                      </>
                    )}
                  </button>
                  
                  {isExpanded && (
                    <div className="border-t border-gray-100 pt-4">
                      <ul className="space-y-2">
                        {service.services.map((item: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <BlurText
              text="Complete AI Transformation Services"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
            />
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              From strategy development to full implementation - we deliver end-to-end AI solutions across 27+ industries with measurable results and 24/7 operation capability.
            </p>
            <button 
              onClick={() => setShowLeadCaptureModal(true)}
              className="inline-flex items-center space-x-2 bg-white text-blue-900 px-8 py-4 font-medium hover:bg-gray-100 hover:shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">27+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-gray-600">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">10x</div>
              <div className="text-gray-600">Speed Increases</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">System Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Strategy & Implementation Services */}
      <ServiceSection
        services={coreServices}
        title="Core AI Strategy & Implementation"
        description="Strategic AI development and implementation services that transform your business operations"
      />

      {/* Web & Digital Solutions */}
      <ServiceSection
        services={digitalServices}
        title="Web & Digital Solutions"
        description="Modern digital platforms and marketing systems that drive growth"
        bgColor="bg-gray-50"
      />

      {/* Voice & Communication Systems */}
      <ServiceSection
        services={voiceServices}
        title="Voice & Communication Systems"
        description="AI-powered communication solutions that never miss an opportunity"
      />

      {/* Data & Analytics Solutions */}
      <ServiceSection
        services={dataServices}
        title="Data & Analytics Solutions"
        description="Comprehensive data systems that turn information into competitive advantage"
        bgColor="bg-gray-50"
      />

      {/* Online Business Acceleration */}
      <ServiceSection
        services={onlineBusinessServices}
        title="Online Business Acceleration"
        description="Revenue optimization and scaling solutions for digital businesses"
      />

      {/* Training & Support Services */}
      <ServiceSection
        services={supportServices}
        title="Training & Support Services"
        description="Comprehensive support ensuring your AI transformation succeeds"
        bgColor="bg-gray-50"
      />

      {/* Industry-Specific Solutions */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized AI implementations tailored to your industry's unique challenges and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Trades & Home Services */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Trades & Home Services
              </h3>
              <div className="space-y-2 text-gray-600">
                <div>• HVAC, Electrical, Plumbing</div>
                <div>• Roofing, Painting, Landscaping</div>
                <div>• General Contracting, Cleaning</div>
                <div>• Remodeling & Renovation</div>
              </div>
            </div>

            {/* Consumer & Lifestyle */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Consumer & Lifestyle
              </h3>
              <div className="space-y-2 text-gray-600">
                <div>• Beauty Salons, Spas, Barbershops</div>
                <div>• Restaurants, Cafés, Food Services</div>
                <div>• Gyms, Personal Trainers</div>
                <div>• Wellness & Life Coaches</div>
              </div>
            </div>

            {/* Professional Services */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Professional Services
              </h3>
              <div className="space-y-2 text-gray-600">
                <div>• Law Firms, Accounting</div>
                <div>• Insurance Brokers</div>
                <div>• Real Estate Agencies</div>
                <div>• HR & Recruiting Firms</div>
              </div>
            </div>

            {/* Retail & Product */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Retail & Product Businesses
              </h3>
              <div className="space-y-2 text-gray-600">
                <div>• Local Boutiques</div>
                <div>• Brick-and-Mortar Retail</div>
                <div>• eCommerce Brands</div>
                <div>• Cannabis Retail</div>
              </div>
            </div>

            {/* Golf & Recreation */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Golf & Recreation
              </h3>
              <div className="space-y-2 text-gray-600">
                <div>• Golf Course Management</div>
                <div>• Member Communication</div>
                <div>• Event Coordination</div>
                <div>• Operations Optimization</div>
              </div>
            </div>

            {/* Online Business */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Online Business
              </h3>
              <div className="space-y-2 text-gray-600">
                <div>• Revenue Optimization</div>
                <div>• Scaling Solutions</div>
                <div>• Customer Retention</div>
                <div>• Automation-First Approach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Delivery Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Service Delivery Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible engagement options designed to meet your specific needs and preferences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Done-for-You</h3>
              <p className="text-gray-600">Complete hands-off implementation with full project management</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Done-with-You</h3>
              <p className="text-gray-600">Collaborative implementation with comprehensive training</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Do-It-Yourself</h3>
              <p className="text-gray-600">Guided self-implementation with ongoing support</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 text-center">
              Key Differentiators
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"><strong>Real Developers:</strong> Custom code and solutions, not just consultancy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"><strong>Industry-Specific:</strong> Deep expertise across 27+ industries</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"><strong>End-to-End:</strong> Strategy through implementation and ongoing support</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"><strong>Measurable Results:</strong> 90% efficiency improvements, 3-10x speed increases</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"><strong>Scalable Solutions:</strong> From small business to enterprise-level</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"><strong>ROI-Focused:</strong> Business-first approach with clear value delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Let's discuss which services are the perfect fit for your business goals and growth objectives.
          </p>
          <button 
            onClick={() => setShowLeadCaptureModal(true)}
            className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 font-medium hover:bg-gray-100 hover:shadow-lg hover:scale-105 transform transition-all duration-300 text-lg"
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