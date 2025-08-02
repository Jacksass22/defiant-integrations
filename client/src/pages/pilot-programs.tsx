import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Target, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Shield, 
  BarChart3, 
  Settings, 
  Workflow, 
  Database, 
  Activity, 
  Eye, 
  Gauge, 
  Award, 
  Zap, 
  LineChart,
  Monitor,
  FileText,
  Play,
  Layers,
  GitBranch,
  CheckSquare,
  AlertTriangle,
  Rocket,
  Calendar,
  MapPin
} from 'lucide-react';

export default function PilotPrograms() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Pilot Programs That Prove AI Value Before Full-Scale Deployment
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Controlled AI implementations that demonstrate real business impact, validate assumptions, and provide the confidence to scale organization-wide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Launch Your AI Pilot Program
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">Controlled Implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">Risk Mitigation</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Visual - Phased Rollout */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-6">Pilot Deployment Phases</h3>
                
                {/* Phased Rollout Visualization */}
                <div className="space-y-4">
                  {/* Phase Progress */}
                  {[
                    { phase: "Setup", progress: 100, color: "green", status: "Complete" },
                    { phase: "Testing", progress: 75, color: "blue", status: "In Progress" },
                    { phase: "Optimization", progress: 25, color: "orange", status: "Upcoming" },
                    { phase: "Scaling", progress: 0, color: "purple", status: "Planned" }
                  ].map((phase, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Phase {index + 1}: {phase.phase}</span>
                        <span className={`text-xs px-2 py-1 rounded-full bg-${phase.color}-100 text-${phase.color}-700`}>
                          {phase.status}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${phase.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className={`bg-${phase.color}-600 h-2 rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                  
                  {/* Success Metrics */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-green-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-green-600">85%</div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-blue-600">3-6</div>
                      <div className="text-xs text-gray-600">Months</div>
                    </div>
                  </div>
                  
                  {/* Live Pilot Status */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Current Pilot Status</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600">Active</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">60% increase in qualified leads validated</div>
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
                metric: "3-6 months",
                title: "Typical Pilot Program Duration",
                description: "Comprehensive testing and validation timeframe",
                icon: <Clock className="w-8 h-8" />,
                color: "green"
              },
              {
                metric: "$25K-75K",
                title: "Pilot Program Investment Range", 
                description: "Right-sized investment for controlled validation",
                icon: <DollarSign className="w-8 h-8" />,
                color: "blue"
              },
              {
                metric: "85%",
                title: "Pilots That Progress to Full Implementation",
                description: "Proven track record of successful scaling",
                icon: <TrendingUp className="w-8 h-8" />,
                color: "purple"
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

      {/* Core Pilot Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Complete Pilot Program Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end pilot management that validates AI value and creates confidence for organization-wide scaling
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Controlled Deployment",
                description: "Limited-scope implementation with real users and data for authentic validation",
                features: ["Gradual user onboarding", "Real environment testing", "Controlled data exposure", "Phased activation"],
                icon: <Shield className="w-6 h-6" />,
                color: "green"
              },
              {
                title: "Success Measurement", 
                description: "Comprehensive metrics tracking and impact analysis for ROI demonstration",
                features: ["Performance metrics", "Business impact tracking", "User satisfaction monitoring", "ROI calculation"],
                icon: <BarChart3 className="w-6 h-6" />,
                color: "blue"
              },
              {
                title: "Risk Management",
                description: "Gradual rollout with safety nets and rollback procedures for confidence",
                features: ["Safety protocols", "Rollback procedures", "Continuous monitoring", "Risk mitigation"],
                icon: <AlertTriangle className="w-6 h-6" />,
                color: "orange"
              },
              {
                title: "Scaling Strategy",
                description: "Roadmap from pilot success to organization-wide adoption and implementation",
                features: ["Scaling roadmap", "Resource planning", "Timeline development", "Change management"],
                icon: <Rocket className="w-6 h-6" />,
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

      {/* SCALE Framework */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              The SCALE Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic 5-phase pilot methodology for successful AI program validation and scaling
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { letter: "S", title: "Scope", description: "Define pilot boundaries and success criteria", color: "green" },
              { letter: "C", title: "Configure", description: "Set up controlled environment and systems", color: "blue" },
              { letter: "A", title: "Activate", description: "Deploy pilot with initial user group", color: "purple" },
              { letter: "L", title: "Learn", description: "Monitor, measure, and gather insights", color: "orange" },
              { letter: "E", title: "Evolve", description: "Optimize and prepare for full scaling", color: "red" }
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

      {/* Pilot Program Types */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Pilot Program Types
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Tailored pilot approaches for different organizational scopes and implementation strategies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Department Pilot",
                duration: "3-4 months",
                description: "Single team or department implementation with focused scope and measurable outcomes",
                features: ["10-50 users", "Single process focus", "Department-specific metrics", "Quick validation"],
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Process Pilot",
                duration: "4-5 months",
                description: "Specific workflow or business process automation across multiple departments",
                features: ["Cross-functional impact", "Process optimization", "Workflow automation", "Efficiency gains"],
                icon: <Workflow className="w-6 h-6" />
              },
              {
                title: "Customer Pilot",
                duration: "5-6 months",
                description: "Limited customer-facing AI implementation with external validation and feedback",
                features: ["Customer interaction", "External validation", "Market feedback", "Revenue impact"],
                icon: <Target className="w-6 h-6" />
              }
            ].map((pilot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6">
                  {pilot.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">{pilot.title}</h3>
                <div className="text-green-200 text-sm font-medium mb-4">{pilot.duration}</div>
                <p className="text-green-100 mb-6">{pilot.description}</p>
                <ul className="space-y-2">
                  {pilot.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-green-100">
                      <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
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
              Pilot Program Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real pilot implementations that demonstrated value and scaled to organization-wide success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sales Team Pilot: AI Lead Scoring Increased Qualified Leads by 60%",
                challenge: "Sales team struggling to prioritize leads and focus on high-value prospects",
                solution: "AI lead scoring pilot with 15-person sales team over 3 months",
                result: "60% increase in qualified leads, 40% faster deal closure, full rollout approved",
                industry: "SaaS",
                icon: <Target className="w-6 h-6" />
              },
              {
                title: "Customer Service Pilot: Automated Support Reduced Response Time by 75%",
                challenge: "Customer service team overwhelmed with repetitive inquiries and slow response times",
                solution: "AI chatbot pilot handling 30% of incoming support requests",
                result: "75% response time reduction, 90% customer satisfaction, 24/7 availability",
                industry: "E-commerce", 
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Operations Pilot: Inventory Optimization Saved $200K in 6 Months",
                challenge: "Excess inventory and stockouts causing operational inefficiencies",
                solution: "AI inventory optimization pilot for top 100 SKUs",
                result: "$200K savings in 6 months, 95% stock availability, demand forecasting accuracy",
                industry: "Retail",
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
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                    {story.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-gray-900">{story.title}</h3>
                    <p className="text-sm text-green-600 font-medium">{story.industry}</p>
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
                    <span className="text-sm text-green-600 font-medium">{story.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Start with a Pilot Program?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic advantages of controlled AI implementation before organization-wide deployment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Demonstrate ROI",
                description: "Prove business value with real metrics and measurable outcomes",
                icon: <DollarSign className="w-6 h-6" />,
                color: "green"
              },
              {
                title: "Identify Challenges",
                description: "Discover and resolve implementation issues in controlled environment",
                icon: <AlertTriangle className="w-6 h-6" />,
                color: "orange"
              },
              {
                title: "Build Confidence",
                description: "Create organizational buy-in and stakeholder confidence",
                icon: <Award className="w-6 h-6" />,
                color: "blue"
              },
              {
                title: "Validate Assumptions",
                description: "Test technical and business assumptions with real data",
                icon: <CheckSquare className="w-6 h-6" />,
                color: "purple"
              },
              {
                title: "Create Champions",
                description: "Develop internal advocates and success stories",
                icon: <Users className="w-6 h-6" />,
                color: "indigo"
              },
              {
                title: "Reduce Risk",
                description: "Minimize investment risk through controlled validation",
                icon: <Shield className="w-6 h-6" />,
                color: "red"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 bg-${benefit.color}-100 rounded-xl flex items-center justify-center text-${benefit.color}-600 mx-auto mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Launch Your AI Pilot Program?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Start with controlled implementation that demonstrates real business value and builds confidence for organization-wide AI transformation.
            </p>
            
            <div className="flex justify-center mb-8">
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Pilot Program Today
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-green-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Controlled Implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>3-6 Month Duration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>85% Success Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}