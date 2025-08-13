import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  DollarSign, 
  TrendingUp, 
  Brain, 
  Server, 
  Workflow, 
  Settings, 
  Target, 
  Activity, 
  BarChart3, 
  Gauge, 
  Clock, 
  Users, 
  Database, 
  Cloud, 
  Cpu, 
  HardDrive, 
  RefreshCw, 
  Eye, 
  Shield, 
  Globe,
  LineChart,
  PieChart,
  Monitor,
  Layers
} from 'lucide-react';

export default function PerformanceOptimization() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-blue-50 to-white">
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
                Performance Optimization That Transforms Good AI Into Game-Changing Speed
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Enterprise-grade optimization that makes your AI systems 3-10x faster, more cost-efficient, and dramatically more effective - turning performance bottlenecks into competitive advantages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Accelerate Your System Performance Today
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">Free Performance Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">Guaranteed 3x Improvement</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Visual - Performance Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-6">Real-Time Performance</h3>
                
                {/* Performance Metrics */}
                <div className="space-y-6">
                  {/* Speed Gauge */}
                  <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2"
                          strokeDasharray="85, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">8.5x</div>
                          <div className="text-xs text-gray-600">Speed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-green-600">5-10x</div>
                      <div className="text-xs text-gray-600">Faster Processing</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-blue-600">40-70%</div>
                      <div className="text-xs text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-purple-600">300%</div>
                      <div className="text-xs text-gray-600">Efficiency Gains</div>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-orange-600">99.9%</div>
                      <div className="text-xs text-gray-600">Uptime</div>
                    </div>
                  </div>
                  
                  {/* Performance Trend */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Performance Trend</span>
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-end space-x-1 h-8">
                      {[20, 35, 45, 60, 80, 95, 100].map((height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-gradient-to-t from-green-600 to-green-400 rounded-sm flex-1"
                        />
                      ))}
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
                metric: "5-10x",
                title: "Speed Improvement",
                description: "Faster AI processing and response times through systematic optimization",
                icon: <Zap className="w-8 h-8" />,
                color: "green"
              },
              {
                metric: "40-70%",
                title: "Cost Reduction", 
                description: "Reduction in computational costs while maintaining or improving performance",
                icon: <DollarSign className="w-8 h-8" />,
                color: "blue"
              },
              {
                metric: "300%",
                title: "Efficiency Gains",
                description: "Overall system efficiency improvement through intelligent optimization",
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

      {/* Core Optimization Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Complete Performance Optimization Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end optimization solutions that transform system performance from good to exceptional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI Model Optimization",
                description: "Advanced model compression, quantization, and architecture optimization for maximum speed and accuracy",
                features: ["Model pruning", "Distillation", "Hardware acceleration", "Inference optimization"],
                icon: <Brain className="w-6 h-6" />,
                color: "green"
              },
              {
                title: "System Architecture Tuning", 
                description: "Infrastructure optimization that maximizes performance while minimizing resource consumption",
                features: ["Database optimization", "Caching strategies", "Load balancing", "Auto-scaling"],
                icon: <Server className="w-6 h-6" />,
                color: "blue"
              },
              {
                title: "Workflow Acceleration",
                description: "End-to-end process optimization that eliminates bottlenecks and reduces response times",
                features: ["Pipeline optimization", "Parallel processing", "Queue management", "Resource allocation"],
                icon: <Workflow className="w-6 h-6" />,
                color: "purple"
              },
              {
                title: "Cost & Resource Optimization",
                description: "Intelligent resource management that delivers better performance at lower operational costs",
                features: ["Cloud cost optimization", "Resource right-sizing", "Usage analytics", "Automated scaling"],
                icon: <DollarSign className="w-6 h-6" />,
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

      {/* ACCELERATE Framework */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              The ACCELERATE Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic 10-step approach to transforming AI system performance from good to exceptional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { letter: "A", title: "Analyze", description: "Current Performance Baseline", color: "green" },
              { letter: "C", title: "Characterize", description: "Bottlenecks and Constraints", color: "blue" },
              { letter: "C", title: "Configure", description: "Optimal System Architecture", color: "purple" },
              { letter: "E", title: "Enhance", description: "Model and Algorithm Efficiency", color: "orange" },
              { letter: "L", title: "Load Balance", description: "Distribute Processing", color: "red" },
              { letter: "E", title: "Eliminate", description: "Redundancies and Waste", color: "indigo" },
              { letter: "R", title: "Resource", description: "Optimization and Right-Sizing", color: "cyan" },
              { letter: "A", title: "Automate", description: "Scaling and Management", color: "emerald" },
              { letter: "T", title: "Test", description: "Monitor and Improve", color: "violet" },
              { letter: "E", title: "Evolve", description: "Advanced Optimization", color: "amber" }
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

      {/* Performance Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Real-Time Performance Impact
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Measurable performance improvements from systematic optimization implementations
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { metric: "85%", label: "Response Time", sublabel: "Reduction in response times", icon: <Clock className="w-6 h-6" /> },
              { metric: "300-500%", label: "Throughput", sublabel: "Increase in processing capacity", icon: <TrendingUp className="w-6 h-6" /> },
              { metric: "50-70%", label: "Cost Efficiency", sublabel: "Reduction in operational costs", icon: <DollarSign className="w-6 h-6" /> },
              { metric: "99.5%+", label: "Accuracy", sublabel: "Preservation during optimization", icon: <Target className="w-6 h-6" /> },
              { metric: "99.99%", label: "Uptime", sublabel: "Availability with optimization", icon: <Gauge className="w-6 h-6" /> }
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
                <div className="text-2xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="font-semibold text-green-100 mb-1">{stat.label}</div>
                <div className="text-sm text-green-200">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Performance Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Dramatic Performance Improvements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real before and after results from our optimization implementations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Model Inference",
                before: "2.5 seconds",
                after: "250ms",
                improvement: "10x faster",
                color: "green"
              },
              {
                title: "Database Queries",
                before: "15 seconds", 
                after: "1.2 seconds",
                improvement: "12x faster",
                color: "blue"
              },
              {
                title: "Page Load Times",
                before: "8 seconds",
                after: "1.8 seconds", 
                improvement: "4.4x faster",
                color: "purple"
              },
              {
                title: "API Response",
                before: "1200ms",
                after: "150ms",
                improvement: "8x faster",
                color: "orange"
              },
              {
                title: "Processing Throughput",
                before: "100 requests/min",
                after: "1000 requests/min",
                improvement: "10x faster",
                color: "red"
              },
              {
                title: "Cost per Operation",
                before: "$0.50",
                after: "$0.08",
                improvement: "84% reduction",
                color: "indigo"
              }
            ].map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-6">{comparison.title}</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Before:</span>
                    <span className="text-red-600 font-semibold">{comparison.before}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">After:</span>
                    <span className={`text-${comparison.color}-600 font-semibold`}>{comparison.after}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className={`text-center text-${comparison.color}-600 font-bold text-lg`}>
                      {comparison.improvement}
                    </div>
                  </div>
                </div>
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
              Performance Transformation Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real business transformations achieved through systematic performance optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce: 10x Faster Recommendations Increased Sales by 60%",
                challenge: "Slow recommendation engine causing 40% cart abandonment",
                solution: "AI model optimization and infrastructure acceleration",
                result: "250ms recommendation response time, 60% sales increase, 85% faster page loads",
                industry: "E-commerce",
                icon: <BarChart3 className="w-6 h-6" />
              },
              {
                title: "SaaS: Database Optimization Improved User Experience by 400%",
                challenge: "Slow database queries causing user frustration and churn",
                solution: "Comprehensive database and query optimization",
                result: "12x faster queries, 400% UX improvement, 30% churn reduction",
                industry: "SaaS", 
                icon: <Database className="w-6 h-6" />
              },
              {
                title: "Professional Services: Document Processing Saved 25 Hours/Week",
                challenge: "Slow document analysis and processing workflows",
                solution: "AI model optimization and workflow acceleration",
                result: "8x faster processing, 25 hours/week saved, 95% accuracy maintained",
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Accelerate Your System Performance?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Get a free performance audit and see exactly how much faster and more efficient your systems could be.
            </p>
            
            <div className="flex justify-center mb-8">
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule Your Free Performance Assessment
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-green-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Minimum 3x Performance Improvement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Zero Downtime Optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Performance Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}