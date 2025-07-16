import { ArrowRight, ChevronRight, Users, TrendingUp, Target, Map, Settings, Repeat, ExternalLink } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Link } from 'wouter';
import videoBackground from '@assets/3866539-hd_1920_1080_25fps_1752668973005.mp4';

export default function Home() {
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
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
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-8 sm:mb-12 lg:mb-16 text-white leading-tight">
              What's your next<br />
              <span className="text-white">intelligent</span><br />
              <span className="text-white">breakthrough?</span>
            </h1>
            <div className="mt-8 sm:mt-12 lg:mt-16">
              <button className="bg-white text-gray-900 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-gray-100 transition-all inline-flex items-center space-x-2">
                <span>Get started</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
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
            <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8 sm:p-12 lg:p-16 flex items-center justify-center min-h-[400px] sm:min-h-[500px] relative overflow-hidden">
              <div className="relative z-10 flex items-center justify-center w-full max-w-md">
                {/* AI Head Silhouette with Circuits */}
                <svg viewBox="0 0 400 400" className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  {/* Circuit Lines Background */}
                  <g className="opacity-40">
                    {/* Left circuit paths */}
                    <path d="M50 150 L100 150 L120 170" stroke="#3B82F6" strokeWidth="2" fill="none" />
                    <circle cx="50" cy="150" r="6" fill="#3B82F6" />
                    <circle cx="120" cy="170" r="4" fill="#3B82F6" />
                    
                    <path d="M60 200 L110 200 L130 220" stroke="#3B82F6" strokeWidth="2" fill="none" />
                    <circle cx="60" cy="200" r="4" fill="#3B82F6" />
                    <circle cx="130" cy="220" r="6" fill="#3B82F6" />
                    
                    <path d="M70 250 L120 250 L140 230" stroke="#3B82F6" strokeWidth="2" fill="none" />
                    <circle cx="70" cy="250" r="6" fill="#3B82F6" />
                    <circle cx="140" cy="230" r="4" fill="#3B82F6" />
                    
                    <path d="M80 300 L130 300 L150 280" stroke="#3B82F6" strokeWidth="2" fill="none" />
                    <circle cx="80" cy="300" r="4" fill="#3B82F6" />
                    <circle cx="150" cy="280" r="6" fill="#3B82F6" />
                  </g>
                  
                  {/* Head Silhouette */}
                  <path d="M200 50 C250 50 280 80 280 130 L280 200 C280 250 250 280 200 280 C150 280 120 250 120 200 L120 130 C120 80 150 50 200 50 Z" 
                        fill="#1e3a8a" opacity="0.8" />
                  
                  {/* Inner Head Gradient */}
                  <defs>
                    <radialGradient id="headGradient">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#2563EB" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#1e40af" stopOpacity="0.2" />
                    </radialGradient>
                  </defs>
                  <path d="M200 70 C240 70 270 100 270 140 L270 190 C270 230 240 260 200 260 C160 260 130 230 130 190 L130 140 C130 100 160 70 200 70 Z" 
                        fill="url(#headGradient)" />
                  
                  {/* AI Core Circle */}
                  <g transform="translate(200, 160)">
                    <circle r="50" fill="#1e40af" opacity="0.3" />
                    <circle r="40" fill="#2563EB" opacity="0.4" />
                    <circle r="30" fill="#3B82F6" opacity="0.5" />
                    <circle r="20" fill="#60A5FA" opacity="0.6" />
                    <circle r="10" fill="white" />
                    <text x="0" y="5" textAnchor="middle" className="text-xl font-bold fill-blue-600">AI</text>
                  </g>
                  
                  {/* Growth Chart */}
                  <g transform="translate(200, 320)">
                    {/* Chart bars */}
                    <rect x="-40" y="-20" width="15" height="20" fill="#3B82F6" opacity="0.8" />
                    <rect x="-20" y="-30" width="15" height="30" fill="#3B82F6" opacity="0.85" />
                    <rect x="0" y="-40" width="15" height="40" fill="#3B82F6" opacity="0.9" />
                    <rect x="20" y="-50" width="15" height="50" fill="#60A5FA" />
                    
                    {/* Growth arrow */}
                    <path d="M-40 -20 Q0 -40 35 -50" stroke="#60A5FA" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#60A5FA" />
                      </marker>
                    </defs>
                  </g>
                </svg>
              </div>
              
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-20 w-3 h-3 bg-blue-300 rounded-full animate-pulse animation-delay-1000"></div>
                <div className="absolute bottom-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-10 right-10 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thought Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 sm:p-12 lg:p-16 flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
              <div className="text-center">
                <div className="relative w-24 h-32 sm:w-32 sm:h-40 mx-auto mb-6 sm:mb-8">
                  <div className="absolute inset-0 bg-orange-500 rounded-sm transform rotate-3"></div>
                  <div className="absolute inset-0 bg-blue-500 rounded-sm transform -rotate-2"></div>
                  <div className="absolute inset-0 bg-red-500 rounded-sm transform rotate-1"></div>
                  <div className="absolute inset-0 bg-green-500 rounded-sm transform -rotate-1"></div>
                  <div className="absolute inset-0 bg-purple-500 rounded-sm"></div>
                  <div className="absolute inset-2 bg-white rounded-sm flex items-center justify-center">
                    <div className="text-xs text-gray-600 font-mono">2025</div>
                  </div>
                </div>
                <div className="text-white text-base sm:text-lg font-medium">
                  Essential reads for transformation leaders
                </div>
              </div>
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
                <button className="text-blue-600 font-medium hover:underline inline-flex items-center space-x-2">
                  <span>Add your voice to the list</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Insights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              NEW AT DEFIANT INTEGRATION BLOG
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Featured Article */}
            <div className="bg-white shadow-lg">
              <div className="h-48 sm:h-64 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <div className="text-white text-2xl sm:text-3xl font-bold">INNOVATION</div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="text-sm text-gray-500 mb-2">July 9, 2025</div>
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  From apprenticeship in space to selecting microbes: Meet McKinsey's game-based innovation lab
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Our Innovation Lab uses game design principles to tackle complex business challenges, from space exploration to biotechnology.
                </p>
                <button className="text-blue-600 font-medium hover:underline text-sm sm:text-base">
                  Read more
                </button>
              </div>
            </div>
            
            {/* Second Article */}
            <div className="bg-white shadow-lg">
              <div className="h-48 sm:h-64 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                <div className="text-white text-2xl sm:text-3xl font-bold">FUTURE</div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="text-sm text-gray-500 mb-2">July 8, 2025</div>
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  The future of work: AI implementation strategies that scale
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  How organizations can successfully implement AI while maintaining human-centered approaches to work and productivity.
                </p>
                <button className="text-blue-600 font-medium hover:underline text-sm sm:text-base">
                  Read more
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                date: "July 7, 2025",
                title: "Digital transformation at scale: Lessons from 1,000+ implementations",
                description: "Key insights from our analysis of successful digital transformation initiatives across industries."
              },
              {
                date: "July 6, 2025", 
                title: "The economics of AI: ROI frameworks that work",
                description: "Evidence-based approaches to measuring and optimizing AI investment returns."
              },
              {
                date: "July 5, 2025",
                title: "Change management in the age of AI",
                description: "Strategies for leading organizational transformation in rapidly evolving technological landscapes."
              }
            ].map((article, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 shadow-lg">
                <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {article.description}
                </p>
                <button className="text-blue-600 font-medium hover:underline text-sm">
                  Read more
                </button>
              </div>
            ))}
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
