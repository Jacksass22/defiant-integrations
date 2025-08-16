import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, TrendingUp, CheckCircle, Clock, Shield, Award, BarChart3, UserCheck, Settings, Lightbulb, Building2, Calendar } from 'lucide-react';
import { Navigation } from '../components/navigation';
import BlurText from '../components/BlurText';

export default function TeamTraining() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-4">
                TRANSFORM YOUR TEAM INTO AI POWER USERS
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                <BlurText text="Turn Your Team Into AI Experts" delay={150} animateBy="words" direction="top" />
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Custom education programs that transform AI skeptics into power users, ensuring your technology investments deliver maximum ROI through skilled, confident teams.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-green-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-green-400 hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 shadow-lg shadow-green-500/30 flex items-center gap-2">
                  Schedule Training Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">500+ Teams Trained Successfully</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">95% Course Completion Rate</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Visual - Training Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-800 rounded-3xl shadow-2xl shadow-green-500/20 p-8 border border-gray-700 ring-1 ring-green-500/30">
                <h3 className="font-semibold text-lg text-white mb-6">Team Skill Progression Dashboard</h3>
                
                {/* Skills Progress */}
                <div className="space-y-6">
                  {[
                    { skill: "AI Tool Mastery", before: 25, after: 90 },
                    { skill: "Workflow Integration", before: 15, after: 85 },
                    { skill: "Advanced Automation", before: 10, after: 75 },
                    { skill: "Team Leadership", before: 35, after: 88 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-200 font-medium">{item.skill}</span>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-red-400">Before: {item.before}%</span>
                          <span className="text-green-400 font-bold">After: {item.after}%</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="bg-gray-700 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-green-500/50"
                            style={{ width: `${item.after}%` }}
                          ></div>
                        </div>
                        <div 
                          className="absolute top-0 h-3 bg-red-500 rounded-full opacity-30"
                          style={{ width: `${item.before}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-600">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Average Improvement:</span>
                    <span className="font-bold text-green-400">+187%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 rounded-3xl shadow-xl shadow-green-500/20 p-8 sm:p-12 border border-gray-700 ring-1 ring-green-500/30"
          >
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
                Bridge the Gap Between Technology and Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The most sophisticated AI system is worthless if your team can't use it effectively. Our comprehensive training programs bridge the gap between cutting-edge technology and practical business results, creating confident AI power users who drive real competitive advantage.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-green-500/50 shadow-lg shadow-green-500/30">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Overcome Resistance</h3>
                <p className="text-gray-300">Transform AI skeptics into enthusiastic adopters through proven education methodologies and hands-on practice.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-green-500/50 shadow-lg shadow-green-500/30">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Build Expertise</h3>
                <p className="text-gray-300">Develop deep AI competencies across your organization with role-specific training and certification programs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-green-500/50 shadow-lg shadow-green-500/30">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Maximize ROI</h3>
                <p className="text-gray-300">Ensure your AI investments deliver promised returns through skilled teams who know how to leverage technology effectively.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Training Programs */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Comprehensive Training Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Four specialized tracks designed to build AI expertise across your entire organization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Executive AI Leadership Program */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
              className="bg-gray-800 rounded-3xl p-8 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 cursor-pointer group border border-gray-700 hover:border-green-500/50 ring-1 ring-green-500/20"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/50">
                  <Building2 className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 mb-2">
                    Executive AI Leadership Program
                  </h3>
                  <p className="text-green-400 font-medium mb-4">Strategic AI Understanding for Decision Makers</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors duration-300">AI Strategy & Business Impact: Understanding competitive advantage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors duration-300">ROI Measurement & KPIs: Optimizing AI investments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors duration-300">Risk Management & Governance: Ethical AI frameworks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors duration-300">Team Leadership Through Transformation</span>
                </li>
              </ul>
              
              <div className="bg-gray-700 rounded-xl p-4 border border-gray-600">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Duration: 2-day intensive</span>
                  <span className="font-bold text-green-400">$3K-8K per executive</span>
                </div>
              </div>
            </motion.div>

            {/* Manager Enablement Track */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
              className="bg-gray-800 rounded-3xl p-8 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 cursor-pointer group border border-gray-700 hover:border-green-500/50 ring-1 ring-green-500/20"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/50">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 mb-2">
                    Manager Enablement Track
                  </h3>
                  <p className="text-green-400 font-medium mb-4">Leading Teams Through AI Transformation</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors duration-300">AI Tool Integration: Incorporating AI into team workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors duration-300">Performance Management: AI-enhanced productivity goals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors duration-300">Change Leadership: Managing adoption and resistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors duration-300">Coaching & Support: Maximizing team AI potential</span>
                </li>
              </ul>
              
              <div className="bg-gray-700 rounded-xl p-4 border border-gray-600">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Duration: 4-week program</span>
                  <span className="font-bold text-green-400">Part of team package</span>
                </div>
              </div>
            </motion.div>

            {/* Power User Certification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
              className="bg-gray-800 rounded-3xl p-8 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 cursor-pointer group border border-gray-700 hover:border-green-500/50 ring-1 ring-green-500/20"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/50">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 mb-2">
                    Power User Certification
                  </h3>
                  <p className="text-green-400 font-medium mb-4">Advanced AI Mastery for Key Contributors</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors duration-300">Platform Expertise: Deep-dive training on specific AI tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors duration-300">Advanced Automation: Complex workflows and integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors duration-300">Data Analysis & Insights: AI for business intelligence</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors duration-300">Training Others: Becoming internal AI champions</span>
                </li>
              </ul>
              
              <div className="bg-gray-700 rounded-xl p-4 border border-gray-600">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Duration: 8-week intensive</span>
                  <span className="font-bold text-green-400">Certification included</span>
                </div>
              </div>
            </motion.div>

            {/* General Team Adoption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
              className="bg-gray-800 rounded-3xl p-8 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 cursor-pointer group border border-gray-700 hover:border-green-500/50 ring-1 ring-green-500/20"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/50">
                  <UserCheck className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 mb-2">
                    General Team Adoption
                  </h3>
                  <p className="text-green-400 font-medium mb-4">AI Fundamentals for Everyone</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors duration-300">AI Basics & Applications: Understanding AI's role in daily work</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors duration-300">Tool-Specific Training: Hands-on practice with AI systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors duration-300">Workflow Integration: Incorporating AI into existing processes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors duration-300">Troubleshooting & Support: Self-service problem solving</span>
                </li>
              </ul>
              
              <div className="bg-gray-700 rounded-xl p-4 border border-gray-600">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Duration: 3-week program</span>
                  <span className="font-bold text-green-400">Refresher sessions included</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEARN Framework */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              The LEARN Framework
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our Proven 5-Stage Learning Process for Maximum Skill Development
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                letter: "L",
                title: "Launch with Context",
                description: "Business case understanding and role-specific relevance",
                items: ["Business case understanding", "Role-specific relevance", "Success story examples", "Clear learning objectives"],
                color: "blue"
              },
              {
                letter: "E",
                title: "Experience Hands-On Practice",
                description: "Interactive workshops with real-world scenarios",
                items: ["Interactive workshops", "Real-world scenarios", "Guided practice sessions", "Immediate feedback"],
                color: "green"
              },
              {
                letter: "A",
                title: "Apply in Real Situations",
                description: "Live project integration with supervised implementation",
                items: ["Live project integration", "Supervised implementation", "Peer collaboration", "Problem-solving practice"],
                color: "purple"
              },
              {
                letter: "R",
                title: "Reinforce Through Repetition",
                description: "Skill practice and competency validation",
                items: ["Skill practice sessions", "Knowledge assessments", "Competency validation", "Continuous improvement"],
                color: "orange"
              },
              {
                letter: "N",
                title: "Navigate Ongoing Growth",
                description: "Advanced development and innovation coaching",
                items: ["Advanced skill development", "New feature training", "Best practice sharing", "Innovation coaching"],
                color: "red"
              }
            ].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-gray-800 rounded-2xl p-6 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 text-center cursor-pointer border border-gray-700 hover:border-green-500/50 ring-1 ring-green-500/20"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4 shadow-lg shadow-green-500/50">
                  {stage.letter}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">{stage.title}</h3>
                <p className="text-gray-300 mb-4">{stage.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {stage.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Delivery Options */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Flexible Training Delivery Options
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the format that best fits your team's needs and schedule
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "On-Site Intensive",
                description: "Multi-day immersive sessions at your location",
                benefits: ["Team bonding", "Focused learning", "Immediate application"],
                bestFor: "Teams of 10-50 people",
                investment: "$15K-35K",
                icon: <Building2 className="w-8 h-8" />
              },
              {
                title: "Virtual Learning Platform",
                description: "Self-paced online modules with live support",
                benefits: ["Flexible scheduling", "Global team access", "Cost-effective"],
                bestFor: "Distributed teams",
                investment: "$5K-15K",
                icon: <Settings className="w-8 h-8" />
              },
              {
                title: "Hybrid Blended Program",
                description: "Combination of online learning and workshops",
                benefits: ["Flexibility with practice", "Optimal retention", "Customizable"],
                bestFor: "Complex implementations",
                investment: "$10K-25K",
                icon: <Target className="w-8 h-8" />
              },
              {
                title: "Executive Coaching",
                description: "One-on-one or small group intensive coaching",
                benefits: ["Personalized attention", "Confidential discussions", "Rapid progress"],
                bestFor: "C-level executives",
                investment: "$3K-8K",
                icon: <Users className="w-8 h-8" />
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-gray-800 rounded-2xl p-6 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-green-500/50 ring-1 ring-green-500/20"
              >
                <div className="w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center text-green-400 mb-4 ring-2 ring-green-500/50 shadow-lg shadow-green-500/30">
                  {option.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm text-white mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {option.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <span className="font-semibold text-sm text-white">Best For: </span>
                    <span className="text-sm text-gray-300">{option.bestFor}</span>
                  </div>
                </div>
                
                <div className="bg-gray-700 rounded-xl p-3 text-center border border-gray-600">
                  <span className="font-bold text-green-400">{option.investment}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Measurable Training Outcomes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our training programs deliver quantifiable results across all key performance indicators
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { metric: "95%", label: "Course Completion Rate", sublabel: "across all programs" },
              { metric: "87%", label: "Competency Improvement", sublabel: "on average" },
              { metric: "4.9/5", label: "Training Satisfaction", sublabel: "participant rating" },
              { metric: "78%", label: "Productivity Increase", sublabel: "within 90 days" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-6 shadow-lg shadow-green-500/20 text-center border border-gray-700 ring-1 ring-green-500/30"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">{stat.metric}</div>
                <div className="font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Training Investment & ROI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive training packages with proven return on investment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Small Teams",
                subtitle: "5-15 people",
                price: "$8K-20K",
                description: "Complete training for small organizations",
                features: ["All four training programs", "LEARN framework implementation", "Ongoing support", "Success tracking"]
              },
              {
                title: "Medium Organizations",
                subtitle: "16-40 people",
                price: "$20K-45K",
                description: "Comprehensive multi-track training",
                features: ["Multi-department coordination", "Champion network development", "Custom content creation", "Performance optimization"],
                featured: true
              },
              {
                title: "Large Enterprises",
                subtitle: "40+ people",
                price: "$45K-85K",
                description: "Enterprise-wide training transformation",
                features: ["Full organizational rollout", "Executive leadership track", "Advanced certifications", "Long-term sustainability"]
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
                className={`bg-gray-800 rounded-3xl p-8 shadow-lg shadow-green-500/20 hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 cursor-pointer group border border-gray-700 hover:border-green-500/50 ring-1 ring-green-500/20 ${tier.featured ? 'ring-2 ring-green-500 scale-105 shadow-green-500/30' : ''}`}
              >
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 mb-2">{tier.title}</h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-4">{tier.subtitle}</p>
                  <div className="text-3xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300 mb-2">{tier.price}</div>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{tier.description}</p>
                </div>
                
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-400 rounded-full filter blur-3xl opacity-15 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Team Into AI Experts?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get a free training needs assessment and custom curriculum designed for your team's specific AI goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-green-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-green-400 hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 shadow-lg shadow-green-500/30">
                Schedule Your Training Assessment
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>500+ Teams Trained Successfully</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>95% Course Completion Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Certified Adult Learning Professionals</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}