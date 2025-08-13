import { ArrowRight, CheckCircle, Store, TrendingUp, Users, ShoppingCart } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';

export default function BrickMortarRetail() {
  useScrollToTop();
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-6">
              <Store className="w-4 h-4" />
              <span>Brick-and-Mortar Retail</span>
            </div>
            
            <BlurText
              text="Smart Technology That Actually Works for Your Business"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            />
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Drive foot traffic, boost conversion rates, and build customer loyalty in a retail world where in-person experiences still matter.
            </p>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2">
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
                What Brick-and-Mortar Retailers Are Dealing With Right Now
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Running a physical store today isn't just about stocking shelves—it's about competing with Amazon, keeping staff motivated, and turning every customer visit into a memorable experience. You're balancing inventory, marketing, and operations while trying to stay profitable in a digital-first world.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">Impact Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Higher Foot Traffic with Localized Ad Targeting</span>
                  <span className="text-2xl font-bold">3x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Increase in In-Store Conversions via Smart Promotions</span>
                  <span className="text-2xl font-bold">40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Customer Retention Boost Through Loyalty Automation</span>
                  <span className="text-2xl font-bold">70%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Time Saved on Scheduling, Updates, and Admin</span>
                  <span className="text-2xl font-bold">60%</span>
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
              "Slow foot traffic and uncertain ROI on local ads",
              "Lost revenue from missed opportunities at the point of sale",
              "Staff underutilized or overwhelmed without automation",
              "Loyalty programs that are outdated, unused, or nonexistent",
              "Difficulty competing on convenience and personalization"
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
              Elevate your store's performance with automation, AI insights, and marketing systems that bring modern firepower to traditional retail.
            </p>
          </div>

          <div className="space-y-16">
            {/* Local Shoppers */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
                  <TrendingUp className="w-4 h-4" />
                  <span>Attract Local Shoppers Actively Looking to Buy</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Most retailers waste money on broad marketing that doesn't bring people in.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Hyper-local ad campaigns and search optimization targeting people actively searching for what you sell—near you.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Geo-targeted Google Ads for '[your product] near me' searches",
                    "Google Maps optimization and local SEO with AI-generated listings",
                    "Automated review requests to boost trust and map visibility",
                    "Events and promotions promoted via email/SMS to past walk-ins",
                    "Social ads based on customer location and past behavior"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    Real Results: 3x more store visits from ready-to-buy local shoppers
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Local Search Results</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">"Coffee shop near me" - #1 ranking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Google Maps - 4.8★ (127 reviews)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Social Media - 2.1K followers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Weekly Events - 80% attendance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Store Conversion */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">40%</div>
                      <div className="text-sm text-gray-600">Conversion Increase</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">25%</div>
                      <div className="text-sm text-gray-600">Higher Ticket</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">$127</div>
                      <div className="text-sm text-gray-600">Avg Order Value</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">3.2x</div>
                      <div className="text-sm text-gray-600">Upsell Success</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Boost In-Store Conversion and Average Order Value</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Customers browse but don't buy—or walk away without knowing about promotions.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Smart POS prompts, product pairings, and timely discount nudges to increase basket size and sales on the spot.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "In-store kiosks and tablets for look-up, recommendations, or coupons",
                    "POS upsell prompts for staff: 'Mention X with Y'",
                    "Personalized receipt offers based on purchase behavior",
                    "QR codes on displays linked to product videos and social proof",
                    "Smart inventory alerts: 'Only 2 left!' or 'Staff pick of the day'"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    Real Results: 40% increase in in-store conversions and 25% higher average ticket
                  </p>
                </div>
              </div>
            </div>

            {/* Loyalty Program */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
                  <Users className="w-4 h-4" />
                  <span>Loyalty That Actually Keeps Customers Coming Back</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Loyalty programs often go unused and don't feel valuable to modern shoppers.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Intelligent loyalty systems that reward based on actual behavior—automated, personalized, and rewarding.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Points and perks based on visit frequency and purchase amount",
                    "Birthday rewards, 'we miss you' discounts, and seasonal offers",
                    "AI-segmented email and SMS campaigns based on buying habits",
                    "In-store-only exclusives to encourage return visits",
                    "Referral bonuses that encourage word-of-mouth"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    Real Results: 70% improvement in repeat customer retention
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Smart Loyalty Dashboard</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Active Members</span>
                      <span className="font-bold text-blue-600">2,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg Visit Frequency</span>
                      <span className="font-bold text-blue-600">2.3x/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Points Redeemed</span>
                      <span className="font-bold text-blue-600">89%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Referral Rate</span>
                      <span className="font-bold text-blue-600">34%</span>
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
              A proven 90-day implementation roadmap tailored for retail stores
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 1: Foot Traffic & Brand Presence
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Google My Business optimization and AI-powered review campaigns</li>
                <li>• Local ad campaigns targeting high-converting keywords</li>
                <li>• Website or landing page that converts visitors into walk-ins</li>
                <li>• Customer tracking and email/SMS opt-in systems</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 2: In-Store Optimization & Conversion
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Smart POS integrations for upsells and loyalty prompts</li>
                <li>• Staff training scripts and tools for consistent sales experience</li>
                <li>• QR-linked in-store content and digital promotions</li>
                <li>• Inventory and promotion sync tools</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">3+</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 3+: Retention, Loyalty, and Repeat Sales
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated loyalty programs and customer segmentation</li>
                <li>• Follow-up campaigns for re-engagement and referrals</li>
                <li>• SMS/email automations tied to customer journeys</li>
                <li>• Monthly reporting and ROI insights</li>
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
                <li>Local, high-intent shoppers searching for quality and convenience</li>
                <li>Loyal repeat customers who value experience and perks</li>
                <li>"Showroom" browsers who convert into long-term fans</li>
                <li>Families, working professionals, and niche enthusiasts</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Money You'll Make</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Increased ticket size from smart promotions and pairing</li>
                <li>Higher monthly recurring revenue from loyalty + repeat visits</li>
                <li>Less wasted ad spend and better ROI on local campaigns</li>
                <li>More margin from lower admin and staffing overhead</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Time You'll Save</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Less time juggling employee schedules and shift changes</li>
                <li>Automated communication with customers and staff</li>
                <li>Faster inventory and promotion management</li>
                <li>Clear insights so you can focus on growth, not guesswork</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">The Bottom Line</h3>
              <p className="text-gray-600 leading-relaxed">
                Brick-and-mortar retail isn't dead—it's evolving. Customers still crave real experiences, human interaction, and the confidence of seeing what they're buying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Modernize and Grow Your Retail Store?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Smart technology helps you run tighter operations, connect with your community, and create a store experience that brings people back—again and again.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2">
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
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-blue-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-blue-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-blue-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-blue-400 transition-colors">Landscaping</Link></li>
                <li><Link href="/roofing" className="hover:text-blue-400 transition-colors">Roofing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/painting" className="hover:text-blue-400 transition-colors">Painting</Link></li>
                <li><Link href="/general-contracting" className="hover:text-blue-400 transition-colors">General Contracting</Link></li>
                <li><Link href="/cleaning-services" className="hover:text-blue-400 transition-colors">Cleaning Services</Link></li>
                <li><Link href="/remodeling-renovation" className="hover:text-blue-400 transition-colors">Remodeling & Renovation</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Retail</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/brick-mortar-retail" className="hover:text-blue-400 transition-colors">Brick-and-Mortar Retail</Link></li>
                <li><Link href="/restaurants-cafes" className="hover:text-blue-400 transition-colors">Restaurants</Link></li>
                <li><Link href="/beauty-salons-spas" className="hover:text-blue-400 transition-colors">Beauty & Spas</Link></li>
                <li><Link href="/barbershops" className="hover:text-blue-400 transition-colors">Barbershops</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
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