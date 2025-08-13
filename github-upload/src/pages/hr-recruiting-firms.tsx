import { ArrowRight, CheckCircle, Users, Calendar, TrendingUp, Shield } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';

export default function HRRecruitingFirms() {
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
              <Users className="w-4 h-4" />
              <span>HR & Recruiting Firms</span>
            </div>
            
            <BlurText
              text="Smart Technology That Actually Works for Your Business"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            />
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Automate your outreach, streamline placements, and scale client satisfaction—while keeping candidate data secure and your team focused on relationships, not spreadsheets.
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
                What HR & Recruiting Firms Are Dealing With Right Now
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Between managing candidate pipelines, client expectations, compliance risk, and daily communications, recruiters and HR consultants are buried in manual tasks. Whether you're placing executives or staffing hourly teams, you're up against digital-first competitors, ghosting candidates, and hiring managers who expect real-time results—with zero delay.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">Impact Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Faster Candidate Placement with Smart Workflows</span>
                  <span className="text-2xl font-bold">4x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Less Time Spent on Admin and Scheduling</span>
                  <span className="text-2xl font-bold">80%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">More Client Renewals via Systemized Results</span>
                  <span className="text-2xl font-bold">3x</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-500 rounded-lg">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-100" />
                    <span className="text-blue-100 font-semibold">Full Compliance with EEOC, GDPR, CCPA, and Local Labor Regulations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-100" />
                    <span className="text-blue-100 font-semibold">Secure, Self-Hosted Options for Candidate and Employer Data</span>
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
              How Smart Automation Streamlines People Ops
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help HR consultants, staffing firms, and recruiters automate outreach, communication, and placement tracking—so you can scale faster, without sacrificing quality or compliance.
            </p>
          </div>

          <div className="space-y-16">
            {/* Automated Outreach */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
                  <Users className="w-4 h-4" />
                  <span>Fill Roles Faster With Automated Outreach & Screening</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Cold emails and manual follow-ups delay placements—and waste recruiter time.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Automated candidate sourcing and engagement workflows that move fast and filter smart.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Role-specific outreach campaigns via email/SMS/LinkedIn",
                    "Automated screening forms with scoring logic",
                    "AI-based parsing of resumes to shortlist based on keywords or tags",
                    "Workflow triggers based on reply, application, or stage",
                    "Employer dashboard showing shortlists, notes, and time-to-fill stats"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    Real Results: 4x faster candidate placements and 60% less recruiter drop-off
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Candidate Pipeline Dashboard</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Active Outreach</span>
                      <span className="font-bold text-blue-600">847 contacts</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Response Rate</span>
                      <span className="font-bold text-blue-600">34%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Qualified Candidates</span>
                      <span className="font-bold text-blue-600">124</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Time to Placement</span>
                      <span className="font-bold text-blue-600">14 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scheduling Automation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">80%</div>
                      <div className="text-sm text-gray-600">Less Admin Time</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">95%</div>
                      <div className="text-sm text-gray-600">Interview Show Rate</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">4.2x</div>
                      <div className="text-sm text-gray-600">Billable Hours</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">100%</div>
                      <div className="text-sm text-gray-600">Compliance Score</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Cut Scheduling and Admin Time by 80%</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Too much time is spent coordinating calendars, interviews, and reminders.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Let automation handle all scheduling, reminders, and documentation.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Calendar links synced to recruiter and hiring manager availability",
                    "Auto-confirmations and interview prep emails for candidates",
                    "Prebuilt workflows for background checks, references, and compliance docs",
                    "Candidate journey tracking dashboards (applied → placed → follow-up)",
                    "Smart task queues for recruiters and consultants"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    Real Results: 80% reduction in non-billable admin time
                  </p>
                </div>
              </div>
            </div>

            {/* Client Retention */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
                  <TrendingUp className="w-4 h-4" />
                  <span>Retain Clients With Consistency and Visibility</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Clients churn when they feel out of the loop or don't see structured results.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Automated updates, reports, and follow-ups that show progress and build trust.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Weekly email updates on open roles and shortlists",
                    "Employer portals with live candidate status dashboards",
                    "End-of-project feedback forms + NPS tracking",
                    "Scheduled check-ins for upcoming hiring needs",
                    "Renewal prompts + success story highlight automation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    Real Results: 3x increase in client retention and more upsells to long-term contracts
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Client Engagement Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Weekly Updates - Active</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Client Portals - Live</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Feedback Collection - Running</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Check-ins - Scheduled</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Renewal Process - Automated</span>
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
              Ensure Compliance and Secure Candidate Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Problem: Spreadsheets, unencrypted files, and inbox threads open you up to risk. The Solution: A secure infrastructure that protects PII and keeps you audit-ready.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Data Security</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Self-hosted or encrypted cloud options for all client and candidate data</li>
                <li>• Role-based access to candidate files, notes, and interviews</li>
                <li>• Encryption in Transit & at Rest for all communications</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• GDPR/CCPA-compliant data handling and opt-in management</li>
                <li>• EEOC tagging and diversity tracking per role</li>
                <li>• Compliance automation for GDPR, EEOC, CCPA, HIPAA</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Audit & Tracking</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Audit logs for all candidate/employer interactions</li>
                <li>• Audit Trails & Communication Logs for every placement</li>
                <li>• Modular systems: Add job boards, ATS, CRM, or reporting as needed</li>
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
              A proven 90-day implementation roadmap for recruiting firms, HR consultants, and staffing agencies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 1: Lead Flow + Candidate Management
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Outreach automation + smart filters</li>
                <li>• CRM/ATS integration with email/calendar</li>
                <li>• Candidate intake form automation</li>
                <li>• Pipeline dashboard setup</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 2: Scheduling, Compliance & Visibility
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Auto-scheduling for interviews and feedback loops</li>
                <li>• Secure client/candidate portals</li>
                <li>• EEOC/GDPR opt-in and tagging system</li>
                <li>• Automated reports + weekly update emails</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">3+</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 3+: Retention + Growth
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Client renewal, feedback, and review automation</li>
                <li>• KPI dashboard (time-to-fill, placement rate, NPS)</li>
                <li>• Cross-sell and upsell flows for advisory services</li>
                <li>• Referral and partner campaign automation</li>
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
                <li>High-volume employers looking for fast, professional results</li>
                <li>Strategic HR clients looking for guidance, not just candidates</li>
                <li>Businesses who value compliance, visibility, and data security</li>
                <li>Warm leads from referral systems and satisfied employers</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Money You'll Make</h3>
              <ul className="space-y-2 text-gray-600">
                <li>More placements in less time</li>
                <li>Better client retention through structured communication</li>
                <li>Recurring revenue via long-term staffing contracts</li>
                <li>Value-added service upsells (HR consulting, onboarding, etc.)</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Time You'll Save</h3>
              <ul className="space-y-2 text-gray-600">
                <li>No more chasing calendars or checking for missing resumes</li>
                <li>Admin and outreach handled automatically</li>
                <li>Compliance and audit prep running in the background</li>
                <li>Your team can place more, faster—with less burnout</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">The Bottom Line</h3>
              <p className="text-gray-600 leading-relaxed">
                Hiring is urgent. Trust is everything. And execution speed matters. We help recruiting and HR firms scale placements, automate the admin, and lock in long-term clients—while staying 100% secure and compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Modernize Your Recruiting Workflow?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We help HR consultants, staffing firms, and recruiters automate outreach, communication, and placement tracking—so you can scale faster.
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
                <li><Link href="/hr-recruiting-firms" className="hover:text-blue-400 transition-colors">HR & Recruiting</Link></li>
                <li><Link href="/insurance-brokers" className="hover:text-blue-400 transition-colors">Insurance Brokers</Link></li>
                <li><Link href="/accounting-tax-firms" className="hover:text-blue-400 transition-colors">Accounting & Tax</Link></li>
                <li><Link href="/law-firms" className="hover:text-blue-400 transition-colors">Law Firms</Link></li>
                <li><Link href="/real-estate-agencies" className="hover:text-blue-400 transition-colors">Real Estate</Link></li>
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