import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  CheckCircle, 
  Target, 
  BarChart3, 
  Zap, 
  Brain, 
  RefreshCw, 
  Lightbulb,
  Database,
  Settings,
  LineChart,
  Award,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  Gauge,
  Shield,
  Star
} from 'lucide-react';
import BlurText from '@/components/BlurText';

export default function ContinuousImprovement() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-200 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-purple-600 font-semibold text-sm uppercase tracking-wider mb-4">
                AI THAT GETS BETTER EVERY DAY
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <BlurText text="AI That Evolves with Your Business" delay={150} animateBy="words" direction="top" />
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your AI systems get smarter, faster, and more valuable every month through our systematic optimization methodology that turns good implementations into game-changing competitive advantages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Schedule Performance Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300">
                  Download Improvement Framework
                </button>
              </div>
              
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-600">500+ Systems Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-600">35% Average Improvement</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Visual - Performance Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-6">Performance Evolution Dashboard</h3>
                
                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">+47%</div>
                    <div className="text-sm text-gray-600">Efficiency Gain</div>
                  </div>
                  <div className="bg-indigo-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">$1.2M</div>
                    <div className="text-sm text-gray-600">Value Created</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">-32%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                </div>
                
                {/* Improvement Timeline */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">12-Month Improvement Trajectory</h4>
                  {[
                    { month: "Month 3", improvement: "15%", focus: "Algorithm optimization" },
                    { month: "Month 6", improvement: "28%", focus: "Data quality enhancement" },
                    { month: "Month 9", improvement: "41%", focus: "Process automation" },
                    { month: "Month 12", improvement: "55%", focus: "Strategic integration" }
                  ].map((milestone, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">{milestone.month}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-purple-600">{milestone.improvement}</div>
                        <div className="text-xs text-gray-500">{milestone.focus}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12"
          >
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                AI Implementation Is Just the Beginning
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The real value comes from continuous optimization that adapts to your evolving business needs, market changes, and new opportunities. Our systematic improvement methodology ensures your AI systems become more powerful and valuable over time, not obsolete.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Compound Value Growth</h3>
                <p className="text-gray-600">Every optimization builds on previous improvements, creating exponential value increases over time.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Adaptive Evolution</h3>
                <p className="text-gray-600">Your AI systems continuously adapt to changing business conditions and market dynamics.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Innovation Pipeline</h3>
                <p className="text-gray-600">Regular integration of cutting-edge AI advances keeps your systems at the forefront of technology.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Improvement Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Optimization Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four pillars of continuous improvement that transform good AI into exceptional competitive advantages
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Performance Optimization & Monitoring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Gauge className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 mb-2">
                    Performance Optimization & Monitoring
                  </h3>
                  <p className="text-purple-800 font-medium mb-4">Making Good AI Great</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 group-hover:text-purple-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Real-Time Performance Monitoring: Continuous system effectiveness tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 group-hover:text-purple-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Bottleneck Identification: Data-driven discovery of performance constraints</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 group-hover:text-purple-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Algorithm Enhancement: Regular optimization of AI models</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 group-hover:text-purple-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Predictive Maintenance: Proactive issue identification and resolution</span>
                </li>
              </ul>
              
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Performance Package</span>
                  <span className="font-bold text-purple-600">$5K-10K/month</span>
                </div>
              </div>
            </motion.div>

            {/* Business Value Enhancement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300 mb-2">
                    Business Value Enhancement
                  </h3>
                  <p className="text-indigo-800 font-medium mb-4">Maximizing ROI Through Evolution</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">ROI Tracking & Analysis: Continuous measurement of business impact</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Use Case Expansion: New applications for existing AI systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Integration Deepening: Enhanced business process connectivity</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Competitive Advantage Development: Market differentiation through AI</span>
                </li>
              </ul>
              
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Value Package</span>
                  <span className="font-bold text-indigo-600">$10K-20K/month</span>
                </div>
              </div>
            </motion.div>

            {/* Data Quality & Learning Enhancement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300 mb-2">
                    Data Quality & Learning Enhancement
                  </h3>
                  <p className="text-green-800 font-medium mb-4">Smarter AI Through Better Data</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Data Quality Improvement: Enhanced data sources and processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Model Retraining & Refinement: Regular updates with new insights</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Bias Detection & Correction: Continuous fairness monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Knowledge Base Expansion: Growing AI understanding over time</span>
                </li>
              </ul>
              
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Learning Package</span>
                  <span className="font-bold text-green-600">$8K-15K/month</span>
                </div>
              </div>
            </motion.div>

            {/* Innovation & Future-Proofing */}
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
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300 mb-2">
                    Innovation & Future-Proofing
                  </h3>
                  <p className="text-orange-800 font-medium mb-4">Staying Ahead of the Curve</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Emerging Technology Integration: Latest AI advances adoption</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Feature Development: Custom enhancements for evolving needs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Market Trend Adaptation: AI strategy based on industry changes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Technology Roadmapping: Strategic planning for future AI evolution</span>
                </li>
              </ul>
              
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Innovation Package</span>
                  <span className="font-bold text-orange-600">$15K-30K/month</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EVOLVE Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              The EVOLVE Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Systematic 6-Stage Improvement Process for Continuous AI Evolution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                letter: "E",
                title: "Evaluate",
                description: "Current Performance",
                items: ["System assessment", "Baseline establishment", "Gap identification", "Stakeholder feedback"],
                color: "purple"
              },
              {
                letter: "V",
                title: "Visualize",
                description: "Optimization Opportunities",
                items: ["Data analysis", "Improvement mapping", "ROI calculation", "Priority alignment"],
                color: "indigo"
              },
              {
                letter: "O",
                title: "Optimize",
                description: "Core Systems",
                items: ["Algorithm enhancement", "Process streamlining", "Integration improvements", "Performance tuning"],
                color: "blue"
              },
              {
                letter: "L",
                title: "Learn",
                description: "From Results",
                items: ["Impact measurement", "Success identification", "Lesson documentation", "Best practices"],
                color: "green"
              },
              {
                letter: "V",
                title: "Validate",
                description: "Improvements",
                items: ["Performance verification", "User acceptance", "Impact confirmation", "Quality assurance"],
                color: "orange"
              },
              {
                letter: "E",
                title: "Expand",
                description: "And Scale",
                items: ["Improvement replication", "Opportunity identification", "System scaling", "Cycle continuation"],
                color: "red"
              }
            ].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center cursor-pointer"
              >
                <div className={`w-16 h-16 bg-${stage.color}-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4`}>
                  {stage.letter}
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{stage.title}</h3>
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

      {/* Success Metrics & Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real client success stories demonstrating the compound value of continuous AI improvement
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { metric: "35%", label: "Average Performance Improvement", sublabel: "every 6 months" },
              { metric: "50%", label: "Cost Reduction", sublabel: "through optimization" },
              { metric: "65%", label: "Efficiency Gains", sublabel: "in AI-enhanced processes" },
              { metric: "300%", label: "ROI Improvement", sublabel: "through enhancement" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.metric}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Conversion Boost",
                challenge: "Plateau in AI recommendation system performance",
                result: "60% increase in conversion rates over 8 months",
                industry: "E-commerce",
                icon: <BarChart3 className="w-6 h-6" />
              },
              {
                title: "SaaS Churn Reduction",
                challenge: "Static customer success AI not adapting to user behavior",
                result: "45% churn reduction and 30% increase in customer lifetime value",
                industry: "SaaS",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Manufacturing Cost Savings",
                challenge: "AI systems not evolving with production changes",
                result: "$2M annual cost savings and 99.8% equipment uptime",
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
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                    {story.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-gray-900">{story.title}</h3>
                    <p className="text-sm text-purple-600 font-medium">{story.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Challenge: </span>
                    <span className="text-sm text-gray-600">{story.challenge}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Result: </span>
                    <span className="text-sm text-purple-600 font-medium">{story.result}</span>
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
              Continuous Improvement Investment & Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured improvement programs that deliver compound value over time
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Basic Optimization",
                subtitle: "Small to Medium Businesses",
                price: "$5K-10K",
                description: "Monthly optimization program",
                features: [
                  "Monthly performance assessment",
                  "Basic algorithm optimization",
                  "Quarterly strategic reviews",
                  "Performance dashboards",
                  "Email support"
                ],
                timeline: "30-day improvement cycles",
                featured: false
              },
              {
                title: "Advanced Enhancement",
                subtitle: "Growing Enterprises",
                price: "$10K-20K",
                description: "Comprehensive improvement program",
                features: [
                  "Bi-weekly optimization sprints",
                  "Advanced analytics & insights",
                  "Custom feature development",
                  "Dedicated success manager",
                  "Priority support"
                ],
                timeline: "15-day improvement cycles",
                featured: true
              },
              {
                title: "Enterprise Evolution",
                subtitle: "Large Organizations",
                price: "$20K-40K",
                description: "Strategic transformation program",
                features: [
                  "Weekly optimization reviews",
                  "Innovation pipeline access",
                  "Custom AI research & development",
                  "Executive strategic consulting",
                  "24/7 premium support"
                ],
                timeline: "Weekly improvement cycles",
                featured: false
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  scale: tier.featured ? 1.05 : 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group ${tier.featured ? 'ring-2 ring-purple-600 scale-105' : ''}`}
              >
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 mb-2">{tier.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-4">{tier.subtitle}</p>
                  <div className="text-3xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300 mb-2">{tier.price}/month</div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 group-hover:text-purple-700 transition-colors duration-300 flex-shrink-0" />
                      <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <div className="text-sm font-semibold text-purple-600 mb-1">Improvement Cycle</div>
                  <div className="text-purple-800 font-medium">{tier.timeline}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12"
          >
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                Compound Value Timeline
              </h3>
              <p className="text-xl text-gray-600">
                How continuous improvement creates exponential value over time
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { year: "Year 1", improvement: "25-50%", focus: "Foundation optimization" },
                { year: "Year 2", improvement: "50-100%", focus: "Cumulative enhancements" },
                { year: "Year 3", improvement: "100-200%", focus: "Innovation integration" },
                { year: "Long-term", improvement: "200%+", focus: "Exponential evolution" }
              ].map((timeline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-600 mb-2">{timeline.improvement}</div>
                  <div className="font-semibold text-gray-900 mb-1">{timeline.year}</div>
                  <div className="text-sm text-gray-600">{timeline.focus}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Start Your AI Evolution Journey Today
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get a comprehensive evaluation of your current AI performance and a roadmap for continuous improvement that compounds value over time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule Performance Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Download Improvement Framework
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-purple-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>500+ Systems Continuously Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>35% Average Improvement Every 6 Months</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Long-Term Partnership Approach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}