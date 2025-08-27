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

      {/* Wave Divider */}
      <div className="relative bg-[#0B1020]">
        <svg className="text-white block" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,58.7C1120,43,1280,21,1360,10.7L1440,0V80H0Z"/>
        </svg>
      </div>

      {/* Proof Band */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <p className="text-sm text-slate-500 text-center mb-8">Trusted by teams across golf, retail, and services</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
            <div className="h-8 w-24 bg-slate-200 rounded grayscale flex items-center justify-center">
              <span className="text-xs text-slate-600 font-medium">Client Logo</span>
            </div>
            <div className="h-8 w-28 bg-slate-200 rounded grayscale flex items-center justify-center">
              <span className="text-xs text-slate-600 font-medium">Partner Brand</span>
            </div>
            <div className="h-8 w-32 bg-slate-200 rounded grayscale flex items-center justify-center">
              <span className="text-xs text-slate-600 font-medium">Industry Leader</span>
            </div>
            <div className="h-8 w-26 bg-slate-200 rounded grayscale flex items-center justify-center">
              <span className="text-xs text-slate-600 font-medium">Enterprise</span>
            </div>
            <div className="h-8 w-30 bg-slate-200 rounded grayscale flex items-center justify-center">
              <span className="text-xs text-slate-600 font-medium">Growth Co</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-semibold text-slate-900">Comprehensive AI Integration</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            End-to-end delivery: strategy, custom dev, voice agents, and ongoing optimization.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Intelligence Service Card */}
            <a href="/ai-strategy-development" className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md hover:ring-blue-200 transition">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl ring-1 ring-slate-200">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">Intelligence</h3>
                  <p className="mt-1 text-slate-600 text-base">AI assistants and automated workflows</p>
                  <span className="mt-3 inline-flex items-center text-blue-600 text-sm">
                    Learn more
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M12.3 5.3a1 1 0 011.4 0L18 9.6l-4.3 4.3a1 1 0 01-1.4-1.4L14.6 10H4a1 1 0 110-2h10.6l-2.3-2.3a1 1 0 010-1.4z"/>
                    </svg>
                  </span>
                </div>
              </div>
            </a>

            {/* Digital Service Card */}
            <a href="/technology-evaluation" className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md hover:ring-blue-200 transition">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl ring-1 ring-slate-200">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">Digital</h3>
                  <p className="mt-1 text-slate-600 text-base">Custom platforms and intelligent search</p>
                  <span className="mt-3 inline-flex items-center text-blue-600 text-sm">
                    Learn more
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M12.3 5.3a1 1 0 011.4 0L18 9.6l-4.3 4.3a1 1 0 01-1.4-1.4L14.6 10H4a1 1 0 110-2h10.6l-2.3-2.3a1 1 0 010-1.4z"/>
                    </svg>
                  </span>
                </div>
              </div>
            </a>

            {/* Web Development Service Card */}
            <a href="/process-automation" className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md hover:ring-blue-200 transition">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl ring-1 ring-slate-200">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">Web Development</h3>
                  <p className="mt-1 text-slate-600 text-base">Custom websites and applications</p>
                  <span className="mt-3 inline-flex items-center text-blue-600 text-sm">
                    Learn more
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M12.3 5.3a1 1 0 011.4 0L18 9.6l-4.3 4.3a1 1 0 01-1.4-1.4L14.6 10H4a1 1 0 110-2h10.6l-2.3-2.3a1 1 0 010-1.4z"/>
                    </svg>
                  </span>
                </div>
              </div>
            </a>

            {/* Strategy Service Card */}
            <a href="/data-architecture" className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md hover:ring-blue-200 transition">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl ring-1 ring-slate-200">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">Strategy</h3>
                  <p className="mt-1 text-slate-600 text-base">Consulting and ongoing optimization</p>
                  <span className="mt-3 inline-flex items-center text-blue-600 text-sm">
                    Learn more
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M12.3 5.3a1 1 0 011.4 0L18 9.6l-4.3 4.3a1 1 0 01-1.4-1.4L14.6 10H4a1 1 0 110-2h10.6l-2.3-2.3a1 1 0 010-1.4z"/>
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Rotating Computer Showcase */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-slate-900 mb-6">Real Solutions, Real Results</h2>
              <p className="text-lg text-slate-600 mb-8">
                Every project showcases our commitment to building intelligent systems that transform businesses across industries.
              </p>
              <div className="flex items-center gap-3">
                <a href="#voice" className="inline-flex items-center px-5 py-3 rounded-xl bg-[#3B82F6] text-white shadow-lg hover:opacity-95">
                  Voice Agents
                </a>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200">
                  Coming soon
                </span>
              </div>
            </div>
            
            {/* Computer mockup with rotating content */}
            <div className="relative max-w-lg mx-auto">
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
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#F5F7FB]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <figure className="rounded-2xl bg-white p-8 ring-1 ring-slate-200 shadow-sm">
            <blockquote className="text-xl leading-relaxed text-slate-900">
              "The team exceeded expectations and delivered under budget despite constraints. Their AI solutions transformed our customer service operations completely."
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center">
                <span className="text-xs text-slate-600 font-medium">SK</span>
              </div>
              <div>
                <div className="font-semibold">Shiva Kumar Kothur</div>
                <div className="text-sm text-slate-600">Infrastructure & Endpoint Security</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#0B1020]">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-semibold text-white mb-6">Ready to transform your business?</h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how AI can streamline your operations and drive growth. Get started with a free consultation.
          </p>
          <button 
            onClick={() => setShowLeadCaptureModal(true)}
            className="inline-flex items-center px-8 py-4 rounded-xl bg-[#3B82F6] text-white font-semibold shadow-lg hover:opacity-95 transition-opacity"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

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