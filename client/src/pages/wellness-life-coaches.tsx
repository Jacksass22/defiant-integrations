import { Navigation } from '@/components/navigation';
import { ArrowRight, Clock, DollarSign, Heart, Calendar, MessageSquare, TrendingUp, CheckCircle, Users, Camera } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';

export default function WellnessLifeCoaches() {
  useScrollToTop();
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <BlurText
              text="Wellness & Life Coaches: Smart Technology That Actually Works for Your Business"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
            />
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Attract committed clients, maintain powerful coaching relationships, and build a practice that creates lasting transformation while growing sustainably.
            </p>
            <button className="inline-flex items-center space-x-2 bg-white text-teal-900 px-8 py-4 font-medium hover:bg-gray-100 transition-colors">
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
              What Wellness and Life Coaches Are Dealing With Right Now
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              Running a wellness or life coaching practice means helping people transform their lives while building trust, managing client relationships, and competing in a crowded market where everyone claims to be a coach. You're balancing deep, personal work with business development, trying to attract serious clients who are ready for real change rather than just curious browsers.
            </p>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-emerald-600 mb-4">200%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Qualified Lead Increase</h3>
                <p className="text-gray-600">More transformation-ready clients with targeted marketing</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-emerald-600 mb-4">80%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Higher Commitment</h3>
                <p className="text-gray-600">Clients ready to invest in real transformation</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-emerald-600 mb-4">10x</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">More Engagement</h3>
                <p className="text-gray-600">From ideal clients on transformation content</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-emerald-600 mb-4">90%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Completion Rates</h3>
                <p className="text-gray-600">Clients who finish their coaching programs</p>
              </div>
            </div>

            <div className="bg-teal-900 text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-4">What This Means for Your Business</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Potential clients who shop around but never commit to coaching relationships</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Difficulty communicating the value and ROI of personal transformation work</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Client momentum loss between sessions affecting results and retention</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Amazing client transformations that don't attract new ideal clients</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Feast-or-famine cycles with client acquisition and program fills</span>
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
              Transform your coaching practice with AI-powered client management and growth systems
            </p>
          </div>

          {/* Solution Cards */}
          <div className="space-y-20">
            {/* Solution 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-lg mb-6">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Generate Transformation-Ready Clients
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Many people are curious about coaching but not ready to invest in real change
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Professional lead generation that attracts clients prepared for transformation work
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Google Ads targeting "life coach near me," "career transition coaching," and specific transformation goals</li>
                    <li>• Educational content about coaching processes, what to expect, and how change happens</li>
                    <li>• Client success stories and transformation case studies showing real results</li>
                    <li>• Content addressing specific challenges: career transitions, relationship issues, life purpose</li>
                    <li>• SEO optimization for coaching specialties and local transformation searches</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4">
                  <p className="text-emerald-900 font-semibold">
                    Real Results: 200% increase in qualified leads and 80% higher client commitment rates
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 h-96 rounded-lg flex items-center justify-center">
                <Heart className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-teal-600 to-cyan-700 h-96 rounded-lg flex items-center justify-center">
                <Camera className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-lg mb-6">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Showcase Authentic Transformation Stories
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Coaching results are personal and private, making them hard to showcase professionally
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI-powered content that highlights transformation while respecting client privacy
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Anonymous case studies showing coaching journey and breakthrough moments</li>
                    <li>• Educational content about common transformation patterns and coaching processes</li>
                    <li>• Video testimonials from clients willing to share their growth stories</li>
                    <li>• Before/after mindset shifts and life situation improvements</li>
                    <li>• Content about coaching methodologies and approach to creating lasting change</li>
                  </ul>
                </div>
                <div className="bg-teal-50 border-l-4 border-teal-600 p-4">
                  <p className="text-teal-900 font-semibold">
                    Real Results: 10x more engagement from ideal clients and 60% more referrals from transformed clients
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Smart Client Relationship Management
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Maintaining momentum and accountability between coaching sessions
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI systems that support the coaching relationship and track client progress
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automated session reminders with pre-session reflection prompts</li>
                    <li>• Between-session check-ins and accountability messages</li>
                    <li>• Goal tracking and milestone celebration systems</li>
                    <li>• Session note organization and progress pattern recognition</li>
                    <li>• Booking systems that accommodate coaching package structures and payment plans</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-blue-900 font-semibold">
                    Real Results: 90% client completion rates and 70% improvement in goal achievement
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 h-96 rounded-lg flex items-center justify-center">
                <Calendar className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-600 to-pink-700 h-96 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-lg mb-6">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Build Long-Term Client Success and Referral Network
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Clients graduate from coaching but lose momentum without ongoing support
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Automated relationship building that maintains transformation momentum
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Post-coaching check-ins and continued growth support</li>
                    <li>• Alumni community building and peer support networks</li>
                    <li>• Seasonal growth challenges and goal-setting campaigns</li>
                    <li>• Educational content for ongoing personal development</li>
                    <li>• Referral systems that reward successful clients for sharing their coach</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                  <p className="text-purple-900 font-semibold">
                    Real Results: 80% of successful clients become active referral sources
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
              A proven 90-day implementation roadmap designed for wellness and life coaches
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 shadow-lg">
              <div className="text-emerald-600 font-bold text-lg mb-2">Month 1</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Professional Coaching Presence</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lead generation campaigns targeting transformation-ready individuals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional website with coaching approach, success stories, and clear process explanation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>AI client management system for session scheduling and progress tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-emerald-600 font-bold text-lg mb-2">Month 2</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Trust Building and Client Experience</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Transformation content creation showcasing coaching effectiveness</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Automated client journey workflows from inquiry to completion</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Between-session engagement and accountability systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-emerald-600 font-bold text-lg mb-2">Month 3+</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Sustainable Practice Growth</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Educational content establishes expertise and attracts ideal clients</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Client success systems improve outcomes and completion rates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional positioning supports premium coaching fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What This Actually Means for Your Bottom Line
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-teal-800/50 p-8 rounded-lg">
              <Heart className="w-12 h-12 text-cyan-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Clients You'll Attract</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Transformation-ready individuals:</strong> People prepared to invest in real change</li>
                <li>• <strong>High-commitment clients:</strong> Attract clients who complete programs and see results</li>
                <li>• <strong>Premium coaching clients:</strong> Those willing to invest in deep transformation work</li>
                <li>• <strong>Referral generators:</strong> Successful clients who become advocates for your work</li>
              </ul>
            </div>

            <div className="bg-teal-800/50 p-8 rounded-lg">
              <DollarSign className="w-12 h-12 text-cyan-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Money You'll Make</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Premium pricing:</strong> Professional positioning supports higher coaching fees</li>
                <li>• <strong>Higher completion rates:</strong> Better client experience leads to full program completion</li>
                <li>• <strong>Consistent pipeline:</strong> Referral system provides steady flow of ideal clients</li>
                <li>• <strong>Program expansion:</strong> Success enables group programs and higher-level offerings</li>
              </ul>
            </div>

            <div className="bg-teal-800/50 p-8 rounded-lg">
              <Clock className="w-12 h-12 text-cyan-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Time You'll Save</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Client management:</strong> Automated scheduling, reminders, and progress tracking</li>
                <li>• <strong>Between-session support:</strong> AI-powered check-ins and accountability systems</li>
                <li>• <strong>Content creation:</strong> Systematic documentation of client success patterns</li>
                <li>• <strong>Lead qualification:</strong> Educational content pre-qualifies transformation-ready prospects</li>
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
            Wellness and life coaching is about facilitating profound personal transformation and helping people create lives they truly love. Your clients want guidance, accountability, and support from someone who understands the change process and can help them navigate challenges.
          </p>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Smart automation supports the coaching relationship while building the professional presence that attracts clients ready for real transformation. While other coaches struggle with credibility and client acquisition, you'll be the coach that transformation-ready people seek out and refer to everyone they know.
          </p>
          <p className="text-2xl font-semibold mb-12">
            Ready to see what this looks like for your business?
          </p>
          <button className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 font-medium hover:bg-emerald-700 transition-colors text-lg">
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
                <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-emerald-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-emerald-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-emerald-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-emerald-400 transition-colors">Landscaping</Link></li>
                <li><Link href="/roofing" className="hover:text-emerald-400 transition-colors">Roofing</Link></li>
                <li><Link href="/painting" className="hover:text-emerald-400 transition-colors">Painting</Link></li>
                <li><Link href="/general-contracting" className="hover:text-emerald-400 transition-colors">General Contracting</Link></li>
                <li><Link href="/cleaning-services" className="hover:text-emerald-400 transition-colors">Cleaning Services</Link></li>
                <li><Link href="/restaurants-cafes" className="hover:text-emerald-400 transition-colors">Restaurants & Cafés</Link></li>
                <li><Link href="/beauty-salons-spas" className="hover:text-emerald-400 transition-colors">Beauty Salons & Spas</Link></li>
                <li><Link href="/barbershops" className="hover:text-emerald-400 transition-colors">Barbershops</Link></li>
                <li><Link href="/gyms-personal-trainers" className="hover:text-emerald-400 transition-colors">Gyms & Personal Trainers</Link></li>
                <li><Link href="/wellness-life-coaches" className="hover:text-emerald-400 transition-colors">Wellness & Life Coaches</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ai-strategy-development" className="hover:text-emerald-400 transition-colors">AI Strategy</Link></li>
                <li><Link href="/system-integration" className="hover:text-emerald-400 transition-colors">Implementation</Link></li>
                <li><Link href="/change-management" className="hover:text-emerald-400 transition-colors">Scaling</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-emerald-400 transition-colors">Careers</button></li>
                <li><button className="hover:text-emerald-400 transition-colors">Contact</button></li>
                <li><button className="hover:text-emerald-400 transition-colors">Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-emerald-400 transition-colors">Subscribe</button></li>
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