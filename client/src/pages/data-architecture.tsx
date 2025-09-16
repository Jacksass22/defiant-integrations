import { motion } from 'framer-motion';
import { useState } from 'react';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import { 
  ArrowRight, 
  CheckCircle, 
  Database, 
  Cloud, 
  GitMerge, 
  Shield, 
  BarChart3, 
  Zap, 
  Settings, 
  Target, 
  TrendingUp, 
  Activity, 
  Server, 
  Lock, 
  Layers, 
  Network, 
  Gauge, 
  PieChart,
  Clock,
  Users,
  Workflow,
  Eye,
  RefreshCw,
  HardDrive,
  Cpu,
  Globe
} from 'lucide-react';

export default function DataArchitecture() {
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Data Architecture That Turns Information Into Intelligence
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Enterprise-grade data infrastructure that transforms scattered information into unified, actionable insights - powering AI systems that get smarter with every decision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => setShowLeadCaptureModal(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Assess Your Data Architecture Readiness
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Comprehensive Evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Intelligence Roadmap</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Visual - Data Flow Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-6">Real-Time Data Flow</h3>
                
                {/* Data Architecture Visualization */}
                <div className="space-y-4">
                  {/* Data Sources */}
                  <div className="flex justify-between items-center">
                    <div className="w-16 h-12 bg-purple-100 rounded-lg flex flex-col items-center justify-center text-purple-600">
                      <Database className="w-4 h-4" />
                      <span className="text-xs mt-1">Sources</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <div className="w-16 h-12 bg-blue-100 rounded-lg flex flex-col items-center justify-center text-blue-600">
                      <GitMerge className="w-4 h-4" />
                      <span className="text-xs mt-1">Pipeline</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <div className="w-16 h-12 bg-green-100 rounded-lg flex flex-col items-center justify-center text-green-600">
                      <BarChart3 className="w-4 h-4" />
                      <span className="text-xs mt-1">Insights</span>
                    </div>
                  </div>
                  
                  {/* Processing Metrics */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-blue-50 rounded-xl p-3">
                      <div className="text-sm font-bold text-blue-600">10x</div>
                      <div className="text-xs text-gray-600">Faster</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-3">
                      <div className="text-sm font-bold text-purple-600">&lt;100ms</div>
                      <div className="text-xs text-gray-600">Response</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3">
                      <div className="text-sm font-bold text-green-600">99.9%</div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                  </div>
                  
                  {/* Data Flow Animation */}
                  <div className="relative h-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ x: [0, 80, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-2 h-2 bg-blue-600 rounded-full"
                      />
                      <span className="text-xs text-gray-600">Live Data Processing</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "10x",
                title: "Data Unification",
                description: "Faster insights through unified data architecture",
                icon: <GitMerge className="w-8 h-8" />,
                color: "blue"
              },
              {
                metric: "<100ms",
                title: "Processing Speed", 
                description: "Real-time data processing and analysis response times",
                icon: <Zap className="w-8 h-8" />,
                color: "purple"
              },
              {
                metric: "99.9%",
                title: "Data Accuracy",
                description: "Data accuracy through automated quality assurance",
                icon: <Target className="w-8 h-8" />,
                color: "green"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-${card.color}-100 rounded-2xl flex items-center justify-center text-${card.color}-600 mx-auto mb-6`}>
                  {card.icon}
                </div>
                <div className={`text-4xl font-bold text-${card.color}-600 mb-3`}>{card.metric}</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Data Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Complete Data Infrastructure Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end data architecture solutions that transform information into competitive advantage
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Data Infrastructure Design",
                description: "Scalable, secure data foundations that grow with your business and power intelligent decision-making",
                features: ["Cloud-native architecture", "Auto-scaling", "Disaster recovery", "Performance optimization"],
                icon: <Server className="w-6 h-6" />,
                color: "blue"
              },
              {
                title: "Data Pipeline Engineering", 
                description: "Automated data ingestion, transformation, and delivery systems that ensure clean, timely information",
                features: ["ETL/ELT processes", "Real-time streaming", "Data validation", "Error handling"],
                icon: <Workflow className="w-6 h-6" />,
                color: "purple"
              },
              {
                title: "Analytics & Intelligence Platform",
                description: "Advanced analytics infrastructure that powers AI insights and predictive capabilities",
                features: ["Machine learning pipelines", "Predictive modeling", "Custom dashboards", "Automated reporting"],
                icon: <BarChart3 className="w-6 h-6" />,
                color: "green"
              },
              {
                title: "Data Governance & Security",
                description: "Enterprise-grade security and compliance frameworks that protect sensitive information",
                features: ["Access controls", "Audit trails", "Compliance monitoring", "Data privacy protection"],
                icon: <Shield className="w-6 h-6" />,
                color: "red"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.3 }
                }}
                className={`bg-gradient-to-br from-${service.color}-50 to-${service.color}-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className={`w-12 h-12 bg-${service.color}-600 rounded-xl flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className={`font-serif text-xl font-bold text-gray-900 group-hover:text-${service.color}-700 transition-colors duration-300 mb-3`}>
                  {service.title}
                </h3>
                
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 text-${service.color}-600 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS Framework */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              The INSIGHTS Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic 8-layer approach to building data infrastructure that powers intelligent business decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                letter: "I",
                title: "Ingestion",
                description: "Multi-source data collection and intake systems",
                color: "blue"
              },
              {
                letter: "N", 
                title: "Normalization",
                description: "Data standardization and quality assurance processes",
                color: "purple"
              },
              {
                letter: "S",
                title: "Storage", 
                description: "Scalable, secure data warehousing and data lakes",
                color: "green"
              },
              {
                letter: "I",
                title: "Integration",
                description: "Seamless system connectivity and API management",
                color: "orange"
              },
              {
                letter: "G",
                title: "Governance",
                description: "Security, compliance, and access management frameworks",
                color: "red"
              },
              {
                letter: "H",
                title: "Harmonization",
                description: "Data modeling and relationship mapping systems",
                color: "indigo"
              },
              {
                letter: "T",
                title: "Transformation",
                description: "Real-time processing and data enrichment pipelines",
                color: "cyan"
              },
              {
                letter: "S",
                title: "Serving",
                description: "Analytics delivery and AI model feeding infrastructure",
                color: "emerald"
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
                <p className="text-gray-600 text-sm">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Real-Time Performance Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Measurable business outcomes from intelligent data architecture implementations
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "85%", label: "Decision Speed", sublabel: "Faster business decisions", icon: <Clock className="w-6 h-6" /> },
              { metric: "60%", label: "Cost Efficiency", sublabel: "Reduction in data costs", icon: <TrendingUp className="w-6 h-6" /> },
              { metric: "95%", label: "Insight Accuracy", sublabel: "Improvement in forecasts", icon: <Target className="w-6 h-6" /> },
              { metric: "70%", label: "Operational Efficiency", sublabel: "Reduction in manual work", icon: <Gauge className="w-6 h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="font-semibold text-blue-100 mb-1">{stat.label}</div>
                <div className="text-sm text-blue-200">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Data Transformation Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real business transformations achieved through intelligent data architecture
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce: 45% Revenue Increase Through Data Unification",
                challenge: "Fragmented customer data across 8 different systems",
                solution: "Unified customer data platform with real-time analytics",
                result: "45% revenue increase, 90% faster customer insights, personalized experiences",
                industry: "E-commerce",
                icon: <BarChart3 className="w-6 h-6" />
              },
              {
                title: "SaaS: 55% Churn Reduction via Predictive Analytics",
                challenge: "No visibility into customer health and usage patterns",
                solution: "Comprehensive analytics platform with ML-powered predictions",
                result: "55% churn reduction, 3x customer success team efficiency",
                industry: "SaaS", 
                icon: <TrendingUp className="w-6 h-6" />
              },
              {
                title: "Professional Services: 35% Profitability Improvement",
                challenge: "Manual reporting and fragmented project data",
                solution: "Automated analytics platform with real-time project insights",
                result: "35% profitability improvement, 80% faster reporting",
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    {story.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-gray-900">{story.title}</h3>
                    <p className="text-sm text-blue-600 font-medium">{story.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Challenge: </span>
                    <span className="text-sm text-gray-600">{story.challenge}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Solution: </span>
                    <span className="text-sm text-gray-600">{story.solution}</span>
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

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Modern Data Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade technologies that power intelligent data architectures
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                category: "Databases & Storage",
                technologies: ["PostgreSQL", "MongoDB", "Redis", "Snowflake"],
                color: "blue",
                icon: <Database className="w-6 h-6" />
              },
              {
                category: "Cloud Platforms",
                technologies: ["AWS Data Services", "Azure Synapse", "Google BigQuery", "Databricks"],
                color: "purple",
                icon: <Cloud className="w-6 h-6" />
              },
              {
                category: "Processing Engines",
                technologies: ["Apache Spark", "Kafka", "Airflow", "dbt"],
                color: "green",
                icon: <Cpu className="w-6 h-6" />
              },
              {
                category: "Analytics & ML",
                technologies: ["Custom Dashboards", "TensorFlow", "PyTorch", "Jupyter"],
                color: "orange",
                icon: <BarChart3 className="w-6 h-6" />
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Data Into Intelligence?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get a comprehensive evaluation of your current data infrastructure and a roadmap for intelligent transformation.
            </p>
            
            <div className="flex justify-center mb-8">
              <button 
                onClick={() => setShowLeadCaptureModal(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Assess Your Data Architecture Readiness
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Comprehensive Infrastructure Review</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Intelligence Transformation Roadmap</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>ROI Analysis & Timeline</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <LeadCaptureModal
        open={showLeadCaptureModal}
        onOpenChange={setShowLeadCaptureModal}
      />
    </div>
  );
}