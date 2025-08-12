import { Navigation } from '@/components/navigation';
import { ArrowRight, Clock, DollarSign, Dumbbell, Calendar, MessageSquare, TrendingUp, CheckCircle, Users, Camera } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import { useState } from 'react';
import gymImage from '@assets/pexels-runffwpu-2526883_1754956926638.jpg';
import boxingGymImage from '@assets/pexels-cottonbro-4752856_1754957021363.jpg';

export default function GymsPersonalTrainers() {
  useScrollToTop();
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-br from-red-700 via-orange-600 to-yellow-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <BlurText
              text="Gyms & Personal Trainers: Smart Technology That Actually Works for Your Business"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
            />
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Attract committed members, reduce churn, and build the kind of supportive fitness community that transforms bodies and lives.
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
              What Gyms and Personal Trainers Are Dealing With Right Now
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              Running a gym or personal training business means motivating people to stick with their fitness goals while managing memberships, class schedules, and client progress tracking. You're competing with big chain gyms, home workout apps, and clients' own motivation challenges while trying to build a community that keeps people coming back consistently.
            </p>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-red-600 mb-4">140%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Qualified Lead Increase</h3>
                <p className="text-gray-600">More serious fitness enthusiasts with targeted marketing</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-red-600 mb-4">60%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Higher Retention</h3>
                <p className="text-gray-600">Members stay active longer with engagement tracking</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-red-600 mb-4">8x</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">More Engagement</h3>
                <p className="text-gray-600">On transformation content and success stories</p>
              </div>
              <div className="bg-white p-8 shadow-lg">
                <div className="text-5xl font-bold text-red-600 mb-4">50%</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Churn Reduction</h3>
                <p className="text-gray-600">With automated engagement monitoring</p>
              </div>
            </div>

            <div className="bg-orange-900 text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-4">What This Means for Your Business</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span>Revenue loss from members who pay but don't show up and eventually cancel</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span>Difficulty filling classes and training slots during slow periods</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span>Amazing client transformations that don't get seen by potential new members</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span>Administrative time spent on scheduling, follow-ups, and member management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span>Missed opportunities to re-engage members before they quit</span>
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
              Transform your fitness business with AI-powered member engagement and retention systems
            </p>
          </div>

          {/* Solution Cards */}
          <div className="space-y-20">
            {/* Solution 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-lg mb-6">
                  <Dumbbell className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Generate Serious Fitness Enthusiasts
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Many people join gyms impulsively but aren't committed to real fitness goals
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Professional lead generation that attracts people ready to invest in their health
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Google Ads targeting "personal trainer near me," "weight loss program," and specific fitness goals</li>
                    <li>• Educational content about proper training, nutrition, and sustainable fitness habits</li>
                    <li>• Transformation galleries showing real client results and success stories</li>
                    <li>• Program descriptions that set proper expectations and attract committed clients</li>
                    <li>• Local SEO for "best gym," "fitness classes," and specialized training searches</li>
                  </ul>
                </div>
                <div className="bg-red-50 border-l-4 border-red-600 p-4">
                  <p className="text-red-900 font-semibold">
                    Real Results: 140% increase in qualified leads and 60% higher member retention rates
                  </p>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img
                  src={gymImage}
                  alt="Fitness runners training outdoors"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-96 rounded-lg overflow-hidden">
                <img
                  src={boxingGymImage}
                  alt="Boxing gym training environment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-lg mb-6">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Showcase Transformations and Build Community
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Amazing fitness results happen gradually and often go unseen by potential members
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI-powered content that highlights member success and creates motivational community
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional before/after transformation documentation</li>
                    <li>• Workout videos and technique demonstrations showing expertise</li>
                    <li>• Member success stories and milestone celebrations</li>
                    <li>• Educational content about fitness, nutrition, and healthy lifestyle habits</li>
                    <li>• Community challenges and group achievement highlights</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-4">
                  <p className="text-orange-900 font-semibold">
                    Real Results: 8x more social media engagement and 80% increase in referrals from existing members
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Smart Member Engagement and Class Management
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Tracking member attendance and engagement manually while managing complex schedules
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> AI systems that monitor engagement and optimize scheduling
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automated check-in tracking and attendance pattern monitoring</li>
                    <li>• Class booking systems with waitlists and automatic notifications</li>
                    <li>• Member engagement alerts when attendance drops or patterns change</li>
                    <li>• Personal training scheduling with automatic confirmations and reminders</li>
                    <li>• Progress tracking and milestone recognition for sustained motivation</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-blue-900 font-semibold">
                    Real Results: 50% reduction in member churn and 90% improvement in class attendance
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-cyan-700 h-96 rounded-lg flex items-center justify-center">
                <Calendar className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Solution 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-green-600 to-emerald-700 h-96 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-white/20" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-lg mb-6">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Keep Members Motivated and Engaged Long-Term
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Problem:</strong> Initial enthusiasm fades and members stop coming without canceling memberships
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>The Solution:</strong> Automated relationship building that maintains motivation and accountability
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automatic check-ins when members haven't visited in 7-10 days</li>
                    <li>• Personalized workout reminders and motivational messages</li>
                    <li>• Progress milestone celebrations and achievement recognition</li>
                    <li>• Seasonal challenge invitations and goal-setting campaigns</li>
                    <li>• Educational content about overcoming plateaus and maintaining motivation</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <p className="text-green-900 font-semibold">
                    Real Results: 70% of members stay active beyond the critical 90-day period
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
              A proven 90-day implementation roadmap designed for gyms and personal trainers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 shadow-lg">
              <div className="text-red-600 font-bold text-lg mb-2">Month 1</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Professional Fitness Marketing</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lead generation campaigns targeting serious fitness goals and transformations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional website with member success stories and program information</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>AI member engagement tracking and automated outreach systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-red-600 font-bold text-lg mb-2">Month 2</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Community Building and Progress Tracking</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Transformation content creation showcasing member results</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Automated engagement monitoring and re-activation campaigns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Class and training scheduling optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="text-red-600 font-bold text-lg mb-2">Month 3+</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Sustained Member Success</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Success story content attracts committed fitness enthusiasts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Engagement tracking prevents member churn before it happens</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Community building creates referral network of satisfied members</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What This Actually Means for Your Bottom Line
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-orange-800/50 p-8 rounded-lg">
              <Users className="w-12 h-12 text-yellow-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Members You'll Attract</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Goal-oriented fitness enthusiasts:</strong> People ready to commit to real transformation</li>
                <li>• <strong>Long-term members:</strong> Attract clients looking for sustainable lifestyle changes</li>
                <li>• <strong>Premium training clients:</strong> Personal training and specialized program participants</li>
                <li>• <strong>Community builders:</strong> Members who become advocates and refer friends</li>
              </ul>
            </div>

            <div className="bg-orange-800/50 p-8 rounded-lg">
              <DollarSign className="w-12 h-12 text-yellow-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Money You'll Make</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Higher retention rates:</strong> Keep 70% of members active beyond the critical first 90 days</li>
                <li>• <strong>Premium services:</strong> Personal training, nutrition coaching, and specialized programs</li>
                <li>• <strong>Referral growth:</strong> Satisfied members bring friends and family</li>
                <li>• <strong>Consistent revenue:</strong> Engaged members maintain memberships long-term</li>
              </ul>
            </div>

            <div className="bg-orange-800/50 p-8 rounded-lg">
              <Clock className="w-12 h-12 text-yellow-300 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Time You'll Save</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• <strong>Member tracking:</strong> Automated attendance monitoring and engagement alerts</li>
                <li>• <strong>Class management:</strong> Online booking and scheduling systems reduce administrative work</li>
                <li>• <strong>Follow-up coordination:</strong> Automated re-engagement campaigns for inactive members</li>
                <li>• <strong>Progress documentation:</strong> Systematic tracking of member transformations and milestones</li>
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
            Gyms and personal trainers are about more than equipment and workouts - they're about transformation, community, and helping people become the healthiest version of themselves. Your members want results, support, and accountability that helps them stick with their fitness goals.
          </p>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Smart automation builds that supportive environment while identifying and addressing engagement issues before members give up. While your competitors are losing members to motivation challenges and competing on price, you'll be the fitness destination that creates lasting transformations and lifelong healthy habits.
          </p>
          <p className="text-2xl font-semibold mb-12">
            Ready to see what this looks like for your business?
          </p>
          <button 
            onClick={() => setShowLeadCaptureModal(true)}
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 font-medium hover:bg-red-700 transition-colors text-lg"
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
        title="Transform Your Fitness Business"
        subtitle="Get a customized assessment for your gym or personal training business"
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
                <li><Link href="/" className="hover:text-red-400 transition-colors">Home</Link></li>
                <li><Link href="/hvac" className="hover:text-red-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-red-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-red-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-red-400 transition-colors">Landscaping</Link></li>
                <li><Link href="/roofing" className="hover:text-red-400 transition-colors">Roofing</Link></li>
                <li><Link href="/painting" className="hover:text-red-400 transition-colors">Painting</Link></li>
                <li><Link href="/general-contracting" className="hover:text-red-400 transition-colors">General Contracting</Link></li>
                <li><Link href="/cleaning-services" className="hover:text-red-400 transition-colors">Cleaning Services</Link></li>
                <li><Link href="/restaurants-cafes" className="hover:text-red-400 transition-colors">Restaurants & Cafés</Link></li>
                <li><Link href="/beauty-salons-spas" className="hover:text-red-400 transition-colors">Beauty Salons & Spas</Link></li>
                <li><Link href="/barbershops" className="hover:text-red-400 transition-colors">Barbershops</Link></li>
                <li><Link href="/gyms-personal-trainers" className="hover:text-red-400 transition-colors">Gyms & Personal Trainers</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ai-strategy-development" className="hover:text-red-400 transition-colors">AI Strategy</Link></li>
                <li><Link href="/system-integration" className="hover:text-red-400 transition-colors">Implementation</Link></li>
                <li><Link href="/change-management" className="hover:text-red-400 transition-colors">Scaling</Link></li>
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