import { ArrowRight, CheckCircle, ShoppingBag, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'wouter';

export default function EcommerceBrands() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-6">
              <ShoppingBag className="w-4 h-4" />
              <span>eCommerce Brands</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smart Technology That Actually Works for Your Business
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Automate your growth, boost conversion rates, and turn casual browsers into loyal repeat buyers with systems built for modern online brands.
            </p>
            
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2">
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
                What eCommerce Brands Are Dealing With Right Now
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Running an online store today means fighting algorithm changes, rising ad costs, abandoned carts, and shrinking attention spans. You're competing with big marketplaces, countless Shopify stores, and increasingly impatient shoppers—all while trying to stay profitable and build a brand that lasts.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-2xl text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">Impact Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-purple-100">Ad ROAS with Funnel Optimization</span>
                  <span className="text-2xl font-bold">4x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-100">Cart Recovery with Smart Automations</span>
                  <span className="text-2xl font-bold">70%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-100">Increase in LTV via Post-Purchase Journeys</span>
                  <span className="text-2xl font-bold">3x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-100">Less Time on Ops with AI Automations</span>
                  <span className="text-2xl font-bold">80%</span>
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
              "Rising customer acquisition costs eat your margins",
              "Traffic that doesn't convert (or bounces within 10 seconds)",
              "High cart abandonment with no follow-up",
              "No system to turn first-time buyers into regular customers",
              "Hours spent managing fulfillment, support, and promo schedules"
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
              We help eCommerce brands grow profitably with AI-powered funnels, automations, and retention systems that do the heavy lifting.
            </p>
          </div>

          <div className="space-y-16">
            {/* Right Traffic */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
                  <TrendingUp className="w-4 h-4" />
                  <span>Get the Right Traffic, Not Just More Traffic</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: You're paying to get people on your site—but they're not converting, or they were never going to in the first place.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Target high-intent audiences with performance-driven creative, personalized landing pages, and AI-tested funnels.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "AI-generated ads tailored to buyer personas + trending keywords",
                    "Dynamic landing pages based on customer interests or behavior",
                    "A/B tested offer stacks with urgency triggers and trust boosters",
                    "Predictive lookalike audiences for scaling spend profitably",
                    "Real-time analytics showing which ads/products actually convert"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-purple-800 font-semibold">
                    Real Results: 4x return on ad spend and lower CAC across campaigns
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Ad Performance Dashboard</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">ROAS</span>
                      <span className="font-bold text-purple-600">4.2x</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">CAC</span>
                      <span className="font-bold text-green-600">-45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Conversion Rate</span>
                      <span className="font-bold text-purple-600">8.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Quality Score</span>
                      <span className="font-bold text-purple-600">9.1/10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Convert Browsers */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600">70%</div>
                      <div className="text-sm text-gray-600">Cart Recovery</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600">2x</div>
                      <div className="text-sm text-gray-600">Bounce Conversion</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600">127%</div>
                      <div className="text-sm text-gray-600">Email Revenue</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600">34%</div>
                      <div className="text-sm text-gray-600">Exit Intent Success</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
                  <Zap className="w-4 h-4" />
                  <span>Convert Browsers Into Buyers—Automatically</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: 70% of people who add to cart never buy. And most stores never follow up the right way.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Cart abandonment, browse abandonment, and exit-intent automations that recover lost revenue at scale.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Smart email/SMS flows triggered by cart abandonment behavior",
                    "Exit pop-ups with tailored offers or social proof",
                    "Urgency boosters like 'Only X left' or 'Deal ends in 2 hrs'",
                    "Instant product education via short videos or customer testimonials",
                    "One-click checkout reminders synced across devices"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-purple-800 font-semibold">
                    Real Results: 70% more recovered carts and 2x conversion on bounced traffic
                  </p>
                </div>
              </div>
            </div>

            {/* Repeat Buyers */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
                  <Users className="w-4 h-4" />
                  <span>Build Repeat Buyers with Post-Purchase Journeys</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Most eCom stores get one sale and never hear from the customer again.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Build automated customer journeys that drive repeat purchases, referrals, and higher LTV.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Post-purchase email/SMS flows based on what they bought",
                    "Loyalty program automation with VIP tiers and exclusive drops",
                    "Replenishment reminders for consumables or repeat use products",
                    "Review requests and UGC campaigns built into the flow",
                    "Personalized upsells and cross-sells at the perfect moment"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-purple-800 font-semibold">
                    Real Results: 3x increase in customer lifetime value (LTV)
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Customer Journey Flow</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Purchase Thank You - Sent</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Product Education - Day 3</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Review Request - Day 7</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span className="text-sm text-gray-500">Cross-sell - Day 14</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span className="text-sm text-gray-500">Loyalty Invite - Day 30</span>
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
              A proven 90-day implementation roadmap tailored for DTC, dropshipping, and niche eCommerce brands
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-purple-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 1: Traffic & Conversion Engine
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Funnel optimization audit with AI heatmaps and journey mapping</li>
                <li>• Performance ad creative + landing page builds</li>
                <li>• Abandoned cart recovery systems set up and tested</li>
                <li>• Pixel, attribution, and conversion tracking clean-up</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-purple-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 2: Post-Purchase & Retention Systems
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Post-purchase flows customized by product type and buyer persona</li>
                <li>• Loyalty program setup and segmentation</li>
                <li>• Review generation + UGC automation</li>
                <li>• Smart upsell and cross-sell systems in place</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-purple-600 font-bold text-xl">3+</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 3+: Automation & Growth Ops
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Customer service automations + AI inbox assistant</li>
                <li>• Launch calendar automation for new drops or promos</li>
                <li>• Email/SMS calendar built for max engagement</li>
                <li>• Monthly KPI tracking dashboard: ROAS, LTV, CAC, repeat rate</li>
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
                <li>High-intent buyers with clear purchase signals</li>
                <li>Returning customers who become brand advocates</li>
                <li>Influencers and UGC creators who feed your content flywheel</li>
                <li>Wholesale and partnership leads for B2B expansion</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Money You'll Make</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Lower CAC and higher ROAS through smarter ad targeting</li>
                <li>More money per customer with upsells and retention</li>
                <li>Less waste and discounting due to smarter demand forecasting</li>
                <li>Predictable MRR with subscription or auto-reorder flows</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Time You'll Save</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Let automation handle abandoned carts, fulfillment emails, and FAQs</li>
                <li>Eliminate promo chaos with a mapped out calendar</li>
                <li>Cut hours from campaign setup with plug-and-play templates</li>
                <li>Focus on high-leverage brand and product strategy instead of backend chaos</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">The Bottom Line</h3>
              <p className="text-gray-600 leading-relaxed">
                eCommerce is no longer about just having a store online—it's about building a system that attracts, converts, and retains the right kind of customer over and over again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Turn Your eCom Brand Into a Growth Machine?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            We help you build that system. Whether you're trying to scale to your first $100K month or looking to cut costs while growing LTV—we've got you.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2">
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
                <li><Link href="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-purple-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-purple-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-purple-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-purple-400 transition-colors">Landscaping</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Retail</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/brick-mortar-retail" className="hover:text-purple-400 transition-colors">Brick-and-Mortar</Link></li>
                <li><Link href="/ecommerce-brands" className="hover:text-purple-400 transition-colors">eCommerce Brands</Link></li>
                <li><Link href="/restaurants-cafes" className="hover:text-purple-400 transition-colors">Restaurants</Link></li>
                <li><Link href="/beauty-salons-spas" className="hover:text-purple-400 transition-colors">Beauty & Spas</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/cleaning-services" className="hover:text-purple-400 transition-colors">Cleaning Services</Link></li>
                <li><Link href="/gyms-personal-trainers" className="hover:text-purple-400 transition-colors">Gyms & Trainers</Link></li>
                <li><Link href="/wellness-life-coaches" className="hover:text-purple-400 transition-colors">Wellness & Coaches</Link></li>
                <li><Link href="/pet-grooming-boarding" className="hover:text-purple-400 transition-colors">Pet Grooming</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
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