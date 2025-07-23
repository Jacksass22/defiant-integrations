import { ArrowRight, CheckCircle, ChefHat, TrendingUp, Users, Package } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Link } from 'wouter';

export default function SpecialtyFoodMakers() {
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium mb-6">
              <ChefHat className="w-4 h-4" />
              <span>Specialty Food Makers</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smart Technology That Actually Works for Your Business
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Turn handcrafted quality into scalable success with systems that attract loyal customers, streamline fulfillment, and boost your bottom line—without losing your artisanal edge.
            </p>
            
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2">
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
                What Specialty Food Brands Are Dealing With Right Now
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                You're building something special—small-batch, handmade, or locally sourced. But growth isn't easy. Between managing inventory, labeling, compliance, marketing, and customer expectations, most brands hit a ceiling. You're competing with national brands on Shopify and fighting for shelf space while trying to keep your personal touch.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-8 rounded-2xl text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">Impact Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-amber-100">Online Sales Growth via Direct-to-Consumer Funnels</span>
                  <span className="text-2xl font-bold">3x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-100">Higher Retail Buyer Conversion with Pro Branding</span>
                  <span className="text-2xl font-bold">60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-100">Repeat Purchase Rate Through Smart Reordering</span>
                  <span className="text-2xl font-bold">4x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-100">Time Saved with Back-End Automation</span>
                  <span className="text-2xl font-bold">75%</span>
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
              "You're juggling wholesale, direct sales, and farmers markets manually",
              "Inventory and expiration tracking is eating into your time",
              "Your online store isn't converting at the rate it should",
              "You're not collecting and using customer data for retention",
              "You want to scale—but without selling out or burning out"
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
              We help food entrepreneurs turn their craft into a company—with automated systems for growth, compliance, and brand-building.
            </p>
          </div>

          <div className="space-y-16">
            {/* Direct Sales */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium mb-4">
                  <TrendingUp className="w-4 h-4" />
                  <span>Sell Direct, Grow Fast</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: You're relying on slow retail orders or marketplaces that take a cut.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Direct-to-consumer funnels that let you own the relationship—and the margin.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Optimized Shopify or website funnel built to convert cold traffic",
                    "AI-generated ads for gourmet snacks, sauces, or meal kits",
                    "Story-driven landing pages that highlight your brand's uniqueness",
                    "Subscription options for replenishable items (spices, spreads, etc.)",
                    "Digital sampling and re-targeting campaigns"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-amber-800 font-semibold">
                    Real Results: 3x increase in online sales and lower dependency on wholesale
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">DTC Sales Performance</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Monthly Revenue Growth</span>
                      <span className="font-bold text-amber-600">+238%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Conversion Rate</span>
                      <span className="font-bold text-amber-600">6.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Average Order Value</span>
                      <span className="font-bold text-amber-600">$47</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Subscription Rate</span>
                      <span className="font-bold text-amber-600">34%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Retail Expansion */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-amber-600">60%</div>
                      <div className="text-sm text-gray-600">Higher Close Rate</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-amber-600">187</div>
                      <div className="text-sm text-gray-600">New Accounts</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-amber-600">23%</div>
                      <div className="text-sm text-gray-600">Sample Conversion</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-amber-600">92%</div>
                      <div className="text-sm text-gray-600">Follow-up Rate</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium mb-4">
                  <Package className="w-4 h-4" />
                  <span>Get Stocked in More Stores</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: You have a great product, but buyers don't take you seriously—or you can't follow up consistently.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Automations that nurture retail accounts and professionally pitch your products 24/7.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Email outreach to specialty retailers, gift shops, and co-ops",
                    "Digital sell sheets and pitch decks auto-sent to new leads",
                    "Sample request flows and follow-up automation",
                    "Centralized CRM tracking interest, follow-ups, and feedback",
                    "Wholesale portal that makes ordering easy for retail partners"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-amber-800 font-semibold">
                    Real Results: 60% higher close rate with retail buyers
                  </p>
                </div>
              </div>
            </div>

            {/* Customer Retention */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium mb-4">
                  <Users className="w-4 h-4" />
                  <span>Turn First-Time Buyers Into Raving Fans</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Customers love your product—but don't come back.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Smart post-purchase systems that build habit, loyalty, and community.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Follow-up emails with recipes, pairings, and usage tips",
                    "Loyalty program that rewards referrals and repeat purchases",
                    "Replenishment reminders for pantry staples or seasonal items",
                    "Subscriber-only offers for new product drops",
                    "Branded content that makes customers feel part of the story"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-amber-800 font-semibold">
                    Real Results: 4x more repeat purchases and 3x referral lift
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Customer Loyalty Journey</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Welcome Recipe - Sent</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Usage Tips - Day 3</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      <span className="text-sm">Loyalty Signup - Day 7</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span className="text-sm text-gray-500">Reorder Reminder - Day 21</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span className="text-sm text-gray-500">New Drop Alert - Monthly</span>
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
              A proven 90-day implementation roadmap tailored for food makers and gourmet brands
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-amber-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 1: Direct Sales + Brand Build
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• DTC funnel creation + Shopify optimization</li>
                <li>• Online order flow and ad testing</li>
                <li>• Story-driven product page buildout</li>
                <li>• Inventory sync and analytics setup</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-amber-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 2: Retail Expansion & Automation
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• CRM setup for retail outreach and buyer management</li>
                <li>• Sell sheet creation + automated follow-ups</li>
                <li>• Wholesale portal setup for B2B orders</li>
                <li>• Labeling + stock tracking system automation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-amber-600 font-bold text-xl">3+</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 3+: Retention & Scale
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Loyalty + reordering email flows</li>
                <li>• KPI dashboard tracking LTV, repeat rate, CAC</li>
                <li>• Monthly growth campaigns + reviews/UGC automation</li>
                <li>• Compliance and scale systems review</li>
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
                <li>Foodies looking for something unique</li>
                <li>Loyal fans who reorder based on quality and values</li>
                <li>Retail buyers who value story, sourcing, and professionalism</li>
                <li>Subscription customers who want your product in their pantry every month</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Money You'll Make</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Keep more margin by selling direct</li>
                <li>Open B2B channels that grow revenue without complexity</li>
                <li>Boost average order value with bundles and pairings</li>
                <li>Increase LTV with reordering, subscriptions, and loyalty systems</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Time You'll Save</h3>
              <ul className="space-y-2 text-gray-600">
                <li>No more manual follow-ups with retailers</li>
                <li>Stop wasting hours on labeling, batching, and tracking</li>
                <li>Let your email and marketing automations do the work</li>
                <li>Focus on product and brand—not backend chaos</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">The Bottom Line</h3>
              <p className="text-gray-600 leading-relaxed">
                You're not just selling food—you're selling care, craft, and a connection to something real. But that doesn't mean you have to run your business like it's 1995.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                Let's build the systems that support your passion—and scale it sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Turn Your Food Brand Into a Scalable, Story-Driven Business?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Let's build the systems that support your passion—and scale it sustainably.
          </p>
          <button className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2">
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
                <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-amber-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-amber-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-amber-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-amber-400 transition-colors">Landscaping</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Retail</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/brick-mortar-retail" className="hover:text-amber-400 transition-colors">Brick-and-Mortar</Link></li>
                <li><Link href="/ecommerce-brands" className="hover:text-amber-400 transition-colors">eCommerce Brands</Link></li>
                <li><Link href="/cannabis-retail" className="hover:text-amber-400 transition-colors">Cannabis Retail</Link></li>
                <li><Link href="/specialty-food-makers" className="hover:text-amber-400 transition-colors">Specialty Food</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/cleaning-services" className="hover:text-amber-400 transition-colors">Cleaning Services</Link></li>
                <li><Link href="/gyms-personal-trainers" className="hover:text-amber-400 transition-colors">Gyms & Trainers</Link></li>
                <li><Link href="/wellness-life-coaches" className="hover:text-amber-400 transition-colors">Wellness & Coaches</Link></li>
                <li><Link href="/pet-grooming-boarding" className="hover:text-amber-400 transition-colors">Pet Grooming</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Blog</a></li>
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