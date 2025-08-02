import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { MegaMenu } from './mega-menu';
import { SubscriptionModal } from './subscription-modal';

const industriesData = [
  {
    title: "Trades & Home Services",
    items: [
      "HVAC",
      "Plumbing", 
      "Electrical",
      "Landscaping",
      "Roofing",
      "Painting",
      "General Contracting",
      "Cleaning Services",
      "Remodeling & Renovation"
    ]
  },
  {
    title: "Consumer & Lifestyle",
    items: [
      "Restaurants & Cafés",
      "Beauty Salons & Spas",
      "Barbershops",
      "Gyms & Personal Trainers",
      "Wellness & Life Coaches",
      "Pet Grooming & Boarding",
      "Golf Courses"
    ]
  },
  {
    title: "Retail & Product",
    items: [
      "Brick-and-Mortar Retail",
      "E-commerce Brands",
      "Cannabis Retail & Growers",
      "Specialty Food Makers",
      "Local Boutiques"
    ]
  },
  {
    title: "Professional Services",
    items: [
      "Real Estate Agencies",
      "Law Firms",
      "Accounting & Tax",
      "Insurance Brokers",
      "HR & Recruiting",
      "Business Consultants"
    ]
  }
];

const capabilitiesData = [
  {
    title: "Strategy & Planning",
    items: [
      "AI Strategy Development",
      "Digital Transformation",
      "Technology Roadmapping",
      "ROI Assessment"
    ]
  },
  {
    title: "Implementation & Integration",
    items: [
      "System Integration",
      "Process Automation",
      "Data Architecture",
      "Performance Optimization"
    ]
  },
  {
    title: "Scaling & Operations",
    items: [
      "Change Management",
      "Team Training",
      "Governance Frameworks",
      "Continuous Improvement"
    ]
  },
  {
    title: "Innovation & Research",
    items: [
      "Proof of Concepts",
      "Pilot Programs",
      "Technology Evaluation"
    ]
  }
];

const aboutData = [
  {
    title: "Company",
    items: [
      "Our Story",
      "Company Values",
      "Mission & Vision"
    ]
  },
  {
    title: "Social Media",
    items: [
      "Instagram",
      "LinkedIn"
    ]
  }
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const scrollToBlog = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate there first
    if (location !== '/') {
      setLocation('/');
      // Use a timeout to ensure the page loads before scrolling
      setTimeout(() => {
        const blogElement = document.getElementById('blog');
        if (blogElement) {
          blogElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // We're already on the home page, just scroll
      const blogElement = document.getElementById('blog');
      if (blogElement) {
        blogElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const openSubscriptionModal = () => {
    setIsSubscriptionModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="bg-gradient-to-b from-gray-900 via-gray-900/80 to-transparent fixed w-full top-0 z-50 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 py-2">
          {/* Menu Icon and Logo */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="text-xl font-serif font-bold text-white transform transition-transform duration-200 group-hover:-translate-y-0.5">
                Defiant <span className="text-gray-300">Integrations</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <MegaMenu title="Industries" sections={industriesData} />
            <MegaMenu title="Capabilities" sections={capabilitiesData} />
            <Link href="/careers" className="text-white hover:text-gray-300 transition-colors font-medium text-[14px]">
              Careers
            </Link>
            <MegaMenu title="About Us" sections={aboutData} />
            <button 
              onClick={scrollToBlog}
              className="text-white hover:text-gray-300 transition-colors font-medium text-[14px]"
            >
              Defiant Integration Blog
            </button>
          </div>
          
          {/* Right Side - Subscribe, Search */}
          <div className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={openSubscriptionModal}
              className="text-white hover:text-gray-300 transition-colors font-medium text-[14px]"
            >
              Subscribe
            </button>
            <button className="text-white hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-6 py-8 space-y-6">
            {/* Industries Section */}
            <div>
              <h3 className="text-white font-semibold mb-3">Industries</h3>
              <div className="pl-4 space-y-2">
                <Link href="/hvac" className="block text-gray-300 hover:text-white transition-colors text-sm">HVAC</Link>
                <Link href="/plumbing" className="block text-gray-300 hover:text-white transition-colors text-sm">Plumbing</Link>
                <Link href="/electrical" className="block text-gray-300 hover:text-white transition-colors text-sm">Electrical</Link>
                <Link href="/golf-courses" className="block text-gray-300 hover:text-white transition-colors text-sm">Golf Courses</Link>
                <Link href="/restaurants-cafes" className="block text-gray-300 hover:text-white transition-colors text-sm">Restaurants & Cafés</Link>
              </div>
            </div>

            {/* Capabilities Section */}
            <div>
              <h3 className="text-white font-semibold mb-3">Capabilities</h3>
              <div className="pl-4 space-y-2">
                <Link href="/ai-strategy-development" className="block text-gray-300 hover:text-white transition-colors text-sm">AI Strategy</Link>
                <Link href="/system-integration" className="block text-gray-300 hover:text-white transition-colors text-sm">Implementation</Link>
                <Link href="/change-management" className="block text-gray-300 hover:text-white transition-colors text-sm">Scaling</Link>
              </div>
            </div>

            {/* About Us Section */}
            <div>
              <h3 className="text-white font-semibold mb-3">About Us</h3>
              <div className="pl-4 space-y-2">
                <Link href="/our-story" className="block text-gray-300 hover:text-white transition-colors text-sm">Our Story</Link>
                <Link href="/company-values" className="block text-gray-300 hover:text-white transition-colors text-sm">Company Values</Link>
                <Link href="/mission-vision" className="block text-gray-300 hover:text-white transition-colors text-sm">Mission & Vision</Link>
              </div>
            </div>

            {/* Connect Section */}
            <div>
              <h3 className="text-white font-semibold mb-3">Connect</h3>
              <div className="pl-4 space-y-2">
                <button 
                  onClick={openSubscriptionModal}
                  className="block text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  Subscribe
                </button>
                <button 
                  onClick={scrollToBlog}
                  className="block text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Subscription Modal */}
      <SubscriptionModal 
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
      />
    </nav>
  );
}
