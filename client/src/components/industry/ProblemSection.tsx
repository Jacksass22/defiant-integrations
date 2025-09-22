import { CheckCircle } from 'lucide-react';
import { IndustryData } from '@/data/industries';

interface ProblemSectionProps {
  data: IndustryData;
}

export function ProblemSection({ data }: ProblemSectionProps) {
  const { problem, theme } = data;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            {problem.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
            {problem.description}
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {problem.statistics.map((stat, index) => (
              <div key={index} className="bg-white p-8 shadow-lg">
                <div className={`text-5xl font-bold text-${theme.primaryColor} mb-4`}>
                  {stat.number}
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  {stat.title}
                </h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className={`bg-${theme.gradientFrom} text-white p-8 rounded-lg`}>
            <h3 className="font-serif text-2xl font-bold mb-4">
              {problem.summary.title}
            </h3>
            <ul className="space-y-3">
              {problem.summary.points.map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className={`w-6 h-6 text-${theme.accentColor} flex-shrink-0 mt-0.5`} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}