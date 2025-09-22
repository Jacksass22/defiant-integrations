import { ArrowRight } from 'lucide-react';
import BlurText from '@/components/BlurText';
import Lightning from '@/components/Lightning';
import { IndustryData } from '@/data/industries';

interface HeroSectionProps {
  data: IndustryData;
  onCTAClick: () => void;
}

export function HeroSection({ data, onCTAClick }: HeroSectionProps) {
  const { hero, theme } = data;

  return (
    <section className={`relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-br from-${theme.gradientFrom} via-${theme.gradientVia} to-${theme.gradientTo} overflow-hidden`}>
      {/* Background Effects */}
      {theme.backgroundEffect === 'lightning' && (
        <div className="absolute inset-0 opacity-30">
          <Lightning
            hue={180}
            xOffset={0}
            speed={0.8}
            intensity={0.6}
            size={2}
          />
        </div>
      )}

      {theme.backgroundEffect === 'tech-pattern' && (
        <>
          {/* Tech Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="tech-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M0,0 L10,0 M0,0 L0,10" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" fill="none" />
                  <circle cx="5" cy="5" r="0.8" fill="rgba(255,255,255,0.2)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#tech-grid)" />
            </svg>
          </div>

          {/* Diagonal Lines Texture */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="diagonal-lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
                  <line x1="10" y1="0" x2="10" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
            </svg>
          </div>

          {/* Floating Tech Elements */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-40 left-60 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-32 right-40 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-40 left-40 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-60 right-60 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Connecting lines between elements */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
              <line x1="80" y1="80" x2="240" y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="1" className="animate-pulse" />
              <line x1="240" y1="160" x2="320" y2="128" stroke="rgba(255,255,255,0.15)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
              <line x1="160" y1="240" x2="320" y2="128" stroke="rgba(255,255,255,0.1)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
            </svg>
          </div>
        </>
      )}

      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <BlurText
            text={hero.title}
            delay={150}
            animateBy="words"
            direction="top"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
          />
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
            {hero.subtitle}
          </p>
          <button
            onClick={onCTAClick}
            className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
          >
            <span>{hero.ctaText}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}