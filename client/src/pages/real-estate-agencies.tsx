import { ArrowRight, CheckCircle, Home, TrendingUp, Users, Calendar } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';

export default function RealEstateAgencies() {
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
              <Home className="w-4 h-4" />
              <span>Real Estate Agencies</span>
            </div>
            
            <BlurText
              text="Smart Technology That Actually Works for Your Business"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            />
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get more listings, close more deals, and keep clients for life with intelligent automations designed to turn agents into top producers—and your brokerage into a modern powerhouse.
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
                What Real Estate Agencies Are Dealing With Right Now
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Between high interest rates, tighter competition, and ever-rising client expectations, agents today are under more pressure than ever. You're juggling prospecting, open houses, follow-ups, and paperwork—often without centralized systems to help you scale. Missed follow-ups, poor lead tracking, and manual workflows lead to lost commissions and agent burnout.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">Impact Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">More Listings with Smart Prospecting</span>
                  <span className="text-2xl font-bold">3x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Faster Lead Response with Automation</span>
                  <span className="text-2xl font-bold">60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Less Admin Time for Agents</span>
                  <span className="text-2xl font-bold">70%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Increase in Repeat and Referral Business</span>
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
              "Leads fall through the cracks without fast follow-up",
              "Agents waste time on scheduling, outreach, and admin",
              "There's no systemized client journey from cold lead to referral",
              "Brokerages struggle to track team performance and conversion",
              "Clients get inconsistent service—and go elsewhere"
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
              We give brokerages and agents the automation backbone they need to win more listings, scale outreach, and deliver 5-star client experiences—without adding staff or stress.
            </p>
          </div>

          <div className="space-y-16">
            {/* Smart Outreach */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
                  <TrendingUp className="w-4 h-4" />
                  <span>Win More Listings with Smart Outreach</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Most agents rely on cold calling, door-knocking, or waiting for referrals.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Targeted automations that put you in front of warm leads consistently—before your competitors.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Geo-targeted ads promoting 'recent listings in your neighborhood'",
                    "Lead magnets: Free home valuation tools and seller guides",
                    "Automated cold email/SMS drips to expired, FSBO, or farm lists",
                    "Social proof ads with testimonials and 'Just Sold' results",
                    "Custom landing pages by ZIP code, home type, or budget"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    Real Results: 3x more listing appointments booked
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Listing Generation Pipeline</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Listing Leads</span>
                      <span className="font-bold text-blue-600">+312%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Valuation Requests</span>
                      <span className="font-bold text-blue-600">147</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Appointment Rate</span>
                      <span className="font-bold text-blue-600">23%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Listing Conversion</span>
                      <span className="font-bold text-blue-600">67%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Follow-up */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">60%</div>
                      <div className="text-sm text-gray-600">Faster Response</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">50%</div>
                      <div className="text-sm text-gray-600">Higher Conversion</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">94%</div>
                      <div className="text-sm text-gray-600">Lead Response Rate</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">2.3x</div>
                      <div className="text-sm text-gray-600">Booking Rate</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
                  <Users className="w-4 h-4" />
                  <span>Automate Lead Follow-Up & Nurturing</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Agents don't follow up fast enough—and leads go cold.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Fast, personalized outreach workflows that engage new leads within minutes and nurture them long-term.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Instant text/email reply to inbound buyer or seller leads",
                    "Automated follow-up sequences over 30, 60, 90+ days",
                    "AI assistant that qualifies leads and books consultations",
                    "Pipeline dashboard to track every lead's stage in real-time",
                    "Task reminders for agents: 'Follow up with John about appraisal Qs'"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    Real Results: 60% faster lead response and 50% increase in conversion
                  </p>
                </div>
              </div>
            </div>

            {/* Smart Scheduling */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Save Hours Each Week with Smarter Scheduling</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Agents spend too much time setting appointments, chasing paperwork, and juggling calendars.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Let tech handle the logistics so agents can focus on selling.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Smart booking links synced to agent availability",
                    "Auto-confirmations and reminders for showings and meetings",
                    "Transaction workflows with checklist tracking and document automation",
                    "Automated home search updates tailored to buyer preferences",
                    "Client portals for real-time updates and document access"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    Real Results: 70% reduction in admin time per agent
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Agent Productivity Dashboard</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Calendar Sync - Active</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Auto-confirmations - Running</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Showing Scheduled - 2:30 PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Contract Due - Tomorrow</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Client Portal - Updated</span>
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
              A proven 90-day implementation roadmap tailored for modern brokerages and solo agents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 1: Lead Gen + Listing Optimization
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Local ad setup (Google, Instagram, Facebook)</li>
                <li>• Lead magnet design and landing page buildout</li>
                <li>• CRM setup + import of existing contacts</li>
                <li>• Outreach flows for expireds, FSBOs, and cold prospects</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 2: Automation & Agent Enablement
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Lead response automations (email/SMS/AI chat)</li>
                <li>• Appointment booking + calendar sync</li>
                <li>• Transaction checklist automations</li>
                <li>• Performance tracking dashboard setup</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">3+</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 3+: Retention, Referrals & Scale
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Post-close journey automation (referrals, reviews, gifts)</li>
                <li>• Long-term nurture flows (1–3 year timelines)</li>
                <li>• Agent productivity dashboards + accountability workflows</li>
                <li>• Brokerage-level reporting and analytics</li>
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
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Clients You'll Attract</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Ready-to-list homeowners who value fast response and professionalism</li>
                <li>Relocation clients and first-time buyers from digital campaigns</li>
                <li>Investors and upsizing families in your geographic farm</li>
                <li>Warm referrals from your past client base—now activated</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Money You'll Make</h3>
              <ul className="space-y-2 text-gray-600">
                <li>More listings and higher GCI through lead consistency</li>
                <li>More buyer-side commissions from faster response times</li>
                <li>Higher team productivity and close rate</li>
                <li>Lower churn and more referrals over time</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Time You'll Save</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Agents reclaim 10–15 hours/week with automations</li>
                <li>No more guessing which leads are warm—everything tracked</li>
                <li>Admin chaos reduced with synced tools and smart workflows</li>
                <li>Spend less time managing people, more time growing sales</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">The Bottom Line</h3>
              <p className="text-gray-600 leading-relaxed">
                Real estate isn't just about hustle—it's about consistency, relationships, and systems that scale. We help agents and brokerages deliver professional, repeatable experiences that win listings and drive growth—without burning out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Systemize Your Brokerage or Solo Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We help agents and brokerages deliver professional, repeatable experiences that win listings and drive growth—without burning out.
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
              <h4 className="font-semibold mb-4">Trades</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-blue-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-blue-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-blue-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-blue-400 transition-colors">Landscaping</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Retail</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/brick-mortar-retail" className="hover:text-blue-400 transition-colors">Brick-and-Mortar</Link></li>
                <li><Link href="/ecommerce-brands" className="hover:text-blue-400 transition-colors">eCommerce Brands</Link></li>
                <li><Link href="/cannabis-retail" className="hover:text-blue-400 transition-colors">Cannabis Retail</Link></li>
                <li><Link href="/specialty-food-makers" className="hover:text-blue-400 transition-colors">Specialty Food</Link></li>
                <li><Link href="/local-boutiques" className="hover:text-blue-400 transition-colors">Local Boutiques</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Professional</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/real-estate-agencies" className="hover:text-blue-400 transition-colors">Real Estate</Link></li>
                <li><Link href="/cleaning-services" className="hover:text-blue-400 transition-colors">Cleaning Services</Link></li>
                <li><Link href="/gyms-personal-trainers" className="hover:text-blue-400 transition-colors">Gyms & Trainers</Link></li>
                <li><Link href="/wellness-life-coaches" className="hover:text-blue-400 transition-colors">Wellness & Coaches</Link></li>
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