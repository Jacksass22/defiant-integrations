import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { 
  ArrowRight, 
  CheckCircle, 
  Target, 
  Eye, 
  Users, 
  TrendingUp, 
  Brain, 
  Globe, 
  Clock, 
  Zap, 
  Shield, 
  Heart, 
  Star, 
  Award,
  Building,
  Lightbulb,
  Rocket,
  Settings,
  BarChart
} from 'lucide-react';

export default function MissionVision() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - 50% */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Our Mission: Making AI Work for Every Business
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We exist to bridge the gap between AI's infinite potential and practical business transformation—turning complexity into competitive advantage.
              </p>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Our Mission Statement</h3>
                <p className="text-gray-700 leading-relaxed italic">
                  "Empowering businesses of every size to harness the transformative power of artificial intelligence through practical, profitable, and sustainable solutions that amplify human potential rather than replace it."
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Join Our Mission
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
            
            {/* Right Visual - 50% */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-6">Future Vision Tracking</h3>
                
                {/* Vision Progress */}
                <div className="space-y-6">
                  {[
                    { 
                      label: "Intelligent Operations", 
                      progress: 35, 
                      timeline: "3-5 years", 
                      description: "Predictive business intelligence",
                      color: "blue" 
                    },
                    { 
                      label: "Democratized AI", 
                      progress: 60, 
                      timeline: "2-3 years", 
                      description: "Accessible to any business size",
                      color: "green" 
                    },
                    { 
                      label: "Human-AI Partnership", 
                      progress: 75, 
                      timeline: "1-2 years", 
                      description: "Seamless collaboration",
                      color: "yellow" 
                    },
                    { 
                      label: "Autonomous Growth", 
                      progress: 20, 
                      timeline: "5-7 years", 
                      description: "Self-optimizing systems",
                      color: "purple" 
                    }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                        <span className={`text-${item.color}-600 font-bold text-sm`}>{item.progress}%</span>
                      </div>
                      <div className="text-xs text-gray-600">{item.description}</div>
                      <div className="text-xs text-gray-500">{item.timeline}</div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${item.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.3 }}
                          className={`bg-${item.color}-600 h-2 rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              How We Fulfill Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three core principles that guide every client relationship and solution we deliver
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Empowering Businesses",
                meaning: "Giving companies the tools and knowledge to succeed with AI",
                howWeDo: "Hands-on implementation, comprehensive training, ongoing support",
                commitment: "Every client becomes AI-capable and confident",
                icon: <Users className="w-6 h-6" />,
                color: "blue"
              },
              {
                title: "Practical & Profitable",
                meaning: "AI solutions that solve real problems and generate measurable ROI",
                howWeDo: "Business-first approach, proven methodologies, performance guarantees",
                commitment: "Technology that pays for itself and drives growth",
                icon: <TrendingUp className="w-6 h-6" />,
                color: "green"
              },
              {
                title: "Amplifying Human Potential",
                meaning: "AI that makes people more effective, not obsolete",
                howWeDo: "Workflow enhancement, decision support, capability expansion",
                commitment: "Technology that empowers teams rather than replaces them",
                icon: <Brain className="w-6 h-6" />,
                color: "purple"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-${principle.color}-100 rounded-xl flex items-center justify-center text-${principle.color}-600 mb-6`}>
                  {principle.icon}
                </div>
                
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">What It Means:</h4>
                    <p className="text-gray-600">{principle.meaning}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">How We Do It:</h4>
                    <p className="text-gray-600">{principle.howWeDo}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Our Commitment:</h4>
                    <p className={`text-${principle.color}-600 font-medium`}>{principle.commitment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-8">
              Our Vision for the Future
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 max-w-5xl mx-auto">
              <p className="text-xl text-white leading-relaxed italic">
                "A world where every business operates with intelligent systems that anticipate needs, optimize performance, and unlock unprecedented growth—making AI-powered excellence the standard, not the exception."
              </p>
            </div>
            
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              We're building the foundation for a future where AI amplifies human creativity and business potential across every industry and organization size.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              The Future We're Building
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four transformative outcomes that define our vision for AI-powered business excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Intelligent Operations",
                futureState: "Businesses run on AI that predicts and prevents problems",
                timeline: "3-5 years for widespread adoption",
                ourRole: "Leading the development of predictive business intelligence",
                icon: <Settings className="w-6 h-6" />,
                color: "blue"
              },
              {
                title: "Democratized AI",
                futureState: "AI expertise accessible to businesses of any size",
                timeline: "2-3 years for standardized, affordable solutions",
                ourRole: "Creating plug-and-play AI solutions for every industry",
                icon: <Globe className="w-6 h-6" />,
                color: "green"
              },
              {
                title: "Human-AI Partnership",
                futureState: "Seamless collaboration between human creativity and AI efficiency",
                timeline: "1-2 years for mature integration models",
                ourRole: "Designing intuitive AI that enhances human decision-making",
                icon: <Heart className="w-6 h-6" />,
                color: "yellow"
              },
              {
                title: "Autonomous Growth",
                futureState: "Self-optimizing businesses that continuously improve",
                timeline: "5-7 years for fully autonomous optimization",
                ourRole: "Building the foundation for self-improving business systems",
                icon: <Rocket className="w-6 h-6" />,
                color: "purple"
              }
            ].map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-${component.color}-100 rounded-xl flex items-center justify-center text-${component.color}-600 mb-4`}>
                  {component.icon}
                </div>
                
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">{component.title}</h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Future State:</h4>
                    <p className="text-gray-600">{component.futureState}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Timeline:</h4>
                    <p className="text-gray-600">{component.timeline}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Our Role:</h4>
                    <p className={`text-${component.color}-600 font-medium`}>{component.ourRole}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Toward Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Progress Toward Our Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable milestones demonstrating our commitment to transforming the future of business
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Current Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Current Achievements (2025)</h3>
              
              <div className="space-y-4">
                {[
                  { metric: "500+", label: "Businesses successfully AI-enabled" },
                  { metric: "27", label: "Industries transformed with intelligent solutions" },
                  { metric: "$50M+", label: "In measurable client value generated" },
                  { metric: "99.9%", label: "System reliability across all implementations" }
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-2xl font-bold text-blue-600">{achievement.metric}</div>
                    <div className="text-gray-700">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Near-Term Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-green-50 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Near-Term Goals (2026-2027)</h3>
              
              <div className="space-y-4">
                {[
                  { metric: "1,000+", label: "AI-powered businesses in our network" },
                  { metric: "50", label: "Industry-specific solution templates" },
                  { metric: "$200M+", label: "In client value creation" },
                  { metric: "Global", label: "Expansion to serve businesses worldwide" }
                ].map((goal, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-2xl font-bold text-green-600">{goal.metric}</div>
                    <div className="text-gray-700">{goal.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Long-Term Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-purple-50 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Long-Term Vision (2028-2030)</h3>
              
              <div className="space-y-4">
                {[
                  { label: "AI-First Business Standard", desc: "Every business operates with intelligent systems" },
                  { label: "Industry Leadership", desc: "Recognized as the definitive AI transformation partner" },
                  { label: "Ecosystem Development", desc: "Network of AI-enabled businesses sharing insights" },
                  { label: "Continuous Innovation", desc: "Leading research in practical business AI applications" }
                ].map((vision, index) => (
                  <div key={index} className="space-y-1">
                    <div className="font-medium text-purple-600">{vision.label}</div>
                    <div className="text-sm text-gray-700">{vision.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Mission in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformations that demonstrate our mission's impact across different business scales
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Small Business Transformation",
                story: "A local restaurant chain went from manual inventory management to AI-powered demand forecasting, reducing waste by 60% and increasing profits by 35%.",
                impact: "60% waste reduction, 35% profit increase",
                icon: <Building className="w-6 h-6" />,
                color: "blue"
              },
              {
                title: "Enterprise Innovation",
                story: "A manufacturing company implemented our predictive maintenance system, preventing $2M in downtime while optimizing production efficiency by 40%.",
                impact: "$2M downtime prevented, 40% efficiency gain",
                icon: <BarChart className="w-6 h-6" />,
                color: "green"
              },
              {
                title: "Industry Evolution",
                story: "We've helped transform entire supply chains, enabling real-time optimization that benefits every business in the network.",
                impact: "Industry-wide optimization, network benefits",
                icon: <Globe className="w-6 h-6" />,
                color: "purple"
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
                <div className={`w-12 h-12 bg-${story.color}-100 rounded-xl flex items-center justify-center text-${story.color}-600 mb-6`}>
                  {story.icon}
                </div>
                
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{story.title}</h3>
                <p className="text-gray-600 mb-4 italic">"{story.story}"</p>
                
                <div className={`text-${story.color}-600 font-medium text-sm`}>
                  Impact: {story.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Join Our Mission to Transform Business with AI
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Be part of the AI-powered future we're building, one business at a time
            </p>
            
            <div className="flex justify-center mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Transformation
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>Practical AI Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>Measurable Business Impact</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>Human-Centered Technology</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}