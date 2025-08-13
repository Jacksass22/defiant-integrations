import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { 
  ArrowRight, 
  CheckCircle, 
  Target, 
  Cog, 
  Handshake, 
  Lightbulb, 
  TrendingUp, 
  Shield, 
  Users, 
  Award, 
  Clock, 
  Heart, 
  Star, 
  Zap,
  Eye,
  MessageSquare,
  Building,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useState } from 'react';

export default function CompanyValues() {
  const [expandedValue, setExpandedValue] = useState<number | null>(null);

  const toggleValue = (index: number) => {
    setExpandedValue(expandedValue === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Content - 60% */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Values That Drive Results: The Principles Behind Our Success
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our core values aren't just words on a wall—they're the foundation of every client relationship, every solution we build, and every result we deliver.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Experience Our Values in Action
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Values-Driven Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Authentic Partnerships</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Visual - 40% */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-6">Company Culture</h3>
                
                {/* Culture Metrics */}
                <div className="space-y-6">
                  {[
                    { label: "Client Success Focus", value: "100%", description: "Every decision starts here", color: "blue" },
                    { label: "System Reliability", value: "99.9%", description: "Technical excellence", color: "green" },
                    { label: "Transparent Communication", value: "Weekly", description: "Progress updates", color: "yellow" },
                    { label: "Practical Innovation", value: "Purpose", description: "Technology that works", color: "purple" }
                  ].map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                        <span className={`text-${metric.color}-600 font-bold text-sm`}>{metric.value}</span>
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
                  
                  {/* Values Commitment */}
                  <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl p-4 mt-6">
                    <div className="text-sm font-medium text-gray-700 mb-2">Our Commitment</div>
                    <div className="text-xs text-gray-600">Living our values in every client interaction and business decision</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Expandable */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four principles that guide every decision, drive every project, and define every partnership
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Client Success Above All",
                principle: "Your success is our only metric that matters",
                inPractice: "Every decision starts with 'How does this create measurable value for our clients?'",
                example: "Turning down profitable projects that don't align with client goals",
                icon: <Target className="w-6 h-6" />,
                color: "blue",
                details: {
                  heading: "We Measure Success by Your Growth",
                  points: [
                    "ROI tracking and regular business impact assessments",
                    "Proactive optimization to maximize your investment returns", 
                    "Long-term partnerships focused on scaling your competitive advantages",
                    "Success guarantees backed by performance commitments"
                  ]
                }
              },
              {
                title: "Relentless Technical Excellence",
                principle: "Good enough isn't good enough when it comes to your business",
                inPractice: "Continuous learning, rigorous testing, and world-class implementation standards",
                example: "99.9% system uptime through obsessive attention to quality and reliability",
                icon: <Cog className="w-6 h-6" />,
                color: "green",
                details: {
                  heading: "Building Systems That Work, Always",
                  points: [
                    "Rigorous testing protocols ensuring 99.9% reliability",
                    "Continuous performance monitoring and optimization",
                    "Security-first architecture protecting your business data",
                    "Future-proof technology choices that scale with your growth"
                  ]
                }
              },
              {
                title: "Transparent Partnership",
                principle: "Honest communication builds lasting relationships",
                inPractice: "Clear timelines, realistic expectations, proactive problem-solving communication",
                example: "Weekly progress reports with honest assessments of challenges and solutions",
                icon: <Handshake className="w-6 h-6" />,
                color: "yellow",
                details: {
                  heading: "No Surprises, Just Solutions",
                  points: [
                    "Weekly progress reports with honest milestone assessments",
                    "Upfront communication about challenges and realistic timelines",
                    "Open-book approach to project costs and resource allocation",
                    "Proactive problem-solving before issues impact your business"
                  ]
                }
              },
              {
                title: "Innovation with Purpose",
                principle: "Technology should solve real problems, not create new ones",
                inPractice: "Practical AI applications that improve business operations, not just flashy features",
                example: "Custom solutions that integrate seamlessly with existing workflows",
                icon: <Lightbulb className="w-6 h-6" />,
                color: "purple",
                details: {
                  heading: "Technology That Actually Improves Your Business",
                  points: [
                    "Practical AI applications that solve real operational challenges",
                    "Custom solutions designed for your specific industry and workflows",
                    "Integration strategies that enhance rather than disrupt existing processes",
                    "Continuous innovation that creates sustainable competitive advantages"
                  ]
                }
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 bg-${value.color}-100 rounded-xl flex items-center justify-center text-${value.color}-600`}>
                    {value.icon}
                  </div>
                  <button 
                    onClick={() => toggleValue(index)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {expandedValue === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>
                
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className={`text-${value.color}-600 font-medium mb-4`}>"{value.principle}"</p>
                <p className="text-gray-600 text-sm mb-3">
                  <strong>In Practice:</strong> {value.inPractice}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  <strong>Example:</strong> {value.example}
                </p>
                
                {/* Expandable Details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: expandedValue === index ? "auto" : 0,
                    opacity: expandedValue === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {expandedValue === index && (
                    <div className={`border-t border-${value.color}-100 pt-4 mt-4`}>
                      <h4 className="font-semibold text-gray-900 mb-3">{value.details.heading}</h4>
                      <ul className="space-y-2">
                        {value.details.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className={`w-4 h-4 text-${value.color}-600 flex-shrink-0 mt-0.5`} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values-Driven Decision Making */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Values-Driven Decision Making
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How our principles guide tough decisions and exceptional service delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">When We Say No</h3>
              <p className="text-lg text-red-600 font-medium mb-4">Protecting Client Interests</p>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                  <span>Projects that don't align with client long-term success</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                  <span>Technology solutions that create more complexity than value</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                  <span>Timelines that compromise quality or sustainability</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                  <span>Engagements that would stretch our ability to deliver excellence</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">When We Go Above and Beyond</h3>
              <p className="text-lg text-green-600 font-medium mb-4">Exceeding Expectations</p>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                  <span>Emergency support for critical business operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                  <span>Additional optimization opportunities discovered during projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                  <span>Industry insights and competitive intelligence sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                  <span>Strategic advice beyond the scope of current engagements</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Client Testimonials on Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How our values translate into real client experiences and business outcomes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "They Actually Care About Our Success",
                quote: "Unlike other consultants who just deliver and leave, Defiant Integrations stayed engaged until we saw real ROI. Their success is tied to ours.",
                author: "CEO, $50M E-commerce Company",
                value: "Client Success Above All",
                color: "blue"
              },
              {
                title: "Transparent and Reliable",
                quote: "Every week we knew exactly where we stood, what was working, and what needed attention. No surprises, just steady progress.",
                author: "CTO, SaaS Platform",
                value: "Transparent Partnership",
                color: "yellow"
              },
              {
                title: "Innovation That Makes Sense",
                quote: "They didn't push the latest AI buzzwords on us. They built exactly what our business needed to grow.",
                author: "Founder, Professional Services Firm",
                value: "Innovation with Purpose",
                color: "purple"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-${testimonial.color}-100 rounded-xl flex items-center justify-center text-${testimonial.color}-600 mb-6`}>
                  <MessageSquare className="w-6 h-6" />
                </div>
                
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">{testimonial.title}</h3>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                  <p className={`text-xs text-${testimonial.color}-600 font-medium mt-1`}>{testimonial.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture in Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Culture in Action
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              How we live our values every day through continuous learning and results-driven collaboration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-4">Continuous Learning</h3>
              
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-1" />
                  <span>Monthly team training on emerging AI technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-1" />
                  <span>Industry conference participation and knowledge sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-1" />
                  <span>Client feedback integration into service improvement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-1" />
                  <span>Cross-industry best practice development and application</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-4">Results-Driven Collaboration</h3>
              
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-1" />
                  <span>Team incentives aligned with client success metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-1" />
                  <span>Collaborative problem-solving across all disciplines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-1" />
                  <span>Knowledge sharing that benefits entire client portfolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-1" />
                  <span>Innovation initiatives driven by real client challenges</span>
                </li>
              </ul>
            </motion.div>
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
              Ready to Experience Values-Driven Results?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              See how our value-driven approach creates measurable business transformation and lasting partnerships.
            </p>
            
            <div className="flex justify-center mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Transformation
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>Values-Driven Partnership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>Measurable Business Impact</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>Transparent Communication</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}