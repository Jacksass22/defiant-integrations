import { ArrowRight, CheckCircle, Map, Target, TrendingUp, Users, Lightbulb, BarChart3, Calendar, Zap } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Link } from 'wouter';
import LightRays from '@/components/LightRays';
import BlurText from '@/components/BlurText';
import TiltedCard from '@/components/TiltedCard';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function TechnologyRoadmapping() {
  useScrollToTop();
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Light Rays Background */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#8b5cf6"
          raysSpeed={0.8}
          lightSpread={1.2}
          rayLength={0.8}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.03}
          fadeDistance={0.8}
          saturation={0.9}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-purple-300 text-sm font-medium mb-6 border border-purple-400/30">
              <Map className="w-4 h-4" />
              <span>Technology Roadmapping</span>
            </div>
            
            <BlurText
              text="Chart Your Path to Technology Excellence"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
            />
            
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Create strategic technology roadmaps that align innovation with business objectives. Our frameworks turn complex technology decisions into clear, actionable plans that drive measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2">
                <span>Build Your Roadmap</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Project delivery success rate</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
              <div className="text-gray-600">Faster time-to-market</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">67%</div>
              <div className="text-gray-600">Reduction in technology debt</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">3-5yr</div>
              <div className="text-gray-600">Strategic planning horizon</div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Strategic Technology Roadmapping Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Without a clear technology roadmap, organizations waste resources on disconnected initiatives, accumulate technical debt, and miss opportunities for competitive advantage. Our approach ensures every technology investment aligns with business strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Core Framework */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Technology Roadmapping Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that transforms technology chaos into strategic clarity
            </p>
          </div>

          <div className="space-y-16">
            {/* Strategic Assessment */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
                  <Target className="w-4 h-4" />
                  <span>Strategic Assessment & Vision</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  Understand Where You Are and Where You Need to Go
                </h3>
                
                <p className="text-gray-600 mb-6">
                  We begin by conducting a comprehensive assessment of your current technology landscape, business objectives, and competitive position to establish a clear baseline and vision.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Current state technology audit and capability mapping",
                    "Business strategy alignment and objective definition",
                    "Competitive landscape analysis and market positioning",
                    "Stakeholder interviews and requirements gathering",
                    "Technology maturity assessment and gap identification"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-purple-800 font-semibold">
                    Outcome: Clear understanding of current state and strategic technology vision
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Assessment Dimensions</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Technology Architecture</span>
                      <span className="font-bold text-purple-600">Evaluated</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Business Alignment</span>
                      <span className="font-bold text-purple-600">Mapped</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Market Position</span>
                      <span className="font-bold text-purple-600">Analyzed</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Risk Assessment</span>
                      <span className="font-bold text-purple-600">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Roadmap Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">3-5</div>
                      <div className="text-sm text-gray-600">Year Planning</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">Quarterly</div>
                      <div className="text-sm text-gray-600">Milestones</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">ROI</div>
                      <div className="text-sm text-gray-600">Tracking</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">Risk</div>
                      <div className="text-sm text-gray-600">Management</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Strategic Roadmap Development</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  Create a Multi-Year Technology Strategy
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Transform insights into actionable roadmaps with clear timelines, dependencies, and success metrics. Our frameworks balance innovation with operational excellence.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Multi-horizon planning with 3-5 year strategic vision",
                    "Quarterly milestone definition and dependency mapping",
                    "Resource allocation and budget planning frameworks",
                    "Risk assessment and mitigation strategy development",
                    "Success metrics and KPI definition for each initiative"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    Outcome: Comprehensive roadmap with clear priorities and execution plan
                  </p>
                </div>
              </div>
            </div>

            {/* Implementation & Governance */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full text-green-800 text-sm font-medium mb-4">
                  <Zap className="w-4 h-4" />
                  <span>Implementation & Governance</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  Execute with Precision and Adapt with Intelligence
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Successful roadmaps require strong governance, continuous monitoring, and adaptive management. We establish frameworks that ensure execution excellence and strategic agility.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Governance structure and decision-making frameworks",
                    "Progress tracking and performance monitoring systems",
                    "Regular roadmap reviews and adaptation processes",
                    "Stakeholder communication and change management",
                    "Technology portfolio management and optimization"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    Outcome: Sustained execution with continuous improvement and adaptation
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Governance Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">On-Track Projects</span>
                      <span className="font-bold text-green-600">94%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Budget Variance</span>
                      <span className="font-bold text-green-600">±5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Stakeholder Satisfaction</span>
                      <span className="font-bold text-green-600">92%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Strategic Alignment</span>
                      <span className="font-bold text-green-600">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Components */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Essential Roadmap Components
            </h2>
            <p className="text-xl text-gray-600">
              Every comprehensive technology roadmap includes these critical elements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Strategic Initiatives",
                description: "Major technology programs aligned with business objectives",
                features: ["Digital transformation projects", "Infrastructure modernization", "Platform consolidation"]
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Capability Evolution",
                description: "Development path for core technology capabilities",
                features: ["Skills development plans", "Technology maturity progression", "Vendor management strategy"]
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Timeline & Milestones",
                description: "Clear scheduling with dependencies and critical path analysis",
                features: ["Quarterly deliverables", "Dependency mapping", "Risk mitigation timing"]
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Resource Planning",
                description: "Human and financial resource allocation across initiatives",
                features: ["Team capacity planning", "Budget allocation", "External resource needs"]
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Success Metrics",
                description: "Quantifiable measures of progress and value delivery",
                features: ["KPI frameworks", "ROI measurement", "Business impact tracking"]
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation Pipeline",
                description: "Emerging technologies and future opportunity assessment",
                features: ["Technology scouting", "Pilot program planning", "Innovation investment"]
              }
            ].map((component, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                  {component.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{component.title}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <ul className="space-y-1">
                  {component.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-purple-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Industry-Specific Roadmapping
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our roadmapping expertise spans diverse industries with unique technology challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Financial Services",
                description: "Navigate regulatory requirements while driving digital innovation",
                challenges: ["Compliance automation", "Legacy system modernization", "Digital customer experience"],
                timeframe: "18-36 months"
              },
              {
                title: "Healthcare",
                description: "Balance patient care innovation with stringent security requirements",
                challenges: ["HIPAA compliance", "Interoperability standards", "Clinical workflow optimization"],
                timeframe: "24-48 months"
              },
              {
                title: "Manufacturing",
                description: "Integrate Industry 4.0 technologies with existing operations",
                challenges: ["IoT implementation", "Predictive maintenance", "Supply chain digitization"],
                timeframe: "12-36 months"
              },
              {
                title: "Retail & E-commerce",
                description: "Create omnichannel experiences while optimizing operations",
                challenges: ["Customer data platforms", "Inventory optimization", "Personalization engines"],
                timeframe: "6-24 months"
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Focus Areas:</h4>
                  <ul className="space-y-2">
                    {industry.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="text-gray-600 flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Typical Timeframe:</span>
                  <span className="font-semibold text-purple-600">{industry.timeframe}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900 to-purple-800">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Map Your Technology Future?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transform technology chaos into strategic clarity with roadmaps that drive measurable business results.
          </p>
          <TiltedCard
            containerHeight="auto"
            containerWidth="auto"
            imageHeight="auto"
            imageWidth="auto"
            scaleOnHover={1.05}
            rotateAmplitude={8}
            isButton={true}
            className="inline-block"
          >
            <div className="relative group bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-full overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/30">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 border border-white/20 rounded-full transform rotate-45 animate-orbit-slow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-20 border border-white/10 rounded-full transform -rotate-45 animate-orbit-reverse"></div>
              </div>
              <div className="relative z-10 flex items-center space-x-3">
                <span className="text-white font-semibold text-lg">Start Your Technology Roadmap</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </TiltedCard>
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
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/cannabis-retail" className="hover:text-purple-400 transition-colors">Cannabis Retail</Link></li>
                <li><Link href="/hvac" className="hover:text-purple-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-purple-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-purple-400 transition-colors">Electrical</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ai-strategy-development" className="hover:text-purple-400 transition-colors">AI Strategy</Link></li>
                <li><Link href="/digital-transformation" className="hover:text-purple-400 transition-colors">Digital Transformation</Link></li>
                <li><Link href="/technology-roadmapping" className="hover:text-purple-400 transition-colors">Technology Roadmapping</Link></li>
                <li><button className="hover:text-purple-400 transition-colors">Implementation</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-purple-400 transition-colors">Careers</button></li>
                <li><button className="hover:text-purple-400 transition-colors">Contact</button></li>
                <li><button className="hover:text-purple-400 transition-colors">Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-purple-400 transition-colors">Sign In</button></li>
                <li><button className="hover:text-purple-400 transition-colors">Subscribe</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Defiant Integrations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}