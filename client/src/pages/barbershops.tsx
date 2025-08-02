import { Navigation } from '@/components/navigation';
import { ArrowRight, Clock, DollarSign, Scissors, Calendar, MessageSquare, TrendingUp, CheckCircle, Users, Camera, Globe, Smartphone, Bell, Palette } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import SilkBackground from '@/components/SilkBackground';
import barbershopPhoto from '@assets/Galleryphoto6_1754168857307.jpg';
import scissorsPhoto from '@assets/pexels-nickoloui-1319458_1754168994778.jpg';
import schedulingPhoto from '@assets/pexels-picjumbo-com-55570-196650_1754169061015.jpg';


export default function Barbershops() {
  useScrollToTop();
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Silk Effect Background */}
        <div className="absolute inset-0 z-0">
          <SilkBackground 
            speed={0.3}
            scale={1.2}
            color="#1e3a8a"  // Navy blue from our color scheme
          />
        </div>
        
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight">
              Barbershops: Smart Technology That Actually Works for Your Business
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Attract loyal regulars, reduce wait times, and build the kind of neighborhood reputation that keeps chairs busy and customers coming back every few weeks.
            </p>
            <button className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 font-medium hover:bg-white/20 transition-all duration-300 rounded-lg">
              <span>Start Your Free Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Lanyard Section - AI Phone Handling */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let AI Handle The Phone While You Handle The Clippers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Focus on your craft while our intelligent system manages appointments, answers questions, and keeps your schedule running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              What Barbershops Are Dealing With Right Now
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              Running a barbershop means balancing tradition with modern customer expectations. You're building regular relationships with guys who want consistent cuts, competing with chain salons and quick-cut places, while trying to keep chairs filled during slow periods and managing walk-ins during busy times.
            </p>
            


            <div className="bg-gray-800 text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-4">What This Means for Your Business</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span>Lost revenue during slow periods when chairs sit empty</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span>Customers wait too long during busy times and leave frustrated</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span>Regulars drift away when life gets busy and they forget to come in</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span>Younger customers choose competitors with online booking and modern marketing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span>Difficulty building new regular clientele to replace customers who move away</span>
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
              Transform your barbershop with modern systems that respect tradition
            </p>
          </div>

          {/* Solution Cards */}
          <div className="space-y-20">
            {/* Solution 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-700 rounded-lg mb-6">
                  <Scissors className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Generate Loyal Regular Customers
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Guys often choose barbershops based on convenience rather than building relationships
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Professional marketing that attracts customers looking for their regular barber
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Google Ads targeting "barber near me," "men's haircuts," and "traditional barbershop"</li>
                    <li>• Content about classic cuts, grooming advice, and barbershop culture</li>
                    <li>• Before/after photos showing clean cuts and attention to detail</li>
                    <li>• Barber profiles highlighting experience and signature styles</li>
                    <li>• Local SEO for neighborhood searches and "best barber" queries</li>
                  </ul>
                </div>
                <div className="bg-gray-100 border-l-4 border-gray-700 p-4">
                  <p className="text-gray-800 font-semibold">
                    Proven approach that builds lasting customer relationships through professional local presence
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-700 to-black h-96 rounded-lg overflow-hidden">
                <img 
                  src={scissorsPhoto}
                  alt="Professional barbershop tools showcasing traditional craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Solution 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-gray-600 to-gray-800 h-96 rounded-lg overflow-hidden">
                <img 
                  src={barbershopPhoto}
                  alt="Professional barbershop haircut showcasing classic craftsmanship and modern style"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Showcase Classic Craftsmanship and Modern Style
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Great barbering skills and shop atmosphere aren't seen by potential customers
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI-powered content that highlights your expertise and barbershop experience
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional photos of fresh cuts and classic barbering techniques</li>
                    <li>• Behind-the-scenes content showing attention to detail and craftsmanship</li>
                    <li>• Customer testimonials focusing on consistency and personal service</li>
                    <li>• Educational content about men's grooming, beard care, and style trends</li>
                    <li>• Shop atmosphere content highlighting the barbershop experience and community</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-blue-900 font-semibold">
                    Sophisticated content strategy that showcases craftsmanship and attracts quality clientele
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-lg mb-6">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Smart Scheduling That Respects Barbershop Culture
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Balancing traditional walk-in culture with modern appointment expectations
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Flexible booking systems that accommodate both scheduled and spontaneous visits
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Online booking system for customers who prefer appointments</li>
                    <li>• Walk-in queue management with text notifications for wait times</li>
                    <li>• Regular customer reminders based on their typical cutting schedule</li>
                    <li>• Barber availability updates and preferred barber booking options</li>
                    <li>• Appointment confirmations and "running late" notifications</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <p className="text-green-900 font-semibold">
                    Modern scheduling system that enhances traditional barbershop experience
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-green-800 h-96 rounded-lg overflow-hidden">
                <img 
                  src={schedulingPhoto}
                  alt="Smart scheduling system with calendar and technology for modern barbershop management"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Booking Software & Web Design Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Complete Booking Software & Web Design Solutions
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Everything automated, custom-branded, and built specifically for your barbershop
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Booking Software */}
            <div className="bg-gray-800/50 p-8 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 text-blue-400 rounded-lg mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-6">Smart Booking Software</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xl text-blue-400 mb-3">Automated Scheduling</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Online appointment booking available 24/7</li>
                    <li>• Walk-in queue management with real-time updates</li>
                    <li>• Multiple barber scheduling with individual calendars</li>
                    <li>• Recurring appointment automation for regular clients</li>
                    <li>• Buffer time and break management</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-xl text-blue-400 mb-3">Automated Client Communication</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Appointment confirmations via text and email</li>
                    <li>• Automated reminder system (24hr and 2hr before)</li>
                    <li>• No-show and cancellation follow-ups</li>
                    <li>• Birthday and holiday greetings</li>
                    <li>• Promotional campaigns for slow periods</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-xl text-blue-400 mb-3">Smart Reminders</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Custom reminder timing based on client preferences</li>
                    <li>• Regular cut cycle tracking (every 2-4 weeks)</li>
                    <li>• Seasonal grooming reminders</li>
                    <li>• Special event preparation notifications</li>
                    <li>• "It's time for your cut" intelligent suggestions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Web Design */}
            <div className="bg-gray-800/50 p-8 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 text-purple-400 rounded-lg mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-6">Custom Web Design</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xl text-purple-400 mb-3">Brand-Custom Design</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Unique design reflecting your barbershop's personality</li>
                    <li>• Custom color schemes and typography</li>
                    <li>• Professional photography integration</li>
                    <li>• Mobile-first responsive design</li>
                    <li>• Local SEO optimization</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-xl text-purple-400 mb-3">Advanced Features</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Barber profile pages with specialties</li>
                    <li>• Service menu with pricing and descriptions</li>
                    <li>• Photo gallery showcasing work</li>
                    <li>• Customer testimonials and reviews</li>
                    <li>• Contact and location information</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-xl text-purple-400 mb-3">Integration & Analytics</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Seamless booking system integration</li>
                    <li>• Google My Business synchronization</li>
                    <li>• Social media feed integration</li>
                    <li>• Performance tracking and analytics</li>
                    <li>• Customer behavior insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Requests Section */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-lg border border-blue-500/30">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg mb-4">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4">Custom Requests Available</h3>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Every barbershop is unique. We build custom solutions that fit your specific needs and vision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 text-blue-400 rounded-lg mb-3">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Mobile App</h4>
                <p className="text-gray-300 text-sm">Custom branded mobile app for your barbershop</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 text-purple-400 rounded-lg mb-3">
                  <Bell className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Advanced Notifications</h4>
                <p className="text-gray-300 text-sm">Push notifications, voice calls, and custom messaging</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 text-green-400 rounded-lg mb-3">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Payment Integration</h4>
                <p className="text-gray-300 text-sm">Accept deposits, process payments, and manage loyalty programs</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/20 text-amber-400 rounded-lg mb-3">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Advanced Analytics</h4>
                <p className="text-gray-300 text-sm">Detailed reporting, customer insights, and business intelligence</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-200 mb-4">
                Have a specific requirement? We build exactly what your barbershop needs.
              </p>
              <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 font-medium hover:from-blue-700 hover:to-purple-700 transition-colors rounded-lg">
                <span>Discuss Custom Requirements</span>
                <ArrowRight className="w-5 h-5" />
              </button>
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
              A proven 90-day implementation roadmap designed for barbershops
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 shadow-lg">
              <div className="text-gray-700 font-bold text-lg mb-2">Month 1</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Modern Barbershop Presence</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lead generation targeting local men's grooming searches</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional website with barber profiles and online booking options</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Flexible scheduling system accommodating appointments and walk-ins</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-gray-700 font-bold text-lg mb-2">Month 2</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Community and Consistency Building</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Content showcasing barbering expertise and shop atmosphere</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Customer reminder systems based on cutting schedules</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Queue management and wait time communication</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-gray-700 font-bold text-lg mb-2">Month 3+</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Neighborhood Institution Status</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional online presence attracts new regular customers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Smart scheduling systems improve customer experience for all visit types</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Local reputation grows through satisfied regulars and referrals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What This Actually Means for Your Bottom Line
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-700/50 p-8 rounded-lg">
              <Users className="w-12 h-12 text-gray-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Customers You'll Build</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Regular weekly/bi-weekly clients:</strong> Build base of customers with consistent cutting schedules</li>
                <li>• <strong>Business professionals:</strong> Attract men who need to look sharp for work</li>
                <li>• <strong>Neighborhood locals:</strong> Become the go-to shop for men in your area</li>
                <li>• <strong>Multi-generational families:</strong> Traditional service that appeals to fathers and sons</li>
              </ul>
            </div>

            <div className="bg-gray-700/50 p-8 rounded-lg">
              <DollarSign className="w-12 h-12 text-gray-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Money You'll Make</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Consistent revenue:</strong> Regular customers provide predictable weekly income</li>
                <li>• <strong>Higher chair utilization:</strong> Fill slow periods with reminder-driven appointments</li>
                <li>• <strong>Premium services:</strong> Beard trims, hot towel shaves, and grooming add-ons</li>
                <li>• <strong>Reduced no-shows:</strong> Automated reminders keep regular schedules consistent</li>
              </ul>
            </div>

            <div className="bg-gray-700/50 p-8 rounded-lg">
              <Clock className="w-12 h-12 text-gray-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Time You'll Save</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Booking coordination:</strong> Online scheduling reduces phone interruptions</li>
                <li>• <strong>Wait management:</strong> Automated queue system handles walk-in communications</li>
                <li>• <strong>Customer reminders:</strong> Automated messages maintain cutting schedules</li>
                <li>• <strong>Relationship building:</strong> Systems help remember customer preferences and histories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The Bottom Line
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Barbershops are about more than haircuts - they're about consistency, community, and helping guys look their best for work and life. Your customers want a barber who remembers how they like their cut and makes the experience efficient and enjoyable.
          </p>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Smart technology respects barbershop tradition while adding modern convenience that today's customers expect. While your competitors are stuck with paper books and frustrated customers, you'll be the barbershop that combines old-school craftsmanship with new-school efficiency.
          </p>
          <p className="text-2xl font-semibold mb-12">
            Ready to see what this looks like for your business?
          </p>
          <button className="inline-flex items-center space-x-2 bg-gray-600 text-white px-8 py-4 font-medium hover:bg-gray-700 transition-colors text-lg">
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
                <li><Link href="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-gray-300 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-gray-300 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-gray-300 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-gray-300 transition-colors">Landscaping</Link></li>
                <li><Link href="/roofing" className="hover:text-gray-300 transition-colors">Roofing</Link></li>
                <li><Link href="/painting" className="hover:text-gray-300 transition-colors">Painting</Link></li>
                <li><Link href="/general-contracting" className="hover:text-gray-300 transition-colors">General Contracting</Link></li>
                <li><Link href="/cleaning-services" className="hover:text-gray-300 transition-colors">Cleaning Services</Link></li>
                <li><Link href="/restaurants-cafes" className="hover:text-gray-300 transition-colors">Restaurants & Cafés</Link></li>
                <li><Link href="/beauty-salons-spas" className="hover:text-gray-300 transition-colors">Beauty Salons & Spas</Link></li>
                <li><Link href="/barbershops" className="hover:text-gray-300 transition-colors">Barbershops</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ai-strategy-development" className="hover:text-gray-300 transition-colors">AI Strategy</Link></li>
                <li><Link href="/system-integration" className="hover:text-gray-300 transition-colors">Implementation</Link></li>
                <li><Link href="/change-management" className="hover:text-gray-300 transition-colors">Scaling</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-gray-300 transition-colors">Careers</button></li>
                <li><button className="hover:text-gray-300 transition-colors">Contact</button></li>
                <li><button className="hover:text-gray-300 transition-colors">Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-gray-300 transition-colors">Subscribe</button></li>
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