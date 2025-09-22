import { useState, useEffect } from 'react';
import { 
  Brain, 
  Globe, 
  Code, 
  Phone, 
  BarChart,
  ChevronRight,
  CheckCircle
} from 'lucide-react';
import dataAnalyticsDB from '@assets/Data Analytics DB.png';
import voiceAIImage1 from '@assets/Voice AI image 1.png';
import voiceAIImage2 from '@assets/Voice AI image 2.png';
import digitalPlatformPhoto from '@assets/Digital platform photo.png';
import aiStrategyImplementation from '@assets/Ai strategy implementation.png';
import dataArchitectureAnalytics from '@assets/Data architecture and analytics.jpg';
import uiExample1 from '@assets/image_1754004393918.png';
import uiExample2 from '@assets/image_1754143106539.png';
import uiExample3 from '@assets/image_1754145347518.png';
import uiExample4 from '@assets/image_1754157043350.png';

// UI Gallery for Web Development
const uiGallery = [
  { src: uiExample1, alt: "Modern Web Application UI" },
  { src: uiExample2, alt: "E-commerce Platform Interface" },
  { src: uiExample3, alt: "Business Dashboard Design" },
  { src: uiExample4, alt: "Mobile-First Web Application" }
];

// AI Strategy Cards - Defiant Integrations Framework
const aiStrategyCards = [
  {
    title: "Systemize",
    description: "Organize and document business processes",
    category: "Process Foundation",
    icon: "📋",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Consolidate",
    description: "Combine and streamline workflows through AI automation",
    category: "Workflow Optimization",
    icon: "🔗",
    gradient: "from-green-500 to-blue-600"
  },
  {
    title: "Automate",
    description: "Implement AI-powered automation to save manual work",
    category: "AI Implementation",
    icon: "🤖",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Leverage",
    description: "Use AI and paid channels to drive scalable growth",
    category: "Growth Strategy",
    icon: "📈",
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Expand",
    description: "Grow efficiency and profitability sustainably",
    category: "Sustainable Growth",
    icon: "🚀",
    gradient: "from-teal-500 to-cyan-600"
  }
];

const services = [
  {
    id: 'ai-strategy',
    name: 'AI Strategy & Integration',
    icon: Brain,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    borderColor: 'border-blue-500',
    description: 'Transform your business with comprehensive AI solutions that drive innovation and efficiency across all operations.',
    features: [
      'AI Roadmap Development',
      'Technology Stack Selection',
      'Integration Architecture',
      'ROI Analysis & Metrics'
    ],
    details: 'Our AI strategy team will analyze your business needs, design custom AI solutions, and provide end-to-end implementation support. We ensure seamless integration with existing systems while maximizing operational efficiency.',
    image: 'ai-cards'
  },
  {
    id: 'digital-platforms',
    name: 'Digital Platforms',
    icon: Globe,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'from-emerald-50 to-emerald-100',
    borderColor: 'border-emerald-500',
    description: 'Build robust digital platforms that scale with your business and deliver exceptional user experiences.',
    features: [
      'Custom Platform Development',
      'API Integration',
      'Cloud Infrastructure',
      'Performance Optimization'
    ],
    details: 'We create scalable digital platforms tailored to your specific needs. From architecture design to deployment, our team ensures your platform is secure, performant, and ready for growth.',
    image: (
      <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-black/5">
        <img
          src={digitalPlatformPhoto}
          alt="Digital Platform Dashboard"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
      </div>
    )
  },
  {
    id: 'web-development',
    name: 'Web Development',
    icon: Code,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    borderColor: 'border-purple-500',
    description: 'Create stunning, high-performance websites and web applications that engage users and drive results.',
    features: [
      'Responsive Web Design',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'CMS Integration'
    ],
    details: 'Our web development team specializes in creating beautiful, functional websites that convert visitors into customers. We use modern technologies to ensure fast load times and seamless user experiences.',
    image: 'gallery'
  },
  {
    id: 'voice-automation',
    name: 'Voice & Automation',
    icon: Phone,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100',
    borderColor: 'border-orange-500',
    description: 'Implement cutting-edge voice AI and automation solutions that streamline operations and enhance customer interactions.',
    features: [
      'Voice AI Assistants',
      'Call Center Automation',
      'Workflow Automation',
      'Natural Language Processing'
    ],
    details: 'Deploy intelligent voice systems and automation that handle customer interactions 24/7. Our solutions reduce costs while improving customer satisfaction through instant, accurate responses.',
    image: (
      <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-black/5 flex flex-col gap-2">
        <div className="relative flex-1">
          <img
            src={voiceAIImage1}
            alt="Voice AI Interface 1"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="relative flex-1">
          <img
            src={voiceAIImage2}
            alt="Voice AI Interface 2"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    )
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics & Architecture',
    icon: BarChart,
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'from-indigo-50 to-indigo-100',
    borderColor: 'border-indigo-500',
    description: 'Design robust data architectures and transform raw data into actionable insights with advanced analytics capabilities.',
    features: [
      'Data Architecture Design',
      'Business Intelligence',
      'Predictive Analytics',
      'Real-time Dashboards'
    ],
    details: 'We design scalable data architectures and transform raw data into actionable insights. From data warehousing and ETL pipelines to advanced analytics and machine learning, we build the foundation for data-driven decision making.',
    image: (
      <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-black/5">
        <img
          src={dataArchitectureAnalytics}
          alt="Data Architecture and Analytics"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
      </div>
    )
  }
];

