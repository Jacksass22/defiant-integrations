import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Target, 
  Lightbulb, 
  Shield, 
  Award, 
  TrendingUp, 
  Globe, 
  Clock, 
  Star, 
  Zap,
  Building,
  Heart,
  Brain,
  Rocket
} from 'lucide-react';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-10 gap-12 items-center">
            {/* Left Content - 70% */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Defying Convention, Defining the Future of AI Integration
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Born from the belief that AI should empower businesses, not complicate them. We bridge the gap between cutting-edge technology and practical business transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Start Your AI Transformation Journey
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">500+ Successful Implementations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">27 Industry Verticals</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Visual - 30% */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-6">Founding Vision</h3>
                
                {/* Vision Metrics */}
                <div className="space-y-6">
                  {[
                    { label: "AI Made Simple", value: "100%", description: "Practical over complex", color: "blue" },
                    { label: "Business First", value: "ROI+", description: "Measurable impact", color: "yellow" },
                    { label: "Client Owned", value: "Self", description: "Your data, your control", color: "green" }
                  ].map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                        <span className={`text-${metric.color}-600 font-bold text-lg`}>{metric.value}</span>
                      </div>
                      <div className="text-xs text-gray-600">{metric.description}</div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1, delay: index * 0.3 }}
                          className={`bg-${metric.color}-600 h-2 rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                  
                  {/* Mission Statement */}
                  <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl p-4 mt-6">
                    <div className="text-sm font-medium text-gray-700 mb-2">Our Mission</div>
                    <div className="text-xs text-gray-600">Making AI accessible, practical, and profitable for businesses of every size</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why We Started Defiant Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We saw too many businesses struggling with AI implementations that promised everything but delivered complexity. Founded by experienced business strategists and proven AI engineers, we built Defiant Integrations to deliver what others couldn't: AI that actually works for business.
            </p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From founding vision to industry leadership - the milestones that shaped our mission
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                year: "2023",
                title: "Company Founded",
                description: "Founded by consulting and AI experts",
                milestone: "Genesis",
                color: "blue"
              },
              {
                year: "2025",
                title: "First $10M Delivered",
                description: "Client transformations delivered",
                milestone: "Validation",
                color: "yellow"
              },
              {
                year: "2025",
                title: "500+ Implementations",
                description: "Successful AI implementations across 27 industries",
                milestone: "Scale",
                color: "green"
              },
              {
                year: "Future",
                title: "Next Wave Leadership",
                description: "Leading autonomous business intelligence",
                milestone: "Vision",
                color: "purple"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center text-${item.color}-600 mx-auto mb-4`}>
                  <Clock className="w-8 h-8" />
                </div>
                <div className={`text-2xl font-bold text-${item.color}-600 mb-2`}>{item.year}</div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className={`text-xs font-medium text-${item.color}-600 bg-${item.color}-50 px-3 py-1 rounded-full inline-block`}>
                  {item.milestone}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Core Values
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The principles that guide every decision, every project, and every partnership
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Client-First Results",
                description: "Every solution designed for measurable business impact",
                icon: <Target className="w-6 h-6" />
              },
              {
                title: "Technical Excellence",
                description: "Business strategy expertise meets world-class engineering",
                icon: <Brain className="w-6 h-6" />
              },
              {
                title: "Transparent Partnership",
                description: "Clear communication, realistic timelines, honest guidance",
                icon: <Heart className="w-6 h-6" />
              },
              {
                title: "Continuous Innovation",
                description: "Staying ahead of AI evolution to future-proof client investments",
                icon: <Rocket className="w-6 h-6" />
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-blue-100 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Beyond Traditional Consulting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in the world of AI consulting and business transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "We Build, Not Just Advise",
                description: "Hands-on implementation, not just PowerPoint strategies",
                features: ["Working code delivery", "Live system deployment", "Real-time optimization", "Ongoing support"],
                icon: <Building className="w-6 h-6" />,
                color: "blue"
              },
              {
                title: "Industry Specialization",
                description: "Deep expertise across 27 specific verticals",
                features: ["Sector-specific solutions", "Industry best practices", "Regulatory compliance", "Market understanding"],
                icon: <Globe className="w-6 h-6" />,
                color: "green"
              },
              {
                title: "Self-Hosted Solutions",
                description: "Clients own and control their AI infrastructure",
                features: ["Complete data ownership", "Security control", "Custom modifications", "No vendor lock-in"],
                icon: <Shield className="w-6 h-6" />,
                color: "yellow"
              },
              {
                title: "Proven Methodology",
                description: "Systematic frameworks that ensure consistent success",
                features: ["VALIDATE framework", "SCALE methodology", "ASSESS process", "ADAPT approach"],
                icon: <Award className="w-6 h-6" />,
                color: "purple"
              }
            ].map((differentiator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-${differentiator.color}-100 rounded-xl flex items-center justify-center text-${differentiator.color}-600 mb-6`}>
                  {differentiator.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{differentiator.title}</h3>
                <p className="text-gray-600 mb-6">{differentiator.description}</p>
                
                <ul className="space-y-2 text-sm text-gray-600">
                  {differentiator.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 text-${differentiator.color}-600 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 rounded-3xl p-8"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                Making AI accessible, practical, and profitable for businesses of every size
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-yellow-50 rounded-3xl p-8"
            >
              <div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center text-white mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                A world where every business operates with intelligent, autonomous systems that amplify human potential
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to client success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Successful AI Implementations", color: "white" },
              { number: "27", label: "Industry Verticals Served", color: "yellow" },
              { number: "$50M+", label: "Client Value Generated", color: "green" },
              { number: "95%", label: "Client Satisfaction Rate", color: "blue" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-4xl font-bold text-${stat.color}-300 mb-2`}>{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join the hundreds of businesses that have transformed their operations with AI that actually works. Your story starts here.
            </p>
            
            <div className="flex justify-center mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Transformation
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>Partnership Over Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>AI That Actually Works</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>Your Success is Our Mission</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}