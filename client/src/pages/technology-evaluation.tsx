import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { 
  ArrowRight, 
  CheckCircle, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  TrendingUp, 
  Clock, 
  BarChart3, 
  Settings, 
  Zap, 
  Eye, 
  Target, 
  Layers, 
  Monitor, 
  Activity, 
  Gauge, 
  Server, 
  Workflow, 
  GitBranch,
  Search,
  CheckSquare,
  AlertCircle,
  Rocket,
  LineChart,
  Award,
  Code,
  Globe,
  Lock
} from 'lucide-react';

export default function TechnologyEvaluation() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-yellow-50 via-blue-50 to-white">
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
                Technology Evaluation: Unlock Your Current Stack's Hidden Potential
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive assessment of your existing technology capabilities plus strategic upgrade recommendations that maximize AI potential and business impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Get Your Technology Stack Evaluated
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-600">48-72 Hour Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-600">Free Initial Evaluation</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Visual - Tech Stack Analyzer */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-6">Tech Stack Analysis</h3>
                
                {/* Current vs Potential Visualization */}
                <div className="space-y-6">
                  {/* Performance Metrics */}
                  {[
                    { category: "Database Performance", current: 35, potential: 95, color: "blue" },
                    { category: "API Response Time", current: 40, potential: 90, color: "green" },
                    { category: "AI Readiness", current: 25, potential: 85, color: "yellow" },
                    { category: "Scalability", current: 50, potential: 92, color: "purple" }
                  ].map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{metric.category}</span>
                        <div className="flex gap-2 text-xs">
                          <span className="text-gray-500">Current: {metric.current}%</span>
                          <span className={`text-${metric.color}-600 font-medium`}>Potential: {metric.potential}%</span>
                        </div>
                      </div>
                      
                      {/* Current Performance Bar */}
                      <div className="space-y-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${metric.current}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="bg-gray-400 h-2 rounded-full"
                          />
                        </div>
                        {/* Potential Performance Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${metric.potential}%` }}
                            transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                            className={`bg-${metric.color}-600 h-2 rounded-full`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Upgrade Impact */}
                  <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-xl p-4 mt-6">
                    <div className="text-sm font-medium text-gray-700 mb-2">Optimization Potential</div>
                    <div className="text-2xl font-bold text-green-600">3-10x</div>
                    <div className="text-xs text-gray-600">Capability improvement with strategic upgrades</div>
                  </div>
                  
                  {/* Assessment Status */}
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-900">Deep Analysis Ready</span>
                    </div>
                    <span className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded-full">48-72h</span>
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
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "48-72 hours",
                title: "Complete Tech Stack Evaluation Timeframe",
                description: "Rapid but comprehensive assessment of your technology capabilities",
                icon: <Clock className="w-8 h-8" />,
                color: "yellow"
              },
              {
                metric: "3-10x",
                title: "Typical Capability Improvement with Strategic Upgrades", 
                description: "Exponential performance gains through optimized technology stack",
                icon: <TrendingUp className="w-8 h-8" />,
                color: "green"
              },
              {
                metric: "$50K-500K",
                title: "Average Annual Value Unlocked Through Optimization",
                description: "Measurable business impact from strategic technology improvements",
                icon: <Award className="w-8 h-8" />,
                color: "blue"
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

      {/* Core Evaluation Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Complete Technology Evaluation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology assessment that reveals optimization opportunities and upgrade potential for maximum business impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Current Stack Assessment",
                description: "Deep analysis of existing technology capabilities, performance bottlenecks, and limitations",
                features: ["Infrastructure audit", "Performance analysis", "Capability mapping", "Bottleneck identification"],
                icon: <Database className="w-6 h-6" />,
                color: "yellow"
              },
              {
                title: "AI Readiness Analysis", 
                description: "Evaluation of infrastructure's ability to support AI implementations and machine learning workloads",
                features: ["Processing capacity", "Data pipeline assessment", "Integration readiness", "Scalability evaluation"],
                icon: <Cpu className="w-6 h-6" />,
                color: "blue"
              },
              {
                title: "Upgrade Strategy Planning",
                description: "Strategic recommendations for maximum impact improvements with prioritized implementation roadmap",
                features: ["Upgrade prioritization", "ROI optimization", "Implementation timeline", "Resource planning"],
                icon: <Rocket className="w-6 h-6" />,
                color: "green"
              },
              {
                title: "ROI Impact Modeling",
                description: "Financial analysis of upgrade investments versus business returns and operational improvements",
                features: ["Cost-benefit analysis", "Performance projections", "Risk assessment", "Timeline planning"],
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

      {/* ASSESS Framework */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              The ASSESS Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic 6-phase comprehensive evaluation framework for strategic technology optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { letter: "A", title: "Audit", description: "Complete infrastructure and system analysis", color: "yellow" },
              { letter: "S", title: "Survey", description: "Performance testing and capability measurement", color: "blue" },
              { letter: "S", title: "Synthesize", description: "Data compilation and pattern identification", color: "green" },
              { letter: "E", title: "Evaluate", description: "Strategic assessment and opportunity analysis", color: "purple" },
              { letter: "S", title: "Strategic Planning", description: "Upgrade roadmap and implementation strategy", color: "red" },
              { letter: "S", title: "Scaling Roadmap", description: "Long-term growth and optimization planning", color: "indigo" }
            ].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-center"
              >
                <div className={`w-16 h-16 bg-${stage.color}-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4`}>
                  {stage.letter}
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{stage.title}</h3>
                <p className="text-gray-600 text-sm">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Assessment Areas */}
      <section className="py-20 bg-gradient-to-br from-yellow-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Technology Assessment Areas
            </h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Comprehensive evaluation across all critical technology infrastructure components
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Infrastructure Capability",
                description: "Servers, databases, cloud readiness, scalability potential, and performance optimization opportunities",
                features: ["Server performance", "Database optimization", "Cloud architecture", "Scalability planning"],
                icon: <Server className="w-6 h-6" />
              },
              {
                title: "Integration Readiness",
                description: "API availability, data connectivity, system compatibility, and inter-system communication efficiency",
                features: ["API architecture", "Data flow analysis", "System compatibility", "Integration patterns"],
                icon: <Workflow className="w-6 h-6" />
              },
              {
                title: "AI Implementation Potential",
                description: "Processing power, data quality, automation opportunities, and machine learning infrastructure readiness",
                features: ["ML infrastructure", "Data pipeline quality", "Processing capacity", "Automation potential"],
                icon: <Cpu className="w-6 h-6" />
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6">
                  {area.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-yellow-100 mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-yellow-100">
                      <CheckCircle className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current vs Potential Analysis */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Current vs Potential Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the hidden potential in your existing technology stack through strategic optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Current Capabilities",
                description: "What your existing stack can achieve today with current configuration",
                features: ["Baseline performance", "Current limitations", "Existing workflows", "Resource utilization"],
                icon: <Eye className="w-6 h-6" />,
                color: "gray",
                metric: "Baseline"
              },
              {
                title: "Quick Wins",
                description: "Immediate improvements with minimal investment and configuration changes",
                features: ["Configuration optimization", "Performance tuning", "Workflow improvements", "Efficiency gains"],
                icon: <Zap className="w-6 h-6" />,
                color: "yellow",
                metric: "2-5x faster"
              },
              {
                title: "Strategic Upgrades",
                description: "Major capability improvements with targeted infrastructure investments",
                features: ["System upgrades", "Architecture improvements", "New capabilities", "Enhanced performance"],
                icon: <TrendingUp className="w-6 h-6" />,
                color: "blue",
                metric: "5-10x improvement"
              },
              {
                title: "Transformation Potential",
                description: "Revolutionary capabilities with comprehensive technology modernization",
                features: ["Complete modernization", "AI infrastructure", "Cloud-native architecture", "Scalable systems"],
                icon: <Rocket className="w-6 h-6" />,
                color: "green",
                metric: "10x+ capability"
              }
            ].map((analysis, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-${analysis.color}-100 rounded-xl flex items-center justify-center text-${analysis.color}-600 mb-4`}>
                  {analysis.icon}
                </div>
                <div className={`text-lg font-bold text-${analysis.color}-600 mb-2`}>{analysis.metric}</div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">{analysis.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{analysis.description}</p>
                
                <ul className="space-y-2 text-sm text-gray-600">
                  {analysis.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className={`w-3 h-3 text-${analysis.color}-600 flex-shrink-0`} />
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Technology Optimization Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformations achieved through strategic technology evaluation and targeted upgrades
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce: Stack Optimization Enabled 5x Faster Processing",
                challenge: "Slow page load times and database bottlenecks affecting customer experience and sales",
                solution: "Database indexing optimization and query restructuring without hardware upgrade",
                result: "5x faster processing, 40% increase in conversions, 60% improvement in customer satisfaction",
                industry: "E-commerce",
                icon: <Globe className="w-6 h-6" />
              },
              {
                title: "SaaS: Database Improvements Reduced Costs by 60%",
                challenge: "High cloud infrastructure costs with declining performance as user base grew",
                solution: "Database architecture optimization and cloud resource rightsizing",
                result: "60% cost reduction, 3x performance improvement, seamless scaling to 10x users",
                industry: "SaaS", 
                icon: <Cloud className="w-6 h-6" />
              },
              {
                title: "Manufacturing: Infrastructure Upgrades Enabled $1M AI System",
                challenge: "Legacy systems unable to support modern IoT and predictive analytics requirements",
                solution: "Strategic infrastructure upgrades and API layer implementation",
                result: "$1M predictive maintenance system deployment, 80% reduction in downtime",
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
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
                    {story.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-gray-900">{story.title}</h3>
                    <p className="text-sm text-yellow-600 font-medium">{story.industry}</p>
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
                    <span className="text-sm text-yellow-600 font-medium">{story.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Rapid Assessment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology evaluation delivered in just 72 hours with actionable recommendations
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                day: "Day 1",
                title: "Infrastructure Audit",
                description: "Complete system analysis and data collection",
                activities: ["System inventory", "Performance baseline", "Architecture review", "Capability mapping"],
                color: "yellow"
              },
              {
                day: "Day 2", 
                title: "Performance Testing",
                description: "Comprehensive capability analysis and bottleneck identification",
                activities: ["Load testing", "Performance analysis", "Integration assessment", "Security review"],
                color: "blue"
              },
              {
                day: "Day 3",
                title: "Report Generation",
                description: "Strategic recommendation development and documentation",
                activities: ["Data synthesis", "Opportunity analysis", "Upgrade planning", "ROI modeling"],
                color: "green"
              },
              {
                day: "Week 2",
                title: "Strategy Session",
                description: "Presentation and upgrade planning consultation",
                activities: ["Results presentation", "Strategy discussion", "Implementation planning", "Next steps"],
                color: "purple"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className={`bg-gradient-to-br from-${phase.color}-50 to-${phase.color}-100 rounded-2xl p-6 text-center`}
              >
                <div className={`text-lg font-bold text-${phase.color}-600 mb-2`}>{phase.day}</div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{phase.description}</p>
                
                <ul className="space-y-1 text-xs text-gray-600">
                  {phase.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-center gap-2 justify-center">
                      <CheckCircle className={`w-3 h-3 text-${phase.color}-600 flex-shrink-0`} />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-yellow-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Unlock Your Technology's Hidden Potential?
            </h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              Get a comprehensive 72-hour assessment that reveals optimization opportunities and strategic upgrade paths for maximum business impact.
            </p>
            
            <div className="flex justify-center mb-8">
              <button className="bg-white text-yellow-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Free Technology Evaluation
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-yellow-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>48-72 Hour Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>3-10x Improvement Potential</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Strategic Upgrade Roadmap</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}