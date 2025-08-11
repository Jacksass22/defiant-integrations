import { Navigation } from '@/components/navigation';
import { ArrowRight, Clock, DollarSign, Coffee, Calendar, MessageSquare, TrendingUp, CheckCircle, Users, Camera } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import { useState } from 'react';
import restaurantImage from '@assets/pexels-msuatgunerli-3252051_1754953667092.jpg';

export default function RestaurantsCafes() {
  useScrollToTop();
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-br from-orange-600 via-red-600 to-red-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <BlurText
              text="Restaurants & Cafés: Smart Technology That Actually Works for Your Business"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
            />
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Attract more customers, manage operations smoothly, and build loyalty that keeps people coming back even when competitors offer delivery discounts.
            </p>
            <button 
              onClick={() => setShowLeadCaptureModal(true)}
              className="inline-flex items-center space-x-2 bg-white text-red-900 px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
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
              What Restaurants and Cafés Are Dealing With Right Now
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              Running a restaurant or café means balancing great food with customer service, managing staff schedules, and competing with delivery apps that are changing how people dine. You're dealing with online reviews that can make or break your reputation while trying to fill tables during slow periods and manage rushes when you're slammed.
            </p>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-orange-600 mb-4">150%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">New Customer Increase</h3>
                <p className="text-gray-600">More new customer visits with targeted marketing</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-orange-600 mb-4">40%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Higher Party Size</h3>
                <p className="text-gray-600">When showcasing atmosphere and group dining experiences</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-orange-600 mb-4">8x</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">More Engagement</h3>
                <p className="text-gray-600">On food photography and social media content</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-orange-600 mb-4">30%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">No-Show Reduction</h3>
                <p className="text-gray-600">With automated reservation confirmations</p>
              </div>
            </div>

            <div className="bg-red-900 text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-4">What This Means for Your Business</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                  <span>Empty tables during slow periods while competitors stay busy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                  <span>Customers discover you once but don't return or recommend to friends</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                  <span>Negative reviews outweigh positive experiences in search results</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                  <span>Administrative work takes time away from food quality and customer service</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                  <span>Missing opportunities to showcase your food and atmosphere online</span>
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
              Transform your restaurant with AI-powered marketing and customer experience systems
            </p>
          </div>

          {/* Solution Cards */}
          <div className="space-y-20">
            {/* Solution 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-lg mb-6">
                  <Coffee className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Generate Hungry Customers and Food Lovers
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Potential customers don't know you exist or what makes you special
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Professional lead generation and content that showcases your food and atmosphere
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Google Ads targeting "restaurants near me," "best coffee shop," and cuisine-specific searches</li>
                    <li>• Local SEO optimization for "brunch," "date night," "business lunch" in your area</li>
                    <li>• Food photography and menu highlights that make people want to visit</li>
                    <li>• Content about chef specialties, seasonal dishes, and unique ingredients</li>
                    <li>• Event and catering lead generation for private parties and corporate clients</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-4">
                  <p className="text-orange-900 font-semibold">
                    Real Results: 150% increase in new customer visits and 40% higher average party size
                  </p>
                </div>
              </div>
              <div className="h-96 rounded-lg overflow-hidden">
                <img 
                  src={restaurantImage} 
                  alt="Modern restaurant interior with industrial design, warm lighting, and customers dining"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Solution 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-red-600 to-pink-700 h-96 rounded-lg flex items-center justify-center">
                <Camera className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-lg mb-6">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Mouth-Watering Social Media and Content
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Great food and atmosphere need to be seen to attract customers
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI-powered content creation that showcases your dishes and dining experience
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional food photography and behind-the-scenes kitchen content</li>
                    <li>• Daily specials and seasonal menu updates posted automatically</li>
                    <li>• Customer dining experiences and celebration moments</li>
                    <li>• Chef stories and cooking technique videos</li>
                    <li>• Local community engagement and event promotion</li>
                  </ul>
                </div>
                <div className="bg-red-50 border-l-4 border-red-600 p-4">
                  <p className="text-red-900 font-semibold">
                    Real Results: 8x more social media engagement and 60% more walk-in traffic from online discovery
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Smart Customer Communication and Service
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Managing reservations, special requests, and customer preferences manually
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI systems that handle inquiries and enhance the dining experience
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI phone system handles reservation inquiries and table availability</li>
                    <li>• Automated reservation confirmations and special occasion reminders</li>
                    <li>• Customer preference tracking: dietary restrictions, favorite tables, celebration dates</li>
                    <li>• Wait time notifications and table-ready alerts via text</li>
                    <li>• Special event and promotion announcements to your customer base</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-blue-900 font-semibold">
                    Real Results: 30% reduction in no-shows and 95% customer satisfaction with reservation process
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-96 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-green-600 to-teal-700 h-96 rounded-lg flex items-center justify-center">
                <Users className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-lg mb-6">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Build a Community of Regular Customers
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Customers try your restaurant once but don't become regulars
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Automated relationship building that creates loyal diners and word-of-mouth marketing
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Birthday and anniversary dining reminders with special offers</li>
                    <li>• Seasonal menu announcements to past customers</li>
                    <li>• Loyalty program automation with points tracking and rewards</li>
                    <li>• Event invitations for wine tastings, chef dinners, and special celebrations</li>
                    <li>• Personalized recommendations based on dining history and preferences</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <p className="text-green-900 font-semibold">
                    Real Results: 80% increase in repeat visits and 50% more customer referrals
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
              A proven 90-day implementation roadmap designed for restaurants and cafés
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 shadow-lg">
              <div className="text-orange-600 font-bold text-lg mb-2">Month 1</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Digital Presence and Discovery</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lead generation campaigns targeting local dining searches</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional website with menu, photos, and reservation system</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>AI phone system for reservation management and customer inquiries</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-orange-600 font-bold text-lg mb-2">Month 2</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Content and Community Building</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Food photography and social media content showcasing dishes and atmosphere</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Customer communication workflows for reservations and special events</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Automated follow-up systems for feedback and repeat visits</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-orange-600 font-bold text-lg mb-2">Month 3+</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Customer Loyalty and Growth</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Visual content drives discovery and walk-in traffic</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional reservation systems improve customer experience</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Community engagement establishes restaurant as local dining destination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What This Actually Means for Your Bottom Line
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-red-800/50 p-8 rounded-lg">
              <Coffee className="w-12 h-12 text-orange-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Customers You'll Attract</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Local food lovers:</strong> Target diners looking for quality restaurants in your area</li>
                <li>• <strong>Special occasion diners:</strong> Attract customers celebrating birthdays, anniversaries, date nights</li>
                <li>• <strong>Business diners:</strong> Generate lunch meetings, client dinners, and corporate catering</li>
                <li>• <strong>Event bookings:</strong> Private parties, wine dinners, and special celebrations</li>
              </ul>
            </div>

            <div className="bg-red-800/50 p-8 rounded-lg">
              <DollarSign className="w-12 h-12 text-orange-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Money You'll Make</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Higher table turnover:</strong> Efficient reservation systems and wait management</li>
                <li>• <strong>Larger party sizes:</strong> Better marketing attracts groups and celebrations</li>
                <li>• <strong>Repeat business:</strong> Convert 80% of first-time diners into regular customers</li>
                <li>• <strong>Premium pricing:</strong> Professional image and loyal following support higher menu prices</li>
              </ul>
            </div>

            <div className="bg-red-800/50 p-8 rounded-lg">
              <Clock className="w-12 h-12 text-orange-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Time You'll Save</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Reservation management:</strong> AI handles booking inquiries and confirmations</li>
                <li>• <strong>Social media posting:</strong> Automated content keeps your restaurant visible online</li>
                <li>• <strong>Customer follow-up:</strong> Automated birthday reminders and special occasion outreach</li>
                <li>• <strong>Event promotion:</strong> Systematic marketing for special dinners and seasonal menus</li>
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
            Great restaurants and cafés are about more than food - they're about creating experiences, building community, and giving people a reason to celebrate life's moments. Your customers want to discover their new favorite spot and feel like valued regulars when they return.
          </p>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Smart marketing and automation showcase your unique dining experience while building the customer relationships that turn visitors into devoted fans. While your competitors are struggling with empty tables and one-time visitors, you'll be the restaurant that people seek out, return to regularly, and recommend to everyone they know.
          </p>
          <p className="text-2xl font-semibold mb-12">
            Ready to see what this looks like for your business?
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

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        open={showLeadCaptureModal}
        onOpenChange={setShowLeadCaptureModal}
        title="Transform Your Restaurant Business"
        subtitle="Get a customized assessment for your restaurant or café"
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
                <li><Link href="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-orange-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-orange-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-orange-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-orange-400 transition-colors">Landscaping</Link></li>
                <li><Link href="/roofing" className="hover:text-orange-400 transition-colors">Roofing</Link></li>
                <li><Link href="/painting" className="hover:text-orange-400 transition-colors">Painting</Link></li>
                <li><Link href="/general-contracting" className="hover:text-orange-400 transition-colors">General Contracting</Link></li>
                <li><Link href="/cleaning-services" className="hover:text-orange-400 transition-colors">Cleaning Services</Link></li>
                <li><Link href="/restaurants-cafes" className="hover:text-orange-400 transition-colors">Restaurants & Cafés</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ai-strategy-development" className="hover:text-orange-400 transition-colors">AI Strategy</Link></li>
                <li><Link href="/system-integration" className="hover:text-orange-400 transition-colors">Implementation</Link></li>
                <li><Link href="/change-management" className="hover:text-orange-400 transition-colors">Scaling</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-orange-400 transition-colors">Careers</button></li>
                <li><button className="hover:text-orange-400 transition-colors">Contact</button></li>
                <li><button className="hover:text-orange-400 transition-colors">Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-orange-400 transition-colors">Subscribe</button></li>
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