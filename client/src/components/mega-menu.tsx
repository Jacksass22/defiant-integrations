import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'wouter';

interface MegaMenuItem {
  title: string;
  items: string[];
}

interface MegaMenuProps {
  title: string;
  sections: MegaMenuItem[];
}

export function MegaMenu({ title, sections }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors font-medium text-[14px]">
        <span>{title}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      <div className={`mega-menu absolute top-full left-0 w-[600px] bg-gray-800 border border-gray-700 shadow-2xl mt-2 z-50 ${isOpen ? 'active' : ''}`}>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-1">
            {sections.map((section, index) => (
              <div key={index}>
                <h3 className="font-serif text-base font-semibold text-white mb-3">{section.title}</h3>
                <ul className="space-y-1.5 text-sm">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item === "HVAC" ? (
                        <Link href="/hvac" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Plumbing" ? (
                        <Link href="/plumbing" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Electrical" ? (
                        <Link href="/electrical" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Landscaping" ? (
                        <Link href="/landscaping" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Roofing" ? (
                        <Link href="/roofing" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Painting" ? (
                        <Link href="/painting" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "General Contracting" ? (
                        <Link href="/general-contracting" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Cleaning Services" ? (
                        <Link href="/cleaning-services" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Restaurants & Cafés" ? (
                        <Link href="/restaurants-cafes" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Beauty Salons & Spas" ? (
                        <Link href="/beauty-salons-spas" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Barbershops" ? (
                        <Link href="/barbershops" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Gyms & Personal Trainers" ? (
                        <Link href="/gyms-personal-trainers" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Wellness & Life Coaches" ? (
                        <Link href="/wellness-life-coaches" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Pet Grooming & Boarding" ? (
                        <Link href="/pet-grooming-boarding" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Remodeling & Renovation" ? (
                        <Link href="/remodeling-renovation" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Brick-and-Mortar Retail" ? (
                        <Link href="/brick-mortar-retail" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "E-commerce Brands" ? (
                        <Link href="/ecommerce-brands" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Cannabis Retail & Growers" ? (
                        <Link href="/cannabis-retail" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Specialty Food Makers" ? (
                        <Link href="/specialty-food-makers" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Local Boutiques" ? (
                        <Link href="/local-boutiques" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Real Estate Agencies" ? (
                        <Link href="/real-estate-agencies" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Law Firms" ? (
                        <Link href="/law-firms" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Accounting & Tax" ? (
                        <Link href="/accounting-tax-firms" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Insurance Brokers" ? (
                        <Link href="/insurance-brokers" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "HR & Recruiting" ? (
                        <Link href="/hr-recruiting-firms" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Business Consultants" ? (
                        <Link href="/business-consultants" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "AI Strategy Development" ? (
                        <Link href="/ai-strategy-development" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Digital Transformation" ? (
                        <Link href="/digital-transformation" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "System Integration" ? (
                        <Link href="/system-integration" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Process Automation" ? (
                        <Link href="/process-automation" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Data Architecture" ? (
                        <Link href="/data-architecture" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Performance Optimization" ? (
                        <Link href="/performance-optimization" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Proof of Concepts" ? (
                        <Link href="/proof-of-concepts" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Pilot Programs" ? (
                        <Link href="/pilot-programs" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Technology Evaluation" ? (
                        <Link href="/technology-evaluation" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Technology Roadmapping" ? (
                        <Link href="/technology-roadmapping" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "ROI Assessment" ? (
                        <Link href="/roi-assessment" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Change Management" ? (
                        <Link href="/change-management" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Team Training" ? (
                        <Link href="/team-training" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Governance Frameworks" ? (
                        <Link href="/governance-frameworks" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Continuous Improvement" ? (
                        <Link href="/continuous-improvement" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Golf Courses" ? (
                        <Link href="/golf-courses" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "TikTok" ? (
                        <a href="https://tiktok.com/@defiantintegrations" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </a>
                      ) : item === "LinkedIn" ? (
                        <a href="https://linkedin.com/company/defiant-integrations" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </a>
                      ) : item === "Our Story" ? (
                        <Link href="/our-story" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Company Values" ? (
                        <Link href="/company-values" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : item === "Mission & Vision" ? (
                        <Link href="/mission-vision" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </Link>
                      ) : (
                        <a href="#" className="text-gray-300 hover:text-white transition-colors block py-1">
                          {item}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
