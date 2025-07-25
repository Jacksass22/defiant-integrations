import { ArrowRight, CheckCircle, Shield, Target, FileText, Users } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';

export default function InsuranceBrokers() {
  useScrollToTop();
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full text-orange-800 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Insurance Brokers</span>
            </div>
            
            <BlurText
              text="Smart Technology That Actually Works for Your Business"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            />
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Generate qualified leads, automate renewals, and build lifelong policyholder relationships—all while staying compliant and focused on what you do best: protecting your clients.
            </p>
            
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2">
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
                What Insurance Brokers Are Dealing With Right Now
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In today's market, it's not just about finding policies—it's about standing out in a saturated landscape, maintaining compliance, and managing hundreds (or thousands) of client touchpoints without dropping the ball. Whether you sell auto, life, health, commercial, or a combination, manual follow-up and outdated systems are costing you revenue and referrals.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-8 rounded-2xl text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">Impact Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-orange-100">More Qualified Leads from Smart Funnels</span>
                  <span className="text-2xl font-bold">4x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-orange-100">Faster Policy Renewals with Automated Reminders</span>
                  <span className="text-2xl font-bold">60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-orange-100">Increase in Referrals via Lifecycle Automation</span>
                  <span className="text-2xl font-bold">3x</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-orange-500 rounded-lg">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-orange-100" />
                    <span className="text-orange-100 font-semibold">Fully Compliant with HIPAA, GLBA, and Local Regulations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-orange-100" />
                    <span className="text-orange-100 font-semibold">Data Stored Locally or in Secure, Broker-Owned Clouds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              How Smart Technology Modernizes Your Brokerage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help independent brokers and small agencies implement automation systems that handle the follow-up, cross-sells, compliance, and client experience—without relying on generic CRM bloat or risky public tools.
            </p>
          </div>

          <div className="space-y-16">
            {/* Lead Generation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full text-orange-800 text-sm font-medium mb-4">
                  <Target className="w-4 h-4" />
                  <span>Attract Qualified, High-Intent Leads</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: You're spending too much time chasing cold leads—or relying on purchased lists.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Lead funnels that attract inbound prospects looking for exactly what you sell.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Google Ads and landing pages targeting '[insurance type] in [city]'",
                    "Lead magnets: 'Free Coverage Review' or 'Save on Your Renewal'",
                    "Instant response flows: 'Thanks for your request—book a call here'",
                    "AI-powered qualification: filters out tire-kickers, routes hot leads",
                    "Local SEO + reputation automation (Google, Yelp, etc.)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-orange-800 font-semibold">
                    Real Results: 4x more qualified leads and better close rate
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Lead Generation Pipeline</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Qualified Leads</span>
                      <span className="font-bold text-orange-600">+410%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Lead Quality Score</span>
                      <span className="font-bold text-orange-600">8.7/10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Response Time</span>
                      <span className="font-bold text-orange-600">&lt; 30 sec</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Conversion Rate</span>
                      <span className="font-bold text-orange-600">31%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Renewals & Follow-ups */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">60%</div>
                      <div className="text-sm text-gray-600">Faster Renewals</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">3x</div>
                      <div className="text-sm text-gray-600">Retention Rate</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">94%</div>
                      <div className="text-sm text-gray-600">Renewal Success</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">2.8x</div>
                      <div className="text-sm text-gray-600">Upsell Rate</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full text-orange-800 text-sm font-medium mb-4">
                  <Shield className="w-4 h-4" />
                  <span>Automate Renewals & Follow-Ups Without Risk</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Renewal reminders get missed. So do upsells. And clients drift.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Smart, compliant automation flows that re-engage clients on time—every time.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Automated 30/60/90-day renewal notice sequences",
                    "SMS + email follow-ups with quote comparisons or new bundles",
                    "Birthday and life event check-ins: 'New baby? Let's update your plan'",
                    "Lapsed client win-back campaigns",
                    "Referral automation: 'Know someone who needs coverage?'"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-orange-800 font-semibold">
                    Real Results: 60% faster renewals and 3x retention improvement
                  </p>
                </div>
              </div>
            </div>

            {/* Client Experience */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full text-orange-800 text-sm font-medium mb-4">
                  <Users className="w-4 h-4" />
                  <span>Personalize Every Client Experience—At Scale</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Clients forget you exist until their next renewal—or they switch providers without telling you.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Ongoing, intelligent communication that keeps your name top-of-mind year-round.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Annual coverage reviews with automated prompts",
                    "Educational content: 'What's Changing in Healthcare This Year?'",
                    "Targeted upsell flows: 'You've got auto—what about renters?'",
                    "Client portal for documents, communication, and service requests",
                    "Review + testimonial requests that build online reputation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-orange-800 font-semibold">
                    Real Results: 3x more referrals and higher LTV per policyholder
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Client Relationship Dashboard</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Annual Reviews - Scheduled</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Educational Content - Active</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Upsell Campaign - Running</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Client Portal - Updated</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Review Requests - Automated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Compliance + Control Built for Insurance Brokers
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Data Security</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Self-Hosted or Broker-Owned Cloud for full data control</li>
                <li>• Encryption at Rest and In Transit (HIPAA, GLBA, local laws)</li>
                <li>• Secure Document Storage + Retrieval with multi-role permissions</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Digital signature and e-document delivery flows</li>
                <li>• Pre-set compliance language in all templates</li>
                <li>• ID verification, consent capture, and opt-in tracking</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Audit & Tracking</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Audit Logs + Communication Tracking for all client interactions</li>
                <li>• Communication logs stored securely with audit trails</li>
                <li>• Opt-In and Consent Compliance baked into every workflow</li>
              </ul>
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
              A proven 90-day implementation roadmap for insurance brokers and agencies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-orange-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 1: Lead Gen + Qualification
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Landing pages and ad setup for local insurance search terms</li>
                <li>• Intake + lead scoring flows</li>
                <li>• Automated consult scheduling</li>
                <li>• CRM + calendar + email integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-orange-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 2: Client Experience + Compliance
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Renewal workflows and lifecycle comms</li>
                <li>• Secure e-signature and document automation</li>
                <li>• Compliance logging and template controls</li>
                <li>• Review + referral automation setup</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-orange-600 font-bold text-xl">3+</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 3+: Growth & Scale
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Cross-sell and upsell flows for bundled policies</li>
                <li>• LTV tracking and performance dashboards</li>
                <li>• Email + SMS calendar synced to seasonality</li>
                <li>• SOP automation for quote, bind, and policy service</li>
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
                <li>High-LTV policyholders looking for ongoing support</li>
                <li>SMB owners, families, professionals, and retirees</li>
                <li>Inbound leads already looking for your exact coverage types</li>
                <li>Former clients ready to come back—with the right outreach</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Money You'll Make</h3>
              <ul className="space-y-2 text-gray-600">
                <li>More policies closed with less chasing</li>
                <li>Higher renewal rates = more stable income</li>
                <li>Upsells and cross-sells increase client value automatically</li>
                <li>Referrals compound each month with zero ad spend</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Time You'll Save</h3>
              <ul className="space-y-2 text-gray-600">
                <li>No more manually tracking renewals or birthdays</li>
                <li>Admin and compliance flows handled by automation</li>
                <li>Spend more time consulting and less time chasing paperwork</li>
                <li>Focus on building relationships, not busywork</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">The Bottom Line</h3>
              <p className="text-gray-600 leading-relaxed">
                You don't need more apps—you need systems. Smart, secure, and simple. We help brokers like you modernize without losing the personal relationships that set you apart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Brokerage Without Losing the Human Touch?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            We help independent brokers and small agencies implement automation systems that handle the follow-up, cross-sells, compliance, and client experience.
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2">
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
                <li><Link href="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-orange-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-orange-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-orange-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-orange-400 transition-colors">Landscaping</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Retail</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/brick-mortar-retail" className="hover:text-orange-400 transition-colors">Brick-and-Mortar</Link></li>
                <li><Link href="/ecommerce-brands" className="hover:text-orange-400 transition-colors">eCommerce Brands</Link></li>
                <li><Link href="/cannabis-retail" className="hover:text-orange-400 transition-colors">Cannabis Retail</Link></li>
                <li><Link href="/specialty-food-makers" className="hover:text-orange-400 transition-colors">Specialty Food</Link></li>
                <li><Link href="/local-boutiques" className="hover:text-orange-400 transition-colors">Local Boutiques</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Professional</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/insurance-brokers" className="hover:text-orange-400 transition-colors">Insurance Brokers</Link></li>
                <li><Link href="/accounting-tax-firms" className="hover:text-orange-400 transition-colors">Accounting & Tax</Link></li>
                <li><Link href="/law-firms" className="hover:text-orange-400 transition-colors">Law Firms</Link></li>
                <li><Link href="/real-estate-agencies" className="hover:text-orange-400 transition-colors">Real Estate</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
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