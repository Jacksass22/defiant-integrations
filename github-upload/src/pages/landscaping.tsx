import { Navigation } from '@/components/navigation';
import { ArrowRight, Clock, DollarSign, Camera, Calendar, Leaf, TrendingUp, CheckCircle, Trees } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';
import landscapingImage from '@assets/image_1753469470789.png';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import { useState } from 'react';

export default function Landscaping() {
  useScrollToTop();
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={landscapingImage}
            alt="Professional landscaping with striped lawn pattern"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <BlurText
              text="Landscaping: Smart Technology That Actually Works for Your Business"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
            />
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Generate more leads, showcase your work professionally, and grow beyond just mowing lawns.
            </p>
            <button 
              onClick={() => setShowLeadCaptureModal(true)}
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 font-medium hover:bg-green-700 transition-colors"
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
              What Landscaping Companies Are Dealing With Right Now
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              Running a landscaping company means dealing with weather, seasonal demands, and customers who want their yards to look perfect year-round. You're competing for high-value projects while managing crews, dealing with equipment, and trying to keep customers happy when Mother Nature doesn't cooperate.
            </p>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-green-600 mb-4">200%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Lead Increase</h3>
                <p className="text-gray-600">With professional online presence and marketing</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-green-600 mb-4">70%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Retention Rate</h3>
                <p className="text-gray-600">Installation customers become maintenance clients</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-green-600 mb-4">5x</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Social Engagement</h3>
                <p className="text-gray-600">More referrals from showcasing your work online</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-green-600 mb-4">40%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Higher Value</h3>
                <p className="text-gray-600">Average project value with professional marketing</p>
              </div>
            </div>

            <div className="bg-green-900 text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-4">What This Means for Your Business</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <span>Premium landscaping projects go to companies with better marketing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <span>Customers choose based on price because they can't see the difference in quality</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <span>Seasonal slowdowns hurt cash flow and crew retention</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <span>Word-of-mouth isn't enough to grow beyond your current neighborhood</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <span>Time spent on estimates and follow-ups takes away from actual landscaping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How Smart Technology Fixes These Problems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your landscaping business with AI-powered marketing and automation
            </p>
          </div>

          {/* Solution Cards */}
          <div className="space-y-20">
            {/* Solution 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-lg mb-6">
                  <Trees className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Generate Premium Leads Year-Round
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Customers don't know you exist or what separates you from "lawn guys"
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Professional lead generation and content that showcases your expertise
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Google Ads that target homeowners searching for landscape design and installation</li>
                    <li>• Before/after content that demonstrates your transformation capabilities</li>
                    <li>• Educational content about plant selection, seasonal care, and landscape investment value</li>
                    <li>• SEO-optimized website that ranks for "landscape design near me"</li>
                    <li>• Social media campaigns featuring your best projects</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <p className="text-green-900 font-semibold">
                    Real Results: 200% increase in qualified leads and 40% higher average project value
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-green-800 h-96 rounded-lg flex items-center justify-center">
                <Trees className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-blue-600 to-blue-800 h-96 rounded-lg flex items-center justify-center">
                <Camera className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Professional Social Media That Sells
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Your best work doesn't get seen by potential customers
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI-powered content creation and social media management that showcases your projects
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional before/after posts that highlight transformations</li>
                    <li>• Seasonal content calendar with planting tips, maintenance reminders, and design ideas</li>
                    <li>• Video content showing installation process and crew expertise</li>
                    <li>• Customer testimonials and project spotlights</li>
                    <li>• Automated posting schedule that keeps you visible year-round</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-blue-900 font-semibold">
                    Real Results: 5x more social media engagement and 60% more referrals from online presence
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-lg mb-6">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Smart Customer Communication
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Landscaping projects take time, and customers need constant updates
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI systems that handle inquiries and keep customers informed throughout projects
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI phone system qualifies leads and schedules site visits</li>
                    <li>• Automated estimate follow-up for projects over $5,000</li>
                    <li>• Weather-related communication: "Rain delay - your project will resume Thursday"</li>
                    <li>• Project milestone updates with photos of progress</li>
                    <li>• Seasonal reminders for maintenance, fertilization, and plant care</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                  <p className="text-purple-900 font-semibold">
                    Real Results: 50% better estimate conversion and dramatically fewer customer service issues
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 h-96 rounded-lg flex items-center justify-center">
                <Calendar className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-orange-600 to-orange-800 h-96 rounded-lg flex items-center justify-center">
                <Leaf className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-lg mb-6">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Turn One-Time Projects Into Ongoing Revenue
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Customers hire you once for installation, then disappear
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Automated relationship building that creates recurring maintenance revenue
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Maintenance reminder campaigns based on what you installed</li>
                    <li>• Seasonal service offerings (spring cleanup, fall preparation, holiday lighting)</li>
                    <li>• Educational email series about caring for their new landscape</li>
                    <li>• Special offers for past customers during slow seasons</li>
                    <li>• Automatic follow-up: "How are your new plantings doing?"</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-4">
                  <p className="text-orange-900 font-semibold">
                    Real Results: 70% of installation customers become maintenance clients
                  </p>
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
              How We Get You There
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 90-day implementation roadmap designed for landscaping businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 shadow-lg">
              <div className="text-green-600 font-bold text-lg mb-2">Month 1</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Professional Online Presence</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lead generation campaigns targeting premium landscaping searches</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Social media setup with content calendar and posting automation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>AI phone system for lead qualification and appointment scheduling</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-green-600 font-bold text-lg mb-2">Month 2</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Content and Communication Systems</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Before/after content creation showcasing your best work</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Automated follow-up sequences for estimates and completed projects</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Weather and seasonal communication workflows</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-green-600 font-bold text-lg mb-2">Month 3+</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Revenue Growth and Retention</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Content marketing drives consistent premium leads</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Social media presence attracts referrals and repeat customers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Automated systems convert installations into maintenance contracts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What This Actually Means for Your Bottom Line
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-green-800/50 p-8 rounded-lg">
              <Trees className="w-12 h-12 text-green-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Leads You'll Generate</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Premium projects:</strong> Target homeowners ready to invest in quality landscaping</li>
                <li>• <strong>Year-round visibility:</strong> Content marketing works even in off-season</li>
                <li>• <strong>Referral multiplication:</strong> Social media showcases work to neighbors and friends</li>
                <li>• <strong>Geographic expansion:</strong> Digital marketing reaches beyond your current area</li>
              </ul>
            </div>

            <div className="bg-green-800/50 p-8 rounded-lg">
              <DollarSign className="w-12 h-12 text-green-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Money You'll Make</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Higher project values:</strong> Professional marketing attracts customers who value quality</li>
                <li>• <strong>Recurring revenue:</strong> Convert 70% of installations into ongoing maintenance</li>
                <li>• <strong>Seasonal stability:</strong> Maintenance contracts provide off-season income</li>
                <li>• <strong>Premium pricing:</strong> Professional image justifies higher rates</li>
              </ul>
            </div>

            <div className="bg-green-800/50 p-8 rounded-lg">
              <Clock className="w-12 h-12 text-green-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Time You'll Save</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Lead qualification:</strong> AI handles initial inquiries and schedules qualified visits</li>
                <li>• <strong>Content creation:</strong> Automated social media keeps you visible without daily effort</li>
                <li>• <strong>Customer updates:</strong> Automated communication handles routine project updates</li>
                <li>• <strong>Follow-up work:</strong> Systems nurture leads and maintain customer relationships</li>
              </ul>
            </div>
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
            Landscaping is visual work, but most companies are invisible online. Your customers want to see transformations, understand the value of quality work, and feel confident in their investment. You want to attract customers who appreciate craftsmanship, not just compete on price.
          </p>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Smart marketing and automation showcase your expertise while handling the business side automatically. While your competitors are still relying on yard signs and word-of-mouth, you'll be the landscaping company that homeowners discover and choose for their most important projects.
          </p>
          <p className="text-2xl font-semibold mb-12">
            Ready to see what this looks like for your business?
          </p>
          <button 
            onClick={() => setShowLeadCaptureModal(true)}
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 font-medium hover:bg-green-700 transition-colors text-lg"
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
        title="Transform Your Landscaping Business"
        subtitle="Get a customized assessment for your landscaping company"
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
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/hvac" className="hover:text-green-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-green-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-green-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-green-400 transition-colors">Landscaping</Link></li>
                <li><Link href="/roofing" className="hover:text-green-400 transition-colors">Roofing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ai-strategy-development" className="hover:text-green-400 transition-colors">AI Strategy</Link></li>
                <li><Link href="/system-integration" className="hover:text-green-400 transition-colors">Implementation</Link></li>
                <li><Link href="/change-management" className="hover:text-green-400 transition-colors">Scaling</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-green-400 transition-colors">Careers</button></li>
                <li><button className="hover:text-green-400 transition-colors">Contact</button></li>
                <li><button className="hover:text-green-400 transition-colors">Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-green-400 transition-colors">Subscribe</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Defiant Integrations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}