import { Navigation } from '@/components/navigation';
import { ArrowRight, Clock, DollarSign, Users, Calendar, MessageSquare, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import { useState } from 'react';

export default function HVAC() {
  useScrollToTop();
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <BlurText
              text="HVAC: Automation That Pays for Itself"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
            />
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              We help HVAC businesses grow by eliminating missed follow-ups, scheduling chaos, and customer churn with AI-powered systems that run your business while you run the jobs.
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
              The Real Problem: It's Not the Tech Shortage—It's the System Shortage
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              You're not losing money because your service is bad. You're losing money because no one follows up after a quote, customers forget about maintenance, calls go unanswered when you're on the job, and techs get double-booked. 225,000 open HVAC positions by 2025? That's not your fault. But letting $45,000 in revenue slip away from missed appointments and forgotten reminders? That can be fixed.
            </p>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-blue-600 mb-4">225,000</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Open Positions by 2025</h3>
                <p className="text-gray-600">Nearly 2 jobs for every available technician in the market</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-blue-600 mb-4">$12,000</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Average System Cost</h3>
                <p className="text-gray-600">Double what it was just a few years ago</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-blue-600 mb-4">$45,000</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Annual Revenue Lost</h3>
                <p className="text-gray-600">Due to scheduling and follow-up mistakes</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-blue-600 mb-4">24/7</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Customer Expectations</h3>
                <p className="text-gray-600">Instant responses and proactive communication</p>
              </div>
            </div>

            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-4">The Transformation: From Reactive to Revenue</h3>
              <p className="mb-4">We help HVAC companies go from chaotic scheduling and lost leads to automated, high-retention operations—without adding more staff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Offer: The System That Never Forgets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are our core service packages tailored for HVAC businesses—but we also offer custom integrations and software development solutions upon consultation. If you have a unique system, workflow, or need, we can build a solution that fits.
            </p>
            <div className="mt-8 max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 font-medium">We install a 3-part AI-powered sales and service system:</p>
            </div>
          </div>

          {/* Solution Cards */}
          <div className="space-y-20">
            {/* Solution 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  1. Follow-Up Machine
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  No more "they ghosted us."
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automated reminders (email/text) for estimates, service, and maintenance</li>
                    <li>• Re-engagement campaigns for old customers</li>
                    <li>• Birthday and seasonal messages that build loyalty</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-blue-900 font-semibold">
                    Real Results: 40% drop in no-shows, 3x increase in repeat bookings
                  </p>
                </div>
              </div>
              <div className="h-96 rounded-lg overflow-hidden">
                <img 
                  src="/attached_assets/image_1754933392703.png"
                  alt="Automated workflow diagram showing email to customer retention process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Solution 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-green-600 to-green-800 h-96 rounded-lg flex items-center justify-center">
                <Calendar className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-lg mb-6">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  2. Smart Scheduler
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  No more wasted hours moving appointments around.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Auto-sync calendar + CRM</li>
                    <li>• Drag-and-drop job board</li>
                    <li>• Customer alerts for time changes or ETA</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <p className="text-green-900 font-semibold">
                    Real Results: 40% drop in no-shows, 60% more maintenance sign-ups
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-lg mb-6">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  3. AI Front Desk
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  No more missed calls or late-night messages.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Phone AI that answers, qualifies, and books</li>
                    <li>• Website chatbot that closes leads while you sleep</li>
                    <li>• FAQ-trained assistant that saves your techs' time</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                  <p className="text-purple-900 font-semibold">
                    Real Results: 70% fewer phone interruptions
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 h-96 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Real HVAC Wins Section */}
            <div className="bg-blue-900 text-white p-12 rounded-lg text-center">
              <h3 className="font-serif text-3xl font-bold mb-8">Real HVAC Wins (Because We Built This With You in Mind)</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-300 mb-2">40%</div>
                  <div className="text-lg">drop in no-shows</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-300 mb-2">3x</div>
                  <div className="text-lg">increase in repeat bookings</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-300 mb-2">60%</div>
                  <div className="text-lg">more maintenance sign-ups</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-300 mb-2">70%</div>
                  <div className="text-lg">fewer phone interruptions</div>
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
              The Implementation Roadmap (90 Days to Freedom)
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 shadow-lg">
              <div className="text-blue-600 font-bold text-lg mb-2">Month 1</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Foundations</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Connect calendar, CRM, and email</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Install AI chatbot + phone AI</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Launch estimate + booking follow-up automations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-blue-600 font-bold text-lg mb-2">Month 2</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Optimization</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Build seasonal marketing calendar</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Train AI with your top FAQs and service types</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Add review request + customer check-in workflows</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-blue-600 font-bold text-lg mb-2">Month 3+</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Automation Flywheel</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Turn installs into recurring maintenance clients</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Segment customers by equipment type</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Automate slow-season promos and reactivations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why This Works (And Why Your Competitors Won't Do It)
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="font-serif text-3xl font-bold mb-6">They're still chasing techs and playing scheduling Tetris.</h3>
              <p className="text-xl text-gray-200 mb-8">You'll have:</p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <span>A system that follows up for you</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <span>A phone line that qualifies leads 24/7</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <span>A schedule that runs itself</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <span>A brand that customers remember</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-96 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-32 h-32 text-white/20" />
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold mb-4">This isn't just automation. It's elevation.</p>
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
            Your customers want to feel valued and remembered. They want quick responses and proactive communication. You want to grow your business without spending all day managing schedules and chasing follow-ups.
          </p>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Smart automation isn't about replacing the personal touch—it's about making sure you never miss an opportunity to provide it. While your competitors are still playing phone tag and forgetting to follow up, you'll be the company that customers can count on.
          </p>
          <p className="text-2xl font-semibold mb-12">
            Ready to see what this looks like for your business?
          </p>
          <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 font-medium hover:bg-blue-700 transition-colors text-lg">
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
                <li><Link href="/hvac" className="hover:text-blue-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-blue-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-blue-400 transition-colors">Electrical</Link></li>
                <li><Link href="/golf-courses" className="hover:text-blue-400 transition-colors">Golf Courses</Link></li>
                <li><Link href="/restaurants-cafes" className="hover:text-blue-400 transition-colors">Restaurants & Cafés</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ai-strategy-development" className="hover:text-blue-400 transition-colors">AI Strategy</Link></li>
                <li><Link href="/system-integration" className="hover:text-blue-400 transition-colors">Implementation</Link></li>
                <li><Link href="/change-management" className="hover:text-blue-400 transition-colors">Scaling</Link></li>
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
                <li><button className="hover:text-blue-400 transition-colors">Subscribe</button></li>
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
        title="HVAC AI Assessment"
        subtitle="Get a customized automation strategy for your HVAC business"
      />
    </div>
  );
}