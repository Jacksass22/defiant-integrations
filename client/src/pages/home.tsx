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

  // Gallery state for rotating computer display
  const [currentProject, setCurrentProject] = useState(0);
  
  const projectGallery = [
    {
      title: "AI Voice Systems",
      category: "Voice Technology",
      description: "Intelligent phone systems for service businesses",
      color: "from-blue-500 to-blue-700",
      accent: "bg-blue-500"
    },
    {
      title: "E-Commerce Platforms",
      category: "Web Development",
      description: "Custom online stores with AI-powered features",
      color: "from-emerald-500 to-teal-600",
      accent: "bg-emerald-500"
    },
    {
      title: "CRM Integration",
      category: "Business Systems",
      description: "Automated lead capture and customer management",
      color: "from-purple-500 to-indigo-600",
      accent: "bg-purple-500"
    },
    {
      title: "Analytics Dashboards",
      category: "Data Solutions",
      description: "Real-time business intelligence and reporting",
      color: "from-amber-500 to-orange-600",
      accent: "bg-amber-500"
    }
  ];

  // Auto-rotate gallery every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectGallery.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projectGallery.length]);

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
      <section className="relative py-32 bg-gradient-to-b from-white via-gray-50/40 to-white overflow-hidden">
        {/* Premium space grey background */}
        <div className="absolute inset-0">
          {/* Subtle space grey gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 via-gray-50/30 to-slate-100/40" />
          
          {/* Clean geometric pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_rgb(156_163_175_/_0.15)_1px,_transparent_1px)] bg-[size:60px_60px]" />
          
          {/* Subtle depth elements */}
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-gray-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-slate-200/10 rounded-full blur-3xl" />
          
          {/* Clean border lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/30 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Premium header section */}
          <div className="text-center mb-24 relative">
            {/* Clean luxury backdrop */}
            <div className="absolute inset-0 -mx-12 -my-16 bg-gradient-to-b from-white via-gray-50/50 to-white rounded-3xl shadow-xl border border-gray-200/40">
              {/* Subtle inner glow */}
              <div className="absolute inset-1 bg-gradient-to-b from-white/80 via-gray-50/10 to-white/80 rounded-3xl" />
            </div>
            
            <div className="relative z-10 py-16 px-8">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                <TextType 
                  text={["What We Do", "How We Transform", "What We Build"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  startOnVisible={true}
                  className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
                  textColors={["#111827", "#1f2937", "#374151"]}
                />
              </h2>
              
              {/* Clean premium divider */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-gray-400" />
                <div className="w-3 h-3 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full mx-4 shadow-lg" />
                <div className="w-16 h-0.5 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full" />
                <div className="w-3 h-3 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full mx-4 shadow-lg" />
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-gray-400" />
              </div>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-light">
                We build intelligent systems that transform your business operations. From strategy to implementation, our real developers create custom solutions that work.
              </p>
            </div>
          </div>

          {/* Creative Capability Showcase */}
          <div className="relative mb-20">
            {/* Luxury background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-radial from-blue-500/8 via-blue-300/4 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-radial from-slate-400/6 via-purple-300/3 to-transparent rounded-full blur-3xl" />
              
              {/* Floating luxury elements */}
              <div className="absolute top-40 left-1/4 w-2 h-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-pulse opacity-30" style={{ animationDelay: '2s' }} />
              <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full animate-pulse opacity-20" style={{ animationDelay: '4s' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-20 bg-gradient-to-b from-transparent via-blue-200/10 to-transparent" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Interactive Capability Matrix */}
              <div className="space-y-8">
                <div className="text-left relative p-8 bg-gradient-to-br from-white via-gray-50/30 to-white rounded-2xl shadow-lg border border-gray-200/60">
                  {/* Subtle accent line */}
                  <div className="absolute -left-1 top-0 w-1 h-full bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 rounded-full" />
                  
                  <h3 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Comprehensive AI Integration
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    From strategic planning to technical implementation, we deliver end-to-end solutions that transform how businesses operate.
                  </p>
                </div>
                
                {/* Capability Grid */}
                <div className="grid grid-cols-2 gap-8">
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
                    <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full min-h-[280px] flex flex-col">
                      {/* Subtle corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-tr-2xl" />
                      
                      <div className="relative text-center flex-1 flex flex-col justify-center">
                        {/* Clean icon */}
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mx-auto mb-5 flex items-center justify-center shadow-lg">
                          <div className="w-7 h-7 bg-white rounded" />
                        </div>
                        
                        <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">
                          Intelligence
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed px-2">
                          AI assistants, voice agents, automated workflows
                        </p>
                      </div>
                      
                      {/* Clean bottom accent */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-b-2xl" />
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
                    <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full min-h-[280px] flex flex-col">
                      {/* Subtle corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-tr-2xl" />
                      
                      <div className="relative text-center flex-1 flex flex-col justify-center">
                        {/* Clean icon */}
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl mx-auto mb-5 flex items-center justify-center shadow-lg">
                          <div className="w-7 h-7 bg-white rounded" />
                        </div>
                        
                        <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">
                          Digital
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed px-2">
                          Custom platforms, chatbots, intelligent search
                        </p>
                      </div>
                      
                      {/* Clean bottom accent */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-b-2xl" />
                    </div>
                  </div>
                  
                  {/* Web Development */}
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
                    <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full min-h-[280px] flex flex-col">
                      {/* Subtle corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-tr-2xl" />
                      
                      <div className="relative text-center flex-1 flex flex-col justify-center">
                        {/* Clean icon */}
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mx-auto mb-5 flex items-center justify-center shadow-lg">
                          <div className="w-7 h-7 bg-white rounded" />
                        </div>
                        
                        <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">
                          Web Development
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed px-2">
                          Custom websites, e-commerce platforms, web applications
                        </p>
                      </div>
                      
                      {/* Clean bottom accent */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-500 rounded-b-2xl" />
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
                    <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full min-h-[280px] flex flex-col">
                      {/* Subtle corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-tr-2xl" />
                      
                      <div className="relative text-center flex-1 flex flex-col justify-center">
                        {/* Clean icon */}
                        <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mx-auto mb-5 flex items-center justify-center shadow-lg">
                          <div className="w-7 h-7 bg-white rounded" />
                        </div>
                        
                        <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">
                          Strategy
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed px-2">
                          Consulting, development, ongoing optimization
                        </p>
                      </div>
                      
                      {/* Clean bottom accent */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-b-2xl" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Rotating Computer Gallery */}
              <div className="relative">
                <div className="relative">
                  {/* Computer mockup with rotating content */}
                  <div className="relative max-w-lg mx-auto">
                    
                    {/* Computer Base */}
                    <div className="relative">
                      {/* Screen */}
                      <div className="relative bg-gray-900 rounded-t-2xl p-3 shadow-2xl">
                        {/* Camera notch */}
                        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full"></div>
                        
                        {/* Screen content */}
                        <div className="relative bg-white rounded-lg overflow-hidden" style={{ aspectRatio: '16/10' }}>
                          {/* Dynamic project content */}
                          <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
                            <div className={`absolute inset-0 bg-gradient-to-br ${projectGallery[currentProject].color} opacity-90`}></div>
                            
                            {/* Animated background pattern */}
                            <div className="absolute inset-0 opacity-20">
                              <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              <div className="absolute top-8 right-6 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                              <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                              <div className="absolute bottom-4 right-4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                              
                              {/* Grid pattern */}
                              <div className="absolute inset-4 opacity-30">
                                <div className="grid grid-cols-6 gap-2 h-full">
                                  {Array.from({ length: 24 }).map((_, i) => (
                                    <div key={i} className="bg-white/20 rounded animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            {/* Project content */}
                            <div className="relative z-10 flex flex-col justify-between h-full p-6">
                              {/* Top section */}
                              <div className="text-white">
                                <div className="text-xs font-medium opacity-80 mb-1">{projectGallery[currentProject].category}</div>
                                <h4 className="text-lg font-bold mb-2">{projectGallery[currentProject].title}</h4>
                                <p className="text-sm opacity-90 leading-relaxed">{projectGallery[currentProject].description}</p>
                              </div>
                              
                              {/* Bottom section - Mock interface elements */}
                              <div className="space-y-2">
                                <div className="flex space-x-2">
                                  <div className="flex-1 h-2 bg-white/30 rounded"></div>
                                  <div className="w-16 h-2 bg-white/50 rounded"></div>
                                </div>
                                <div className="flex space-x-2">
                                  <div className="w-20 h-2 bg-white/40 rounded"></div>
                                  <div className="flex-1 h-2 bg-white/20 rounded"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Computer stand */}
                      <div className="flex justify-center">
                        <div className="w-16 h-6 bg-gray-800 rounded-b-lg shadow-lg"></div>
                      </div>
                      <div className="flex justify-center mt-1">
                        <div className="w-24 h-3 bg-gray-700 rounded-full shadow-lg"></div>
                      </div>
                    </div>
                    
                    {/* Gallery indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                      {projectGallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentProject(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentProject
                              ? projectGallery[currentProject].accent
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    
                    {/* Supporting text with luxury styling */}
                    <div className="text-center mt-8 relative">
                      {/* Elegant backdrop for text */}
                      <div className="absolute inset-0 -mx-4 -my-2 bg-gradient-to-b from-white/60 via-slate-50/40 to-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)]" />
                      
                      <div className="relative py-6">
                        <h4 className="font-serif text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-3 tracking-wide">Real Solutions, Real Results</h4>
                        <p className="text-gray-600 leading-relaxed max-w-md mx-auto font-light tracking-wide">
                          Every project showcases our commitment to building intelligent systems that transform businesses across industries.
                        </p>
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
                  The Hard Truth About Digital Transformation
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  70% of digital transformations fail. Not because of bad technology, but because of poor execution. We built our approach around what actually works—strategic AI implementation with measurable business outcomes.
                </p>
                <Link href="/ai-adoption-article" className="text-blue-600 font-medium hover:underline inline-flex items-center space-x-2">
                  <span>Read About AI Adoption That Works</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 sm:p-12 lg:p-16 min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden">
              {/* AI Video Background */}
              <video
                ref={aiVideoRef}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                src={aiVideo}
              >
              </video>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-black/80"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="mb-8">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
                    {/* Animated rotating rings */}
                    <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute inset-2 border-2 border-blue-300/40 rounded-full animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}></div>
                    <div className="absolute inset-4 border-2 border-blue-200/50 rounded-full animate-spin" style={{ animationDuration: '5s' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-500 rounded-full shadow-lg animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  Beyond the Hype
                </h3>
                <div className="w-16 h-px bg-white/60 mx-auto mb-4"></div>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                  Real AI solutions that solve actual business problems, not just technology for technology's sake
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Proof of Concepts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <div className="relative min-h-[400px] sm:min-h-[500px] bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 p-8 sm:p-12 lg:p-16 flex items-center justify-center overflow-hidden">
              {/* Animated Code Visualization */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-8 left-8 font-mono text-xs text-white/60">
                  <div className="animate-pulse">if (customer.intent === 'purchase') {'{'}</div>
                  <div className="animate-pulse ml-4" style={{ animationDelay: '0.5s' }}>processPayment();</div>
                  <div className="animate-pulse ml-4" style={{ animationDelay: '1s' }}>updateInventory();</div>
                  <div className="animate-pulse" style={{ animationDelay: '1.5s' }}>{'}'}</div>
                </div>
                
                <div className="absolute bottom-16 right-8 font-mono text-xs text-white/60">
                  <div className="animate-pulse" style={{ animationDelay: '2s' }}>const ai = require('intelligence');</div>
                  <div className="animate-pulse" style={{ animationDelay: '2.5s' }}>ai.optimize(business);</div>
                </div>
              </div>
              
              {/* Central Element */}
              <div className="relative z-10 text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-xl mx-auto mb-6 flex items-center justify-center transform rotate-6 shadow-2xl">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg flex items-center justify-center transform -rotate-6">
                      <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        POC
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  Proof of Concepts
                </h3>
                <div className="w-16 h-px bg-white/60 mx-auto mb-4"></div>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                  See our intelligence in action through working prototypes and live demonstrations
                </p>
              </div>
            </div>
            <div className="bg-white p-8 sm:p-12 lg:p-16 min-h-[400px] sm:min-h-[500px] flex items-center">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Experience Before You Invest
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Don't take our word for it. Our proof of concepts let you interact with live AI systems that demonstrate exactly how your business operations could be transformed.
                </p>
                <Link href="/proof-of-concepts" className="text-blue-600 font-medium hover:underline inline-flex items-center space-x-2">
                  <span>Explore Interactive Demos</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Knowledge Base Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <div className="bg-gray-50 p-8 sm:p-12 lg:p-16 min-h-[400px] sm:min-h-[500px] flex items-center">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Industry Knowledge at Scale
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  From golf courses to cannabis retailers, our curated knowledge base contains battle-tested strategies, implementation guides, and industry-specific AI solutions that work in the real world.
                </p>
                <Link href="/books" className="text-blue-600 font-medium hover:underline inline-flex items-center space-x-2">
                  <span>Browse Industry Guides</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative min-h-[400px] sm:min-h-[500px] bg-gradient-to-br from-emerald-800 via-teal-700 to-blue-800 p-8 sm:p-12 lg:p-16 flex items-center justify-center overflow-hidden">
              {/* Books Image */}
              <div className="absolute inset-0 opacity-30">
                <img
                  src={booksImage}
                  alt="Knowledge base"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 to-blue-900/80"></div>
              
              {/* Floating Book Icons */}
              <div className="absolute inset-0">
                <div className="absolute top-16 left-16 w-8 h-10 bg-white/20 rounded transform rotate-12 animate-pulse"></div>
                <div className="absolute top-24 right-20 w-6 h-8 bg-white/15 rounded transform -rotate-6 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-12 w-10 h-12 bg-white/25 rounded transform rotate-3 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-32 right-16 w-7 h-9 bg-white/20 rounded transform -rotate-12 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              {/* Central Element */}
              <div className="relative z-10 text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 rounded-2xl mx-auto mb-6 flex items-center justify-center transform -rotate-3 shadow-2xl">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg flex items-center justify-center transform rotate-3">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  27+ Industries
                </h3>
                <div className="w-16 h-px bg-white/60 mx-auto mb-4"></div>
                <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                  Comprehensive guides and strategies tailored to your specific industry challenges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">Latest Insights</h2>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-6" />
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Industry insights, implementation strategies, and real-world case studies from our consulting work
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strategy Article Card */}
            <article className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(59,_130,_246,_0.3),_transparent_50%)]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-medium opacity-90">STRATEGY</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  Why Most Strategies Fail—And How the Best Beat the Odds
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Only one in five companies believe they meet the bar for high-quality strategy. What separates the champions from the rest?
                </p>
                <Link href="/strategy-article" className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>

            {/* AI Adoption Article Card */}
            <article className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(139,_92,_246,_0.3),_transparent_50%)]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-medium opacity-90">AI ADOPTION</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  The Hard Truth About AI Adoption in Business
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  70% of AI initiatives fail. Learn what works from our real-world implementation experience across industries.
                </p>
                <Link href="/ai-adoption-article" className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>

            {/* Subscribe Card */}
            <article className="group bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3 text-center">
                    Stay Updated
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center mb-6">
                    Get weekly insights on AI implementation, industry trends, and business strategy delivered to your inbox.
                  </p>
                </div>
                <div className="text-center">
                  <button 
                    onClick={() => setShowSubscriptionModal(true)}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-white mb-4">Defiant Integrations</h3>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Premium consulting services that transform businesses through intelligent AI integration. From strategy to implementation, we deliver solutions that work.
                </p>
              </div>
              <div className="flex space-x-6">
                <button 
                  onClick={() => setShowLeadCaptureModal(true)}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
                <button 
                  onClick={() => setShowLeadCaptureModal(true)}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Careers
                </button>
                <button 
                  onClick={() => setShowSubscriptionModal(true)}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Subscribe
                </button>
                <button 
                  onClick={scrollToBlog}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Blog
                </button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                <li><Link href="/ai-strategy-development" className="text-gray-300 hover:text-white transition-colors duration-200">AI Strategy</Link></li>
                <li><Link href="/technology-evaluation" className="text-gray-300 hover:text-white transition-colors duration-200">Technology Evaluation</Link></li>
                <li><Link href="/data-architecture" className="text-gray-300 hover:text-white transition-colors duration-200">Data Architecture</Link></li>
                <li><Link href="/process-automation" className="text-gray-300 hover:text-white transition-colors duration-200">Process Automation</Link></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-semibold text-white mb-4">Industries</h4>
              <ul className="space-y-3">
                <li><Link href="/golf-courses" className="text-gray-300 hover:text-white transition-colors duration-200">Golf Courses</Link></li>
                <li><Link href="/cannabis-retail" className="text-gray-300 hover:text-white transition-colors duration-200">Cannabis Retail</Link></li>
                <li><Link href="/restaurants" className="text-gray-300 hover:text-white transition-colors duration-200">Restaurants</Link></li>
                <li><Link href="/real-estate" className="text-gray-300 hover:text-white transition-colors duration-200">Real Estate</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Defiant Integrations. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showSubscriptionModal && (
        <SubscriptionModal 
          isOpen={showSubscriptionModal} 
          onClose={() => setShowSubscriptionModal(false)} 
        />
      )}
      
      {showLeadCaptureModal && (
        <LeadCaptureModal 
          open={showLeadCaptureModal} 
          onClose={() => setShowLeadCaptureModal(false)} 
        />
      )}
    </div>
  );
}