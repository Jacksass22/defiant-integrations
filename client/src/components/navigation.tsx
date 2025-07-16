import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { MegaMenu } from './mega-menu';

const industriesData = [
  {
    title: "🔧 Trades & Home Services",
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
    title: "🍽️ Consumer & Lifestyle",
    items: [
      "Restaurants & Cafés",
      "Beauty Salons & Spas",
      "Barbershops",
      "Gyms & Personal Trainers",
      "Wellness & Life Coaches",
      "Pet Grooming & Boarding"
    ]
  },
  {
    title: "🛍️ Retail & Product",
    items: [
      "Brick-and-Mortar Retail",
      "E-commerce Brands",
      "Cannabis Retail & Growers",
      "Specialty Food Makers",
      "Local Boutiques"
    ]
  },
  {
    title: "💼 Professional Services",
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

const insightsData = [
  {
    title: "Research & Analysis",
    items: [
      "Research Reports",
      "Implementation Studies",
      "Market Analysis",
      "Trend Forecasting"
    ]
  },
  {
    title: "Implementation Guides",
    items: [
      "Technical Guides",
      "Best Practices",
      "Case Studies",
      "Success Stories"
    ]
  },
  {
    title: "Thought Leadership",
    items: [
      "Executive Insights",
      "Industry Perspectives",
      "Future of AI",
      "Strategic Frameworks"
    ]
  },
  {
    title: "Resources",
    items: [
      "Defiant Insights Blog",
      "Whitepapers",
      "Webinars",
      "Tools & Templates"
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
    <nav className="bg-white/95 backdrop-blur-md fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-serif font-bold text-navy">
              Defiant <span className="text-electric-blue">Integrations</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <MegaMenu title="Industries" sections={industriesData} />
            <MegaMenu title="Insights & Research" sections={insightsData} />
            <Link href="/case-studies" className="text-charcoal hover:text-electric-blue transition-colors font-medium">
              Case Studies
            </Link>
            <MegaMenu title="About Us" sections={aboutData} />
            <Link href="/careers" className="text-charcoal hover:text-electric-blue transition-colors font-medium">
              Careers
            </Link>
            <Link href="/contact" className="text-charcoal hover:text-electric-blue transition-colors font-medium">
              Contact
            </Link>
          </div>
          
          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="bg-electric-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Start Your Transformation
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal hover:text-electric-blue"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            <Link href="/industries" className="block text-charcoal hover:text-electric-blue transition-colors font-medium">
              Industries
            </Link>
            <Link href="/insights" className="block text-charcoal hover:text-electric-blue transition-colors font-medium">
              Insights & Research
            </Link>
            <Link href="/case-studies" className="block text-charcoal hover:text-electric-blue transition-colors font-medium">
              Case Studies
            </Link>
            <Link href="/about" className="block text-charcoal hover:text-electric-blue transition-colors font-medium">
              About Us
            </Link>
            <Link href="/careers" className="block text-charcoal hover:text-electric-blue transition-colors font-medium">
              Careers
            </Link>
            <Link href="/contact" className="block text-charcoal hover:text-electric-blue transition-colors font-medium">
              Contact
            </Link>
            <Link href="/contact" className="block bg-electric-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center">
              Start Your Transformation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
