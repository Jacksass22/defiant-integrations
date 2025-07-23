import { ArrowRight, CheckCircle, Calculator, FileText, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';

export default function AccountingTaxFirms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full text-emerald-800 text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              <span>Accounting & Tax Firms</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smart Technology That Actually Works for Your Practice
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Automate your admin, streamline client communication, and eliminate bottlenecks—while staying fully compliant, secure, and in control of your financial data.
            </p>
            
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2">
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
                What Accounting & Tax Firms Are Dealing With Right Now
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're focused on individual filings, business accounting, or CFO advisory, your time is constantly consumed by back-and-forths, deadline management, document collection, and follow-up. The busy season never really ends—and without automation, you're either hiring more staff or burning out your current team.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 rounded-2xl text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">Impact Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-100">Less Time on Admin and Data Collection</span>
                  <span className="text-2xl font-bold">80%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-100">More Client Reviews and Referrals</span>
                  <span className="text-2xl font-bold">3x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-100">Revenue Per Client Through Strategic Upsells</span>
                  <span className="text-2xl font-bold">2x</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-emerald-500 rounded-lg">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-100" />
                    <span className="text-emerald-100 font-semibold">Fully Compliant With IRS, SOX, HIPAA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-100" />
                    <span className="text-emerald-100 font-semibold">Self-Hosted and Encrypted Data Options</span>
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
              How Smart Technology Transforms Your Firm
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help accountants and tax professionals implement secure, automation-powered systems that reduce workload, boost profitability, and keep every file, task, and deadline 100% on track.
            </p>
          </div>

          <div className="space-y-16">
            {/* Client Intake */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full text-emerald-800 text-sm font-medium mb-4">
                  <FileText className="w-4 h-4" />
                  <span>Automate Client Intake and Document Collection</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Endless email threads and manual document requests are killing productivity.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Smart intake portals that collect the right info and docs—on autopilot.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Secure, self-hosted intake forms and file upload portals",
                    "Smart file checklists: 'Upload W2s, 1099s, prior year returns'",
                    "AI assistant that reminds clients what's missing (without bothering you)",
                    "Automatic email/SMS reminders for outstanding items",
                    "Encrypted cloud or local storage for all uploaded files"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-emerald-800 font-semibold">
                    Real Results: 80% reduction in time spent chasing clients for documents
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Document Collection Dashboard</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Documents Received</span>
                      <span className="font-bold text-emerald-600">+540%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Client Response Time</span>
                      <span className="font-bold text-emerald-600">2.3 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Admin Time Saved</span>
                      <span className="font-bold text-emerald-600">18 hrs/week</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Complete Submissions</span>
                      <span className="font-bold text-emerald-600">92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Deadline Management */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-emerald-600">95%</div>
                      <div className="text-sm text-gray-600">On-Time Delivery</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-emerald-600">60%</div>
                      <div className="text-sm text-gray-600">Less Team Stress</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-emerald-600">147</div>
                      <div className="text-sm text-gray-600">Returns Tracked</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-emerald-600">Zero</div>
                      <div className="text-sm text-gray-600">Missed Deadlines</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full text-emerald-800 text-sm font-medium mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Stay Ahead of Every Deadline</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Deadlines slip, filings get delayed, and team stress spikes during tax season.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Smart workflows and reminders that keep your team—and your clients—on time.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Prebuilt workflows for common services (1040, Schedule C, Corporate Returns, Bookkeeping)",
                    "Calendar sync with automatic task assignments per client",
                    "Client-side email/SMS reminders for deadlines",
                    "Team-side alerts: 'Audit prep for Smith Co. due next week'",
                    "Visual dashboards tracking progress across every return or client"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-emerald-800 font-semibold">
                    Real Results: 95% on-time delivery rate with less team burnout
                  </p>
                </div>
              </div>
            </div>

            {/* Revenue Growth */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full text-emerald-800 text-sm font-medium mb-4">
                  <TrendingUp className="w-4 h-4" />
                  <span>Grow Revenue Per Client—Without Adding Hours</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Most firms leave money on the table by only offering core services.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Automated upsell flows and service packaging that boost client value without hard selling.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "After-return flows: 'Want us to help with bookkeeping this year?'",
                    "Client segmentation: SMBs get offered payroll, CFO, or 1099 services",
                    "Seasonal check-ins: 'Ready to plan Q3 tax strategy?'",
                    "Email/SMS offers based on past service usage and life events",
                    "Performance dashboards showing ROI per client + service mix"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-emerald-800 font-semibold">
                    Real Results: 2x revenue per client through automation-driven advisory upsells
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Revenue Growth Tracker</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Bookkeeping Upsells - Active</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Payroll Services - Growing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm">CFO Advisory - New Pipeline</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Tax Planning - Automated</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm">1099 Services - Launching</span>
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
              Privacy & Compliance Are Built In
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-emerald-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Data Security</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Self-Hosted & Private Cloud Options for full control over tax and financial data</li>
                <li>• End-to-End Encryption (in transit + at rest) for all documents, messages, and workflows</li>
                <li>• Zero Third-Party Data Sales or hidden cloud syncing—your data stays yours</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• IRS regulations (including e-signature + e-file standards)</li>
                <li>• Sarbanes-Oxley (SOX) for audit trails and data integrity</li>
                <li>• HIPAA (when handling health-related financial data)</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Audit & Tracking</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Audit Logs: Every action, approval, and file change is tracked and timestamped</li>
                <li>• Complete chain of custody for all client documents</li>
                <li>• Comprehensive reporting for compliance reviews</li>
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
              A proven 90-day implementation roadmap for modern accounting and tax firms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-emerald-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 1: Intake & Workflow Automation
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Secure intake portal setup</li>
                <li>• Prebuilt workflows for tax, bookkeeping, advisory</li>
                <li>• CRM integration and data mapping</li>
                <li>• Auto-reminders and client checklists</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-emerald-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 2: Client Experience + Compliance
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• E-signature + document approval automation</li>
                <li>• Portal branding and white-label setup</li>
                <li>• Client communication flows and review requests</li>
                <li>• Local/server-based deployment (optional)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-emerald-600 font-bold text-xl">3+</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 3+: Upsell Systems & Advisory Growth
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Client segmentation and upsell campaigns</li>
                <li>• Performance dashboards (LTV, margin, service mix)</li>
                <li>• Email/SMS automations for seasonality and compliance</li>
                <li>• Internal SOP automation + recurring task flows</li>
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
                <li>Busy professionals who want secure, modern financial help</li>
                <li>SMBs who need more than just taxes—they want a financial partner</li>
                <li>Long-term clients who appreciate your speed, clarity, and trustworthiness</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Money You'll Make</h3>
              <ul className="space-y-2 text-gray-600">
                <li>More efficiency = more clients served with the same team</li>
                <li>Upsells like bookkeeping, payroll, CFO services done automatically</li>
                <li>Smoother client experience = more reviews, more referrals</li>
                <li>Reduced missed payments and faster billing cycles</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Time You'll Save</h3>
              <ul className="space-y-2 text-gray-600">
                <li>No more chasing documents or explaining the same thing twice</li>
                <li>Admin and scheduling handled while you focus on strategy</li>
                <li>No late-night prep before deadlines—everything's running ahead of schedule</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">The Bottom Line</h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you're a solo CPA or running a multi-partner practice, smart automation turns your accounting firm into a proactive, trusted engine of financial clarity and client loyalty. And we build it to run on your terms—secure, compliant, and entirely under your control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Automate Without Compromising Trust?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            We help accountants and tax professionals implement secure, automation-powered systems that reduce workload, boost profitability, and keep every file, task, and deadline 100% on track.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2">
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
                <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-emerald-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-emerald-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-emerald-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-emerald-400 transition-colors">Landscaping</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Retail</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/brick-mortar-retail" className="hover:text-emerald-400 transition-colors">Brick-and-Mortar</Link></li>
                <li><Link href="/ecommerce-brands" className="hover:text-emerald-400 transition-colors">eCommerce Brands</Link></li>
                <li><Link href="/cannabis-retail" className="hover:text-emerald-400 transition-colors">Cannabis Retail</Link></li>
                <li><Link href="/specialty-food-makers" className="hover:text-emerald-400 transition-colors">Specialty Food</Link></li>
                <li><Link href="/local-boutiques" className="hover:text-emerald-400 transition-colors">Local Boutiques</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Professional</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/accounting-tax-firms" className="hover:text-emerald-400 transition-colors">Accounting & Tax</Link></li>
                <li><Link href="/law-firms" className="hover:text-emerald-400 transition-colors">Law Firms</Link></li>
                <li><Link href="/real-estate-agencies" className="hover:text-emerald-400 transition-colors">Real Estate</Link></li>
                <li><Link href="/cleaning-services" className="hover:text-emerald-400 transition-colors">Cleaning Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
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