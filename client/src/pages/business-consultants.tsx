import { ArrowRight, CheckCircle, Target, FileText, Package, Shield } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Link } from 'wouter';

export default function BusinessConsultants() {
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-violet-100 px-4 py-2 rounded-full text-violet-800 text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              <span>Business Consultants</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smart Technology That Actually Works for Your Practice
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Attract better clients, productize your expertise, and scale your impact with automations that build trust, streamline delivery, and keep your calendar full—without losing the personal touch that makes your work powerful.
            </p>
            
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2">
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
                What Business Consultants Are Dealing With Right Now
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                As a consultant, you're the strategist, operator, and executor—often all at once. But inconsistent lead flow, manual delivery, and admin overload cap your growth. You're stuck working in the business instead of scaling it, and every proposal or onboarding call eats into your billable hours.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-violet-600 to-violet-700 p-8 rounded-2xl text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">Impact Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-violet-100">More Qualified Leads from Authority-Based Funnels</span>
                  <span className="text-2xl font-bold">4x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-violet-100">Less Time Spent on Admin, Proposals, and Reports</span>
                  <span className="text-2xl font-bold">70%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-violet-100">Higher Retention Through Productized Delivery</span>
                  <span className="text-2xl font-bold">3x</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-violet-500 rounded-lg">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-violet-100" />
                    <span className="text-violet-100 font-semibold">End-to-End Data Privacy and NDA-Safe Infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-violet-100" />
                    <span className="text-violet-100 font-semibold">Self-Hosted Systems for Sensitive Client Data and IP</span>
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
              How Smart Automation Helps Consultants Scale Without Sacrifice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help business consultants implement lead-to-delivery systems that run in the background—so you can focus on client outcomes, thought leadership, and long-term growth.
            </p>
          </div>

          <div className="space-y-16">
            {/* Authority-Driven Funnels */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-violet-100 px-4 py-2 rounded-full text-violet-800 text-sm font-medium mb-4">
                  <Target className="w-4 h-4" />
                  <span>Attract Ideal Clients with Authority-Driven Funnels</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: You rely on referrals or hustle-based outreach, which dries up fast.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Positioning, content, and funnel automation that builds credibility and generates warm inbound leads.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Website + landing page system optimized for your niche",
                    "Authority content engine: blog → email → lead magnet → booking",
                    "Client case study automation + social proof distribution",
                    "Lead scoring + qualification before calls",
                    "AI-generated follow-up sequences that nurture trust over time"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-violet-50 rounded-lg">
                  <p className="text-violet-800 font-semibold">
                    Real Results: 4x more high-fit inbound leads and shorter sales cycles
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-violet-100 to-violet-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Authority Building Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Qualified Leads</span>
                      <span className="font-bold text-violet-600">+425%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Content Engagement</span>
                      <span className="font-bold text-violet-600">8.9/10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Lead Quality Score</span>
                      <span className="font-bold text-violet-600">9.2/10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Sales Cycle</span>
                      <span className="font-bold text-violet-600">-45%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Streamlined Operations */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-violet-100 to-violet-200 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-violet-600">70%</div>
                      <div className="text-sm text-gray-600">Less Admin Time</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-violet-600">3x</div>
                      <div className="text-sm text-gray-600">Faster Onboarding</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-violet-600">85%</div>
                      <div className="text-sm text-gray-600">Template Efficiency</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-violet-600">4.2x</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-violet-100 px-4 py-2 rounded-full text-violet-800 text-sm font-medium mb-4">
                  <FileText className="w-4 h-4" />
                  <span>Streamline Proposals, Contracts, and Client Onboarding</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Every new client means hours of prep and document juggling.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Prebuilt frameworks and automation flows that deliver your value—faster.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Proposal and SOW templates with dynamic pricing",
                    "E-signature workflows with client-specific triggers",
                    "Automated onboarding emails, dashboards, and expectation-setting sequences",
                    "Kickoff call scheduling with personalized agendas",
                    "Client CRM tracking every interaction, doc, and project stage"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-violet-50 rounded-lg">
                  <p className="text-violet-800 font-semibold">
                    Real Results: 70% reduction in admin hours and faster time to first deliverable
                  </p>
                </div>
              </div>
            </div>

            {/* Service Productization */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-violet-100 px-4 py-2 rounded-full text-violet-800 text-sm font-medium mb-4">
                  <Package className="w-4 h-4" />
                  <span>Productize Your Service Delivery Without Losing Flexibility</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Your work is valuable—but custom services create delivery chaos.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Build modular delivery workflows that let you scale results, not just effort.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Repeatable frameworks packaged into service 'stacks'",
                    "Template-driven deliverables auto-filled from intake forms",
                    "Client dashboards to view project status and milestones",
                    "Progress reports + recommendations generated on a schedule",
                    "Asynchronous video walkthroughs and voice note integrations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-violet-50 rounded-lg">
                  <p className="text-violet-800 font-semibold">
                    Real Results: 3x more clients served without hiring or losing quality
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-violet-100 to-violet-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Service Delivery Stack</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Framework Templates - Ready</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Auto-filled Deliverables - Active</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Client Dashboards - Live</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Progress Reports - Generating</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Video Workflows - Integrated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Maintain Total Control Over Client Data and IP
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Problem: Using generic SaaS tools opens you to IP risk, data leaks, and privacy concerns. The Solution: Encrypted, consultant-owned systems built for trust and long-term retention.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-violet-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Data Sovereignty</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Self-hosted or private-cloud CRMs and project portals</li>
                <li>• Encrypted storage of client docs, NDAs, and frameworks</li>
                <li>• Data control policies aligned with client procurement requirements</li>
              </ul>
            </div>

            <div className="bg-violet-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">IP Protection</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Audit trails for IP usage, version control, and deliverable access</li>
                <li>• Role-based permissions for subcontractors or collaborators</li>
                <li>• Secure client portals: Show progress, share deliverables, and track feedback</li>
              </ul>
            </div>

            <div className="bg-violet-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Enterprise Ready</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Audit-ready reporting for enterprise, procurement, or compliance-driven clients</li>
                <li>• Service productization templates: Turn your 1:1 into scalable offers</li>
                <li>• KPI dashboards: Track impact across clients or industries</li>
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
              A proven 90-day implementation roadmap built for consultants and advisory firms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-violet-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 1: Lead Gen + Funnel System
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Website and lead magnet strategy</li>
                <li>• Email/SMS list automation + CRM integration</li>
                <li>• Case study engine and inbound nurture flows</li>
                <li>• Scheduling and qualification automation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-violet-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 2: Delivery Infrastructure
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Proposal, contract, and onboarding automation</li>
                <li>• Client portal and file-sharing system</li>
                <li>• SOP templates and deliverable builders</li>
                <li>• Report automation + feedback tracking</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-violet-600 font-bold text-xl">3+</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 3+: Scale, Productization, & Retention
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Tiered offers and productized service design</li>
                <li>• Referral and testimonial campaigns</li>
                <li>• Client reactivation workflows</li>
                <li>• Metrics dashboards + performance tracking</li>
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
                <li>High-quality inbound leads that trust your authority</li>
                <li>Enterprise buyers who need polished systems and reporting</li>
                <li>Niche operators looking for proven frameworks and execution</li>
                <li>Return clients who understand your long-term value</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Money You'll Make</h3>
              <ul className="space-y-2 text-gray-600">
                <li>More retainer and recurring deals vs. one-offs</li>
                <li>Higher client LTV through consistent delivery and upsells</li>
                <li>Reduced friction in signing, onboarding, and renewals</li>
                <li>Easier procurement from B2B clients and corporate partners</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Time You'll Save</h3>
              <ul className="space-y-2 text-gray-600">
                <li>No more recreating decks, emails, or onboarding docs</li>
                <li>Fewer calls, more clarity, and higher leverage delivery</li>
                <li>Systems that track everything, even while you're off the clock</li>
                <li>More time to speak, create, and grow</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">The Bottom Line</h3>
              <p className="text-gray-600 leading-relaxed">
                You got into consulting to solve problems—not to build spreadsheets and chase follow-ups. We help consultants build a business infrastructure that reflects their expertise, earns client trust, and scales effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-600 to-violet-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Systemize Your Consulting Practice?
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            We help business consultants implement lead-to-delivery systems that run in the background—so you can focus on client outcomes, thought leadership, and long-term growth.
          </p>
          <button className="bg-white text-violet-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2">
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
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-violet-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-violet-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-violet-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-violet-400 transition-colors">Landscaping</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Retail</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/brick-mortar-retail" className="hover:text-violet-400 transition-colors">Brick-and-Mortar</Link></li>
                <li><Link href="/ecommerce-brands" className="hover:text-violet-400 transition-colors">eCommerce Brands</Link></li>
                <li><Link href="/cannabis-retail" className="hover:text-violet-400 transition-colors">Cannabis Retail</Link></li>
                <li><Link href="/specialty-food-makers" className="hover:text-violet-400 transition-colors">Specialty Food</Link></li>
                <li><Link href="/local-boutiques" className="hover:text-violet-400 transition-colors">Local Boutiques</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Professional</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/business-consultants" className="hover:text-violet-400 transition-colors">Business Consultants</Link></li>
                <li><Link href="/hr-recruiting-firms" className="hover:text-violet-400 transition-colors">HR & Recruiting</Link></li>
                <li><Link href="/insurance-brokers" className="hover:text-violet-400 transition-colors">Insurance Brokers</Link></li>
                <li><Link href="/accounting-tax-firms" className="hover:text-violet-400 transition-colors">Accounting & Tax</Link></li>
                <li><Link href="/law-firms" className="hover:text-violet-400 transition-colors">Law Firms</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-violet-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Blog</a></li>
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