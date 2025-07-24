import { ArrowRight, CheckCircle, Leaf, TrendingUp, Users, Shield } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Link } from 'wouter';
import LightRays from '@/components/LightRays';
import BlurText from '@/components/BlurText';
import Galaxy from '@/components/Galaxy';
import TiltedCard from '@/components/TiltedCard';

export default function CannabisRetail() {
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Light Rays Background */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#10b981"
          raysSpeed={0.8}
          lightSpread={1.2}
          rayLength={0.8}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.03}
          fadeDistance={0.8}
          saturation={0.9}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-green-300 text-sm font-medium mb-6 border border-green-400/30">
              <Leaf className="w-4 h-4" />
              <span>Cannabis Retail</span>
            </div>
            
            <BlurText
              text="Built for Growth. Designed for Compliance. Powered by Intelligence."
              delay={100}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
            />
            
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Running a dispensary isn't what it used to be. We help operators run smarter, scale faster, and deliver consistently standout experiences—without adding more tools or stress.
            </p>
            
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2">
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
                Why Top Cannabis Operators Partner With Us
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Most cannabis shops are juggling a patchwork of disconnected systems. POS doesn't talk to marketing. Compliance is a daily fire drill. Staff spend more time explaining than selling. You don't need another app—you need a smarter way to run your operation.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-2xl text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">Impact Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-green-100">Higher Customer Retention with Personalized Journeys</span>
                  <span className="text-2xl font-bold">3x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-100">Better ROI on Local Ads with Hyper-Targeted Campaigns</span>
                  <span className="text-2xl font-bold">5x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-100">Reduction in Compliance Errors with Smart Systems</span>
                  <span className="text-2xl font-bold">80%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-100">More Revenue per Visit Through Strategic Upsells</span>
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
            What Changes When Things Just Flow
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Traffic becomes predictable with geo-targeted campaigns and optimized local visibility",
              "Staff focus on people, not busywork—front desk distractions disappear",
              "Compliance gets easier with automated reports and threshold tracking",
              "Customers actually come back through smart touchpoints and personalized re-engagement",
              "You see what's working with unified sales, marketing, and performance dashboards",
              "New staff get up to speed fast with custom tools and smart onboarding flows"
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold text-sm">→</span>
                </div>
                <p className="text-gray-700">{benefit}</p>
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
              We bring your systems together into a clean, automated, and scalable structure. It's not about replacing your tools—it's about making them work in harmony.
            </p>
          </div>

          <div className="space-y-16">
            {/* Local Customers */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full text-green-800 text-sm font-medium mb-4">
                  <TrendingUp className="w-4 h-4" />
                  <span>Attract the Right Local Customers, Consistently</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Dispensaries often rely on walk-ins or struggle with ad restrictions on Meta/Google.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Hyper-local SMS, SEO, and cannabis-compliant ad strategies that drive foot traffic and loyalty.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Geo-targeted SMS campaigns: '25% Off Edibles – Today Only'",
                    "Weedmaps/Leafly profile optimization with AI-enhanced listings",
                    "SEO landing pages targeting 'dispensary near me,' 'best sativa in [city]'",
                    "QR-coded packaging and displays to collect re-marketing data",
                    "Compliant push notifications and mobile wallet passes"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    Real Results: 5x ROI on local marketing with 2x walk-in conversion
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Local Campaign Performance</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">SMS Open Rate</span>
                      <span className="font-bold text-green-600">94%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Weedmaps CTR</span>
                      <span className="font-bold text-green-600">12.3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Local SEO Ranking</span>
                      <span className="font-bold text-green-600">#1-3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">QR Code Scans</span>
                      <span className="font-bold text-green-600">67%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Per Visit */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">60%</div>
                      <div className="text-sm text-gray-600">Higher Revenue/Visit</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">3x</div>
                      <div className="text-sm text-gray-600">Upsell Conversion</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">$87</div>
                      <div className="text-sm text-gray-600">Avg Order Value</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">89%</div>
                      <div className="text-sm text-gray-600">Bundle Success</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full text-green-800 text-sm font-medium mb-4">
                  <Users className="w-4 h-4" />
                  <span>Increase Revenue Per Visit with Smart Upsells</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: Budtenders are inconsistent, and most customers don't know what else to try.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Predictive upsells and automated education delivered at the point of sale or via follow-up.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Smart POS prompts: 'Pair with this terpene-rich pre-roll'",
                    "Upsell bundles based on past behavior ('Your 3rd time? Try concentrates')",
                    "Shelf talkers and digital displays that auto-rotate based on inventory",
                    "Personalized offers via SMS/email: 'We noticed you like hybrids…'",
                    "New product drip campaigns for loyalty members"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    Real Results: 60% higher revenue per visit and 3x upsell conversion
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full text-green-800 text-sm font-medium mb-4">
                  <Shield className="w-4 h-4" />
                  <span>Stay Compliant Without Drowning in Paperwork</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  The Problem: One misstep in tracking, limits, or reporting can lead to fines—or worse.
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Solution: Automations that reduce compliance workload, sync to METRC/BIOTRACK, and alert you before mistakes happen.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Real-time sync between POS, inventory, and state systems",
                    "Threshold alerts: 'You're nearing your daily cap for [product]'",
                    "Automated ID validation and age verification reminders",
                    "Auto-filled state reports and audit logs",
                    "Digital SOP tracking for every sale, return, and adjustment"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    Real Results: 80% reduction in manual compliance tasks
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Compliance Dashboard</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">METRC Sync - Active</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Daily Limits - Under 90%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">State Report - Due Tomorrow</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Audit Trail - Complete</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">ID Verification - 100%</span>
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
              A proven 90-day implementation roadmap built for cannabis retail
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 1: Foundation & Traffic
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Weedmaps, Leafly, Google Business optimization</li>
                <li>• Local campaign launch (SMS, mobile wallet, SEO)</li>
                <li>• Customer journey audit + tech stack cleanup</li>
                <li>• POS integrations and setup verification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 2: Conversions & Compliance
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Predictive upsell flows at POS and online menus</li>
                <li>• Compliance alerts, syncs, and system automations</li>
                <li>• QR-enabled in-store experiences</li>
                <li>• Email/SMS drip setup for product launches and offers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-green-600 font-bold text-xl">3+</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                Month 3+: Retention & Loyalty
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Loyalty program automation and segmentation</li>
                <li>• Smart review requests + UGC campaigns</li>
                <li>• Referral tracking systems</li>
                <li>• KPI dashboards: AOV, repeat rate, churn, ROI</li>
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
              The Results Speak Louder Than Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">3x</div>
                <div className="text-sm text-gray-600">ROI on local marketing initiatives</div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
                <div className="text-sm text-gray-600">Fewer daily compliance headaches</div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                <div className="text-sm text-gray-600">Increases in revenue per visit</div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">2x</div>
                <div className="text-sm text-gray-600">Return customer rate</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Customers You'll Attract</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Local, legal-age customers searching for trusted brands</li>
                <li>Niche consumers: wellness buyers, first-timers, connoisseurs</li>
                <li>Delivery and pickup customers who convert into walk-ins</li>
                <li>Higher LTV customers via loyalty tiers and subscription-style reorders</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Money You'll Make</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Higher average order value with every visit</li>
                <li>Better margins through targeted promos and automation</li>
                <li>More repeat buyers without paying for new traffic</li>
                <li>Less risk of fines or shutdowns from compliance errors</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Time You'll Save</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Let automation handle follow-ups, SMS, and promo timing</li>
                <li>Reduce manual compliance work with smart integrations</li>
                <li>Eliminate staff confusion with predictive prompts and SOPs</li>
                <li>Save marketing hours with AI-assisted content and targeting</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">The Bottom Line</h3>
              <p className="text-gray-600 leading-relaxed">
                Cannabis retail success depends on more than just products—it's about compliance, community, and consistency. The brands that win are the ones that build trust while running like clockwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Cannabis Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Built for Cannabis. Customized for You.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Whether you're running one dispensary or managing a multi-state operation, we adapt our systems to your tools, team, and timeline. Most importantly: your staff doesn't have to lift a finger—every automation operates quietly in the background.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">POS Integration</h3>
              <p className="text-gray-600 text-sm">Direct integration with your existing point-of-sale system for seamless operations.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Compliance Tracking</h3>
              <p className="text-gray-600 text-sm">Automated compliance monitoring and reporting for state requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Staff AI Assistant</h3>
              <p className="text-gray-600 text-sm">Custom AI assistant available 24/7 to answer internal questions and guide SOPs.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Loyalty Programs</h3>
              <p className="text-gray-600 text-sm">Automated loyalty and retention systems that build long-term customer relationships.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">CRM Integration</h3>
              <p className="text-gray-600 text-sm">Connect with your customer relationship management tools for unified data.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Calendar Management</h3>
              <p className="text-gray-600 text-sm">Smart scheduling and calendar integration for staff and operations coordination.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              We're not here to sell software. We're here to help you operate like the best-run shops in the country—with no guesswork, no extra stress, and no bloat.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Galaxy 
            hueShift={120}
            density={1.5}
            glowIntensity={0.5}
            saturation={0.3}
            starSpeed={0.3}
            rotationSpeed={0.05}
            transparent={false}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Run a Smarter, Safer, More Scalable Dispensary?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            We help cannabis retailers make data-driven decisions while staying compliant and focused on growth.
          </p>
          <TiltedCard
            containerHeight="auto"
            containerWidth="auto"
            imageHeight="auto"
            imageWidth="auto"
            scaleOnHover={1.05}
            rotateAmplitude={8}
            isButton={true}
            className="inline-block"
          >
            <div className="relative pt-6">
              {/* UFO Dome */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-48 h-16 z-10">
                <div className="w-full h-full bg-white/10 rounded-t-full backdrop-blur-md border-t border-l border-r border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-t-full"></div>
                  {/* Dome highlight */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-white/10 rounded-full blur-md"></div>
                </div>
              </div>
              
              {/* Main button body */}
              <div className="relative group bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-full overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/30">
                {/* Orbital rings animation */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 border border-white/20 rounded-full transform rotate-45 animate-orbit-slow"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-20 border border-white/10 rounded-full transform -rotate-45 animate-orbit-reverse"></div>
                </div>
                
                {/* Gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                
                {/* Content */}
                <div className="relative flex items-center space-x-3">
                  <span className="text-white font-semibold text-lg tracking-wide">Start Your Free Assessment</span>
                  <div className="relative">
                    <ArrowRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" />
                    {/* Arrow glow */}
                    <div className="absolute inset-0 bg-white/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                
                {/* Subtle stars */}
                <div className="absolute top-2 right-4 w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle"></div>
                <div className="absolute bottom-3 left-6 w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-twinkle animation-delay-400"></div>
                <div className="absolute top-4 left-12 w-0.5 h-0.5 bg-white rounded-full opacity-30 animate-twinkle animation-delay-800"></div>
              </div>
            </div>
          </TiltedCard>
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
                <li><Link href="/" className="hover:text-green-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-green-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-green-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-green-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-green-400 transition-colors">Landscaping</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Retail</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/brick-mortar-retail" className="hover:text-green-400 transition-colors">Brick-and-Mortar</Link></li>
                <li><Link href="/ecommerce-brands" className="hover:text-green-400 transition-colors">eCommerce Brands</Link></li>
                <li><Link href="/cannabis-retail" className="hover:text-green-400 transition-colors">Cannabis Retail</Link></li>
                <li><Link href="/restaurants-cafes" className="hover:text-green-400 transition-colors">Restaurants</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/cleaning-services" className="hover:text-green-400 transition-colors">Cleaning Services</Link></li>
                <li><Link href="/gyms-personal-trainers" className="hover:text-green-400 transition-colors">Gyms & Trainers</Link></li>
                <li><Link href="/wellness-life-coaches" className="hover:text-green-400 transition-colors">Wellness & Coaches</Link></li>
                <li><Link href="/pet-grooming-boarding" className="hover:text-green-400 transition-colors">Pet Grooming</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
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