import { Navigation } from '@/components/navigation';
import { ArrowRight, Clock, DollarSign, Users, Calendar, MessageSquare, TrendingUp, CheckCircle, Heart, Camera, Phone } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import { useState } from 'react';

export default function PetGroomingBoarding() {
  useScrollToTop();
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <BlurText
              text="Pet Grooming & Boarding: Smart Technology That Actually Works for Your Business"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
            />
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Transform your pet care business with AI-powered solutions that streamline operations, showcase your work, and create stress-free growth—without needing a tech degree.
            </p>
            <button 
              onClick={() => setShowLeadCaptureModal(true)}
              className="inline-flex items-center space-x-2 bg-white text-purple-900 px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
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
              What Pet Grooming & Boarding Businesses Are Dealing With Right Now
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              Running a pet grooming or boarding business means more than just caring for animals—you're juggling appointments, managing staff, handling last-minute cancellations, and trying to keep both pets and their owners happy. Meanwhile, your phone rings off the hook, your social media hasn't been updated in weeks, and you're constantly chasing no-shows or follow-ups.
            </p>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-purple-600 mb-4">72%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Phone-Based Bookings</h3>
                <p className="text-gray-600">Of grooming appointments are booked via phone—and 1 in 3 calls go unanswered</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-purple-600 mb-4">60%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Want Automated Reminders</h3>
                <p className="text-gray-600">Of pet owners would book recurring grooming if automated reminders were in place</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-purple-600 mb-4">5x</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Higher Engagement</h3>
                <p className="text-gray-600">On social media posts that include pets' before/after shots</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-purple-600 mb-4">200%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Lead Increase Potential</h3>
                <p className="text-gray-600">Qualified leads and 40% higher average order value from premium packages</p>
              </div>
            </div>

            <div className="bg-purple-900 text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-4">What This Means for Your Business</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-300 flex-shrink-0 mt-0.5" />
                  <span>Last-minute cancellations hurt your schedule and revenue</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-300 flex-shrink-0 mt-0.5" />
                  <span>Missed calls often mean missed bookings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-300 flex-shrink-0 mt-0.5" />
                  <span>One-time visits rarely turn into long-term clients</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-300 flex-shrink-0 mt-0.5" />
                  <span>You're doing amazing work, but no one sees it online</span>
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
              Transform your pet business with AI-powered marketing and automation
            </p>
          </div>

          {/* Solution Cards */}
          <div className="space-y-20">
            {/* Solution 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-lg mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Generate More Pet Clients, All Year Long
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> You rely too heavily on walk-ins, referrals, or outdated methods like flyers and business cards
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> We run targeted lead generation campaigns to bring pet parents to your booking system—automatically
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Google Ads targeting "dog grooming near me" or "pet boarding with webcam access"</li>
                    <li>• SEO optimization to rank locally for grooming, bathing, nail trimming, and boarding</li>
                    <li>• Facebook/Instagram lead ads targeting local pet owners</li>
                    <li>• Local listings management to ensure your Google Maps presence is polished</li>
                    <li>• Automated booking links embedded in all marketing content</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                  <p className="text-purple-900 font-semibold">
                    Real Results: Up to 200% increase in qualified leads and 40% higher average order value from premium grooming packages
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-800 h-96 rounded-lg flex items-center justify-center">
                <Heart className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-pink-600 to-purple-800 h-96 rounded-lg flex items-center justify-center">
                <Camera className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 text-pink-600 rounded-lg mb-6">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Showcase Your Pet Care With Professional Content
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Your adorable results never make it online, and potential clients don't know how good you are
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> We create and post your best before/after pet photos, testimonials, and educational content—automatically
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Before/after transformation posts with captions that sell your service</li>
                    <li>• Seasonal grooming tips or pet care content calendars</li>
                    <li>• Client testimonials with photos of their happy pets</li>
                    <li>• Stories and reels that spotlight your shop's personality and love for animals</li>
                    <li>• Consistent, automated social media posting on Facebook, Instagram, and Google</li>
                  </ul>
                </div>
                <div className="bg-pink-50 border-l-4 border-pink-600 p-4">
                  <p className="text-pink-900 font-semibold">
                    Real Results: 5x more engagement and 60% increase in repeat bookings from stronger online presence
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Cut Interruptions & Missed Calls With AI Phone Systems
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> You're constantly interrupted by calls asking about hours, services, or availability—and you're missing real leads
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Our AI assistant answers your phone, filters calls, books appointments, and updates customers—24/7
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI receptionist that handles common questions and routes urgent calls</li>
                    <li>• Online booking synced with your calendar—no more double-bookings</li>
                    <li>• Automated texts/emails for appointment confirmations and reminders</li>
                    <li>• Last-minute cancellation rebooking prompts</li>
                    <li>• CRM integration that tracks each pet's visit history and preferences</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-blue-900 font-semibold">
                    Real Results: 70% fewer phone interruptions and 30-50% no-show reduction with automated confirmations
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-800 h-96 rounded-lg flex items-center justify-center">
                <Phone className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-green-600 to-purple-800 h-96 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-lg mb-6">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Turn First-Timers Into Lifelong Clients
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Clients love your service, but don't always come back—because you're not staying in touch
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Email and SMS automation that keeps your business top-of-mind and encourages recurring bookings
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automated "time for another groom?" reminders</li>
                    <li>• Seasonal check-ins (e.g., "Spring Shed Alert!" campaigns)</li>
                    <li>• Birthday or adoption-day messages with special offers</li>
                    <li>• Educational emails on pet hygiene or seasonal prep</li>
                    <li>• Rebooking prompts after first appointment with one-click scheduling</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <p className="text-green-900 font-semibold">
                    Real Results: 70–80% retention rate for regular grooming clients and 25–40% lift in recurring revenue
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
              A proven 90-day roadmap for modernizing your pet care business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 shadow-lg">
              <div className="text-purple-600 font-bold text-lg mb-2">Month 1</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Get Discovered & Start Booking</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lead generation ads and SEO setup</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Online booking + CRM integration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>AI phone assistant installation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Social media setup and branding refresh</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-purple-600 font-bold text-lg mb-2">Month 2</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Content, Communication & Campaigns</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Before/after content library created</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Automated reminder and rebooking campaigns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Seasonal promotion calendar implemented</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Social media automation begins</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-purple-600 font-bold text-lg mb-2">Month 3+</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Grow & Optimize</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Refine targeting based on results</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Launch referral automation and loyalty systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Analyze performance and optimize content strategy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Begin scaling into new neighborhoods or offerings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What This Actually Means for Your Bottom Line
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-purple-800/50 p-8 rounded-lg">
              <Users className="w-12 h-12 text-purple-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Leads You'll Generate</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• Local pet owners ready to spend on high-quality grooming/boarding</li>
                <li>• Premium customers looking for trust, not just price</li>
                <li>• Repeat business that fills your calendar without constant hustle</li>
              </ul>
            </div>

            <div className="bg-purple-800/50 p-8 rounded-lg">
              <DollarSign className="w-12 h-12 text-purple-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Money You'll Make</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• Higher ticket value from upsold services</li>
                <li>• Predictable monthly income from recurring bookings</li>
                <li>• Better client retention means less marketing spend</li>
              </ul>
            </div>

            <div className="bg-purple-800/50 p-8 rounded-lg">
              <Clock className="w-12 h-12 text-purple-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Time You'll Save</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• Phone time cut by 70%</li>
                <li>• No more manual reminders or follow-ups</li>
                <li>• Social media and email marketing done automatically</li>
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
            You didn't open your business to sit at a desk answering phones or chasing no-shows. You did it to work with animals, provide great care, and build something lasting.
          </p>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Let us handle the systems that run in the background—so you can focus on what you love and grow your business without burning out.
          </p>
          <p className="text-2xl font-semibold mb-12">
            Ready to see what this looks like for your business?
          </p>
          <button 
            onClick={() => setShowLeadCaptureModal(true)}
            className="inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-4 font-medium hover:bg-purple-700 transition-colors text-lg"
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
        title="Transform Your Pet Care Business"
        subtitle="Get a customized assessment for your pet grooming or boarding business"
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
                <li><Link href="/pet-grooming-boarding" className="hover:text-blue-400 transition-colors">Pet Grooming & Boarding</Link></li>
                <li><Link href="/hvac" className="hover:text-blue-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-blue-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/restaurants-cafes" className="hover:text-blue-400 transition-colors">Restaurants & Cafés</Link></li>
                <li><Link href="/gyms-personal-trainers" className="hover:text-blue-400 transition-colors">Gyms & Personal Trainers</Link></li>
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
    </div>
  );
}