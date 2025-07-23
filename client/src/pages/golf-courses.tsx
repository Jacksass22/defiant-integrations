import { ArrowRight, CheckCircle, Trophy, Phone, BarChart3, Users, Calendar, Target } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Link } from 'wouter';

export default function GolfCourses() {
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full text-green-800 text-sm font-medium mb-6">
                <Trophy className="w-4 h-4" />
                <span>Golf Courses</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Elevate the Guest Experience, Streamline Operations
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Run a smoother pro shop, handle more calls at once, and never miss a tee time again with intelligent systems that eliminate friction and delight guests.
              </p>
              
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2">
                <span>Start Your Free Discovery Call</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Modern Golf Courses Juggle Too Much
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Phone lines, bookings, guest services, staff management, and pro shop sales—often with outdated tools and overworked teams.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Staff stuck answering repetitive calls instead of serving guests</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Missed booking opportunities during peak times</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Fragmented systems that don't talk to each other</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-600">No visibility into performance trends or guest patterns</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">The Cost of Chaos</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Missed tee times per week</span>
                    <span className="font-semibold text-red-600">15-25</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Hours spent on phone admin</span>
                    <span className="font-semibold text-red-600">20+ hrs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Revenue lost to inefficiency</span>
                    <span className="font-semibold text-red-600">$2,000+/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What We Solve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Intelligent systems and automation that help you eliminate friction, delight guests, and operate with precision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                  Intelligent Phone Reception
                </h3>
                <p className="text-gray-600 mb-4">
                  AI-powered phone assistant handles high-volume, repetitive calls—tee times, hours, weather, rates—while routing personal requests to staff.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>24/7 coverage with zero missed calls</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Real-time tee sheet integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Smart call routing to staff when needed</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                  Data-Driven Decision Making
                </h3>
                <p className="text-gray-600 mb-4">
                  Transform everyday interactions into actionable insights with comprehensive tracking and analytics.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Booking volume by time and weather</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Staff workload optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Revenue trend forecasting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                  Full-Facility Integration
                </h3>
                <p className="text-gray-600 mb-4">
                  Connect fragmented tools into one seamless operation—tee sheets, POS, scheduling, and more.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Unified system management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Custom dashboard development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Marketing automation integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Outcomes You Can Expect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results that transform your course operations and guest experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">65%+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Fewer Repetitive Calls</div>
                <p className="text-gray-600 text-sm">Staff freed to focus on guest service and pro shop sales</p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">Zero</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Missed Bookings</div>
                <p className="text-gray-600 text-sm">24/7 availability captures every opportunity</p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">Live</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Performance Dashboards</div>
                <p className="text-gray-600 text-sm">Real-time KPIs and trend analysis for smarter decisions</p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How We Work
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven process to modernize your course operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">1</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Discovery & Demo</h3>
                <p className="text-gray-600">
                  We assess your tech stack, workflows, and guest interactions. Then we build a tailored demo.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">2</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Integration & Launch</h3>
                <p className="text-gray-600">
                  We connect your tools, configure the AI assistant, and deploy reporting dashboards.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">3</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Optimize & Support</h3>
                <p className="text-gray-600">
                  We train your team, tweak based on real use, and provide live support & monthly optimizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Defiant Integrations?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Deep Golf Course Knowledge</h3>
                  <p className="text-gray-600 text-sm">We understand the unique challenges of golf course operations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Custom-Built Solutions</h3>
                  <p className="text-gray-600 text-sm">Not cookie-cutter tools—systems designed for your specific needs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fast & Scalable</h3>
                  <p className="text-gray-600 text-sm">Secure infrastructure that grows with your course</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Automation Experts</h3>
                  <p className="text-gray-600 text-sm">Specialists in intelligent systems and data engineering</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Trusted by Operators</h3>
                  <p className="text-gray-600 text-sm">Small and mid-size courses rely on our solutions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600 text-sm">Live support and monthly optimizations included</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Summary */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What Your Course Could Look Like in 30 Days
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Less Phone Chaos</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Staff focused on guest service</li>
                  <li>No more missed calls during busy times</li>
                  <li>Instant routing for urgent matters</li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">More Booked Tee Times</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>24/7 booking availability</li>
                  <li>Real-time schedule updates</li>
                  <li>Automated follow-up marketing</li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Smarter Decisions</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Data-driven staffing plans</li>
                  <li>Weather-based demand forecasts</li>
                  <li>Member engagement insights</li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Systems That Work</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>All tools connected seamlessly</li>
                  <li>Automated reporting and alerts</li>
                  <li>Background operations running smoothly</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Modernize Your Course?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Let us show you what intelligent automation can do for your golf course operations and guest experience.
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2">
              <span>Start Your Free Discovery Call Today</span>
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
                <h4 className="font-semibold mb-4">Trades</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/" className="hover:text-green-400 transition-colors">Home</Link></li>
                  <li><Link href="/hvac" className="hover:text-green-400 transition-colors">HVAC</Link></li>
                  <li><Link href="/plumbing" className="hover:text-green-400 transition-colors">Plumbing</Link></li>
                  <li><Link href="/electrical" className="hover:text-green-400 transition-colors">Electrical</Link></li>
                  <li><Link href="/landscaping" className="hover:text-green-400 transition-colors">Landscaping</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Retail</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/brick-mortar-retail" className="hover:text-green-400 transition-colors">Brick-and-Mortar</Link></li>
                  <li><Link href="/ecommerce-brands" className="hover:text-green-400 transition-colors">eCommerce Brands</Link></li>
                  <li><Link href="/cannabis-retail" className="hover:text-green-400 transition-colors">Cannabis Retail</Link></li>
                  <li><Link href="/specialty-food-makers" className="hover:text-green-400 transition-colors">Specialty Food</Link></li>
                  <li><Link href="/local-boutiques" className="hover:text-green-400 transition-colors">Local Boutiques</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Recreation</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/golf-courses" className="hover:text-green-400 transition-colors">Golf Courses</Link></li>
                  <li><Link href="/gyms-personal-trainers" className="hover:text-green-400 transition-colors">Gyms & Trainers</Link></li>
                  <li><Link href="/wellness-life-coaches" className="hover:text-green-400 transition-colors">Wellness & Coaches</Link></li>
                  <li><Link href="/pet-grooming-boarding" className="hover:text-green-400 transition-colors">Pet Services</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-green-400 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-green-400 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2025 Defiant Integrations. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}