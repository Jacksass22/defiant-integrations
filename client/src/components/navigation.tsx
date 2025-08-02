import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { MegaMenu } from './mega-menu';

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
      "Leadership Team",
      "Company Values",
      "Mission & Vision"
    ]
  },
  {
    title: "Expertise",
    items: [
      "Our Approach",
      "Methodologies",
      "Certifications",
      "Partnerships"
    ]
  },
  {
    title: "Locations",
    items: [
      "Global Offices",
      "Regional Teams",
      "Local Presence",
      "Contact Info"
    ]
  }
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <Link href="/careers" className="text-white hover:text-gray-300 transition-colors font-medium text-sm">
              Careers
            </Link>
            <MegaMenu title="About Us" sections={aboutData} />
            <Link href="/blog" className="text-white hover:text-gray-300 transition-colors font-medium text-sm">
              Defiant Integration Blog
            </Link>
          </div>
          
          {/* Right Side - Subscribe, Search */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/subscribe" className="text-white hover:text-gray-300 transition-colors font-medium text-sm">
              Subscribe
            </Link>
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
            <Link href="/industries" className="block text-white hover:text-gray-300 transition-colors font-medium">
              Industries
            </Link>
            <Link href="/capabilities" className="block text-white hover:text-gray-300 transition-colors font-medium">
              Capabilities
            </Link>
            <Link href="/careers" className="block text-white hover:text-gray-300 transition-colors font-medium">
              Careers
            </Link>
            <Link href="/about" className="block text-white hover:text-gray-300 transition-colors font-medium">
              About Us
            </Link>
            <Link href="/blog" className="block text-white hover:text-gray-300 transition-colors font-medium">
              Defiant Integration Blog
            </Link>
            <div className="pt-6 border-t border-gray-700">
              <Link href="/subscribe" className="block text-white hover:text-gray-300 transition-colors font-medium">
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
