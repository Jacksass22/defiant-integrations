import { ArrowRight, Clock, DollarSign, HardHat, Camera, MessageSquare, TrendingUp, CheckCircle, Building2 } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import { useState } from 'react';

export default function GeneralContracting() {
  useScrollToTop();
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  
  return (
    <div className="bg-white text-charcoal font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-br from-amber-900 via-amber-800 to-brown-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <BlurText
              text="General Contracting: Smart Technology That Actually Works for Your Business"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
            />
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Manage complex projects, communicate professionally, and build a reputation that attracts premium remodeling and construction work.
            </p>
            <button 
              onClick={() => setShowLeadCaptureModal(true)}
              className="inline-flex items-center space-x-2 bg-white text-amber-900 px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
            >
              <span>Start Your Free Assessment</span>
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
              What General Contractors Are Dealing With Right Now
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              Running a general contracting company means juggling multiple trades, managing complex timelines, and keeping customers informed through months-long projects. You're coordinating everything from permits to final inspections while trying to stay profitable on projects that can change scope at any moment.
            </p>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-amber-600 mb-4">120%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Lead Increase</h3>
                <p className="text-gray-600">More qualified leads for premium renovation projects</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-amber-600 mb-4">80%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Higher Project Value</h3>
                <p className="text-gray-600">When positioned as premium construction experts</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-amber-600 mb-4">6x</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">More Engagement</h3>
                <p className="text-gray-600">On project content and transformation stories</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-amber-600 mb-4">95%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Client Satisfaction</h3>
                <p className="text-gray-600">With automated project communication</p>
              </div>
            </div>

            <div className="bg-amber-900 text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-4">What This Means for Your Business</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-300 flex-shrink-0 mt-0.5" />
                  <span>Project delays cascade through your entire schedule</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-300 flex-shrink-0 mt-0.5" />
                  <span>Customer expectations don't account for construction realities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-300 flex-shrink-0 mt-0.5" />
                  <span>Communication gaps lead to disputes and bad reviews</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-300 flex-shrink-0 mt-0.5" />
                  <span>Administrative work pulls you away from job sites and project management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-300 flex-shrink-0 mt-0.5" />
                  <span>Word-of-mouth referrals take months to materialize after project completion</span>
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
              Transform your contracting business with AI-powered marketing and professional systems
            </p>
          </div>

          {/* Solution Cards */}
          <div className="space-y-20">
            {/* Solution 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-lg mb-6">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Generate High-Value Project Leads
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Premium remodeling projects go to contractors with professional marketing and proven track records
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Professional lead generation and content that attracts serious renovation clients
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Google Ads targeting "home renovation," "kitchen remodel," and "home addition" searches</li>
                    <li>• Educational content about construction processes, timelines, and what to expect</li>
                    <li>• Project galleries showing complete transformations from start to finish</li>
                    <li>• Cost guides and planning resources that position you as the expert</li>
                    <li>• SEO targeting homeowners planning major renovations</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
                  <p className="text-amber-900 font-semibold">
                    Real Results: 120% increase in qualified leads and 80% higher average project value
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-600 to-amber-800 h-96 rounded-lg flex items-center justify-center">
                <Building2 className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-orange-600 to-orange-800 h-96 rounded-lg flex items-center justify-center">
                <Camera className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-lg mb-6">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Project Showcase and Professional Content
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Amazing transformations happen behind closed doors where potential customers can't see them
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI-powered content creation that documents and showcases your construction expertise
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Complete project documentation from demo to final reveal</li>
                    <li>• Time-lapse videos showing construction progress and attention to detail</li>
                    <li>• Before/during/after content highlighting problem-solving and craftsmanship</li>
                    <li>• Educational videos about construction processes and quality standards</li>
                    <li>• Client testimonials with transformation stories and project outcomes</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-4">
                  <p className="text-orange-900 font-semibold">
                    Real Results: 6x more engagement on project content and 90% more referrals from completed work
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Professional Project Communication
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Construction projects are complex and customers need constant updates to stay comfortable
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI systems that handle routine communication and keep projects moving smoothly
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI phone system qualifies leads and schedules initial consultations</li>
                    <li>• Automated project milestone updates with photos and timeline adjustments</li>
                    <li>• Permit and inspection scheduling with automatic customer notifications</li>
                    <li>• Change order workflows with clear cost and timeline implications</li>
                    <li>• Weekly progress reports with photos and upcoming week's schedule</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-blue-900 font-semibold">
                    Real Results: 70% fewer customer complaints and 95% client satisfaction scores
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-96 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-green-600 to-green-800 h-96 rounded-lg flex items-center justify-center">
                <HardHat className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-lg mb-6">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Turn Completed Projects Into Ongoing Opportunities
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Great construction work doesn't automatically generate future business
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Systematic relationship building and portfolio marketing
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Post-project follow-up campaigns highlighting warranty and maintenance services</li>
                    <li>• Seasonal reminders about home maintenance and improvement opportunities</li>
                    <li>• Referral programs with automated tracking and neighborhood marketing</li>
                    <li>• Content about home value improvements and ROI of quality construction</li>
                    <li>• Long-term relationship building for future phases or family referrals</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <p className="text-green-900 font-semibold">
                    Real Results: 80% of clients become referral sources and 40% return for additional projects
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
              A proven 90-day implementation roadmap designed for general contractors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 shadow-lg">
              <div className="text-amber-600 font-bold text-lg mb-2">Month 1</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Professional Project Marketing</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lead generation campaigns targeting premium remodeling searches</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional website with project galleries and construction expertise content</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>AI communication system for lead qualification and project updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-amber-600 font-bold text-lg mb-2">Month 2</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Project Documentation and Content</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Before/during/after content creation showcasing construction transformations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Automated milestone communication and progress reporting systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Educational content about construction processes and quality standards</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-amber-600 font-bold text-lg mb-2">Month 3+</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Premium Market Positioning</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Project showcase content establishes reputation for quality construction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional communication systems support premium pricing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Systematic portfolio marketing attracts high-value renovation clients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What This Actually Means for Your Bottom Line
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-amber-800/50 p-8 rounded-lg">
              <Building2 className="w-12 h-12 text-amber-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Leads You'll Generate</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Premium projects:</strong> Attract homeowners planning major renovations</li>
                <li>• <strong>Educated customers:</strong> Content marketing pre-qualifies clients</li>
                <li>• <strong>Referral multiplication:</strong> Systematic showcase generates neighborhood interest</li>
                <li>• <strong>Commercial opportunities:</strong> Professional systems attract business property work</li>
              </ul>
            </div>

            <div className="bg-amber-800/50 p-8 rounded-lg">
              <DollarSign className="w-12 h-12 text-amber-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Money You'll Make</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Higher project values:</strong> Premium marketing attracts significant investments</li>
                <li>• <strong>Better margins:</strong> Professional positioning supports higher profit margins</li>
                <li>• <strong>Change order acceptance:</strong> Clear communication improves approval rates</li>
                <li>• <strong>Repeat business:</strong> Long-term relationships lead to additional phases</li>
              </ul>
            </div>

            <div className="bg-amber-800/50 p-8 rounded-lg">
              <Clock className="w-12 h-12 text-amber-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Time You'll Save</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Lead qualification:</strong> AI handles initial inquiries and schedules consultations</li>
                <li>• <strong>Project communication:</strong> Automated updates handle routine questions</li>
                <li>• <strong>Documentation:</strong> Systematic photography and reporting saves time</li>
                <li>• <strong>Follow-up work:</strong> Automated systems generate future opportunities</li>
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
            General contracting is about bringing visions to life and solving complex construction challenges. Your customers want confidence in your expertise, clear communication throughout the process, and results that exceed their expectations. You want to attract clients who value quality work and understand construction realities.
          </p>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Smart marketing and automation showcase your construction expertise while handling the complex communication demands automatically. While your competitors are struggling with project coordination and customer management, you'll be the general contractor that homeowners trust with their most important renovation dreams.
          </p>
          <p className="text-2xl font-semibold mb-12">
            Ready to see what this looks like for your business?
          </p>
          <button 
            onClick={() => setShowLeadCaptureModal(true)}
            className="inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-4 font-medium hover:bg-amber-700 transition-colors text-lg"
          >
            <span>Start Your Free Assessment</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        open={showLeadCaptureModal}
        onOpenChange={setShowLeadCaptureModal}
        title="Transform Your Contracting Business"
        subtitle="Get a customized assessment for your general contracting company"
      />

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
                <li><Link href="/hvac" className="hover:text-amber-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-amber-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-amber-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-amber-400 transition-colors">Landscaping</Link></li>
                <li><Link href="/roofing" className="hover:text-amber-400 transition-colors">Roofing</Link></li>
                <li><Link href="/painting" className="hover:text-amber-400 transition-colors">Painting</Link></li>
                <li><Link href="/general-contracting" className="hover:text-amber-400 transition-colors">General Contracting</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ai-strategy-development" className="hover:text-amber-400 transition-colors">AI Strategy</Link></li>
                <li><Link href="/system-integration" className="hover:text-amber-400 transition-colors">Implementation</Link></li>
                <li><Link href="/change-management" className="hover:text-amber-400 transition-colors">Scaling</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-amber-400 transition-colors">Careers</button></li>
                <li><button className="hover:text-amber-400 transition-colors">Contact</button></li>
                <li><button className="hover:text-amber-400 transition-colors">Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-amber-400 transition-colors">Subscribe</button></li>
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