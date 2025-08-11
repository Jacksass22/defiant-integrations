import { Navigation } from '@/components/navigation';
import { ArrowRight, Clock, DollarSign, Shield, Calendar, FileCheck, TrendingUp, CheckCircle, Zap } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import Lightning from '@/components/Lightning';
import { useState } from 'react';

export default function Electrical() {
  useScrollToTop();
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-br from-yellow-900 via-orange-800 to-yellow-900 overflow-hidden">
        {/* Lightning Background Effect */}
        <div className="absolute inset-0 opacity-30">
          <Lightning
            hue={30}
            xOffset={0}
            speed={0.8}
            intensity={0.6}
            size={2}
          />
        </div>
        
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <BlurText
              text="Electrical: Smart Technology That Actually Works for Your Business"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
            />
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Handle more projects, stay compliant, and grow your electrical business without the administrative headaches.
            </p>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Electrical Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how smart automation can streamline your operations and grow your revenue.
          </p>
          <button 
            onClick={() => setShowLeadCaptureModal(true)}
            className="inline-flex items-center space-x-2 bg-orange-600 text-white px-8 py-4 font-medium hover:bg-orange-700 transition-colors shadow-lg text-lg"
          >
            <span>Start Your Free Assessment</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              What Electrical Companies Are Dealing With Right Now
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              Running an electrical company means balancing safety-critical work with business demands. You're dealing with everything from simple outlet installations to complex commercial projects, all while customers expect quick responses and accurate estimates. Safety regulations are getting stricter, insurance costs are rising, and finding qualified electricians is nearly impossible.
            </p>
            
            {/* Electrical Industry Challenges */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-orange-600 mb-4">85%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Missed Follow-ups</h3>
                <p className="text-gray-600">of leads that never get proper follow-up contact are lost. </p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-orange-600 mb-4">40%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Admin Time</h3>
                <p className="text-gray-600">Of your day spent on paperwork instead of billable electrical work</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-orange-600 mb-4">3x</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Permit Delays</h3>
                <p className="text-gray-600">Projects delayed due to missed permit deadlines and compliance issues</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-orange-600 mb-4">72hr</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Response Window</h3>
                <p className="text-gray-600">Maximum time before customers call your competitors for estimates</p>
              </div>
            </div>

            <div className="bg-orange-900 text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-4">What This Means for Your Business</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                  <span>Big estimates sit for weeks without proper follow-up</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                  <span>Scheduling gets complicated with jobs of different sizes and complexity</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                  <span>Administrative work pulls you away from billable hours</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                  <span>Customers comparison shop and go with faster responders</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                  <span>Code updates and permit requirements slow everything down</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How Smart Technology Fixes These Problems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your electrical business with AI-powered solutions designed for project complexity
            </p>
          </div>

          {/* Solution Cards */}
          <div className="space-y-20">
            {/* Solution 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-lg mb-6">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Capture Every Lead and Follow Up Properly
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Big electrical projects require multiple touchpoints, but follow-up gets forgotten
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI systems that answer calls professionally and nurture leads automatically
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI phone system handles initial inquiries and qualifies leads</li>
                    <li>• Basic questions (service areas, licensing, availability) answered instantly</li>
                    <li>• Complex project calls get routed to you with customer details pre-captured</li>
                    <li>• Automatic follow-up sequences for estimates over $1,000</li>
                    <li>• Appointment confirmations and reminders for site visits</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-4">
                  <p className="text-orange-900 font-semibold">
                    Real Results: 60% better lead conversion and 40% more large project wins
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-600 to-orange-800 h-96 rounded-lg flex items-center justify-center">
                <Zap className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-blue-600 to-blue-800 h-96 rounded-lg flex items-center justify-center">
                <Calendar className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Professional Project Management
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Electrical jobs vary wildly in scope, timeline, and complexity
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Smart scheduling and communication systems that handle project complexity
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Separate workflows for service calls vs. major installations</li>
                    <li>• Automatic permit reminder notifications before project start dates</li>
                    <li>• Customer updates at key milestones: "Permits approved," "Materials ordered"</li>
                    <li>• Inspection scheduling and compliance tracking</li>
                    <li>• Professional invoicing with detailed labor and material breakdowns</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-blue-900 font-semibold">
                    Real Results: 50% fewer project delays and dramatically improved customer satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-lg mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Safety and Compliance Automation
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Code compliance and safety documentation takes hours but is absolutely critical
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI assistants that help with documentation and compliance tracking
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automatic safety checklist generation for different job types</li>
                    <li>• Code compliance reminders based on project specifications</li>
                    <li>• Photo documentation requirements built into job workflows</li>
                    <li>• Warranty and maintenance reminder systems for commercial clients</li>
                    <li>• Professional reporting that satisfies insurance and regulatory requirements</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <p className="text-green-900 font-semibold">
                    Real Results: 30% reduction in compliance issues and faster insurance claim processing
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-green-800 h-96 rounded-lg flex items-center justify-center">
                <Shield className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-600 to-purple-800 h-96 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-lg mb-6">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Turn Service Calls Into Bigger Projects
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Customers call for small repairs but don't think about larger electrical needs
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> CRM systems that identify upgrade opportunities and nurture long-term relationships
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Service history tracking reveals upgrade opportunities (old panels, insufficient capacity)</li>
                    <li>• Automated educational emails about electrical safety and efficiency</li>
                    <li>• Seasonal reminders for generator maintenance, holiday lighting, HVAC electrical prep</li>
                    <li>• Follow-up campaigns for customers who received estimates but didn't buy</li>
                    <li>• Professional maintenance agreements for commercial clients</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                  <p className="text-purple-900 font-semibold">
                    Real Results: 70% increase in upsell revenue and 3x more maintenance contracts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Implementation Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We Get You There
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 90-day implementation roadmap designed for electrical contractors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 shadow-lg">
              <div className="text-orange-600 font-bold text-lg mb-2">Month 1</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Professional Communication Setup</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>AI phone system handles inquiries and qualifies leads</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Automated estimate follow-up sequences</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional appointment confirmations and project updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-orange-600 font-bold text-lg mb-2">Month 2</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Project Management Integration</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Smart scheduling for different project types</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Compliance and safety documentation workflows</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Customer communication at project milestones</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-orange-600 font-bold text-lg mb-2">Month 3+</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Business Growth Acceleration</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lead nurturing converts more estimates to projects</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional systems attract higher-paying commercial clients</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Compliance automation reduces risk and administrative time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ROI Section */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What This Actually Means for Your Bottom Line
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-orange-800/50 p-8 rounded-lg">
              <Clock className="w-12 h-12 text-orange-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Time You'll Save</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Lead qualification:</strong> AI pre-screens calls and captures project details</li>
                <li>• <strong>Follow-up work:</strong> Automated sequences for estimates and completed projects</li>
                <li>• <strong>Project coordination:</strong> Automated customer updates and milestone tracking</li>
                <li>• <strong>Compliance documentation:</strong> Streamlined safety and code compliance processes</li>
              </ul>
            </div>

            <div className="bg-orange-800/50 p-8 rounded-lg">
              <DollarSign className="w-12 h-12 text-orange-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Money You'll Make</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Better lead conversion:</strong> Professional response systems close more estimates</li>
                <li>• <strong>Larger projects:</strong> Proper nurturing converts small jobs into major installations</li>
                <li>• <strong>Commercial growth:</strong> Professional systems attract business clients</li>
                <li>• <strong>Upsell revenue:</strong> Automated identification of upgrade opportunities</li>
              </ul>
            </div>

            <div className="bg-orange-800/50 p-8 rounded-lg">
              <Shield className="w-12 h-12 text-orange-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Risk You'll Reduce</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Compliance issues:</strong> Automated tracking reduces code violations</li>
                <li>• <strong>Safety problems:</strong> Systematic documentation and checklists</li>
                <li>• <strong>Customer disputes:</strong> Clear communication and project documentation</li>
                <li>• <strong>Lost opportunities:</strong> No more forgotten follow-ups on big estimates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The Bottom Line
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Electrical work is technical, but your business doesn't have to be complicated. Your customers want professional service, clear communication, and confidence that the job will be done right. You want to focus on electrical work, not administrative hassles.
          </p>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Smart automation handles the business complexity while you handle the electrical complexity. While your competitors are missing leads and struggling with project coordination, you'll be the electrical contractor who customers trust with their biggest projects.
          </p>
          <p className="text-2xl font-semibold mb-12">
            Ready to see what this looks like for your business?
          </p>
          <button 
            onClick={() => setShowLeadCaptureModal(true)}
            className="inline-flex items-center space-x-2 bg-orange-600 text-white px-8 py-4 font-medium hover:bg-orange-700 transition-colors text-lg"
          >
            <span>Start Your Free Assessment</span>
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
                <li><Link href="/hvac" className="hover:text-orange-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-orange-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-orange-400 transition-colors">Electrical</Link></li>
                <li><Link href="/roofing" className="hover:text-orange-400 transition-colors">Roofing</Link></li>
                <li><Link href="/landscaping" className="hover:text-orange-400 transition-colors">Landscaping</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ai-strategy-development" className="hover:text-orange-400 transition-colors">AI Strategy</Link></li>
                <li><Link href="/system-integration" className="hover:text-orange-400 transition-colors">Implementation</Link></li>
                <li><Link href="/change-management" className="hover:text-orange-400 transition-colors">Scaling</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-orange-400 transition-colors">Careers</button></li>
                <li><button className="hover:text-orange-400 transition-colors">Contact</button></li>
                <li><button className="hover:text-orange-400 transition-colors">Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-orange-400 transition-colors">Subscribe</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Defiant Integrations. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <LeadCaptureModal 
        isOpen={showLeadCaptureModal} 
        onClose={() => setShowLeadCaptureModal(false)} 
      />
    </div>
  );
}