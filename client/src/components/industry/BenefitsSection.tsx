import { CheckCircle, TrendingUp } from 'lucide-react';
import { IndustryData } from '@/data/industries';

interface BenefitsSectionProps {
  data: IndustryData;
}

export function BenefitsSection({ data }: BenefitsSectionProps) {
  const { benefits, theme } = data;

  return (
    <section className={`py-20 bg-${theme.gradientFrom} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {benefits.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="font-serif text-3xl font-bold mb-6">
              {benefits.subtitle}
            </h3>
            {benefits.description && (
              <p className="text-xl text-gray-200 mb-8">{benefits.description}</p>
            )}
            <ul className="space-y-4 text-lg">
              {benefits.points.map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className={`w-6 h-6 text-${theme.accentColor} flex-shrink-0 mt-1`} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`bg-gradient-to-br from-${theme.primaryColor} to-${theme.gradientVia} h-96 rounded-lg flex items-center justify-center`}>
            <TrendingUp className="w-32 h-32 text-white/20" />
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold mb-4">{benefits.highlightText}</p>
        </div>
      </div>
    </section>
  );
}