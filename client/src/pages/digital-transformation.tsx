import { ArrowRight, CheckCircle, Zap, TrendingUp, Users, Brain, Target, Cpu, Database, CloudLightning } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Link } from 'wouter';
import LightRays from '@/components/LightRays';
import BlurText from '@/components/BlurText';
import Galaxy from '@/components/Galaxy';
import TiltedCard from '@/components/TiltedCard';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function DigitalTransformation() {
  useScrollToTop();
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Light Rays Background */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#3b82f6"
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
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-medium mb-6 border border-blue-400/30">
              <CloudLightning className="w-4 h-4" />
              <span>Digital Transformation</span>
            </div>
            
            <BlurText
              text="Transform Your Business with Intelligent Automation"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
            />
            
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Deploy AI-powered systems that revolutionize how your business operates. From intelligent chatbots to automated workflows, we transform complex processes into seamless digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2">
                <span>Start Your Digital Journey</span>
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
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Reduction in manual tasks</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">3x</div>
              <div className="text-gray-600">Faster customer response times</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-gray-600">Increase in operational efficiency</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Automated customer support</div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Organizations Choose Our Digital Transformation Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We don't just implement technology—we redesign your business processes to be inherently intelligent, scalable, and future-ready. Our approach combines cutting-edge AI with practical business solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Digital Transformation Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions that modernize every aspect of your business operations
            </p>
          </div>

          <div className="space-y-16">
            {/* AI-Powered Customer Experience */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
                  <Brain className="w-4 h-4" />
                  <span>AI-Powered Customer Experience</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  Intelligent RAG Agents & Chatbots
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Deploy sophisticated AI agents that understand your business, products, and customers. Our RAG (Retrieval-Augmented Generation) systems provide accurate, contextual responses while learning from every interaction.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Custom-trained chatbots with your business knowledge base",
                    "Real-time inventory and product information integration",
                    "Multi-language support and sentiment analysis",
                    "Seamless escalation to human agents when needed",
                    "Advanced analytics and conversation insights"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    Result: 90% of customer inquiries resolved instantly with 95% satisfaction rate
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">AI Assistant Performance</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Queries Handled Daily</span>
                      <span className="font-bold text-blue-600">2,450</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Response Accuracy</span>
                      <span className="font-bold text-blue-600">97.3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg Response Time</span>
                      <span className="font-bold text-blue-600">0.8s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Languages Supported</span>
                      <span className="font-bold text-blue-600">12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Automation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">75%</div>
                      <div className="text-sm text-gray-600">Time Savings</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">99.2%</div>
                      <div className="text-sm text-gray-600">Accuracy Rate</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">24/7</div>
                      <div className="text-sm text-gray-600">Operation</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">Zero</div>
                      <div className="text-sm text-gray-600">Downtime</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full text-green-800 text-sm font-medium mb-4">
                  <Zap className="w-4 h-4" />
                  <span>Intelligent Process Automation</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  Streamline Operations with Smart Workflows
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Transform manual, time-consuming processes into intelligent, automated workflows. Our systems handle everything from data entry to complex decision-making processes.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Automated document processing and data extraction",
                    "Intelligent workflow routing and approvals",
                    "Real-time monitoring and exception handling",
                    "Integration with existing business systems",
                    "Predictive analytics for process optimization"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    Result: 75% reduction in processing time with 99.2% accuracy
                  </p>
                </div>
              </div>
            </div>

            {/* Data Intelligence */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
                  <Database className="w-4 h-4" />
                  <span>Data Intelligence & Analytics</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  Turn Data into Strategic Advantage
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Unlock the power of your data with advanced analytics, machine learning insights, and real-time business intelligence that drives informed decision-making.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Real-time dashboards and KPI monitoring",
                    "Predictive analytics for demand forecasting",
                    "Customer behavior analysis and segmentation",
                    "Automated reporting and alert systems",
                    "Data visualization and insight generation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-purple-800 font-semibold">
                    Result: 40% improvement in strategic decision-making speed
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Analytics Impact</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Data Sources Integrated</span>
                      <span className="font-bold text-purple-600">15+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Real-time Insights</span>
                      <span className="font-bold text-purple-600">250+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Forecast Accuracy</span>
                      <span className="font-bold text-purple-600">94%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Decision Speed</span>
                      <span className="font-bold text-purple-600">4x Faster</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Your Digital Transformation Journey
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that ensures successful transformation from day one
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                1. Strategy & Assessment
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Current state analysis</li>
                <li>Digital readiness audit</li>
                <li>ROI modeling</li>
                <li>Technology roadmap</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                2. Design & Development
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>AI system architecture</li>
                <li>Custom solution development</li>
                <li>Integration planning</li>
                <li>Security implementation</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                3. Implementation & Training
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Phased rollout</li>
                <li>Team training programs</li>
                <li>Change management</li>
                <li>Performance monitoring</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                4. Optimization & Scale
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Continuous improvement</li>
                <li>Advanced feature rollout</li>
                <li>Performance optimization</li>
                <li>Future roadmap planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Transforming Industries with AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our digital transformation solutions are tailored for specific industry needs and challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cannabis Retail",
                description: "AI chatbots for product recommendations, compliance automation, and customer education",
                features: ["Product knowledge RAG agents", "Compliance monitoring", "Inventory optimization"]
              },
              {
                title: "Professional Services",
                description: "Automated client onboarding, document processing, and intelligent scheduling",
                features: ["Client portal automation", "Document intelligence", "Resource optimization"]
              },
              {
                title: "Healthcare",
                description: "Patient engagement systems, appointment automation, and clinical workflow optimization",
                features: ["Patient communication", "Workflow automation", "Data analytics"]
              },
              {
                title: "Manufacturing",
                description: "Predictive maintenance, quality control automation, and supply chain optimization",
                features: ["IoT integration", "Predictive analytics", "Process optimization"]
              },
              {
                title: "Financial Services",
                description: "Automated compliance reporting, customer service enhancement, and risk assessment",
                features: ["Regulatory compliance", "Customer insights", "Risk modeling"]
              },
              {
                title: "Retail & E-commerce",
                description: "Personalized shopping experiences, inventory management, and customer support automation",
                features: ["Personalization engines", "Inventory intelligence", "Support automation"]
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <ul className="space-y-1">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-blue-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the companies that are already leveraging AI to revolutionize their operations and customer experiences.
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
                <span className="text-white font-semibold text-lg">Start Your Digital Transformation</span>
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
                <li><Link href="/cannabis-retail" className="hover:text-blue-400 transition-colors">Cannabis Retail</Link></li>
                <li><Link href="/hvac" className="hover:text-blue-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-blue-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-blue-400 transition-colors">Electrical</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ai-strategy-development" className="hover:text-blue-400 transition-colors">AI Strategy</Link></li>
                <li><Link href="/digital-transformation" className="hover:text-blue-400 transition-colors">Digital Transformation</Link></li>
                <li><button className="hover:text-blue-400 transition-colors">Implementation</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Scaling</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-blue-400 transition-colors">Careers</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Contact</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-blue-400 transition-colors">Sign In</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Subscribe</button></li>
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