import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
      <button className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors font-medium">
        <span>{title}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      <div className={`mega-menu absolute top-full left-0 w-screen max-w-6xl bg-gray-800 border border-gray-700 shadow-2xl mt-2 z-50 ${isOpen ? 'active' : ''}`}>
        <div className="p-8">
          <div className={`grid grid-cols-${Math.min(sections.length, 4)} gap-8`}>
            {sections.map((section, index) => (
              <div key={index}>
                <h3 className="font-serif text-lg font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2 text-sm">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                        {item}
                      </a>
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
