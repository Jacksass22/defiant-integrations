import { Navigation } from '@/components/navigation';
import { ArrowRight, Clock, DollarSign, Users, Calendar, MessageSquare, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function HVAC() {
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight">
              HVAC: Smart Technology That Actually Works for Your Business
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Transform your HVAC operations with AI-powered solutions that save time, keep customers happy, and grow your business without the headaches.
            </p>
            <button className="inline-flex items-center space-x-2 bg-white text-blue-900 px-8 py-4 font-medium hover:bg-gray-100 transition-colors">
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
              The HVAC Industry's Perfect Storm
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              Running an HVAC company has never been tougher. Equipment costs have doubled since 2020. Good techs are impossible to find—and the ones you do find want more money. Customers expect you to respond faster, remember their preferences, and keep them informed every step of the way.
            </p>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-blue-600 mb-4">225,000</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Open Positions by 2025</h3>
                <p className="text-gray-600">Nearly 2 jobs for every available technician in the market</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-blue-600 mb-4">$12,000</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Average System Cost</h3>
                <p className="text-gray-600">Double what it was just a few years ago</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-blue-600 mb-4">$45,000</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Annual Revenue Lost</h3>
                <p className="text-gray-600">Due to scheduling and follow-up mistakes</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-blue-600 mb-4">24/7</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Customer Expectations</h3>
                <p className="text-gray-600">Instant responses and proactive communication</p>
              </div>
            </div>

            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-4">What This Means for Your Business</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0 mt-0.5" />
                  <span>Customers slip through the cracks without proper follow-up</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0 mt-0.5" />
                  <span>Manual scheduling leads to double-bookings and missed appointments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0 mt-0.5" />
                  <span>You lose repeat business because customers forget about maintenance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0 mt-0.5" />
                  <span>Time gets wasted on tasks that could be automated</span>
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
              Transform your operations with AI-powered solutions designed specifically for HVAC companies
            </p>
          </div>

          {/* Solution Cards */}
          <div className="space-y-20">
            {/* Solution 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Never Miss a Customer Again
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Customers book service, then disappear until something breaks
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Automated follow-up and reminder systems that keep customers engaged
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automatic maintenance reminders sent via email and text</li>
                    <li>• Follow-up messages after every service call</li>
                    <li>• Birthday and seasonal check-in messages that build relationships</li>
                    <li>• Automatic review requests when jobs go well</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-blue-900 font-semibold">
                    Real Results: Companies see 40% fewer no-shows and 3x more repeat bookings
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-96 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-green-600 to-green-800 h-96 rounded-lg flex items-center justify-center">
                <Calendar className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-lg mb-6">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Schedule Jobs Like a Pro
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Dispatchers waste hours every day playing scheduling Tetris
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Smart calendar systems that handle scheduling and customer updates automatically
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Drag-and-drop scheduling that syncs with your calendar</li>
                    <li>• Automatic appointment confirmations and reminders</li>
                    <li>• Customers get real-time updates when techs are running late</li>
                    <li>• Easy rescheduling when emergencies pop up</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <p className="text-green-900 font-semibold">
                    Real Results: Companies save 2-3 hours daily on scheduling and cut no-shows by 40%
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-lg mb-6">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  AI-Powered Customer Service
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Your phone rings constantly with simple questions, interrupting real work
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI assistants that handle common questions and only pass through calls that actually need a human
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI phone system answers calls and handles simple questions</li>
                    <li>• Only urgent or complex calls get transferred to your team</li>
                    <li>• Chatbots on your website answer basic questions 24/7</li>
                    <li>• AI captures customer details and appointment requests automatically</li>
                    <li>• Smart email responses that sound personal but save time</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                  <p className="text-purple-900 font-semibold">
                    Real Results: 70% fewer interruptions, 50% faster response times, and happier customers
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 h-96 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-orange-600 to-orange-800 h-96 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-lg mb-6">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Turn One-Time Customers Into Regulars
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Customers forget about maintenance until something breaks
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> CRM systems that automatically nurture customer relationships
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Maintenance reminders sent at the right time based on equipment type</li>
                    <li>• Personalized offers for customers ready for system upgrades</li>
                    <li>• Automatic follow-up on estimates that haven't been accepted</li>
                    <li>• Customer history that makes every interaction feel personal</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-4">
                  <p className="text-orange-900 font-semibold">
                    Real Results: 60% increase in maintenance agreement sign-ups
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
              A proven 90-day implementation roadmap designed for minimal disruption and maximum impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 shadow-lg">
              <div className="text-blue-600 font-bold text-lg mb-2">Month 1</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Connect Your Systems</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Integrate your calendar, email, and customer database</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Set up automated appointment reminders and confirmations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Create customer service AI for your website</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-blue-600 font-bold text-lg mb-2">Month 2</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Add Smart Automation</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Launch maintenance reminder campaigns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Set up follow-up sequences for estimates and completed jobs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Train AI on your most common customer questions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-blue-600 font-bold text-lg mb-2">Month 3+</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Watch It Work</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Customers get timely reminders and book more maintenance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Your schedule stays full with less manual work</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Customer relationships improve with consistent communication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What This Actually Means for Your Bottom Line
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-blue-800/50 p-8 rounded-lg">
              <Clock className="w-12 h-12 text-blue-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Time You'll Save</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Scheduling:</strong> Automated appointment booking and confirmations</li>
                <li>• <strong>Follow-up:</strong> No more forgetting to call customers back</li>
                <li>• <strong>Customer service:</strong> AI handles basic questions 24/7</li>
                <li>• <strong>Marketing:</strong> Automated campaigns that nurture relationships</li>
              </ul>
            </div>

            <div className="bg-blue-800/50 p-8 rounded-lg">
              <DollarSign className="w-12 h-12 text-blue-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Money You'll Make</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>More maintenance contracts:</strong> 60% more sign-ups</li>
                <li>• <strong>Better retention:</strong> Regular communication keeps you top-of-mind</li>
                <li>• <strong>Fewer no-shows:</strong> Cut no-shows by 40%</li>
                <li>• <strong>Higher conversion:</strong> Follow up on every estimate automatically</li>
              </ul>
            </div>

            <div className="bg-blue-800/50 p-8 rounded-lg">
              <TrendingUp className="w-12 h-12 text-blue-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Competitive Advantages</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• Respond to customers instantly, even after hours</li>
                <li>• Remember every customer's preferences and history</li>
                <li>• Follow up consistently while competitors forget</li>
                <li>• Build a reputation as the responsive, professional choice</li>
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
            Your customers want to feel valued and remembered. They want quick responses and proactive communication. You want to grow your business without spending all day managing schedules and chasing follow-ups.
          </p>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Smart automation isn't about replacing the personal touch—it's about making sure you never miss an opportunity to provide it. While your competitors are still playing phone tag and forgetting to follow up, you'll be the company that customers can count on.
          </p>
          <p className="text-2xl font-semibold mb-12">
            Ready to see what this looks like for your business?
          </p>
          <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 font-medium hover:bg-blue-700 transition-colors text-lg">
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
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-blue-400 transition-colors">HVAC</Link></li>
                <li><button className="hover:text-blue-400 transition-colors">Featured Insights</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-blue-400 transition-colors">AI Strategy</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Implementation</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Scaling</button></li>
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
                <li><button className="hover:text-blue-400 transition-colors">Sign In</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Subscribe</button></li>
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