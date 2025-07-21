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
      <button className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors font-medium">
        <span>{title}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      <div className={`mega-menu absolute top-full left-0 w-[800px] bg-gray-800 border border-gray-700 shadow-2xl mt-2 z-50 ${isOpen ? 'active' : ''}`}>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
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
