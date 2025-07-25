import { useState } from 'react';

export default function SimpleLanyardCSS() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center w-full h-[600px] bg-transparent perspective-1000">
      <div 
        className={`relative transform transition-all duration-300 ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}
        style={{
          transform: isHovered ? 'rotateY(5deg) scale(1.05)' : 'rotateY(0deg) scale(1)',
          transformStyle: 'preserve-3d'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Lanyard Card */}
        <div className="relative w-[280px] h-[400px] bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
          {/* Card Hole */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-800 rounded-full shadow-inner"></div>
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full"></div>
          
          {/* Main Content */}
          <div className="px-8 pt-20 pb-8 h-full flex flex-col justify-between">
            {/* Main Text */}
            <div>
              <h2 className="text-white text-2xl font-bold text-center leading-tight mb-8">
                Never have to answer<br />
                another client<br />
                phone call again
              </h2>
              
              {/* Description */}
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                AI handles appointments,<br />
                questions, and follow-ups.<br />
                <br />
                Personal calls and<br />
                important matters are<br />
                seamlessly transferred<br />
                to you.
              </p>
            </div>
            
            {/* Branding */}
            <p className="text-gray-600 text-xs text-center">
              Defiant Integrations
            </p>
          </div>
          
          {/* Card Shine Effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}