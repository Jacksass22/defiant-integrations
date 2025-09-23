import { ArrowRight, Target, Settings } from 'lucide-react';
import { Link } from 'wouter';
import { useEffect, useRef, useState } from 'react';
import BlurText from '@/components/BlurText';
import TextType from '@/components/TextType';
import ServiceShowcase from '@/components/ServiceShowcase';
import LogoLoop from '@/components/LogoLoop';
import MovingDotsOverlay from '@/components/MovingDotsOverlay';
import SplitText from '@/components/SplitText';
import CountUp from '@/components/CountUp';

import { SubscriptionModal } from '@/components/subscription-modal';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import videoBackground from '@assets/3866539-hd_1920_1080_25fps_1752668973005.mp4';
import aiVideo from '@assets/3129977-uhd_3840_2160_30fps_1753396464422.mp4';

export default function Home() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const aiVideoRef = useRef<HTMLVideoElement>(null);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
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

  // Technology partner logos for LogoLoop
  const techLogos = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", title: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript", title: "TypeScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js", title: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python", title: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", alt: "Google Cloud", title: "Google Cloud Platform" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB", title: "MongoDB" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL", title: "PostgreSQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker", title: "Docker" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", alt: "Kubernetes", title: "Kubernetes" },
    {
      node: <span className="px-3 py-1.5 bg-purple-500 text-white rounded-md font-bold text-sm">n8n</span>,
      title: "n8n",
      alt: "n8n"
    },
    { src: "https://python.langchain.com/img/brand/wordmark.png", alt: "LangChain", title: "LangChain" },
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
                className="bg-white text-gray-900 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg hover:bg-gray-100 hover:shadow-lg hover:scale-105 transform transition-all duration-300 inline-flex items-center space-x-2"
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
                <SplitText 
                  text="What We Do & How We Transform"
                  className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
                  delay={50}
                  duration={0.8}
                  splitType="words, chars"
                  ease="power3.out"
                  tag="span"
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

          {/* Interactive Service Showcase */}
          <div className="relative mb-10">
            <ServiceShowcase />
          </div>
        </div>
      </section>


      {/* Technology Partners Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight mb-3">
              Powered by Industry-Leading Technologies
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We leverage cutting-edge technology stacks to deliver robust, scalable solutions
            </p>
          </div>
          <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="left"
              logoHeight={48}
              gap={60}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology stack and partners"
            />
          </div>
        </div>
      </section>

      {/* Authority & Research Hook Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-8 sm:p-12 lg:p-16 flex items-center justify-center min-h-[400px] sm:min-h-[500px] relative overflow-hidden rounded-2xl">
              {/* Animated Neural Network Visualization */}
              <div className="absolute inset-0">
                {/* Moving dots overlay */}
                <MovingDotsOverlay dotCount={22} color={"255,255,255"} opacity={0.18} maxRadius={3} minRadius={1} speed={0.06} />
                
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
            <div className="bg-gray-50 p-8 sm:p-12 lg:p-16 min-h-[400px] sm:min-h-[500px] flex items-center rounded-2xl">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Why Most Strategies Fail—And How the Best Beat the Odds
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Only <CountUp
                    from={0}
                    to={1}
                    duration={1.5}
                    className="font-bold text-blue-600"
                  /> in <CountUp
                    from={0}
                    to={5}
                    duration={2}
                    delay={0.5}
                    className="font-bold text-blue-600"
                  /> companies believe they meet the bar for high-quality strategy. What do these strategy champions have in common? They excel at designing bold strategies—and are even better at mobilizing their organizations to execute them.
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

      {/* Industry Ecosystems Section removed per request */}

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
                  <CountUp
                    from={0}
                    to={70}
                    duration={2.5}
                    className="font-bold text-red-600"
                  />% of digital transformations fail. Not because of bad technology, but because of poor execution. We built our approach around what actually works—strategic AI implementation with measurable business outcomes.
                </p>
                <Link href="/ai-adoption-article" className="text-blue-600 font-medium hover:underline inline-flex items-center space-x-2">
                  <span>Read About AI Adoption That Works</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 sm:p-12 lg:p-16 min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden rounded-2xl">
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


      {/* Blog Section (moved up replacing Proof of Concepts) */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">Latest Insights</h2>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-6" />
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Industry insights, implementation strategies, and real-world case studies from our consulting work
            </p>
          </div>

    {/* Adjusted to two-column layout now that only two articles remain */}
    <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  <CountUp
                    from={0}
                    to={70}
                    duration={2}
                    className="font-bold text-red-600"
                  />% of AI initiatives fail. Learn what works from our real-world implementation experience across industries.
                </p>
                <Link href="/ai-adoption-article" className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>

            {/* Book List Link Card (replaces old Subscribe card) */}
            {/* (Book List card removed as requested) */}
          </div>
        </div>
      </section>
      {/* 2025 Client Book List CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">2025 Client Book List</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">The strategic & AI reading foundation we give clients. Explore the 12 core titles across strategy, execution, systems thinking, and transformation.</p>
          <div className="flex items-center justify-center">
            <Link href="/books" className="inline-flex items-center px-8 py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow">
              View Book List & Articles <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
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
          onOpenChange={(open) => setShowLeadCaptureModal(open)} 
        />
      )}
    </div>
  );
}