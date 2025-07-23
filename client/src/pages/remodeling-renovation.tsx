import { ArrowRight, CheckCircle, Hammer, TrendingUp, Users, Calendar } from 'lucide-react';
import { Link } from 'wouter';

export default function RemodelingRenovation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium mb-6">
              <Hammer className="w-4 h-4" />
              <span>Remodeling & Renovation</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smart Technology That Actually Works for Your Business
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Simplify project management, win high-value contracts, and build a reputation for reliability and craftsmanship in a competitive market.
            </p>
            
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2">
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
                What Remodeling & Renovation Companies Are Dealing With Right Now
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Running a remodeling business means managing teams, suppliers, timelines, and demanding clients—all while ensuring exceptional craftsmanship. You're competing against cut-rate contractors, flaky freelancers, and national franchises, while trying to deliver projects that actually wow your clients and stay profitable.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-8 rounded-2xl text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">Impact Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-amber-100">More Leads from Clients Ready to Spend</span>
                  <span className="text-2xl font-bold">3x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-100">Higher Close Rate with Premium Presentation</span>
                  <span className="text-2xl font-bold">75%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-100">Scheduling Accuracy with Smart Systems</span>
                  <span className="text-2xl font-bold">90%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-100">More Referrals from Clear Communication</span>
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
              "Project delays due to poor scheduling or unclear communication",
              "Missed sales from poor online presence or generic branding",
              "Confused clients during long timelines and change orders",
              "Lost time on follow-ups, estimates, and updates",
              "Difficulty scaling because of disorganized operations"
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
              Transform your remodeling business with smart sales, scheduling, and client communication systems.
            </p>
          </div>

          <div className="space-y-16">
            {/* Lead Generation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium mb-4">
                  <TrendingUp className="w-4 h-4" />
                  <span>Attract High-Intent, High-Budget Leads</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Most online leads are price-shoppers or not ready to commit.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Target serious clients with professional branding, optimized lead funnels, and project showcases that signal expertise.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Website and landing pages showcasing luxury kitchens, bathrooms, and custom builds",
                    "Google Ads targeting 'design-build,' 'high-end remodeling,' 'licensed home renovation'",
                    "SEO targeting location + premium service keywords",
                    "Online estimate request forms with qualification filters",
                    "Social media content that highlights craftsmanship, timelines, and happy clients"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-amber-800 font-semibold">
                    Real Results: 3x increase in qualified leads and 75% higher project close rate
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Premium Kitchen Remodel</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Design Consultation</span>
                      <span>Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Premium Materials</span>
                      <span>Quartz, Custom Cabinets</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Timeline</span>
                      <span>6-8 weeks</span>
                    </div>
                    <div className="flex justify-between font-bold text-amber-600">
                      <span>Investment</span>
                      <span>$45,000 - $65,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Branding */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-amber-600">4.9★</div>
                      <div className="text-sm text-gray-600">Google Reviews</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-amber-600">89</div>
                      <div className="text-sm text-gray-600">Projects Complete</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-amber-600">60%</div>
                      <div className="text-sm text-gray-600">More Referrals</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-amber-600">4x</div>
                      <div className="text-sm text-gray-600">Social Engagement</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium mb-4">
                  <Users className="w-4 h-4" />
                  <span>Build a Premium Brand That Commands Trust</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Homeowners are nervous about hiring someone for a $50K+ renovation—one bad review can tank trust.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Use smart content to build a brand that communicates quality, reliability, and process-driven work.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Before/after photos with detailed process breakdowns",
                    "Client testimonials that highlight timelines, clarity, and craftsmanship",
                    "Behind-the-scenes content: material choices, team intros, project walkthroughs",
                    "Google Review management and reputation campaigns",
                    "Educational content on permitting, inspections, and code compliance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-amber-800 font-semibold">
                    Real Results: 60% more referrals and 4x social media engagement
                  </p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Smart Project Scheduling and Communication</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Timelines shift, subcontractors are unpredictable, and clients hate being in the dark.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: AI-driven tools keep everyone updated, optimize schedules, and reduce chaos.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Automated client updates: 'Drywall is complete—cabinet install starts Thursday'",
                    "Smart scheduling that accounts for crew availability and delivery timelines",
                    "Daily task check-ins with your team via SMS or app",
                    "Interactive project timelines and progress dashboards for clients",
                    "Appointment confirmations and client satisfaction check-ins"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-amber-800 font-semibold">
                    Real Results: 90% reduction in scheduling errors and 2x faster project closeouts
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Project Timeline Dashboard</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Demo & Prep - Complete</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Electrical Rough-in - Complete</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      <span className="text-sm">Drywall - In Progress</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span className="text-sm text-gray-500">Cabinet Install - Scheduled</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span className="text-sm text-gray-500">Final Touches - Pending</span>
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
              A proven 90-day implementation roadmap built for remodelers and renovation pros
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-amber-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 1: Lead Generation & Trust Building
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Professional website with photo galleries, testimonials, and clear CTAs</li>
                <li>• Local SEO and Google My Business optimization</li>
                <li>• Ads targeting affluent neighborhoods and renovation keywords</li>
                <li>• Branded proposal templates and estimate workflows</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-amber-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 2: Scheduling & Communication Automation
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Smart CRM for project milestones, updates, and reminders</li>
                <li>• Automated appointment confirmations and material delivery coordination</li>
                <li>• Client dashboards and live project timeline access</li>
                <li>• Subcontractor coordination tools and internal task reminders</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-amber-600 font-bold text-xl">3+</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 3+: Repeat Business & Referral Growth
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Post-project email campaigns with offers and loyalty perks</li>
                <li>• Online review campaigns and referral program automations</li>
                <li>• Retargeting ads to stay visible in the market</li>
                <li>• Monthly reporting to track lead flow, client retention, and ROI</li>
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
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Leads You'll Generate</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Renovation-ready homeowners with clear budgets</li>
                <li>Investors seeking reliable contractors for repeat work</li>
                <li>High-ticket clients for kitchens, basements, bathrooms</li>
                <li>Commercial or real estate leads for long-term partnerships</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Money You'll Make</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Close more jobs at premium pricing</li>
                <li>Reduce downtime between projects</li>
                <li>Upsell related services and design packages</li>
                <li>Win repeat business without paying for new leads</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Time You'll Save</h3>
              <ul className="space-y-2 text-gray-600">
                <li>No more juggling spreadsheets and whiteboards</li>
                <li>Less time chasing clients for approvals and payments</li>
                <li>Fewer miscommunications between clients and crews</li>
                <li>Automated follow-ups for revenue opportunities</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">The Bottom Line</h3>
              <p className="text-gray-600 leading-relaxed">
                Remodeling businesses live and die by trust, communication, and execution. Your clients aren't just buying materials—they're buying peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Systemize and Scale Your Remodeling Business?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            We help you systemize your business so you can deliver peace of mind every time—while freeing up your time to grow, hire, and build a company you're proud of.
          </p>
          <button className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2">
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
                <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-amber-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-amber-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-amber-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-amber-400 transition-colors">Landscaping</Link></li>
                <li><Link href="/roofing" className="hover:text-amber-400 transition-colors">Roofing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/painting" className="hover:text-amber-400 transition-colors">Painting</Link></li>
                <li><Link href="/general-contracting" className="hover:text-amber-400 transition-colors">General Contracting</Link></li>
                <li><Link href="/cleaning-services" className="hover:text-amber-400 transition-colors">Cleaning Services</Link></li>
                <li><Link href="/remodeling-renovation" className="hover:text-amber-400 transition-colors">Remodeling & Renovation</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Consumer</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/restaurants-cafes" className="hover:text-amber-400 transition-colors">Restaurants</Link></li>
                <li><Link href="/beauty-salons-spas" className="hover:text-amber-400 transition-colors">Beauty & Spas</Link></li>
                <li><Link href="/barbershops" className="hover:text-amber-400 transition-colors">Barbershops</Link></li>
                <li><Link href="/gyms-personal-trainers" className="hover:text-amber-400 transition-colors">Gyms & Trainers</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Blog</a></li>
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