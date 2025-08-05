import { motion } from 'framer-motion';
import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import { 
  ArrowRight, 
  CheckCircle, 
  Lightbulb, 
  Target, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  Brain, 
  Zap, 
  Settings, 
  BarChart3, 
  Workflow, 
  Database, 
  Shield, 
  Gauge, 
  Activity, 
  Eye, 
  Cpu, 
  Globe,
  TestTube,
  Rocket,
  LineChart,
  Monitor,
  FileText,
  Play
} from 'lucide-react';

export default function ProofOfConcepts() {
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Proof of Concept Development: See Your AI Vision In Action Within Weeks
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Rapid prototyping that transforms AI ideas into working demonstrations - proving business value and technical feasibility before full investment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => setShowLeadCaptureModal(true)}
                  className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Start Your AI Proof of Concept
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-600">Fixed-Price Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-600">2-6 Week Delivery</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Visual - Prototype Demo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-6">Live POC Demo</h3>
                
                {/* Prototype Mockup */}
                <div className="space-y-6">
                  {/* Development Status */}
                  <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Development Progress</span>
                      <TestTube className="w-4 h-4 text-orange-600" />
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="bg-gradient-to-r from-orange-600 to-blue-600 h-2 rounded-full"
                      />
                    </div>
                    <div className="text-sm text-gray-600 mt-2">Week 4 of 6 - Integration Phase</div>
                  </div>
                  
                  {/* POC Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-orange-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-orange-600">2-6</div>
                      <div className="text-xs text-gray-600">Weeks</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-blue-600">95%</div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-green-600">$10-25K</div>
                      <div className="text-xs text-gray-600">Fixed Price</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-purple-600">100%</div>
                      <div className="text-xs text-gray-600">Validated</div>
                    </div>
                  </div>
                  
                  {/* Interactive Elements */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Play className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">AI Demo Running</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600">Live</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-sm font-medium text-blue-900 mb-1">Prototype Results</div>
                      <div className="text-xs text-blue-700">40% efficiency improvement validated</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                metric: "2-6 weeks",
                title: "From Concept to Working Prototype",
                description: "Rapid development cycles that deliver demonstrable results",
                icon: <Clock className="w-8 h-8" />,
                color: "orange"
              },
              {
                metric: "95%",
                title: "Client Satisfaction with Outcomes",
                description: "Proven track record of successful prototype validation",
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

      {/* Core POC Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Complete Proof of Concept Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end prototype development that validates AI opportunities before major investment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Rapid Prototyping",
                description: "Working AI demos built in 2-6 weeks with immediate business impact demonstration",
                features: ["Interactive demos", "Real data integration", "User testing", "Performance metrics"],
                icon: <Rocket className="w-6 h-6" />,
                color: "orange"
              },
              {
                title: "Feasibility Assessment", 
                description: "Technical and business viability analysis to ensure successful implementation",
                features: ["Technical validation", "Resource requirements", "Risk analysis", "Timeline estimation"],
                icon: <TestTube className="w-6 h-6" />,
                color: "blue"
              },
              {
                title: "Risk Validation",
                description: "Early identification of challenges and solutions before full-scale development",
                features: ["Challenge identification", "Mitigation strategies", "Contingency planning", "Success criteria"],
                icon: <Shield className="w-6 h-6" />,
                color: "green"
              },
              {
                title: "Business Case Development",
                description: "ROI projections and implementation roadmaps for executive decision-making",
                features: ["ROI calculations", "Implementation plan", "Resource planning", "Timeline roadmap"],
                icon: <BarChart3 className="w-6 h-6" />,
                color: "purple"
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

      {/* VALIDATE Framework */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              The VALIDATE Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic 8-phase rapid prototyping methodology for successful AI proof of concepts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { letter: "V", title: "Vision", description: "Define AI opportunity and success metrics", color: "orange" },
              { letter: "A", title: "Assess", description: "Technical feasibility and resource analysis", color: "blue" },
              { letter: "L", title: "Learn", description: "Rapid experimentation and testing", color: "green" },
              { letter: "I", title: "Implement", description: "Build working prototype demonstration", color: "purple" },
              { letter: "D", title: "Deploy", description: "Test prototype in real environment", color: "red" },
              { letter: "A", title: "Advance", description: "Refine based on user feedback", color: "indigo" },
              { letter: "T", title: "Test", description: "Validate business impact and ROI", color: "cyan" },
              { letter: "E", title: "Evolve", description: "Plan full-scale implementation", color: "emerald" }
            ].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 bg-${stage.color}-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4`}>
                  {stage.letter}
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{stage.title}</h3>
                <p className="text-gray-600 text-sm">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POC Specializations */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              POC Specialization Areas
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Specialized proof of concept development for high-impact AI applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Automation",
                description: "Workflow automation prototypes with immediate impact demonstration",
                features: ["Process automation", "Task optimization", "Efficiency gains", "Cost savings"],
                icon: <Workflow className="w-6 h-6" />
              },
              {
                title: "Intelligent Analytics",
                description: "Custom dashboard and insight generation proof of concepts",
                features: ["Data visualization", "Predictive analytics", "Real-time insights", "Decision support"],
                icon: <BarChart3 className="w-6 h-6" />
              },
              {
                title: "Customer Experience AI",
                description: "Chatbots, recommendation engines, personalization demos",
                features: ["Conversational AI", "Personalization", "Recommendations", "User engagement"],
                icon: <Users className="w-6 h-6" />
              }
            ].map((specialization, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6">
                  {specialization.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">{specialization.title}</h3>
                <p className="text-orange-100 mb-6">{specialization.description}</p>
                <ul className="space-y-2">
                  {specialization.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-orange-100">
                      <CheckCircle className="w-4 h-4 text-orange-300 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
              Proof of Concept Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real prototypes that led to transformational business implementations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce: Product Recommendation POC Led to 40% Conversion Increase",
                challenge: "Low product discovery and conversion rates across online catalog",
                solution: "AI recommendation engine prototype with personalization algorithms",
                result: "40% conversion increase, 60% higher average order value after full implementation",
                industry: "E-commerce",
                icon: <BarChart3 className="w-6 h-6" />
              },
              {
                title: "SaaS: Customer Health Scoring Prototype Reduced Churn by 35%",
                challenge: "No early warning system for customer churn risk identification",
                solution: "ML-powered customer health scoring system with predictive analytics",
                result: "35% churn reduction, 50% improvement in customer success team efficiency",
                industry: "SaaS", 
                icon: <TrendingUp className="w-6 h-6" />
              },
              {
                title: "Manufacturing: Predictive Maintenance POC Prevented $500K Downtime",
                challenge: "Unexpected equipment failures causing costly production downtime",
                solution: "IoT sensor integration with predictive maintenance algorithms",
                result: "$500K downtime prevention, 70% reduction in maintenance costs",
                industry: "Manufacturing",
                icon: <Settings className="w-6 h-6" />
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
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                    {story.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-gray-900">{story.title}</h3>
                    <p className="text-sm text-orange-600 font-medium">{story.industry}</p>
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
                    <span className="text-sm text-orange-600 font-medium">{story.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              POC Packages & Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive proof of concept packages with clear timelines for rapid prototype development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                package: "Basic POC",
                timeline: "2-4 weeks",
                description: "Single AI application prototype with core functionality demonstration",
                features: ["Working prototype", "Basic integration", "Performance metrics", "Business case"],
                color: "blue"
              },
              {
                package: "Advanced POC",
                timeline: "4-6 weeks",
                description: "Integrated system prototype with advanced features and testing",
                features: ["Multi-system integration", "Advanced analytics", "User testing", "ROI analysis"],
                color: "orange",
                popular: true
              },
              {
                package: "Enterprise POC",
                timeline: "6-8 weeks",
                description: "Complex multi-system demonstration with enterprise-grade validation",
                features: ["Enterprise integration", "Security validation", "Scalability testing", "Implementation roadmap"],
                color: "purple"
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${pkg.popular ? 'ring-2 ring-orange-500' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{pkg.package}</h3>
                  <div className={`text-2xl font-bold text-${pkg.color}-600 mb-2`}>{pkg.timeline}</div>
                </div>
                
                <p className="text-gray-600 mb-6 text-center">{pkg.description}</p>
                
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 text-${pkg.color}-600 flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full mt-8 bg-${pkg.color}-600 text-white py-3 rounded-xl font-semibold hover:bg-${pkg.color}-700 transition-colors`}>
                  Start {pkg.package}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Validate Your AI Vision?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Transform your AI ideas into working demonstrations that prove business value and technical feasibility.
            </p>
            
            <div className="flex justify-center mb-8">
              <button 
                onClick={() => setShowLeadCaptureModal(true)}
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Proof of Concept Today
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-orange-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Rapid Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>2-6 Week Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>95% Success Rate</span>
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