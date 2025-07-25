import { Navigation } from '@/components/navigation';
import { ArrowRight, Target, Map, Users, TrendingUp, CheckCircle, Clock, Lightbulb } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';

export default function AIStrategyDevelopment() {
  useScrollToTop();
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <BlurText
              text="AI Strategy Development"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
            />
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Designing Intelligent Transformation, Not Just Technology Experiments
            </p>
            <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 font-medium hover:bg-blue-700 transition-colors">
              <span>Book Your AI Readiness Session</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              The Strategy Gap Most Businesses Face
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              In today's race toward AI adoption, most businesses don't have a technology problem. They have a strategy gap.
            </p>
            
            <div className="bg-white p-8 shadow-lg rounded-lg mb-12">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Executives know AI is important. What they often don't know is:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">?</span>
                  </div>
                  <span className="text-gray-700">Which use cases are worth pursuing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">?</span>
                  </div>
                  <span className="text-gray-700">Where to start with their existing infrastructure</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">?</span>
                  </div>
                  <span className="text-gray-700">How to align AI with their core business priorities</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">?</span>
                  </div>
                  <span className="text-gray-700">How to avoid fragmented pilots that never scale</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <p className="text-xl font-semibold mb-4">
                At Defiant Integrations, we help ambitious businesses move from guesswork to a clear, customized AI strategy—one that generates outcomes, not overwhelm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full mb-6">
              <Target className="w-10 h-10" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What We Deliver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with executive teams to design intelligent transformation pathways
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Map className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                    Assess current operational maturity
                  </h3>
                  <p className="text-gray-600">
                    We map your workflows, data flows, and capability gaps
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                    Prioritize AI opportunities by business value
                  </h3>
                  <p className="text-gray-600">
                    Efficiency, revenue, customer experience, or compliance
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                    Design a phased roadmap for intelligent transformation
                  </h3>
                  <p className="text-gray-600">
                    Sequenced steps tied to ROI
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                    Define clear implementation pathways
                  </h3>
                  <p className="text-gray-600">
                    That include people, process, and platforms—not just code
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                    Establish governance, measurement, and iteration plans
                  </h3>
                  <p className="text-gray-600">
                    So your AI doesn't plateau
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 font-medium">
                  This isn't an off-the-shelf strategy deck. It's a business operating system redesign—customized for your real constraints, team capacity, and industry dynamics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Strategic Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every engagement follows our proprietary five-phase process
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">
                Operational Mapping
              </h3>
              <p className="text-sm text-gray-600">
                We capture and structure your existing processes, decision points, and data landscape.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">
                Infrastructure Alignment
              </h3>
              <p className="text-sm text-gray-600">
                We consolidate templates, assets, workflows, and tooling into a unified foundation.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">
                Opportunity Identification
              </h3>
              <p className="text-sm text-gray-600">
                We locate the most valuable use cases for AI, automation, and augmentation across the business.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">
                Intelligent Integration Planning
              </h3>
              <p className="text-sm text-gray-600">
                We map how to embed intelligent tools into existing workflows—with minimal disruption.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                5
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">
                Measurement & Refinement
              </h3>
              <p className="text-sm text-gray-600">
                We define success metrics and build systems to ensure continuous improvement.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 max-w-2xl mx-auto">
              <p className="text-blue-900 font-semibold text-lg">
                We use AI to enhance your systems. Not replace your people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Walk Away With */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
              <Lightbulb className="w-10 h-10" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What You Walk Away With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you work with us on AI Strategy Development, you get:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                Fully Tailored AI Roadmap
              </h3>
              <p className="text-gray-600">
                Aligned to your goals, tech, and talent
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                Prioritized Use Cases
              </h3>
              <p className="text-gray-600">
                AI use cases and workflows with real business upside
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                Practical Blueprint
              </h3>
              <p className="text-gray-600">
                How to start, scale, and measure your AI journey
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                Executive-Level Clarity
              </h3>
              <p className="text-gray-600">
                Team-wide alignment on AI strategy and priorities
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                Strategic Confidence
              </h3>
              <p className="text-gray-600">
                Grounded in decades of cross-industry expertise
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                Implementation Readiness
              </h3>
              <p className="text-gray-600">
                Clear next steps and resource requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Defiant */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why Defiant?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6">
                We're not just technologists.
              </h3>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                We're strategic systems thinkers who've delivered results across 27 industries—from trades to legal, retail to consulting.
              </p>
              <p className="text-xl text-gray-200 leading-relaxed">
                We bring the clarity, structure, and execution plan your team needs to win with AI—not just test it.
              </p>
            </div>

            <div className="bg-blue-800 p-8 rounded-lg">
              <h4 className="font-serif text-xl font-bold mb-4">Cross-Industry Expertise</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <div>• HVAC & Trades</div>
                <div>• Legal & Professional</div>
                <div>• Healthcare & Wellness</div>
                <div>• Retail & eCommerce</div>
                <div>• Real Estate</div>
                <div>• Food & Hospitality</div>
                <div>• And 21+ more industries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to See Where AI Fits Into Your Business?
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Book a 30-minute AI Readiness Session. We'll walk you through our strategic lens—and show you exactly where the hidden wins are.
          </p>
          <p className="text-2xl font-semibold mb-12">
            Defiant Integrations. What's your next intelligent breakthrough?
          </p>
          <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 font-medium hover:bg-blue-700 transition-colors text-lg">
            <span>Book Your AI Readiness Session</span>
            <ArrowRight className="w-5 h-5" />
          </button>
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
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-blue-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-blue-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-blue-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-blue-400 transition-colors">Landscaping</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ai-strategy-development" className="hover:text-blue-400 transition-colors">AI Strategy</Link></li>
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
            <p>&copy; 2025 Defiant Integrations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}