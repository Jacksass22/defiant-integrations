import { ArrowRight } from 'lucide-react';
import { IndustryData } from '@/data/industries';

interface CTASectionProps {
  data: IndustryData;
  onCTAClick: () => void;
}

export function CTASection({ data, onCTAClick }: CTASectionProps) {
  const { cta, theme } = data;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          {cta.title}
        </h2>
        {cta.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-xl mb-8 leading-relaxed text-gray-300">
            {paragraph}
          </p>
        ))}
        <p className="text-2xl font-semibold mb-12">
          {cta.question}
        </p>
        <button
          onClick={onCTAClick}
          className={`inline-flex items-center space-x-2 bg-${theme.primaryColor} text-white px-8 py-4 font-medium hover:bg-${theme.gradientVia} transition-colors text-lg`}
        >
          <span>{cta.buttonText}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}