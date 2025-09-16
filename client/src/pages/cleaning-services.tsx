import { ArrowRight, Clock, DollarSign, Sparkles, Calendar, MessageSquare, TrendingUp, CheckCircle, Users } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import { useState } from 'react';

export default function CleaningServices() {
  useScrollToTop();
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  
  return (
    <div className="bg-white text-charcoal font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-br from-cyan-600 via-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <BlurText
              text="Cleaning Services: Smart Technology That Actually Works for Your Business"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
            />
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Streamline operations, reduce no-shows, and build a reputation that commands premium pricing in a crowded market.
            </p>
            <button 
              onClick={() => setShowLeadCaptureModal(true)}
              className="inline-flex items-center space-x-2 bg-white text-blue-900 px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
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
              What Cleaning Services Are Dealing With Right Now
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              Running a cleaning service means managing teams, juggling schedules, and building trust with customers who are letting you into their most personal spaces. You're competing against big franchises and individual cleaners while trying to maintain quality across multiple locations and time slots.
            </p>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-cyan-600 mb-4">200%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Lead Increase</h3>
                <p className="text-gray-600">More qualified leads from quality-focused customers</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-cyan-600 mb-4">60%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Higher Customer Value</h3>
                <p className="text-gray-600">When positioned as premium professional service</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-cyan-600 mb-4">4x</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">More Engagement</h3>
                <p className="text-gray-600">On professional service content and testimonials</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-cyan-600 mb-4">50%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">No-Show Reduction</h3>
                <p className="text-gray-600">With automated confirmation and reminder systems</p>
              </div>
            </div>

            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-4">What This Means for Your Business</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Lost revenue from last-minute cancellations and no-shows</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Difficulty maintaining full schedules for all cleaning teams</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Customer complaints when quality varies between visits</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Administrative time spent on scheduling and rescheduling</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Slow growth because satisfied customers don't automatically refer others</span>
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
              Transform your cleaning business with AI-powered marketing and professional systems
            </p>
          </div>

          {/* Solution Cards */}
          <div className="space-y-20">
            {/* Solution 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-lg mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Generate Premium Quality Leads
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Many customers choose cleaning services based solely on price
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Professional lead generation and content that attracts customers who value reliability and quality
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Google Ads targeting "reliable house cleaning," "professional maid service," and "trusted cleaning company"</li>
                    <li>• Educational content about cleaning standards, team training, and quality assurance</li>
                    <li>• Before/after photos showing attention to detail and transformation results</li>
                    <li>• Content about background checks, insurance, and professional protocols</li>
                    <li>• SEO targeting customers ready to invest in quality cleaning services</li>
                  </ul>
                </div>
                <div className="bg-cyan-50 border-l-4 border-cyan-600 p-4">
                  <p className="text-cyan-900 font-semibold">
                    Real Results: 200% increase in qualified leads and 60% higher average customer lifetime value
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-600 to-blue-800 h-96 rounded-lg flex items-center justify-center">
                <Sparkles className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-blue-600 to-purple-700 h-96 rounded-lg flex items-center justify-center">
                <Users className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Professional Service Marketing
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Great cleaning work is temporary and hard to showcase to potential customers
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI-powered content creation that builds trust and demonstrates professionalism
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional team photos and behind-the-scenes content showing training and protocols</li>
                    <li>• Customer testimonials focusing on reliability, trustworthiness, and consistency</li>
                    <li>• Educational content about cleaning techniques, products, and health benefits</li>
                    <li>• Seasonal cleaning tips and home maintenance advice</li>
                    <li>• Social proof through reviews and customer success stories</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-blue-900 font-semibold">
                    Real Results: 4x more social media engagement and 80% more referrals from existing customers
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-lg mb-6">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Smart Scheduling and Communication
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Cleaning schedules are complex and changes create chaos for teams and customers
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI systems that handle bookings, confirmations, and schedule optimization
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI phone system handles booking inquiries and schedules initial consultations</li>
                    <li>• Automated appointment confirmations and reminders 24 hours before service</li>
                    <li>• Easy rescheduling system that automatically finds alternative time slots</li>
                    <li>• Team arrival notifications: "Your cleaning team will arrive in 30 minutes"</li>
                    <li>• Service completion confirmations with satisfaction surveys</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                  <p className="text-purple-900 font-semibold">
                    Real Results: 50% reduction in no-shows and 90% improvement in schedule efficiency
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-700 h-96 rounded-lg flex items-center justify-center">
                <Calendar className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-teal-600 to-green-700 h-96 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-lg mb-6">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Turn One-Time Cleanings Into Regular Clients
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Customers try your service once but don't commit to regular schedules
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Automated relationship building that converts trials into recurring revenue
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Follow-up campaigns after initial cleanings offering regular service discounts</li>
                    <li>• Seasonal cleaning reminders for deep cleaning and special services</li>
                    <li>• Automatic rebooking suggestions based on customer preferences</li>
                    <li>• Loyalty programs with automated tracking and rewards</li>
                    <li>• Referral incentives with easy sharing options for satisfied customers</li>
                  </ul>
                </div>
                <div className="bg-teal-50 border-l-4 border-teal-600 p-4">
                  <p className="text-teal-900 font-semibold">
                    Real Results: 70% of trial customers become regular weekly or bi-weekly clients
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
              A proven 90-day implementation roadmap designed for cleaning services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 shadow-lg">
              <div className="text-cyan-600 font-bold text-lg mb-2">Month 1</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Professional Trust Building</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lead generation campaigns targeting quality-focused cleaning searches</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional website with team photos, testimonials, and service guarantees</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>AI phone system for booking inquiries and service confirmations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-cyan-600 font-bold text-lg mb-2">Month 2</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Scheduling and Communication Optimization</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Automated booking confirmations and appointment reminders</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Schedule optimization systems to minimize travel time and maximize efficiency</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Customer communication workflows for service updates and feedback</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-cyan-600 font-bold text-lg mb-2">Month 3+</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Customer Retention and Growth</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Trust-building content establishes reputation for reliable, professional service</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Automated scheduling reduces no-shows and improves team efficiency</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Customer retention systems convert trials into recurring revenue</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What This Actually Means for Your Bottom Line
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-blue-800/50 p-8 rounded-lg">
              <Sparkles className="w-12 h-12 text-cyan-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Leads You'll Generate</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Quality-focused customers:</strong> Attract clients who value reliability over lowest price</li>
                <li>• <strong>Regular service clients:</strong> Target customers ready for weekly or bi-weekly cleaning</li>
                <li>• <strong>Premium services:</strong> Generate leads for deep cleaning, move-out, and special events</li>
                <li>• <strong>Commercial opportunities:</strong> Professional image attracts office and business contracts</li>
              </ul>
            </div>

            <div className="bg-blue-800/50 p-8 rounded-lg">
              <DollarSign className="w-12 h-12 text-cyan-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Money You'll Make</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Higher retention rates:</strong> Convert 70% of trials into regular recurring customers</li>
                <li>• <strong>Premium pricing:</strong> Professional positioning supports higher rates</li>
                <li>• <strong>Schedule efficiency:</strong> Reduced travel time allows more cleanings per day</li>
                <li>• <strong>Add-on services:</strong> Upsell deep cleaning, organization, and seasonal services</li>
              </ul>
            </div>

            <div className="bg-blue-800/50 p-8 rounded-lg">
              <Clock className="w-12 h-12 text-cyan-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Time You'll Save</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Booking management:</strong> AI handles initial inquiries and scheduling requests</li>
                <li>• <strong>Confirmation calls:</strong> Automated reminders reduce no-shows without staff time</li>
                <li>• <strong>Rescheduling chaos:</strong> Smart systems find alternative slots automatically</li>
                <li>• <strong>Customer follow-up:</strong> Automated satisfaction surveys and rebooking campaigns</li>
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
            Cleaning services are about more than just making spaces look good - they're about trust, reliability, and giving customers time to focus on what matters most to them. Your customers want consistency, professionalism, and peace of mind when someone enters their personal space.
          </p>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Smart marketing and automation build trust while handling the complex scheduling demands automatically. While your competitors are struggling with no-shows and price competition, you'll be the cleaning service that customers trust with their homes and recommend to their friends.
          </p>
          <p className="text-2xl font-semibold mb-12">
            Ready to see what this looks like for your business?
          </p>
          <button 
            onClick={() => setShowLeadCaptureModal(true)}
            className="inline-flex items-center space-x-2 bg-cyan-600 text-white px-8 py-4 font-medium hover:bg-cyan-700 transition-colors text-lg"
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
                <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-cyan-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-cyan-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-cyan-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-cyan-400 transition-colors">Landscaping</Link></li>
                <li><Link href="/roofing" className="hover:text-cyan-400 transition-colors">Roofing</Link></li>
                <li><Link href="/painting" className="hover:text-cyan-400 transition-colors">Painting</Link></li>
                <li><Link href="/general-contracting" className="hover:text-cyan-400 transition-colors">General Contracting</Link></li>
                <li><Link href="/cleaning-services" className="hover:text-cyan-400 transition-colors">Cleaning Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ai-strategy-development" className="hover:text-cyan-400 transition-colors">AI Strategy</Link></li>
                <li><Link href="/system-integration" className="hover:text-cyan-400 transition-colors">Implementation</Link></li>
                <li><Link href="/change-management" className="hover:text-cyan-400 transition-colors">Scaling</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-cyan-400 transition-colors">Careers</button></li>
                <li><button className="hover:text-cyan-400 transition-colors">Contact</button></li>
                <li><button className="hover:text-cyan-400 transition-colors">Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-cyan-400 transition-colors">Subscribe</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Defiant Integrations. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <LeadCaptureModal
        open={showLeadCaptureModal}
        onOpenChange={setShowLeadCaptureModal}
        title="Cleaning Service AI Assessment"
        subtitle="Get a customized automation strategy for your cleaning business"
      />
    </div>
  );
}