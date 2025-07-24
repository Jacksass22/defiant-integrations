import { Navigation } from '@/components/navigation';
import { ArrowRight, Clock, DollarSign, Shield, Home, Camera, FileCheck, TrendingUp, CheckCircle, Building } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function Roofing() {
  useScrollToTop();
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight">
              Roofing: Smart Technology That Actually Works for Your Business
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Generate quality leads, handle insurance processes efficiently, and build the trust that turns one roof into an entire neighborhood.
            </p>
            <button className="inline-flex items-center space-x-2 bg-white text-slate-900 px-8 py-4 font-medium hover:bg-gray-100 transition-colors">
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
              What Roofing Companies Are Dealing With Right Now
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              Running a roofing company means dealing with storm damage, insurance claims, and customers who need major work done on their biggest investment - their home. You're competing against door-to-door storm chasers while building trust with homeowners who've heard horror stories about roofing contractors.
            </p>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-red-700 mb-4">150%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Lead Increase</h3>
                <p className="text-gray-600">More qualified leads with trust-building content</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-red-700 mb-4">60%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Higher Close Rates</h3>
                <p className="text-gray-600">When homeowners trust your expertise</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-red-700 mb-4">200%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Neighborhood Growth</h3>
                <p className="text-gray-600">Same-neighborhood projects increase</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-red-700 mb-4">40%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Faster Insurance</h3>
                <p className="text-gray-600">Claim processing with smart systems</p>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-4">What This Means for Your Business</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Homeowners are skeptical and shop multiple contractors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Insurance delays can kill cash flow and project momentum</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Storm damage creates urgency but also brings out competitors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Referrals are gold, but you need systems to generate them consistently</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Administrative work (estimates, claims, follow-ups) eats up profitable time</span>
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
              Transform your roofing business with AI-powered trust building and efficiency
            </p>
          </div>

          {/* Solution Cards */}
          <div className="space-y-20">
            {/* Solution 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-700 rounded-lg mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Generate Trust-Building Leads
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Homeowners don't trust roofing contractors and fear high-pressure sales
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Professional lead generation and content that builds credibility before you ever meet
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Educational content about roofing materials, insurance processes, and contractor selection</li>
                    <li>• Google Ads targeting "roof inspection," "roof repair," and "honest roofer near me"</li>
                    <li>• Before/after galleries showing quality workmanship and attention to detail</li>
                    <li>• Customer testimonials and reviews prominently featured online</li>
                    <li>• Professional website that builds confidence in your expertise</li>
                  </ul>
                </div>
                <div className="bg-red-50 border-l-4 border-red-700 p-4">
                  <p className="text-red-900 font-semibold">
                    Real Results: 150% more qualified leads and 60% higher close rates
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-700 to-red-900 h-96 rounded-lg flex items-center justify-center">
                <Shield className="w-32 h-32 text-white/20" />
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
                  Professional Social Media and Content Marketing
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Your best work is on rooftops where neighbors can't see the quality details
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI-powered content creation that showcases craftsmanship and builds neighborhood awareness
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Drone footage and professional photos of completed projects</li>
                    <li>• Educational videos about roof maintenance and storm damage identification</li>
                    <li>• Seasonal content about gutter cleaning, ice dam prevention, and roof inspections</li>
                    <li>• Neighborhood project spotlights that generate local interest</li>
                    <li>• Social proof through customer stories and transformation posts</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-blue-900 font-semibold">
                    Real Results: 4x more referrals from completed projects and stronger neighborhood presence
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-lg mb-6">
                  <FileCheck className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Insurance Claim Management
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Insurance processes are slow and complicated, frustrating customers and delaying projects
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI systems that streamline communication and keep insurance projects moving
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automated follow-up on insurance claims and adjuster schedules</li>
                    <li>• Professional documentation and photo packages for insurance submissions</li>
                    <li>• Customer updates on claim status and next steps</li>
                    <li>• Templates for common insurance communications</li>
                    <li>• Scheduling systems that accommodate adjuster availability</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <p className="text-green-900 font-semibold">
                    Real Results: 40% faster claim processing and 90% customer satisfaction on insurance jobs
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-green-800 h-96 rounded-lg flex items-center justify-center">
                <FileCheck className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-600 to-purple-800 h-96 rounded-lg flex items-center justify-center">
                <Building className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-lg mb-6">
                  <Building className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Turn Single Roofs Into Neighborhood Dominance
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Great roofing work doesn't automatically generate nearby referrals
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Systematic relationship building and neighborhood marketing
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automated "neighbor letters" when starting projects in new areas</li>
                    <li>• Follow-up campaigns for customers 2-3 years post-installation</li>
                    <li>• Maintenance reminders and seasonal inspection offers</li>
                    <li>• Referral reward programs with automated tracking</li>
                    <li>• Local SEO targeting specific neighborhoods where you've worked</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                  <p className="text-purple-900 font-semibold">
                    Real Results: 200% increase in same-neighborhood projects and 80% more repeat customers
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
              A proven 90-day implementation roadmap designed for roofing contractors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 shadow-lg">
              <div className="text-red-700 font-bold text-lg mb-2">Month 1</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Professional Credibility Building</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lead generation campaigns targeting trust-focused keywords</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional website with testimonials, certifications, and project galleries</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>AI phone system that handles inquiries professionally and schedules inspections</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-red-700 font-bold text-lg mb-2">Month 2</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Content and Social Media Launch</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Before/after content showcasing quality workmanship</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Educational content about roofing and insurance processes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Neighborhood marketing campaigns and referral systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-red-700 font-bold text-lg mb-2">Month 3+</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Systematic Growth</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Trust-building content generates consistent quality leads</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Insurance claim efficiency improves customer experience and cash flow</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Neighborhood marketing creates geographic clustering of projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What This Actually Means for Your Bottom Line
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-lg">
              <Home className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Leads You'll Generate</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Quality over quantity:</strong> Attract homeowners ready to invest in quality roofing</li>
                <li>• <strong>Local dominance:</strong> Target specific neighborhoods where you want to build presence</li>
                <li>• <strong>Insurance work:</strong> Streamlined processes help you win more insurance projects</li>
                <li>• <strong>Referral multiplication:</strong> Systems that turn satisfied customers into referral sources</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-lg">
              <DollarSign className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Money You'll Make</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Higher close rates:</strong> Trust-building content pre-sells your expertise</li>
                <li>• <strong>Premium pricing:</strong> Professional image supports higher margins</li>
                <li>• <strong>Faster collections:</strong> Efficient insurance processes improve cash flow</li>
                <li>• <strong>Neighborhood clustering:</strong> Multiple projects in same area reduce travel costs</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-lg">
              <Shield className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Trust You'll Build</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Professional image:</strong> Credible online presence overcomes industry skepticism</li>
                <li>• <strong>Educational approach:</strong> Teaching builds trust better than selling</li>
                <li>• <strong>Insurance expertise:</strong> Helping customers navigate claims positions you as an advocate</li>
                <li>• <strong>Consistent follow-up:</strong> Professional communication maintains relationships long-term</li>
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
            Roofing is about more than materials and labor - it's about trust, expertise, and protecting families' biggest investment. Your customers need confidence that you'll do quality work, handle insurance properly, and be there if issues arise.
          </p>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Smart marketing and automation build that trust systematically while handling the business complexity automatically. While your competitors are knocking on doors and competing on price, you'll be the roofing contractor that homeowners seek out and refer to their neighbors.
          </p>
          <p className="text-2xl font-semibold mb-12">
            Ready to see what this looks like for your business?
          </p>
          <button className="inline-flex items-center space-x-2 bg-red-700 text-white px-8 py-4 font-medium hover:bg-red-800 transition-colors text-lg">
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
                <li><Link href="/" className="hover:text-red-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-red-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-red-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-red-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-red-400 transition-colors">Landscaping</Link></li>
                <li><Link href="/roofing" className="hover:text-red-400 transition-colors">Roofing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-red-400 transition-colors">AI Strategy</button></li>
                <li><button className="hover:text-red-400 transition-colors">Implementation</button></li>
                <li><button className="hover:text-red-400 transition-colors">Scaling</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-red-400 transition-colors">Careers</button></li>
                <li><button className="hover:text-red-400 transition-colors">Contact</button></li>
                <li><button className="hover:text-red-400 transition-colors">Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-red-400 transition-colors">Sign In</button></li>
                <li><button className="hover:text-red-400 transition-colors">Subscribe</button></li>
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