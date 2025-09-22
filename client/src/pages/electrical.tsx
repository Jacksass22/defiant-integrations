import { ArrowRight, Clock, DollarSign, Shield, Calendar, FileCheck, TrendingUp, CheckCircle, Zap } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';
import Lightning from '@/components/Lightning';
import { useState } from 'react';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import electricianImage from '@assets/Electrical Image 1.jpg';
import electricianImage2 from '@assets/Electrical Image 2.jpg';
import electricianImagePM from '@assets/Electrical image 3 PM.jpg';
import electricianImageSC from '@assets/Electrical image 4 SC.jpg';
import electricianImageSMM from '@assets/Electrical image 5 SMM.jpg';
import electricianImageOB from '@assets/Electrical image 6 OB.png';

export default function Electrical() {
  useScrollToTop();
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  
  return (
    <div className="bg-white text-charcoal font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 overflow-hidden">
        {/* Lightning Background Effect */}
        <div className="absolute inset-0 opacity-30">
          <Lightning
            hue={180}
            xOffset={0}
            speed={0.8}
            intensity={0.6}
            size={2}
          />
        </div>
        
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
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
      {/* CTA Section with Image */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Electrical Business?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                See how smart automation can streamline your operations and grow your revenue.
              </p>
              <button 
                onClick={() => setShowLeadCaptureModal(true)}
                className="inline-flex items-center space-x-2 bg-teal-600 text-white px-8 py-4 font-medium hover:bg-teal-700 transition-colors shadow-lg text-lg rounded-lg"
              >
                <span>Start Your Free Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src={electricianImage}
                alt="Electrician on-site installing wiring and inspecting panels"
                className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-2xl shadow-xl ring-1 ring-black/5"
                loading="lazy"
              />
            </div>
          </div>
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
                <div className="text-5xl font-bold text-teal-600 mb-4">85%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Missed Follow-ups</h3>
                <p className="text-gray-600">of leads that never get proper follow-up contact are lost. </p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-teal-600 mb-4">40%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Admin Time</h3>
                <p className="text-gray-600">Of your day spent on paperwork instead of billable electrical work</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-teal-600 mb-4">3x</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Permit Delays</h3>
                <p className="text-gray-600">Projects delayed due to missed permit deadlines and compliance issues</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-teal-600 mb-4">72hr</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Response Window</h3>
                <p className="text-gray-600">Maximum time before customers call your competitors for estimates</p>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-4">What This Means for Your Business</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>Big estimates sit for weeks without proper follow-up</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>Scheduling gets complicated with jobs of different sizes and complexity</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>Administrative work pulls you away from billable hours</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>Customers comparison shop and go with faster responders</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-300 flex-shrink-0 mt-0.5" />
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-lg mb-6">
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
                <div className="bg-teal-50 border-l-4 border-teal-600 p-4">
                  <p className="text-teal-900 font-semibold">
                    Real Results: 60% better lead conversion and 40% more large project wins
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={electricianImage2}
                  alt="Electrical work and project management"
                  className="w-full h-96 object-cover rounded-lg shadow-xl ring-1 ring-black/5"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Solution 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img
                  src={electricianImagePM}
                  alt="Professional electrical project management and scheduling"
                  className="w-full h-96 object-cover rounded-lg shadow-xl ring-1 ring-black/5"
                  loading="lazy"
                />
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
              <div className="relative">
                <img
                  src={electricianImageSC}
                  alt="Electrical safety compliance and documentation"
                  className="w-full h-96 object-cover rounded-lg shadow-xl ring-1 ring-black/5"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Solution 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img
                  src={electricianImageSMM}
                  alt="Social media marketing and AI content creation for electrical contractors"
                  className="w-full h-96 object-cover rounded-lg shadow-xl ring-1 ring-black/5"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-lg mb-6">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  AI-Powered Social Media Marketing
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Electrical contractors struggle to maintain consistent social media presence while running their business
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI-powered marketing automation that creates engaging content and nurtures customer relationships
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI-generated before/after project images and professional job photos</li>
                    <li>• Automated seasonal marketing campaigns (holiday lighting, generator prep, safety inspections)</li>
                    <li>• Smart email sequences with electrical tips, maintenance reminders, and safety updates</li>
                    <li>• Social media posts showcasing completed projects with AI-enhanced visuals</li>
                    <li>• Targeted discount campaigns for past customers and referral programs</li>
                    <li>• Educational content about electrical codes, energy efficiency, and safety</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                  <p className="text-purple-900 font-semibold">
                    Real Results: 85% more social media engagement and 60% increase in referral business
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 5 */}
            <div className="grid lg:grid-cols-[1.05fr_1.1fr] gap-6 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-lg mb-6">
                  <FileCheck className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Smart Employee Onboarding & Knowledge Management System
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Employees constantly interrupt you with questions about procedures, policies, and company information
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI-powered knowledge management system with your entire knowledge base, SOPs, and frequently asked questions
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Custom-trained large language model built on your company policies, procedures, and electrical standards</li>
                    <li>• Web-based chat interface where employees can ask questions about safety protocols, code requirements, or job procedures</li>
                    <li>• Integration with your scheduling, inventory, and project management systems</li>
                    <li>• Automated onboarding sequences for new hires with company-specific electrical practices</li>
                    <li>• FAQ database covering customer questions, pricing, and service offerings</li>
                    <li>• Memory system that learns from interactions and improves over time</li>
                    <li>• Escalation to supervisors when questions require human expertise</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4">
                  <p className="text-indigo-900 font-semibold">
                    Real Results: 70% reduction in interruptions and 50% faster new employee productivity
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={electricianImageOB}
                  alt="Employee onboarding and knowledge management system for electrical contractors"
                  className="w-full h-[30rem] sm:h-[32rem] lg:h-[36rem] max-h-[80vh] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ROI Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What This Actually Means for Your Bottom Line
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 p-8 rounded-lg">
              <Clock className="w-12 h-12 text-teal-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Time You'll Save</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Call routing and filtering:</strong> AI handles initial inquiries and routes qualified leads to you</li>
                <li>• <strong>Follow-up work:</strong> Automated sequences for estimates and completed projects</li>
                <li>• <strong>Project coordination:</strong> Automated customer updates and milestone tracking</li>
                <li>• <strong>Compliance documentation:</strong> Streamlined safety and code compliance processes</li>
              </ul>
            </div>

            <div className="bg-slate-800/80 p-8 rounded-lg">
              <DollarSign className="w-12 h-12 text-teal-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Money You'll Make</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Better lead conversion:</strong> Professional response systems close more estimates</li>
                <li>• <strong>Larger projects:</strong> Proper nurturing converts small jobs into major installations</li>
                <li>• <strong>Commercial growth:</strong> Professional systems attract business clients</li>
                <li>• <strong>Upsell revenue:</strong> Automated identification of upgrade opportunities</li>
              </ul>
            </div>

            <div className="bg-slate-800/80 p-8 rounded-lg">
              <Shield className="w-12 h-12 text-teal-300 mb-4" />
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
            className="inline-flex items-center space-x-2 bg-teal-600 text-white px-8 py-4 font-medium hover:bg-teal-700 transition-colors text-lg rounded-lg"
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
                <li><Link href="/hvac" className="hover:text-teal-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-teal-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-teal-400 transition-colors">Electrical</Link></li>
                <li><Link href="/roofing" className="hover:text-teal-400 transition-colors">Roofing</Link></li>
                <li><Link href="/landscaping" className="hover:text-teal-400 transition-colors">Landscaping</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ai-strategy-development" className="hover:text-teal-400 transition-colors">AI Strategy</Link></li>
                <li><Link href="/system-integration" className="hover:text-teal-400 transition-colors">Implementation</Link></li>
                <li><Link href="/change-management" className="hover:text-teal-400 transition-colors">Scaling</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-teal-400 transition-colors">Careers</button></li>
                <li><button className="hover:text-teal-400 transition-colors">Contact</button></li>
                <li><button className="hover:text-teal-400 transition-colors">Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-teal-400 transition-colors">Subscribe</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Defiant Integrations. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Lead Capture Modal */}
      <LeadCaptureModal 
        open={showLeadCaptureModal}
        onOpenChange={setShowLeadCaptureModal}
      />

    </div>
  );
}