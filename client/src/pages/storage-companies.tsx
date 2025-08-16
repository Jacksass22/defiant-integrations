import { Navigation } from '@/components/navigation';
import { ArrowRight, Clock, DollarSign, Users, Calendar, MessageSquare, TrendingUp, CheckCircle, Shield, Key, CreditCard } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import { useState } from 'react';

export default function StorageCompanies() {
  useScrollToTop();
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <BlurText
              text="Storage Companies: Maximize Occupancy, Minimize Headaches"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
            />
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              We help storage facility owners increase occupancy rates, reduce churn, and automate operations with AI-powered systems that handle inquiries, bookings, and customer retention while you focus on growing your business.
            </p>
            <button 
              onClick={() => setShowLeadCaptureModal(true)}
              className="inline-flex items-center space-x-2 bg-white text-orange-900 px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
            >
              <span>Start Your Free Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              The Real Problem: It's Not the Market—It's the Follow-Through
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              You're not losing customers because your storage facility is bad. You're losing customers because inquiries go unanswered, move-outs aren't followed up on, late payment calls are missed, and vacant units sit empty while potential customers can't get information after hours. The self-storage industry is booming with $22 billion in revenue, but most facilities are leaving money on the table with manual processes and poor customer experience.
            </p>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-orange-600 mb-4">$22B</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Industry Revenue</h3>
                <p className="text-gray-600">Annual self-storage industry revenue in the US</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-orange-600 mb-4">85%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Average Occupancy Rate</h3>
                <p className="text-gray-600">National average, but top facilities reach 95%+</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-orange-600 mb-4">$35,000</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Annual Revenue Lost</h3>
                <p className="text-gray-600">Due to poor follow-up and customer service gaps</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-orange-600 mb-4">24/7</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Customer Expectations</h3>
                <p className="text-gray-600">Instant responses and immediate unit availability</p>
              </div>
            </div>

            <div className="bg-orange-900 text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-4">The Transformation: From Vacant to Profitable</h3>
              <p className="mb-4">We help storage facilities go from manual management and missed opportunities to automated, high-occupancy operations that run themselves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Offer: The System That Never Sleeps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are our core service packages tailored for storage businesses—but we also offer custom integrations and software development solutions upon consultation. If you have a unique system, workflow, or need, we can build a solution that fits.
            </p>
            <div className="mt-8 max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 font-medium">We install a 3-part AI-powered customer acquisition and retention system:</p>
            </div>
          </div>

          {/* Solution Cards */}
          <div className="space-y-20">
            {/* Solution 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-lg mb-6">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  1. 24/7 Inquiry Handler
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  No more "they went with someone else."
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI chatbot answers unit availability questions instantly</li>
                    <li>• Phone AI qualifies prospects and books viewings</li>
                    <li>• Automated follow-up sequences for warm leads</li>
                    <li>• Real-time unit pricing and availability updates</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-4">
                  <p className="text-orange-900 font-semibold">
                    Real Results: 65% more qualified leads, 40% faster move-in process
                  </p>
                </div>
              </div>
              <div className="h-96 rounded-lg overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="w-24 h-24 text-orange-600 mx-auto mb-4" />
                  <p className="text-orange-800 font-semibold">AI Inquiry System</p>
                  <p className="text-orange-600">24/7 Customer Support</p>
                </div>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 h-96 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                  <p className="text-blue-800 font-semibold">Smart Retention Engine</p>
                  <p className="text-blue-600">Automated Communications</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  2. Customer Retention Engine
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  No more surprise move-outs or payment defaults.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automated payment reminders and late notices</li>
                    <li>• Move-out prevention campaigns for at-risk customers</li>
                    <li>• Loyalty programs and upgrade opportunities</li>
                    <li>• Exit interviews and win-back sequences</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-blue-900 font-semibold">
                    Real Results: 25% reduction in churn, 30% fewer payment defaults
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-lg mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  3. Smart Operations Hub
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  No more double bookings or access issues.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automated unit assignments and access codes</li>
                    <li>• Move-in/move-out workflow management</li>
                    <li>• Maintenance request tracking and scheduling</li>
                    <li>• Security and access control integration</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <p className="text-green-900 font-semibold">
                    Real Results: 50% reduction in operational errors, 80% faster move-ins
                  </p>
                </div>
              </div>
              <div className="h-96 rounded-lg overflow-hidden bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-24 h-24 text-green-600 mx-auto mb-4" />
                  <p className="text-green-800 font-semibold">Operations Hub</p>
                  <p className="text-green-600">Automated Workflows</p>
                </div>
              </div>
            </div>

            {/* Real Storage Wins Section */}
            <div className="bg-orange-900 text-white p-12 rounded-lg text-center">
              <h3 className="font-serif text-3xl font-bold mb-8">Real Storage Wins (Because We Built This With Your Industry in Mind)</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-orange-300 mb-2">65%</div>
                  <div className="text-lg">more qualified leads</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-300 mb-2">25%</div>
                  <div className="text-lg">reduction in churn</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-300 mb-2">95%+</div>
                  <div className="text-lg">average occupancy rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-300 mb-2">80%</div>
                  <div className="text-lg">faster move-in process</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The Implementation Roadmap (90 Days to Full Automation)
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 shadow-lg">
              <div className="text-orange-600 font-bold text-lg mb-2">Month 1</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Setup & Connect</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Connect property management system and website</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Install AI chatbot and phone system</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Launch inquiry response and lead nurturing flows</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-orange-600 font-bold text-lg mb-2">Month 2</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Optimize & Expand</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Build customer retention and payment reminder campaigns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Train AI with facility-specific FAQs and policies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Add move-out prevention and win-back workflows</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-orange-600 font-bold text-lg mb-2">Month 3+</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Full Automation</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Automate seasonal promotions and pricing adjustments</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Deploy predictive analytics for occupancy optimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Launch referral programs and customer loyalty systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works Section */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why This Works (And Why Your Competitors Haven't Done It Yet)
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="font-serif text-3xl font-bold mb-6">They're still answering phones and chasing payments manually.</h3>
              <p className="text-xl text-gray-200 mb-8">You'll have:</p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-1" />
                  <span>A system that responds to inquiries instantly</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-1" />
                  <span>Automated customer retention and payment collection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-1" />
                  <span>Operations that run smoothly without constant oversight</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-1" />
                  <span>Higher occupancy rates and customer satisfaction</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-orange-800 h-96 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-32 h-32 text-white/20" />
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold mb-4">This isn't just automation. It's optimization.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The Bottom Line
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Your customers want immediate answers, seamless experiences, and reliable service. You want to maximize occupancy without being tied to your phone 24/7 or constantly chasing payments and managing crises.
          </p>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Smart automation isn't about removing the human touch—it's about making sure every customer gets the attention they deserve, when they need it. While your competitors are still missing calls and losing customers to poor follow-up, you'll be the storage facility that customers recommend to their friends.
          </p>
          <p className="text-2xl font-semibold mb-12">
            Ready to see what this looks like for your storage business?
          </p>
          <button 
            onClick={() => setShowLeadCaptureModal(true)}
            className="inline-flex items-center space-x-2 bg-orange-600 text-white px-8 py-4 font-medium hover:bg-orange-700 transition-colors text-lg"
          >
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
                <li><Link href="/hvac" className="hover:text-blue-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-blue-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-blue-400 transition-colors">Electrical</Link></li>
                <li><Link href="/storage-companies" className="hover:text-blue-400 transition-colors">Storage Companies</Link></li>
                <li><Link href="/restaurants-cafes" className="hover:text-blue-400 transition-colors">Restaurants & Cafés</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ai-strategy-development" className="hover:text-blue-400 transition-colors">AI Strategy</Link></li>
                <li><Link href="/system-integration" className="hover:text-blue-400 transition-colors">Implementation</Link></li>
                <li><Link href="/change-management" className="hover:text-blue-400 transition-colors">Scaling</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-blue-400 transition-colors">Careers</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Contact</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-blue-400 transition-colors">Subscribe</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Defiant Integrations. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <LeadCaptureModal
        open={showLeadCaptureModal}
        onOpenChange={setShowLeadCaptureModal}
        title="Storage Business AI Assessment"
        subtitle="Get a customized automation strategy for your storage facility"
      />
    </div>
  );
}