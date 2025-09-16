import { ArrowRight, CheckCircle, Scale, Shield, FileText, Users } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import { useState } from 'react';

export default function LawFirms() {
  useScrollToTop();
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full text-slate-800 text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              <span>Law Firms</span>
            </div>
            
            <BlurText
              text="Smart Technology That Actually Works for Your Practice"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            />
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline casework, increase client retention, and grow your firm with systems that prioritize security, compliance, and data control—so you can focus on winning, not worrying.
            </p>
            
            <button 
              onClick={() => setShowLeadCaptureModal(true)}
              className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
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
                What Law Firms Are Dealing With Right Now
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're a solo practitioner or managing a growing firm, you're balancing court deadlines, intake, client communication, billing, and compliance—often across disconnected, non-secure tools. Every missed follow-up or data misstep isn't just inefficient—it's a liability. Modern firms need modern systems that meet strict legal and ethical standards, without handing client data to third parties.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">Impact Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-200">Less Time on Admin and Intake</span>
                  <span className="text-2xl font-bold">70%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-200">Client Conversion with Faster Response</span>
                  <span className="text-2xl font-bold">2x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-200">Increase in Referrals Through Smart Follow-Up</span>
                  <span className="text-2xl font-bold">3x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-200">Reduction in Missed Deadlines & Errors</span>
                  <span className="text-2xl font-bold">80%</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-slate-600 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">Fully Local Hosting + Data Encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">Legal Industry Compliance (ABA, GDPR, HIPAA)</span>
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
              Smart Legal Tech That Prioritizes Privacy and Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help law firms implement automation systems built for legal use, with end-to-end encryption, audit-ready reporting, and local/self-hosted deployment options to give you full control over your client data.
            </p>
          </div>

          <div className="space-y-16">
            {/* Secure Intake */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full text-slate-800 text-sm font-medium mb-4">
                  <Users className="w-4 h-4" />
                  <span>Convert More Clients with Secure Intake Automation</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Many lead forms and CRMs aren't legally compliant—or secure enough for client data.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Local-first, secure intake workflows that ensure fast follow-up and airtight confidentiality.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Fully encrypted forms hosted on your domain/server",
                    "Instant SMS/email responses with templated disclaimers",
                    "AI assistant that triages inquiries without storing PII in third-party systems",
                    "Local CRM (or synced to your private cloud) for end-to-end intake tracking",
                    "Activity logs and audit trails for compliance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                  <p className="text-slate-800 font-semibold">
                    Real Results: 2x increase in conversions while maintaining full data control
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Secure Intake Dashboard</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">New Inquiries</span>
                      <span className="font-bold text-slate-600">+247%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Response Time</span>
                      <span className="font-bold text-slate-600">&lt; 2 min</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Conversion Rate</span>
                      <span className="font-bold text-slate-600">34%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Compliance Score</span>
                      <span className="font-bold text-green-600">100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Casework Management */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-slate-600">70%</div>
                      <div className="text-sm text-gray-600">Time Saved</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-slate-600">80%</div>
                      <div className="text-sm text-gray-600">Fewer Missed Deadlines</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">256-bit</div>
                      <div className="text-sm text-gray-600">Encryption</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-slate-600">100%</div>
                      <div className="text-sm text-gray-600">Audit Ready</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full text-slate-800 text-sm font-medium mb-4">
                  <FileText className="w-4 h-4" />
                  <span>Streamline Casework—With Zero Data Leaks</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Sharing docs over email or cloud platforms leaves you vulnerable to breaches and non-compliance.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Self-hosted systems that centralize tasks, documents, and communication—fully encrypted.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Secure client portal hosted on your private server or preferred data region",
                    "Role-based access controls for teams and clients",
                    "Calendar + deadline automation with encrypted sync",
                    "Document templates + file uploads with chain-of-custody tracking",
                    "Automatic backups and permission alerts"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                  <p className="text-slate-800 font-semibold">
                    Real Results: 70% reduction in admin time and 80% fewer missed deadlines—with compliance baked in
                  </p>
                </div>
              </div>
            </div>

            {/* Referral Building */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full text-slate-800 text-sm font-medium mb-4">
                  <Shield className="w-4 h-4" />
                  <span>Build Referrals While Staying Ethical and Secure</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Legacy marketing systems often lack clarity around legal ad compliance and data protection.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Smart follow-ups and referral systems designed with ethics, encryption, and professionalism in mind.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Review request flows that protect privacy while boosting visibility",
                    "Referral programs tailored to bar association guidelines",
                    "Educational campaigns hosted on your secure domain",
                    "Birthday and case anniversary emails with secure opt-outs and consent tracking",
                    "Zero third-party selling or tracking—your list stays yours"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                  <p className="text-slate-800 font-semibold">
                    Real Results: 3x more referrals with no compromise on client trust
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Compliance Dashboard</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">ABA Compliance - Verified</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">GDPR Compliance - Active</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Data Encryption - 256-bit</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Audit Logs - Complete</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Local Hosting - Secured</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Security That's Not Optional—It's Built In
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Local Hosting or Private Cloud</h3>
                  <p className="text-gray-600">We install your system on your hardware or trusted hosting environment—you own the data.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">End-to-End Encryption</h3>
                  <p className="text-gray-600">All communications and documents are encrypted at rest and in transit using legal-grade security.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Zero Third-Party Storage</h3>
                  <p className="text-gray-600">No public cloud vendors unless specifically approved—everything runs in your controlled environment.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Audit-Ready Logs</h3>
                  <p className="text-gray-600">Every action is logged with time, user, IP address, and file status for bar compliance and legal audits.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Ethical AI, Built for Law</h3>
                  <p className="text-gray-600">No sensitive data ever leaves your system. We use only compliant AI models—no scraping, no black boxes.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Legal Industry Compliance</h3>
                  <p className="text-gray-600">Designed specifically for ABA, GDPR, and HIPAA requirements when applicable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-700 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Modernize—Without Compromising Privacy or Control?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            We help law firms implement automation systems built for legal use, with end-to-end encryption, audit-ready reporting, and local deployment options.
          </p>
          <button 
            onClick={() => setShowLeadCaptureModal(true)}
            className="bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
          >
            <span>Start Your Free Assessment</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        open={showLeadCaptureModal}
        onOpenChange={setShowLeadCaptureModal}
        title="Transform Your Law Firm"
        subtitle="Get a customized assessment for your legal practice"
      />

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
                <li><Link href="/" className="hover:text-slate-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-slate-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-slate-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-slate-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-slate-400 transition-colors">Landscaping</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Retail</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/brick-mortar-retail" className="hover:text-slate-400 transition-colors">Brick-and-Mortar</Link></li>
                <li><Link href="/ecommerce-brands" className="hover:text-slate-400 transition-colors">eCommerce Brands</Link></li>
                <li><Link href="/cannabis-retail" className="hover:text-slate-400 transition-colors">Cannabis Retail</Link></li>
                <li><Link href="/specialty-food-makers" className="hover:text-slate-400 transition-colors">Specialty Food</Link></li>
                <li><Link href="/local-boutiques" className="hover:text-slate-400 transition-colors">Local Boutiques</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Professional</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/law-firms" className="hover:text-slate-400 transition-colors">Law Firms</Link></li>
                <li><Link href="/real-estate-agencies" className="hover:text-slate-400 transition-colors">Real Estate</Link></li>
                <li><Link href="/cleaning-services" className="hover:text-slate-400 transition-colors">Cleaning Services</Link></li>
                <li><Link href="/gyms-personal-trainers" className="hover:text-slate-400 transition-colors">Gyms & Trainers</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-slate-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-slate-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-slate-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-slate-400 transition-colors">Blog</a></li>
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