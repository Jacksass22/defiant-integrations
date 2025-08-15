import { ArrowRight, CheckCircle, Trophy, Phone, BarChart3, Users, Calendar, Target, Zap, Clock, TrendingUp, Shield, Star, MapPin } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Link } from 'wouter';
import BlurText from '@/components/BlurText';
import TrueFocus from '@/components/TrueFocus';

import { motion } from 'framer-motion';
import golfCourseImage from '@assets/pexels-cottonbro-6256829_1753397088903.jpg';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import { useState } from 'react';

export default function GolfCourses() {
  useScrollToTop();
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-[600px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={golfCourseImage}
              alt="Golf course landscape"
              className="w-full h-full object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-green-100/90 backdrop-blur-sm px-4 py-2 rounded-full text-green-800 text-sm font-medium mb-6">
                <Trophy className="w-4 h-4" />
                <span>Golf Courses</span>
              </div>
              
              <BlurText
                text="Elevate the Guest Experience, Streamline Operations"
                delay={150}
                animateBy="words"
                direction="top"
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              />
              
              <p className="text-xl text-green-50 mb-8 max-w-3xl mx-auto leading-relaxed">
                Run a smoother pro shop, handle more calls at once, and never miss a tee time again with intelligent systems that eliminate friction and delight guests.
              </p>
              
              <motion.button 
                onClick={() => setShowLeadCaptureModal(true)}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Start Your Free Discovery Call</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </section>

        {/* Problem Statement with Visual Enhancement */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 border border-green-300 rounded-full"></div>
            <div className="absolute top-40 right-16 w-24 h-24 border border-green-200 rounded-full"></div>
            <div className="absolute bottom-32 left-16 w-20 h-20 border border-green-100 rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Modern Golf Courses Juggle Too Much
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Phone lines, bookings, guest services, staff management, and pro shop sales—often with outdated tools and overworked teams.
                </p>
                <div className="space-y-6">
                  {[
                    { icon: Phone, text: "Staff stuck answering repetitive calls instead of serving guests" },
                    { icon: Calendar, text: "Missed booking opportunities during peak times" },
                    { icon: Target, text: "Fragmented systems that don't talk to each other" },
                    { icon: BarChart3, text: "No visibility into performance trends or guest patterns" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border border-green-200"
              >
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-red-500" />
                  The Cost of Chaos
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Missed tee times per week", value: "15-25", icon: Calendar },
                    { label: "Hours spent on phone admin", value: "20+ hrs", icon: Clock },
                    { label: "Revenue lost to inefficiency", value: "$2,000+/month", icon: TrendingUp }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-green-200"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700 font-medium">{item.label}</span>
                      </div>
                      <span className="font-bold text-red-600 text-lg">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions with Enhanced Visuals */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <TrueFocus 
              sentence="GOLF AUTOMATION"
              manualMode={false}
              blurAmount={8}
              borderColor="#22c55e"
              animationDuration={3}
              pauseBetweenAnimations={2}
            />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What We Solve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Intelligent systems and automation that help you eliminate friction, delight guests, and operate with precision.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Phone,
                  title: "Intelligent Phone Reception",
                  description: "AI-powered phone assistant handles high-volume, repetitive calls—tee times, hours, weather, rates—while routing personal requests to staff.",
                  features: [
                    "24/7 coverage with zero missed calls",
                    "Real-time tee sheet integration", 
                    "Smart call routing to staff when needed"
                  ],
                  color: "green",
                  delay: 0,
                  hasVoiceDemo: true
                },
                {
                  icon: BarChart3,
                  title: "Data-Driven Decision Making",
                  description: "Transform everyday interactions into actionable insights with comprehensive tracking and analytics.",
                  features: [
                    "Booking volume by time and weather",
                    "Staff workload optimization",
                    "Revenue trend forecasting"
                  ],
                  color: "blue",
                  delay: 0.1
                },
                {
                  icon: Target,
                  title: "Full-Facility Integration",
                  description: "Connect fragmented tools into one seamless operation—tee sheets, POS, scheduling, and more.",
                  features: [
                    "Unified system management",
                    "Custom dashboard development",
                    "Marketing automation integration"
                  ],
                  color: "purple",
                  delay: 0.2
                }
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: solution.delay }}
                  whileHover={{ 
                    y: -8, 
                    transition: { duration: 0.3 }
                  }}
                  className={`bg-white p-8 rounded-2xl shadow-lg border border-${solution.color}-100 hover:shadow-xl hover:border-${solution.color}-200 transition-all duration-300 cursor-pointer group`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br from-${solution.color}-100 to-${solution.color}-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-${solution.color}-500/20`}>
                    <solution.icon className={`w-8 h-8 text-${solution.color}-600`} />
                  </div>
                  <h3 className={`font-serif text-xl font-bold text-gray-900 group-hover:text-${solution.color}-700 transition-colors duration-300 mb-4`}>
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: solution.delay + 0.3 + featureIndex * 0.1 }}
                        className="flex items-center space-x-3 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                      >
                        <CheckCircle className={`w-4 h-4 text-${solution.color}-500 flex-shrink-0`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* AI Voice Demo Widget for Phone Reception */}
                  {solution.hasVoiceDemo && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: solution.delay + 0.5 }}
                      className="border-t border-gray-100 pt-6 mt-6"
                    >
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-700 mb-4">
                          🎯 Try Our AI Receptionist Demo
                        </p>
                        <div className="flex justify-center">
                          <div 
                            dangerouslySetInnerHTML={{
                              __html: `<vapi-widget assistant-id="1fa0e900-ab80-449a-b8c7-02e55c371cc5" public-key="daf87472-30a2-44a9-96bb-1b832815c8d1"></vapi-widget>`
                            }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                          Click the button above to experience how our AI handles golf course inquiries—tee times, rates, weather updates, and more!
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes with Visual Appeal */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Outcomes You Can Expect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results that transform your course operations and guest experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  value: "65%+",
                  title: "Fewer Repetitive Calls",
                  description: "Staff freed to focus on guest service and pro shop sales",
                  icon: Phone,
                  color: "green",
                  delay: 0
                },
                {
                  value: "Zero",
                  title: "Missed Bookings",
                  description: "24/7 availability captures every opportunity", 
                  icon: Calendar,
                  color: "blue",
                  delay: 0.1
                },
                {
                  value: "Live",
                  title: "Performance Dashboards",
                  description: "Real-time KPIs and trend analysis for smarter decisions",
                  icon: BarChart3,
                  color: "purple",
                  delay: 0.2
                }
              ].map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: outcome.delay }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 cursor-pointer group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br from-${outcome.color}-100 to-${outcome.color}-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-${outcome.color}-500/20`}>
                    <outcome.icon className={`w-10 h-10 text-${outcome.color}-600`} />
                  </div>
                  <div className={`text-5xl font-bold text-${outcome.color}-600 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {outcome.value}
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                    {outcome.title}
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {outcome.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Additional Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { label: "Average Setup Time", value: "2-3 weeks", icon: Clock },
                { label: "Client Satisfaction", value: "98%", icon: Star },
                { label: "Revenue Recovery", value: "$3,000+/month", icon: TrendingUp },
                { label: "Staff Time Saved", value: "15+ hrs/week", icon: Shield }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <metric.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How We Work
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven process to modernize your course operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">1</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Discovery & Demo</h3>
                <p className="text-gray-600">
                  We assess your tech stack, workflows, and guest interactions. Then we build a tailored demo.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">2</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Integration & Launch</h3>
                <p className="text-gray-600">
                  We connect your tools, configure the AI assistant, and deploy reporting dashboards.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">3</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Optimize & Support</h3>
                <p className="text-gray-600">
                  We train your team, tweak based on real use, and provide live support & monthly optimizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Defiant Integrations?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Deep Golf Course Knowledge</h3>
                  <p className="text-gray-600 text-sm">We understand the unique challenges of golf course operations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Custom-Built Solutions</h3>
                  <p className="text-gray-600 text-sm">Not cookie-cutter tools—systems designed for your specific needs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fast & Scalable</h3>
                  <p className="text-gray-600 text-sm">Secure infrastructure that grows with your course</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Automation Experts</h3>
                  <p className="text-gray-600 text-sm">Specialists in intelligent systems and data engineering</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Trusted by Operators</h3>
                  <p className="text-gray-600 text-sm">Small and mid-size courses rely on our solutions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600 text-sm">Live support and monthly optimizations included</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Summary */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What Your Course Could Look Like in 30 Days
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Less Phone Chaos</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Staff focused on guest service</li>
                  <li>No more missed calls during busy times</li>
                  <li>Instant routing to the pro shop for urgent or specific matters</li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">More Booked Tee Times</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>24/7 booking availability</li>
                  <li>Real-time schedule updates</li>
                  <li>Automated follow-up marketing and reminders.</li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Smarter Decisions</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Data-driven staffing plans</li>
                  <li>Weather-based demand forecasts</li>
                  <li>Member engagement insights</li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Systems That Work</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>All tools connected seamlessly</li>
                  <li>Automated reporting and alerts</li>
                  <li>Background operations running smoothly</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 border border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
                <Trophy className="w-4 h-4" />
                <span>Transform Your Golf Course Today</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Modernize Your Course?
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Let us show you what intelligent automation can do for your golf course operations and guest experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <motion.button 
                  onClick={() => setShowLeadCaptureModal(true)}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Start Your Free Discovery Call</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90">
                {[
                  { icon: Clock, label: "2-3 Week Setup", value: "Fast Implementation" },
                  { icon: Shield, label: "Zero Risk", value: "30-Day Guarantee" },
                  { icon: Star, label: "Proven Results", value: "98% Satisfaction" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="font-semibold text-lg">{item.value}</div>
                    <div className="text-green-100 text-sm">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
              <div className="col-span-2 sm:col-span-3 lg:col-span-2">
                <div className="text-xl sm:text-2xl font-serif font-bold mb-4">
                  Defiant <span className="text-gray-300">Integrations</span>
                </div>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  Architecting intelligent transformations that scale.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Trades</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/" className="hover:text-green-400 transition-colors">Home</Link></li>
                  <li><Link href="/hvac" className="hover:text-green-400 transition-colors">HVAC</Link></li>
                  <li><Link href="/plumbing" className="hover:text-green-400 transition-colors">Plumbing</Link></li>
                  <li><Link href="/electrical" className="hover:text-green-400 transition-colors">Electrical</Link></li>
                  <li><Link href="/landscaping" className="hover:text-green-400 transition-colors">Landscaping</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Retail</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/brick-mortar-retail" className="hover:text-green-400 transition-colors">Brick-and-Mortar</Link></li>
                  <li><Link href="/ecommerce-brands" className="hover:text-green-400 transition-colors">eCommerce Brands</Link></li>
                  <li><Link href="/cannabis-retail" className="hover:text-green-400 transition-colors">Cannabis Retail</Link></li>
                  <li><Link href="/specialty-food-makers" className="hover:text-green-400 transition-colors">Specialty Food</Link></li>
                  <li><Link href="/local-boutiques" className="hover:text-green-400 transition-colors">Local Boutiques</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Recreation</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/golf-courses" className="hover:text-green-400 transition-colors">Golf Courses</Link></li>
                  <li><Link href="/gyms-personal-trainers" className="hover:text-green-400 transition-colors">Gyms & Trainers</Link></li>
                  <li><Link href="/wellness-life-coaches" className="hover:text-green-400 transition-colors">Wellness & Coaches</Link></li>
                  <li><Link href="/pet-grooming-boarding" className="hover:text-green-400 transition-colors">Pet Services</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><button onClick={() => setShowLeadCaptureModal(true)} className="hover:text-green-400 transition-colors">About</button></li>
                  <li><button onClick={() => setShowLeadCaptureModal(true)} className="hover:text-green-400 transition-colors">Careers</button></li>
                  <li><button onClick={() => setShowLeadCaptureModal(true)} className="hover:text-green-400 transition-colors">Contact</button></li>
                  <li><Link href="/#blog" className="hover:text-green-400 transition-colors">Blog</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2025 Defiant Integrations. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
      
      <LeadCaptureModal
        open={showLeadCaptureModal}
        onOpenChange={setShowLeadCaptureModal}
        title="Golf Course Discovery Call"
        subtitle="Let's discuss how intelligent automation can transform your course operations"
      />
    </div>
  );
}