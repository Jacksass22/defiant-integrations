import { ArrowRight, CheckCircle, Store, TrendingUp, Users, Package } from 'lucide-react';
import { Link } from 'wouter';

export default function LocalBoutiques() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-pink-100 px-4 py-2 rounded-full text-pink-800 text-sm font-medium mb-6">
              <Store className="w-4 h-4" />
              <span>Local Boutiques</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smart Technology That Actually Works for Your Business
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Blend your personal style with professional systems that boost foot traffic, streamline sales, and turn browsers into loyal brand fans.
            </p>
            
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2">
              <span>Start Your Free Assessment</span>
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
                What Local Boutiques Are Dealing With Right Now
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Running a boutique means curating a look, building a vibe, and standing out from the big-box crowd. But behind the scenes, you're juggling inventory, inconsistent foot traffic, marketing fatigue, and the never-ending battle of "doing it all yourself." You want to scale without selling out.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-600 to-pink-700 p-8 rounded-2xl text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">Impact Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-pink-100">Repeat Customers with Smart Retention Systems</span>
                  <span className="text-2xl font-bold">3x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-pink-100">Better ROI on Local Campaigns and Events</span>
                  <span className="text-2xl font-bold">5x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-pink-100">Less Time on Admin and Scheduling</span>
                  <span className="text-2xl font-bold">70%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-pink-100">Average Order Value via Smart Merchandising</span>
                  <span className="text-2xl font-bold">2x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            What This Means for Your Business
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "You're dependent on unpredictable walk-in traffic",
              "Instagram and email take hours each week to manage",
              "POS, inventory, and promotions aren't connected",
              "Your team struggles to upsell or follow through consistently",
              "You don't have a system for turning shoppers into return customers"
            ].map((problem, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              How Smart Technology Fixes These Problems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help boutiques automate the backend and amplify the brand—with smart marketing, simplified ops, and repeat-ready systems that preserve your personal touch.
            </p>
          </div>

          <div className="space-y-16">
            {/* Foot Traffic */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-pink-100 px-4 py-2 rounded-full text-pink-800 text-sm font-medium mb-4">
                  <TrendingUp className="w-4 h-4" />
                  <span>Drive Foot Traffic with Local Smart Campaigns</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Walk-ins are inconsistent, and it's hard to track what's working.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Local ad systems and event strategies that bring customers in and track the impact.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Geo-targeted Google + Instagram ads tied to new arrivals or events",
                    "SMS blasts for local sales and VIP nights",
                    "QR codes in-store and on receipts for feedback and re-marketing",
                    "AI-generated content calendars for posts, promos, and drops",
                    "Email collection flows tied to in-store discounts or giveaways"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                  <p className="text-pink-800 font-semibold">
                    Real Results: 5x more foot traffic during promos and local events
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Local Campaign Performance</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Event Attendance</span>
                      <span className="font-bold text-pink-600">+412%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">SMS Open Rate</span>
                      <span className="font-bold text-pink-600">89%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">QR Code Scans</span>
                      <span className="font-bold text-pink-600">73%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Local Ad CTR</span>
                      <span className="font-bold text-pink-600">8.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat Buyers */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-pink-600">3x</div>
                      <div className="text-sm text-gray-600">Repeat Rate</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-pink-600">67%</div>
                      <div className="text-sm text-gray-600">Email Open Rate</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-pink-600">$142</div>
                      <div className="text-sm text-gray-600">LTV Increase</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-pink-600">34%</div>
                      <div className="text-sm text-gray-600">Loyalty Sign-ups</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-pink-100 px-4 py-2 rounded-full text-pink-800 text-sm font-medium mb-4">
                  <Users className="w-4 h-4" />
                  <span>Convert One-Time Shoppers Into Repeat Buyers</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: You get compliments all day—but don't see the same customers again.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Smart follow-ups, loyalty, and personalization based on what they bought and loved.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Post-purchase flows: 'Loved that jacket? Here's what goes with it.'",
                    "Birthday rewards, flash sale early access, and private event invites",
                    "Automated reorder reminders for essentials or seasonal favorites",
                    "Style-based recommendations based on past purchases",
                    "Loyalty tiers with real perks—tracked automatically"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                  <p className="text-pink-800 font-semibold">
                    Real Results: 3x increase in repeat customer rate
                  </p>
                </div>
              </div>
            </div>

            {/* Automation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-pink-100 px-4 py-2 rounded-full text-pink-800 text-sm font-medium mb-4">
                  <Package className="w-4 h-4" />
                  <span>Automate the Busywork Without Losing the Magic</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Inventory, scheduling, and promo planning burn hours weekly.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: AI and automation tools that handle the logistics so you can focus on the brand.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Inventory alerts: 'Only 3 of this top left—time to restock or promote'",
                    "Smart schedule builder that factors in peak hours and staff skills",
                    "Weekly sales dashboards with bestsellers, margin %, and footfall",
                    "Auto-generated content (posts, emails, SMS) based on trends + inventory",
                    "Staff task systems: 'Today's tasks: steam new arrivals, update window, post story'"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                  <p className="text-pink-800 font-semibold">
                    Real Results: 70% reduction in admin time and better team consistency
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Automation Dashboard</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Inventory Sync - Active</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Low Stock Alert - 12 items</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Content Posted - Instagram</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Staff Schedule - Optimized</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      <span className="text-sm">Weekly Report - Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              How We Get You There
            </h2>
            <p className="text-xl text-gray-600">
              A proven 90-day implementation roadmap designed for boutique brands
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-pink-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 1: Visibility + Foot Traffic
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Setup local ad campaigns and geo-promo SMS</li>
                <li>• Optimize Google + Instagram presence</li>
                <li>• Launch incentive-based email/SMS capture system</li>
                <li>• Connect POS and email list for cross-channel visibility</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-pink-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 2: Retention + Smart Sales
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Set up post-purchase flows and loyalty tracking</li>
                <li>• Automate social content and email calendar</li>
                <li>• Enable style-based product suggestions</li>
                <li>• Train team on upsells + POS automation prompts</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-pink-600 font-bold text-xl">3+</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 3+: Efficiency + Scale
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AI dashboard to track performance and bestsellers</li>
                <li>• Staff automation tools (schedules, checklists, goals)</li>
                <li>• Auto-restock + inventory management</li>
                <li>• Build out customer referral engine and top-tier offers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What This Actually Means for Your Bottom Line
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Customers You'll Attract</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Style-savvy shoppers who value personal curation</li>
                <li>Repeat buyers who crave a boutique experience</li>
                <li>Locals and tourists looking for something unique</li>
                <li>VIP buyers ready to engage with drops, launches, and perks</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Money You'll Make</h3>
              <ul className="space-y-2 text-gray-600">
                <li>More orders per visit through smarter presentation</li>
                <li>Higher AOV with intelligent product bundling</li>
                <li>Better ROI on every campaign with local targeting</li>
                <li>More sales from repeat customers who already love you</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Time You'll Save</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Less time scheduling staff or running reports</li>
                <li>No more scrambling to post or plan events last-minute</li>
                <li>Fewer headaches managing inventory or reorders</li>
                <li>Free up your team to focus on styling, selling, and delighting</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">The Bottom Line</h3>
              <p className="text-gray-600 leading-relaxed">
                Your boutique isn't just a store—it's a vibe, a brand, and a community. But even the best brands need structure behind the scenes to scale.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                We help local boutiques look polished online, run smooth behind the scenes, and keep customers coming back in person and digitally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600 to-pink-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Systemize, Scale, and Stay True to Your Brand?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            We help local boutiques look polished online, run smooth behind the scenes, and keep customers coming back in person and digitally.
          </p>
          <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2">
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
              <h4 className="font-semibold mb-4">Trades</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-pink-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-pink-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-pink-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-pink-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-pink-400 transition-colors">Landscaping</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Retail</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/brick-mortar-retail" className="hover:text-pink-400 transition-colors">Brick-and-Mortar</Link></li>
                <li><Link href="/ecommerce-brands" className="hover:text-pink-400 transition-colors">eCommerce Brands</Link></li>
                <li><Link href="/cannabis-retail" className="hover:text-pink-400 transition-colors">Cannabis Retail</Link></li>
                <li><Link href="/specialty-food-makers" className="hover:text-pink-400 transition-colors">Specialty Food</Link></li>
                <li><Link href="/local-boutiques" className="hover:text-pink-400 transition-colors">Local Boutiques</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/cleaning-services" className="hover:text-pink-400 transition-colors">Cleaning Services</Link></li>
                <li><Link href="/gyms-personal-trainers" className="hover:text-pink-400 transition-colors">Gyms & Trainers</Link></li>
                <li><Link href="/wellness-life-coaches" className="hover:text-pink-400 transition-colors">Wellness & Coaches</Link></li>
                <li><Link href="/pet-grooming-boarding" className="hover:text-pink-400 transition-colors">Pet Grooming</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-pink-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Defiant Integrations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}