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
      "TikTok"
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
    <nav className="bg-gray-900 fixed w-full top-0 z-[9999] shadow-xl border-b-2 border-gray-700" style={{ backgroundColor: '#111827' }}>
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
            <Link href="/services" className="text-white hover:text-gray-300 transition-colors font-medium text-[14px]">
              Services
            </Link>
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
          
          {/* Right Side - Subscribe */}
          <div className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={openSubscriptionModal}
              className="text-white hover:text-gray-300 transition-colors font-medium text-[14px]"
            >
              Subscribe
            </button>
          </div>
          
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 border-t border-gray-700">
          <div className="max-h-[80vh] overflow-y-auto px-6 py-8 space-y-6">
            {/* Industries Section - Complete with all categories */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-base">Industries</h3>
              <div className="space-y-4">
                {industriesData.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className="text-gray-300 font-medium text-sm mb-2 pl-2">{category.title}</h4>
                    <div className="pl-4 space-y-2">
                      {category.items.map((item, itemIndex) => {
                        // Convert item name to URL slug
                        const slug = item.toLowerCase()
                          .replace(/&/g, '')
                          .replace(/\s+/g, '-')
                          .replace(/[^a-z0-9-]/g, '');
                        
                        return (
                          <Link 
                            key={itemIndex}
                            href={`/${slug}`} 
                            className="block text-gray-400 hover:text-white transition-colors text-sm py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities Section - Complete with all categories */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-base">Capabilities</h3>
              <div className="space-y-4">
                {capabilitiesData.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className="text-gray-300 font-medium text-sm mb-2 pl-2">{category.title}</h4>
                    <div className="pl-4 space-y-2">
                      {category.items.map((item, itemIndex) => {
                        // Convert item name to URL slug
                        const slug = item.toLowerCase()
                          .replace(/&/g, '')
                          .replace(/\s+/g, '-')
                          .replace(/[^a-z0-9-]/g, '');
                        
                        return (
                          <Link 
                            key={itemIndex}
                            href={`/${slug}`} 
                            className="block text-gray-400 hover:text-white transition-colors text-sm py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About Us Section */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-base">About Us</h3>
              <div className="space-y-4">
                {aboutData.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className="text-gray-300 font-medium text-sm mb-2 pl-2">{category.title}</h4>
                    <div className="pl-4 space-y-2">
                      {category.items.map((item, itemIndex) => {
                        // Convert item name to URL slug
                        const slug = item.toLowerCase()
                          .replace(/&/g, '')
                          .replace(/\s+/g, '-')
                          .replace(/[^a-z0-9-]/g, '');
                        
                        return (
                          <Link 
                            key={itemIndex}
                            href={`/${slug}`} 
                            className="block text-gray-400 hover:text-white transition-colors text-sm py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Links */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-base">More</h3>
              <div className="pl-4 space-y-2">
                <Link 
                  href="/services" 
                  className="block text-gray-400 hover:text-white transition-colors text-sm py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/careers" 
                  className="block text-gray-400 hover:text-white transition-colors text-sm py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>
                <button 
                  onClick={() => {
                    openSubscriptionModal();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-gray-400 hover:text-white transition-colors text-sm text-left py-1"
                >
                  Subscribe
                </button>
                <button 
                  onClick={(e) => {
                    scrollToBlog(e);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-gray-400 hover:text-white transition-colors text-sm text-left py-1"
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
