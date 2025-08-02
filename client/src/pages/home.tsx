import { ArrowRight, ChevronRight, Users, TrendingUp, Target, Map, Settings, Repeat, ExternalLink } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Link } from 'wouter';
import { useEffect, useRef } from 'react';
import BlurText from '@/components/BlurText';
import TrueFocus from '@/components/TrueFocus';
import Noise from '@/components/Noise';
import ScrollVelocity from '@/components/ScrollVelocity';
import ShinyText from '@/components/ShinyText';
import TextType from '@/components/TextType';
import videoBackground from '@assets/3866539-hd_1920_1080_25fps_1752668973005.mp4';
import aiVideo from '@assets/3129977-uhd_3840_2160_30fps_1753396464422.mp4';
import booksImage from '@assets/pexels-cottonbro-6344231_1753396631670.jpg';

export default function Home() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const aiVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async (videoRef: React.RefObject<HTMLVideoElement>) => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log('Video autoplay failed:', error);
          // Fallback: try to play on user interaction
          const handleUserInteraction = async () => {
            try {
              await videoRef.current?.play();
              document.removeEventListener('click', handleUserInteraction);
              document.removeEventListener('touchstart', handleUserInteraction);
            } catch (e) {
              console.log('Video play after interaction failed:', e);
            }
          };
          document.addEventListener('click', handleUserInteraction);
          document.addEventListener('touchstart', handleUserInteraction);
        }
      }
    };

    // Try to play videos after a short delay
    const timer = setTimeout(() => {
      playVideo(heroVideoRef);
      playVideo(aiVideoRef);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Video Background */}
        <video
          ref={heroVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src={videoBackground}
        >
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback background if video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" style={{ zIndex: -1 }}></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <BlurText
              text="What's your next intelligent breakthrough?"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-8 sm:mb-12 lg:mb-16 text-white leading-tight"
            />
            <div className="mt-8 sm:mt-12 lg:mt-16">
              <button className="bg-white text-gray-900 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-gray-100 transition-all inline-flex items-center space-x-2">
                <span>Get started</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do Section */}
      <section className="relative py-32 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
        {/* Premium background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(226_232_240_/_0.15)_1px,_transparent_1px)] bg-[size:48px_48px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              <TextType 
                text={["What We Do", "How We Transform", "What We Build"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                startOnVisible={true}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight"
                textColors={["#111827", "#1f2937", "#374151"]}
              />
            </h2>
            <div className="w-24 h-0.5 bg-blue-600 mx-auto mb-8" />
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              We build intelligent systems that transform your business operations. From strategy to implementation, our real developers create custom solutions that work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-20">
            {/* Smart AI Solutions */}
            <div className="group relative bg-white p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="font-serif text-2xl font-normal text-gray-900 mb-6">Smart AI Solutions</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">Custom AI assistants that handle real business tasks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">AI voice agents and intelligent receptionists</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">Automated workflows that save time and reduce errors</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">Industry-specific AI tools trained for your business</span>
                  </li>

                </ul>
              </div>
            </div>

            {/* Web & Digital Tools */}
            <div className="group relative bg-white p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-t-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                
                <h3 className="font-serif text-2xl font-normal text-gray-900 mb-6">Web & Digital Tools</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">Custom websites and web applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">AI-powered chatbots and customer service tools</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">Intelligent website search and recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">SEO automation and lead generation systems</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Data & Analytics */}
            <div className="group relative bg-white p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-violet-400 rounded-t-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                
                <h3 className="font-serif text-2xl font-normal text-gray-900 mb-6">Data & Analytics</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-violet-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">Turn your business data into actionable insights</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-violet-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">Automated inventory tracking and management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-violet-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">Performance dashboards and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-violet-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">Predictive analytics for better decision-making</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Strategy & Development */}
            <div className="group relative bg-white p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-t-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                
                <h3 className="font-serif text-2xl font-normal text-gray-900 mb-6">Strategy & Development</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-amber-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">Full-service strategy consulting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-amber-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">Custom app development from concept to launch</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-amber-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">Secure, professional development using Python and modern frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-amber-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">Ongoing support and optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Online Business Optimization Section */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Online Business Acceleration
            </h3>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-6" />
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Specialized solutions for digital businesses ready to scale smarter through intelligent automation and optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Revenue Optimization */}
            <div className="group relative bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.15)] transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              
              <div className="h-40 sm:h-48 relative overflow-hidden">
                {/* Premium gradient background with texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(120,_119,_198,_0.3),_transparent_50%)]" />
                
                {/* Animated geometric pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="revenue-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.4)" />
                        <circle cx="12" cy="12" r="1" fill="rgba(255,255,255,0.2)" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#revenue-pattern)" />
                  </svg>
                </div>
                
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white text-2xl sm:text-3xl font-bold tracking-wider">REVENUE</div>
                    <div className="w-16 h-0.5 bg-white/60 mx-auto mt-2" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                    Revenue Optimization
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Transform your website visitors into paying customers with <span className="font-semibold text-gray-800">AI-powered conversion tools</span>, dynamic pricing algorithms, and intelligent sales funnels that automatically adapt to user behavior patterns and market conditions.
                </p>
              </div>
            </div>

            {/* Scaling Solutions */}
            <div className="group relative bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.15)] transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              
              <div className="h-40 sm:h-48 relative overflow-hidden">
                {/* Premium gradient background with texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,_rgba(16,_185,_129,_0.3),_transparent_50%)]" />
                
                {/* Animated circuit pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="scaling-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                        <path d="M5,5 L20,5 M5,5 L5,20 M20,5 L20,20 M5,20 L20,20" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" fill="none" />
                        <circle cx="5" cy="5" r="1" fill="rgba(255,255,255,0.5)" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#scaling-pattern)" />
                  </svg>
                </div>
                
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white text-2xl sm:text-3xl font-bold tracking-wider">SCALING</div>
                    <div className="w-16 h-0.5 bg-white/60 mx-auto mt-2" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                    Scaling Solutions
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Build robust infrastructure that grows seamlessly with your business demands, featuring <span className="font-semibold text-gray-800">cloud-native architectures</span>, automated load balancing, and intelligent resource allocation that scales from startup to enterprise-level traffic.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Customer Retention */}
            <div className="group relative bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.15)] transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              
              <div className="h-40 sm:h-48 relative overflow-hidden">
                {/* Premium gradient background with particle effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(139,_92,_246,_0.3),_transparent_50%)]" />
                
                {/* Animated particle pattern */}
                <div className="absolute inset-0 opacity-25">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="retention-pattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                        <circle cx="3" cy="3" r="0.8" fill="rgba(255,255,255,0.6)" />
                        <circle cx="8" cy="8" r="0.5" fill="rgba(255,255,255,0.4)" />
                        <circle cx="12" cy="4" r="0.6" fill="rgba(255,255,255,0.3)" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#retention-pattern)" />
                  </svg>
                </div>
                
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white text-2xl sm:text-3xl font-bold tracking-wider">RETENTION</div>
                    <div className="w-16 h-0.5 bg-white/60 mx-auto mt-2" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg flex items-center justify-center mr-4">
                    <Repeat className="w-6 h-6 text-violet-600" />
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                    Customer Retention
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Keep customers engaged and coming back with <span className="font-semibold text-gray-800">intelligent engagement systems</span>, personalized communication workflows, loyalty program automation, and predictive analytics that identify at-risk customers before they churn.
                </p>
              </div>
            </div>

            {/* Automation-First */}
            <div className="group relative bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.15)] transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              
              <div className="h-40 sm:h-48 relative overflow-hidden">
                {/* Premium gradient background with geometric pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-600 to-orange-700" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,_rgba(245,_158,_11,_0.3),_transparent_50%)]" />
                
                {/* Animated gear pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="automation-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                        <polygon points="15,5 20,10 15,15 10,10" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                        <circle cx="15" cy="10" r="2" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#automation-pattern)" />
                  </svg>
                </div>
                
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white text-2xl sm:text-3xl font-bold tracking-wider">AUTOMATION</div>
                    <div className="w-16 h-0.5 bg-white/60 mx-auto mt-2" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <Settings className="w-6 h-6 text-amber-600" />
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                    Automation-First
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Free up your valuable time to focus on strategic growth by automating repetitive tasks, streamlining operations with <span className="font-semibold text-gray-800">intelligent workflows</span>, and implementing smart systems that handle everything from customer service to inventory management.
                </p>
              </div>
            </div>
          </div>

          {/* Online Business Solutions Scroll Animation */}
          <div className="mt-12">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-8 text-center">
              <ShinyText 
                text="Online Business Solutions We Implement" 
                speed={6}
                className="font-serif text-lg sm:text-xl font-bold"
              />
            </h4>
            <div className="relative">
              <ScrollVelocity
                texts={[
                  "Cart abandonment recovery systems · Automated customer onboarding sequences · Dynamic pricing optimization · Multi-channel inventory synchronization ·",
                  "Customer segmentation and personalized marketing · Automated review and testimonial collection · Social proof and urgency widgets · Affiliate and influencer management systems · and more ·"
                ]}
                velocity={50}
                className="text-gray-800"
                scrollerClassName="flex whitespace-nowrap text-center font-sans text-base sm:text-lg lg:text-xl font-semibold tracking-wide drop-shadow-sm py-6"
              />
            </div>
          </div>
            
          <div className="text-center mt-16">
            <Link href="/capabilities" className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-lg font-normal text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <span className="relative">See How We Can Help Your Business</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </section>
      {/* Authority & Research Hook Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <div className="bg-blue-600 p-8 sm:p-12 lg:p-16 flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
              <div className="text-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 sm:mb-8">
                  <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20"></div>
                  <div className="absolute inset-4 bg-blue-400 rounded-full opacity-40"></div>
                  <div className="absolute inset-8 bg-blue-300 rounded-full opacity-60"></div>
                  <div className="absolute inset-12 bg-white rounded-full flex items-center justify-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">23%</div>
                  </div>
                </div>
                <div className="text-white text-base sm:text-lg font-medium">
                  Only 23% of companies successfully scale AI beyond pilot projects
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 sm:p-12 lg:p-16 min-h-[400px] sm:min-h-[500px] flex items-center">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Why Most Strategies Fail—And How the Best Beat the Odds
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Only one in five companies believe they meet the bar for high-quality strategy. What do these strategy champions have in common? They excel at designing bold strategies—and are even better at mobilizing their organizations to execute them.
                </p>
                <Link href="/strategy-article" className="text-blue-600 font-medium hover:underline inline-flex items-center space-x-2">
                  <span>Build a Strategy That Actually Delivers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Digital Transformation Reality Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <div className="bg-gray-50 p-8 sm:p-12 lg:p-16 min-h-[400px] sm:min-h-[500px] flex items-center">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  The Digital Edge: Empowering Every Employee for the Tech-Driven Future
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Developing digital fluency isn't just for engineers—it's a strategic advantage for every team. From marketing to operations, building these skills helps people perform better and companies move faster. Here's how you can lead the shift.
                </p>
                <Link href="/ai-adoption-article" className="text-blue-600 font-medium hover:underline inline-flex items-center space-x-2">
                  <span>Start your digital enablement journey</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative min-h-[400px] sm:min-h-[500px] overflow-hidden">
              {/* Video Background */}
              <video
                ref={aiVideoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                src={aiVideo}
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Fallback background if video doesn't load */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700" style={{ zIndex: -1 }}></div>
              
              {/* Optional overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Thought Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <div className="relative min-h-[400px] sm:min-h-[500px] overflow-hidden">
              <img
                src={booksImage}
                alt="Books on shelf"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Optional overlay for better visual integration */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="bg-gray-50 p-8 sm:p-12 lg:p-16 min-h-[400px] sm:min-h-[500px] flex items-center">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  What's on your shelf? Our 2025 Client Book List
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Every year, we ask our clients to recommend one book—something that's shaped their thinking, sparked curiosity, or captured their industry's spirit. With partners across so many sectors, our bookshelf becomes a reflection of the diverse minds we work with.
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  This year's list is built by you. One title, one insight, one perspective at a time.
                </p>
                <Link href="/books" className="text-blue-600 font-medium hover:underline inline-flex items-center space-x-2">
                  <span>Add your voice to the list</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Research & Insights Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">MONTHLY DEFIANT INTEGRATION BLOG</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Featured Article */}
            <div className="bg-white shadow-lg">
              <div className="h-48 sm:h-64 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center relative overflow-hidden">
                <TrueFocus 
                  sentence="INNOVATION IN AI"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="white"
                  animationDuration={2}
                  pauseBetweenAnimations={1}
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="text-sm text-gray-500 mb-2">August, 2025</div>
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  How AI Is Powering the Next Generation of Robotics
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  From humanoid assistants to autonomous manufacturing bots, artificial intelligence is transforming robotics into a force multiplier for industries worldwide.
                </p>
                <Link href="/ai-robotics-article" className="text-blue-600 font-medium hover:underline text-sm sm:text-base">
                  Read more
                </Link>
              </div>
            </div>
            
            {/* Second Article */}
            <div className="bg-white shadow-lg">
              <div className="h-48 sm:h-64 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center relative overflow-hidden">
                <Noise
                  patternSize={250}
                  patternScaleX={1}
                  patternScaleY={1}
                  patternRefreshInterval={2}
                  patternAlpha={15}
                />
                <div className="text-white text-2xl sm:text-3xl font-bold relative z-10">FUTURE</div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="text-sm text-gray-500 mb-2">August, 2025</div>
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  AI in 2025: What Comes Next for Intelligent Systems
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  From agentic AI to personal superintelligence, artificial intelligence stands beyond hype as the foundation of enterprise, science, and everyday technology.
                </p>
                <Link href="/ai-2025-article" className="text-blue-600 font-medium hover:underline text-sm sm:text-base">
                  Read more
                </Link>
              </div>
            </div>
          </div>

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
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-gray-300 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-gray-300 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-blue-400 transition-colors">Capabilities</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Featured Insights</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Locations</button></li>
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
            <p>&copy; 2024 Defiant Integrations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
