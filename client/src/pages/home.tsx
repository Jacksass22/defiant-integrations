import { ArrowRight, ChevronRight, Users, TrendingUp, Target, Map, Settings, Repeat, ExternalLink } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Link } from 'wouter';
import { useEffect, useRef, useState } from 'react';
import BlurText from '@/components/BlurText';
import TrueFocus from '@/components/TrueFocus';
import Noise from '@/components/Noise';
import ScrollVelocity from '@/components/ScrollVelocity';
import ShinyText from '@/components/ShinyText';
import TextType from '@/components/TextType';

import { SubscriptionModal } from '@/components/subscription-modal';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import videoBackground from '@assets/3866539-hd_1920_1080_25fps_1752668973005.mp4';
import aiVideo from '@assets/3129977-uhd_3840_2160_30fps_1753396464422.mp4';
import booksImage from '@assets/pexels-cottonbro-6344231_1753396631670.jpg';

export default function Home() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const aiVideoRef = useRef<HTMLVideoElement>(null);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  
  // Tilt card states
  const [cardTilts, setCardTilts] = useState({
    intelligence: { rotateX: 0, rotateY: 0 },
    digital: { rotateX: 0, rotateY: 0 },
    analytics: { rotateX: 0, rotateY: 0 },
    strategy: { rotateX: 0, rotateY: 0 }
  });

  // Handle mouse move for tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardName: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setCardTilts(prev => ({
      ...prev,
      [cardName]: { rotateX, rotateY }
    }));
  };

  // Handle mouse leave to reset tilt
  const handleMouseLeave = (cardName: string) => {
    setCardTilts(prev => ({
      ...prev,
      [cardName]: { rotateX: 0, rotateY: 0 }
    }));
  };

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

  // Listen for chat widget booking events
  useEffect(() => {
    const handleOpenLeadCapture = () => {
      setShowLeadCaptureModal(true);
    };

    window.addEventListener('openLeadCapture', handleOpenLeadCapture);
    
    return () => {
      window.removeEventListener('openLeadCapture', handleOpenLeadCapture);
    };
  }, []);

  const scrollToBlog = (e: React.MouseEvent) => {
    e.preventDefault();
    const blogElement = document.getElementById('blog');
    if (blogElement) {
      blogElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
              <button 
                onClick={() => setShowLeadCaptureModal(true)}
                className="bg-white text-gray-900 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-gray-100 hover:shadow-lg hover:scale-105 transform transition-all duration-300 inline-flex items-center space-x-2"
              >
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

          {/* Creative Capability Showcase */}
          <div className="relative mb-20">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Interactive Capability Matrix */}
              <div className="space-y-8">
                <div className="text-left">
                  <h3 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Comprehensive AI Integration
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    From strategic planning to technical implementation, we deliver end-to-end solutions that transform how businesses operate.
                  </p>
                </div>
                
                {/* Capability Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Intelligence */}
                  <div 
                    className="group relative"
                    onMouseMove={(e) => handleMouseMove(e, 'intelligence')}
                    onMouseLeave={() => handleMouseLeave('intelligence')}
                    style={{
                      transform: `perspective(1000px) rotateX(${cardTilts.intelligence.rotateX}deg) rotateY(${cardTilts.intelligence.rotateY}deg)`,
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                      {/* Deep ocean gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-blue-500/10 to-white/20 pointer-events-none"></div>
                      <div className="relative text-center">
                        <h4 className="font-serif text-xl font-bold text-blue-900 mb-2">
                          Intelligence
                        </h4>
                        <p className="text-sm text-blue-700 leading-relaxed">
                          AI assistants, voice agents, automated workflows
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Digital */}
                  <div 
                    className="group relative"
                    onMouseMove={(e) => handleMouseMove(e, 'digital')}
                    onMouseLeave={() => handleMouseLeave('digital')}
                    style={{
                      transform: `perspective(1000px) rotateX(${cardTilts.digital.rotateX}deg) rotateY(${cardTilts.digital.rotateY}deg)`,
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                      {/* Deep ocean gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-blue-500/10 to-white/20 pointer-events-none"></div>
                      <div className="relative text-center">
                        <h4 className="font-serif text-xl font-bold text-blue-900 mb-2">
                          Digital
                        </h4>
                        <p className="text-sm text-blue-700 leading-relaxed">
                          Custom platforms, chatbots, intelligent search
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Analytics */}
                  <div 
                    className="group relative"
                    onMouseMove={(e) => handleMouseMove(e, 'analytics')}
                    onMouseLeave={() => handleMouseLeave('analytics')}
                    style={{
                      transform: `perspective(1000px) rotateX(${cardTilts.analytics.rotateX}deg) rotateY(${cardTilts.analytics.rotateY}deg)`,
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                      {/* Deep ocean gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-blue-500/10 to-white/20 pointer-events-none"></div>
                      <div className="relative text-center">
                        <h4 className="font-serif text-xl font-bold text-blue-900 mb-2">
                          Web Development
                        </h4>
                        <p className="text-sm text-blue-700 leading-relaxed">
                          Custom websites, e-commerce platforms, web applications
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Strategy */}
                  <div 
                    className="group relative"
                    onMouseMove={(e) => handleMouseMove(e, 'strategy')}
                    onMouseLeave={() => handleMouseLeave('strategy')}
                    style={{
                      transform: `perspective(1000px) rotateX(${cardTilts.strategy.rotateX}deg) rotateY(${cardTilts.strategy.rotateY}deg)`,
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                      {/* Deep ocean gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-blue-500/10 to-white/20 pointer-events-none"></div>
                      <div className="relative text-center">
                        <h4 className="font-serif text-xl font-bold text-blue-900 mb-2">
                          Strategy
                        </h4>
                        <p className="text-sm text-blue-700 leading-relaxed">
                          Consulting, development, ongoing optimization
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Dynamic Visual */}
              <div className="relative">
                <div className="relative">
                  <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-12 overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-8 left-8 w-4 h-4 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute top-16 right-12 w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-20 left-16 w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-8 right-8 w-2 h-2 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                    
                    {/* Connecting lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 400">
                      <line x1="32" y1="32" x2="240" y2="64" stroke="rgba(255,255,255,0.2)" strokeWidth="1" className="animate-pulse" />
                      <line x1="240" y1="64" x2="64" y2="320" stroke="rgba(255,255,255,0.2)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
                      <line x1="64" y1="320" x2="240" y2="320" stroke="rgba(255,255,255,0.2)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
                    </svg>
                  </div>
                  
                  {/* Central content */}
                  <div className="relative text-center">
                    <div className="mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center transform rotate-12">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center transform -rotate-12">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="font-serif text-2xl font-bold text-white mb-4">We make life easier.</h4>
                    <p className="text-blue-100 leading-relaxed">Strategic thinking meets technical excellence. We don't just implement AI—we architect intelligent AI Agents that work for you.</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">27+</div>
                        <div className="text-xs text-blue-200">Industries</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">90%</div>
                        <div className="text-xs text-blue-200">Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">24/7</div>
                        <div className="text-xs text-blue-200">Operation</div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Online Business Optimization Section */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight">Systems at work</h3>
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
                  "AI phone systems · Chatbot implementation · Customer journey mapping · Personalization engines · Feedback collection systems · Retention automation · Google Ads optimization · SEO implementation ·",
                  "Social media automation · Content marketing systems · Email marketing automation · System performance monitoring · Health checks · Proactive maintenance · Continuous improvement protocols ·"
                ]}
                velocity={50}
                className="text-gray-800"
                scrollerClassName="flex whitespace-nowrap text-center font-sans text-base sm:text-lg lg:text-xl font-semibold tracking-wide drop-shadow-sm py-6"
              />
            </div>
          </div>
            
          <div className="text-center mt-16">
            <button 
              onClick={() => setShowLeadCaptureModal(true)}
              className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-lg font-normal text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span className="relative">See How We Can Help Your Business</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </section>
      {/* Authority & Research Hook Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-8 sm:p-12 lg:p-16 flex items-center justify-center min-h-[400px] sm:min-h-[500px] relative overflow-hidden">
              {/* Animated Neural Network Visualization */}
              <div className="absolute inset-0">
                {/* Nodes */}
                <div className="absolute top-16 left-20 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
                <div className="absolute top-32 left-32 w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-24 right-24 w-4 h-4 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-40 right-16 w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-32 left-16 w-3 h-3 bg-white/35 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-20 left-40 w-2 h-2 bg-white/45 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute bottom-28 right-20 w-3 h-3 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
                <div className="absolute bottom-16 right-32 w-2 h-2 bg-white/55 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
                  <line x1="80" y1="64" x2="128" y2="128" stroke="white" strokeWidth="1" className="animate-pulse" />
                  <line x1="128" y1="128" x2="320" y2="96" stroke="white" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <line x1="320" y1="96" x2="368" y2="160" stroke="white" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <line x1="64" y1="320" x2="160" y2="280" stroke="white" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                  <line x1="160" y1="280" x2="320" y2="288" stroke="white" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2s' }} />
                  <line x1="320" y1="288" x2="320" y2="96" stroke="white" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                </svg>
              </div>
              
              {/* Central Focus Element */}
              <div className="relative z-10 text-center">
                <div className="relative mb-8">
                  {/* Hexagonal Grid Pattern */}
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 border-2 border-white/60 rotate-45 rounded-lg"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white/80 rotate-12 rounded-lg"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg shadow-lg"></div>
                    </div>
                  </div>
                </div>
                
                {/* Elegant Typography */}
                <div className="max-w-md mx-auto">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                    Intelligence Amplified
                  </h3>
                  <div className="w-16 h-px bg-white/60 mx-auto mb-4"></div>
                  <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                    Transforming complexity into competitive advantage through sophisticated AI integration
                  </p>
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
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
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
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
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
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/hvac" className="hover:text-blue-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-blue-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-blue-400 transition-colors">Electrical</Link></li>
                <li><Link href="/golf-courses" className="hover:text-blue-400 transition-colors">Golf Courses</Link></li>
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
                <li><button 
                  onClick={scrollToBlog}
                  className="hover:text-blue-400 transition-colors"
                >
                  Blog
                </button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button 
                  onClick={() => setShowSubscriptionModal(true)}
                  className="hover:text-blue-400 transition-colors"
                >
                  Subscribe
                </button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Defiant Integrations. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <SubscriptionModal 
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
      />
      <LeadCaptureModal
        open={showLeadCaptureModal}
        onOpenChange={setShowLeadCaptureModal}
        title="Start Your AI Transformation"
        subtitle="Get a customized strategy consultation"
      />
    </div>
  );
}