export default function ServiceShowcase() {
  const [activeService, setActiveService] = useState(services[0]);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [currentAiCardIndex, setCurrentAiCardIndex] = useState(0);

  // Auto-rotate gallery every 3 seconds when web development is active
  useEffect(() => {
    if (activeService.image === 'gallery') {
      const interval = setInterval(() => {
        setCurrentGalleryIndex((prev) => (prev + 1) % uiGallery.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeService.image]);

  // Auto-rotate AI cards every 4 seconds when AI strategy is active
  useEffect(() => {
    if (activeService.image === 'ai-cards') {
      const interval = setInterval(() => {
        setCurrentAiCardIndex((prev) => (prev + 1) % aiStrategyCards.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [activeService.image]);

  // Reset indexes when switching services
  useEffect(() => {
    if (activeService.image === 'gallery') {
      setCurrentGalleryIndex(0);
    } else if (activeService.image === 'ai-cards') {
      setCurrentAiCardIndex(0);
    }
  }, [activeService.id]);

  // Force re-render when component mounts (fixes navigation caching issues)
  useEffect(() => {
    // Reset to first service and clear any stale state
    setActiveService(services[0]);
    setCurrentGalleryIndex(0);
    setCurrentAiCardIndex(0);
  }, []);

  return (
    <div className="relative">
      <div className="grid lg:grid-cols-[350px_1fr] gap-8">
        {/* Left Side - Service List */}
        <div className="space-y-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                activeService.id === service.id
                  ? `bg-gradient-to-r ${service.bgColor} ${service.borderColor} shadow-lg`
                  : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${
                    activeService.id === service.id ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {service.name}
                  </h3>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${
                  activeService.id === service.id ? 'translate-x-1 text-gray-700' : 'text-gray-400'
                }`} />
              </div>
            </button>
          ))}
        </div>

        {/* Right Side - Dynamic Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-2 h-full">
            {/* Content Section */}
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {activeService.name}
              </h2>
              <p className="text-gray-600 mb-6">
                {activeService.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {activeService.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-gray-600">
                {activeService.details}
              </p>
            </div>
            
            {/* Image Section */}
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
              <div className="w-full max-w-md" key={activeService.id}>
                {activeService.image === 'gallery' ? (
                  <div className="relative w-full rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5" style={{ aspectRatio: '16/12' }}>
                    {/* Image stack with transition effects */}
                    <div className="relative w-full h-full">
                      {uiGallery.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                            index === currentGalleryIndex
                              ? 'opacity-100 transform translate-x-0'
                              : index < currentGalleryIndex
                              ? 'opacity-0 transform -translate-x-full'
                              : 'opacity-0 transform translate-x-full'
                          }`}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />

                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                        </div>
                      ))}
                    </div>

                    {/* Gallery indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {uiGallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentGalleryIndex(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            index === currentGalleryIndex
                              ? 'bg-white scale-125 shadow-lg'
                              : 'bg-white/50 hover:bg-white/75 hover:scale-110'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Image counter */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg border border-white/20">
                      {currentGalleryIndex + 1} / {uiGallery.length}
                    </div>
                  </div>
                ) : activeService.image === 'ai-cards' ? (
                  <div className="relative w-full rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5" style={{ aspectRatio: '16/12' }}>
                    {/* AI Cards stack with transition effects */}
                    <div className="relative w-full h-full">
                      {aiStrategyCards.map((card, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                            index === currentAiCardIndex
                              ? 'opacity-100 transform translate-x-0'
                              : index < currentAiCardIndex
                              ? 'opacity-0 transform -translate-x-full'
                              : 'opacity-0 transform translate-x-full'
                          }`}
                        >
                          <div className={`w-full h-full bg-gradient-to-br ${card.gradient} p-6 flex flex-col text-white relative overflow-hidden`}>
                            {/* Subtle background pattern */}
                            <div className="absolute inset-0 opacity-10">
                              <div className="absolute top-6 right-6 text-4xl">{card.icon}</div>
                              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full transform translate-x-6 translate-y-6"></div>
                            </div>

                            <div className="relative z-10 flex-1">
                              <div className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-3">
                                {card.category}
                              </div>
                              <h3 className="text-xl font-bold mb-4 leading-tight">
                                {card.title}
                              </h3>
                              <p className="text-sm opacity-90 leading-relaxed mb-6">
                                {card.description}
                              </p>

                              {card.link && (
                                <div className="mt-auto pt-2">
                                  <a href={card.link} className="inline-flex items-center text-white/90 hover:text-white text-xs font-medium transition-colors">
                                    <span>Learn More</span>
                                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                ) : (
                  activeService.image
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}