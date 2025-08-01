import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { 
  GitMerge,
  CheckCircle, 
  Database, 
  Cloud, 
  Zap, 
  Shield, 
  BarChart3, 
  Settings,
  ArrowRight,
  DollarSign,
  Clock,
  Target,
  Network,
  Server,
  Workflow,
  Users,
  TrendingUp,
  Layers,
  Link as LinkIcon,
  Activity,
  Gauge,
  Award
} from 'lucide-react';
import BlurText from '@/components/BlurText';

export default function SystemIntegration() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-200 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                SEAMLESS SYSTEM INTEGRATION
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <BlurText text="AI That Works with Everything You Already Have" delay={150} animateBy="words" direction="top" />
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Enterprise-grade integration that connects your AI systems with existing tools, databases, and workflows - creating one powerful, unified technology ecosystem.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Schedule Integration Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                  Download CONNECT Framework
                </button>
              </div>
              
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">99.9% System Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">85% Task Automation</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Visual - System Architecture Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-6">Unified System Architecture</h3>
                
                {/* Central AI Hub */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                      <GitMerge className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Connected Systems */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { icon: <Database className="w-5 h-5" />, label: "Database", color: "green" },
                      { icon: <Cloud className="w-5 h-5" />, label: "Cloud", color: "blue" },
                      { icon: <Settings className="w-5 h-5" />, label: "CRM", color: "purple" },
                      { icon: <BarChart3 className="w-5 h-5" />, label: "Analytics", color: "orange" },
                      { icon: <Shield className="w-5 h-5" />, label: "Security", color: "red" },
                      { icon: <Workflow className="w-5 h-5" />, label: "ERP", color: "indigo" }
                    ].map((system, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        className={`w-16 h-16 bg-${system.color}-100 rounded-xl flex flex-col items-center justify-center text-${system.color}-600 hover:bg-${system.color}-200 transition-all duration-300 cursor-pointer`}
                      >
                        {system.icon}
                        <span className="text-xs mt-1 font-medium">{system.label}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Connection Lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, index) => (
                      <motion.div
                        key={index}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                        className={`absolute w-0.5 h-12 bg-gradient-to-b from-blue-400 to-transparent transform rotate-${60 * index} origin-bottom`}
                        style={{ 
                          left: '50%', 
                          top: '50%', 
                          transformOrigin: 'center bottom',
                          transform: `translate(-50%, -50%) rotate(${60 * index}deg)`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Integration Stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-50 rounded-xl p-3">
                    <div className="text-lg font-bold text-blue-600">24/7</div>
                    <div className="text-xs text-gray-600">Monitoring</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-3">
                    <div className="text-lg font-bold text-green-600">Real-time</div>
                    <div className="text-xs text-gray-600">Data Sync</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Service Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Complete Integration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four pillars of system integration that create seamless connectivity between AI and your existing infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* API Development & Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <LinkIcon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 mb-3">
                API Development & Integration
              </h3>
              
              <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300 mb-6">
                Custom APIs and third-party integrations that connect your AI with CRMs, databases, and business tools
              </p>
              
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Real-time sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Enterprise security</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Webhook management</span>
                </li>
              </ul>
            </motion.div>

            {/* Database Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300 mb-3">
                Database Integration & Data Pipeline
              </h3>
              
              <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300 mb-6">
                Unified data flow connecting MySQL, PostgreSQL, MongoDB, and cloud platforms
              </p>
              
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Multi-database support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Real-time analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Data warehouse integration</span>
                </li>
              </ul>
            </motion.div>

            {/* Business Application Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Workflow className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 mb-3">
                Business Application Integration
              </h3>
              
              <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300 mb-6">
                Seamless AI enhancement for CRMs, e-commerce platforms, and marketing automation
              </p>
              
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Salesforce, HubSpot</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Shopify, WooCommerce</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Automated workflows</span>
                </li>
              </ul>
            </motion.div>

            {/* Enterprise System Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300 mb-3">
                Enterprise System Integration
              </h3>
              
              <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300 mb-6">
                Mission-critical ERP, HR, and financial system connectivity with AI intelligence
              </p>
              
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span>SAP, Oracle, Workday</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span>Compliance systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span>Enterprise security</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONNECT Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              The CONNECT Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 6-layer integration architecture that ensures seamless connectivity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                letter: "C",
                title: "Core Infrastructure Setup",
                description: "Foundation architecture design and security framework establishment",
                items: ["Infrastructure assessment", "Security protocols", "Performance baselines", "Scalability planning"],
                color: "blue"
              },
              {
                letter: "O",
                title: "Operational System Mapping",
                description: "Comprehensive analysis of existing systems and integration points",
                items: ["System inventory", "Data flow mapping", "Integration requirements", "Dependency analysis"],
                color: "green"
              },
              {
                letter: "N",
                title: "Network & API Development",
                description: "Custom API creation and network connectivity optimization",
                items: ["API development", "Network configuration", "Data transformation", "Communication protocols"],
                color: "purple"
              },
              {
                letter: "N",
                title: "Native System Enhancement",
                description: "Upgrading existing systems for optimal AI integration",
                items: ["System optimization", "Performance enhancement", "Compatibility updates", "Feature extensions"],
                color: "orange"
              },
              {
                letter: "E",
                title: "End-to-End Process Automation",
                description: "Complete workflow automation across integrated systems",
                items: ["Process automation", "Workflow optimization", "Business logic", "User experience"],
                color: "indigo"
              },
              {
                letter: "C",
                title: "Continuous Monitoring & Optimization",
                description: "Ongoing system health monitoring and performance optimization",
                items: ["Performance monitoring", "Health checks", "Optimization cycles", "Proactive maintenance"],
                color: "red"
              }
            ].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-${stage.color}-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4`}>
                  {stage.letter}
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">{stage.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{stage.description}</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {stage.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 bg-${stage.color}-500 rounded-full flex-shrink-0`}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Proven Integration Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real performance metrics from successful system integrations across industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { metric: "99.9%", label: "System Uptime", sublabel: "Enterprise reliability" },
              { metric: "85%", label: "Task Reduction", sublabel: "Manual process automation" },
              { metric: "60%", label: "Faster Execution", sublabel: "Process optimization" },
              { metric: "95%", label: "Data Accuracy", sublabel: "Unified data quality" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce System Unification",
                challenge: "Fragmented systems causing data silos and manual processes",
                result: "300% productivity increase through complete system integration",
                industry: "E-commerce",
                icon: <BarChart3 className="w-6 h-6" />
              },
              {
                title: "SaaS Scaling Without IT Growth",
                challenge: "Rapid growth limited by disconnected systems and manual workflows",
                result: "Scaled from $1M to $10M revenue without adding IT staff",
                industry: "SaaS",
                icon: <TrendingUp className="w-6 h-6" />
              },
              {
                title: "Professional Services Automation",
                challenge: "Time-consuming administrative tasks reducing billable hours",
                result: "Automated 80% of administrative tasks, increased billable time",
                industry: "Professional Services",
                icon: <Users className="w-6 h-6" />
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    {story.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-gray-900">{story.title}</h3>
                    <p className="text-sm text-blue-600 font-medium">{story.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Challenge: </span>
                    <span className="text-sm text-gray-600">{story.challenge}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Result: </span>
                    <span className="text-sm text-blue-600 font-medium">{story.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Technology Stack We Integrate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive integration support for leading platforms and technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                category: "E-commerce Platforms",
                technologies: ["Shopify", "WooCommerce", "Magento", "BigCommerce"],
                color: "green",
                icon: <BarChart3 className="w-6 h-6" />
              },
              {
                category: "CRM & Sales",
                technologies: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM"],
                color: "blue",
                icon: <Users className="w-6 h-6" />
              },
              {
                category: "Databases & Storage",
                technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
                color: "purple",
                icon: <Database className="w-6 h-6" />
              },
              {
                category: "Cloud Platforms",
                technologies: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
                color: "orange",
                icon: <Cloud className="w-6 h-6" />
              }
            ].map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-${stack.color}-100 rounded-xl flex items-center justify-center text-${stack.color}-600 mb-4`}>
                  {stack.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 text-${stack.color}-600 flex-shrink-0`} />
                      <span className="text-gray-700">{tech}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 font-medium">
              ...and many more platforms and technologies
            </p>
            <p className="text-gray-500 mt-2">
              We integrate with virtually any system your business uses
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Unify Your Systems?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get a comprehensive system integration assessment and roadmap for connecting your AI with existing infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule Integration Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Download CONNECT Framework Guide
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>99.9% System Uptime Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>24/7 Monitoring & Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}