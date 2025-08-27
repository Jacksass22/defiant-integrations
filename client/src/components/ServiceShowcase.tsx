import { useState } from 'react';
import { 
  Brain, 
  Globe, 
  Code, 
  Phone, 
  BarChart,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

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
    image: (
      <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Brain className="w-32 h-32 text-white/30" />
        </div>
        <div className="relative z-10 p-8 flex flex-col justify-between h-full">
          <div className="space-y-2">
            <div className="w-3/4 h-2 bg-white/30 rounded"></div>
            <div className="w-1/2 h-2 bg-white/20 rounded"></div>
          </div>
          <div className="text-white">
            <h4 className="text-xl font-bold mb-2">AI-Powered Solutions</h4>
            <p className="text-sm opacity-90">Intelligent systems that learn and adapt</p>
          </div>
        </div>
      </div>
    )
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
      <div className="relative w-full h-full bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Globe className="w-32 h-32 text-white/30" />
        </div>
        <div className="relative z-10 p-8 flex flex-col justify-between h-full">
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-8 bg-white/20 rounded"></div>
            ))}
          </div>
          <div className="text-white">
            <h4 className="text-xl font-bold mb-2">Connected Ecosystems</h4>
            <p className="text-sm opacity-90">Platforms that power your digital presence</p>
          </div>
        </div>
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
    image: (
      <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Code className="w-32 h-32 text-white/30" />
        </div>
        <div className="relative z-10 p-8 flex flex-col justify-between h-full">
          <div className="space-y-2">
            <div className="flex space-x-2">
              <div className="w-12 h-12 bg-white/30 rounded"></div>
              <div className="flex-1 space-y-2">
                <div className="h-2 bg-white/20 rounded"></div>
                <div className="h-2 bg-white/10 rounded"></div>
              </div>
            </div>
          </div>
          <div className="text-white">
            <h4 className="text-xl font-bold mb-2">Modern Web Solutions</h4>
            <p className="text-sm opacity-90">Responsive designs that captivate users</p>
          </div>
        </div>
      </div>
    )
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
      <div className="relative w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Phone className="w-32 h-32 text-white/30" />
        </div>
        <div className="relative z-10 p-8 flex flex-col justify-between h-full">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
              <div className="flex-1 h-2 bg-white/30 rounded"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="flex-1 h-2 bg-white/20 rounded"></div>
            </div>
          </div>
          <div className="text-white">
            <h4 className="text-xl font-bold mb-2">Voice-First Technology</h4>
            <p className="text-sm opacity-90">Conversational AI that understands</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    icon: BarChart,
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'from-indigo-50 to-indigo-100',
    borderColor: 'border-indigo-500',
    description: 'Unlock insights from your data with advanced analytics and visualization tools that drive informed decision-making.',
    features: [
      'Business Intelligence',
      'Predictive Analytics',
      'Real-time Dashboards',
      'Data Pipeline Architecture'
    ],
    details: 'Transform raw data into actionable insights with our comprehensive analytics solutions. We help you track KPIs, predict trends, and make data-driven decisions that accelerate growth.',
    image: (
      <div className="relative w-full h-full bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <BarChart className="w-32 h-32 text-white/30" />
        </div>
        <div className="relative z-10 p-8 flex flex-col justify-between h-full">
          <div className="flex items-end space-x-2 h-20">
            <div className="flex-1 h-full bg-white/30 rounded-t"></div>
            <div className="flex-1 h-3/4 bg-white/25 rounded-t"></div>
            <div className="flex-1 h-1/2 bg-white/20 rounded-t"></div>
            <div className="flex-1 h-5/6 bg-white/35 rounded-t"></div>
          </div>
          <div className="text-white">
            <h4 className="text-xl font-bold mb-2">Data-Driven Insights</h4>
            <p className="text-sm opacity-90">Analytics that power smart decisions</p>
          </div>
        </div>
      </div>
    )
  }
];

export default function ServiceShowcase() {
  const [activeService, setActiveService] = useState(services[0]);

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
              <div className="w-full max-w-sm">
                {activeService.image}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}