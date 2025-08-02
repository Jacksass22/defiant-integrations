import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Target, 
  TrendingUp, 
  Users, 
  Headphones, 
  ShoppingCart, 
  Settings, 
  BarChart3, 
  Workflow, 
  Zap, 
  Database, 
  MessageSquare, 
  Mail, 
  Phone,
  GitMerge,
  Gauge,
  PieChart
} from 'lucide-react';

export default function ProcessAutomation() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
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
                Process Automation That Eliminates Busywork Forever
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform repetitive manual tasks into intelligent, automated workflows that save 20-40 hours per week while improving accuracy and consistency across your entire operation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Discover Your Automation Potential
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Free Process Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Proven ROI Framework</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Visual - Automation Workflow Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-6">Automation Workflow</h3>
                
                {/* Workflow Steps */}
                <div className="space-y-4">
                  {[
                    { step: "Manual Task", icon: <Users className="w-4 h-4" />, color: "red", status: "eliminating" },
                    { step: "AI Processing", icon: <Zap className="w-4 h-4" />, color: "blue", status: "active" },
                    { step: "Auto-Complete", icon: <CheckCircle className="w-4 h-4" />, color: "green", status: "completed" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-10 h-10 bg-${item.color}-100 rounded-xl flex items-center justify-center text-${item.color}-600`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{item.step}</div>
                        <div className={`text-xs ${item.status === 'eliminating' ? 'text-red-500' : item.status === 'active' ? 'text-blue-500' : 'text-green-500'}`}>
                          {item.status === 'eliminating' ? 'Eliminating...' : item.status === 'active' ? 'Processing...' : 'Completed'}
                        </div>
                      </div>
                      {index < 2 && (
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      )}
                    </motion.div>
                  ))}
                </div>
                
                {/* Automation Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6 text-center">
                  <div className="bg-green-50 rounded-xl p-3">
                    <div className="text-lg font-bold text-green-600">85%</div>
                    <div className="text-xs text-gray-600">Time Saved</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3">
                    <div className="text-lg font-bold text-blue-600">99.5%</div>
                    <div className="text-xs text-gray-600">Accuracy</div>
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
                metric: "30+ hrs/week",
                title: "Time Savings",
                description: "Average time saved per team member through intelligent automation",
                icon: <Clock className="w-8 h-8" />,
                color: "green"
              },
              {
                metric: "99.5%",
                title: "Accuracy Improvement", 
                description: "Accuracy rate for automated processes vs manual execution",
                icon: <Target className="w-8 h-8" />,
                color: "blue"
              },
              {
                metric: "60-80%",
                title: "Cost Reduction",
                description: "Reduction in operational costs for automated workflows",
                icon: <TrendingUp className="w-8 h-8" />,
                color: "orange"
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

      {/* Core Automation Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Complete Automation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end automation solutions that transform every aspect of your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Customer Service Automation",
                description: "AI-powered support that handles 80% of inquiries automatically while routing complex issues to human experts",
                features: ["Ticket routing", "Response automation", "Sentiment analysis", "Escalation management"],
                icon: <Headphones className="w-6 h-6" />,
                color: "blue"
              },
              {
                title: "Sales Process Automation", 
                description: "End-to-end sales automation from lead capture to deal closure and follow-up",
                features: ["Lead scoring", "Email sequences", "Proposal generation", "Pipeline management"],
                icon: <TrendingUp className="w-6 h-6" />,
                color: "green"
              },
              {
                title: "Operations Automation",
                description: "Streamlined operational workflows that eliminate manual data entry and task management",
                features: ["Inventory management", "Order processing", "Reporting", "Quality control"],
                icon: <Settings className="w-6 h-6" />,
                color: "purple"
              },
              {
                title: "Marketing Automation",
                description: "Intelligent marketing campaigns that adapt and optimize based on customer behavior",
                features: ["Campaign optimization", "Content personalization", "Lead nurturing", "Performance tracking"],
                icon: <BarChart3 className="w-6 h-6" />,
                color: "orange"
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

      {/* AUTOMATE Framework */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              The AUTOMATE Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic 7-step approach to transforming manual processes into intelligent automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                letter: "A",
                title: "Analyze Current Workflows",
                description: "Comprehensive assessment of existing processes and inefficiencies",
                color: "blue"
              },
              {
                letter: "U", 
                title: "Understand Pain Points",
                description: "Identify bottlenecks and high-impact automation opportunities",
                color: "green"
              },
              {
                letter: "T",
                title: "Target Automation Opportunities", 
                description: "Prioritize processes for maximum ROI and business impact",
                color: "purple"
              },
              {
                letter: "O",
                title: "Optimize Process Design",
                description: "Redesign workflows for intelligent automation compatibility",
                color: "orange"
              },
              {
                letter: "M",
                title: "Map Integration Points",
                description: "Connect systems and establish seamless data flows",
                color: "indigo"
              },
              {
                letter: "A",
                title: "Automate with Intelligence",
                description: "Deploy AI-powered automation systems and workflows",
                color: "red"
              },
              {
                letter: "T",
                title: "Test & Scale Organization",
                description: "Validate performance and expand across departments",
                color: "cyan"
              },
              {
                letter: "E",
                title: "Evolve Through Improvement",
                description: "Continuous optimization and performance enhancement",
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Proven Business Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real performance metrics from successful automation implementations
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "40-70%", label: "Productivity Gains", sublabel: "Efficiency improvement", icon: <Gauge className="w-6 h-6" /> },
              { metric: "95%", label: "Error Reduction", sublabel: "Manual error elimination", icon: <Target className="w-6 h-6" /> },
              { metric: "$150K+", label: "Annual Savings", sublabel: "Cost reduction per year", icon: <PieChart className="w-6 h-6" /> },
              { metric: "300%", label: "Scalability", sublabel: "Growth without staff increase", icon: <TrendingUp className="w-6 h-6" /> }
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
              Automation Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformations achieved through intelligent process automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce: 85% Order Processing Reduction",
                challenge: "45 minutes manual processing per order",
                solution: "End-to-end automation from payment to shipping",
                result: "7 minutes total processing time, 300% order volume capacity",
                industry: "E-commerce",
                icon: <ShoppingCart className="w-6 h-6" />
              },
              {
                title: "Coaching: 15 Hours/Week Client Onboarding Saved",
                challenge: "3 hours manual setup per new client",
                solution: "Intelligent onboarding workflow with personalization",
                result: "20-minute automated process, improved client experience",
                industry: "Professional Services", 
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "SaaS: 40% Churn Reduction Through Automation",
                challenge: "Manual health scoring and outreach",
                solution: "Predictive automation with proactive intervention",
                result: "40% churn reduction, 200% customer success team efficiency",
                industry: "SaaS",
                icon: <BarChart3 className="w-6 h-6" />
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



      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Eliminate Busywork Forever?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get a free process analysis and see exactly how much time and money you could save through intelligent automation.
            </p>
            
            <div className="flex justify-center mb-8">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule Process Assessment
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free Process Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Custom ROI Calculation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Implementation Roadmap</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}