import { IndustryData } from '@/data/industries';
import * as Icons from 'lucide-react';

interface SolutionsSectionProps {
  data: IndustryData;
}

// Type guard to check if icon name exists in Icons
function isValidIcon(iconName: string): iconName is keyof typeof Icons {
  return iconName in Icons;
}

export function SolutionsSection({ data }: SolutionsSectionProps) {
  const { solutions, theme } = data;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {solutions.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {solutions.subtitle}
          </p>
        </div>

        {/* Solution Cards */}
        <div className="space-y-20">
          {solutions.items.map((solution, index) => {
            // Get the icon component
            const IconComponent = isValidIcon(solution.icon)
              ? Icons[solution.icon]
              : Icons.Zap; // fallback icon

            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-${solution.iconBgColor} text-${solution.iconColor} rounded-lg mb-6`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  {solution.subtitle && (
                    <p className="text-lg text-gray-600 mb-6">
                      <strong>The Problem:</strong> {solution.subtitle}
                    </p>
                  )}
                  {solution.description && (
                    <p className="text-lg text-gray-600 mb-6">
                      <strong>The Solution:</strong> {solution.description}
                    </p>
                  )}
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                    <ul className="space-y-2 text-gray-600">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  {solution.results && (
                    <div className={`bg-${solution.iconBgColor} border-l-4 border-${solution.iconColor} p-4`}>
                      <p className={`text-${solution.iconColor.replace('-100', '-900')} font-semibold`}>
                        {solution.results}
                      </p>
                    </div>
                  )}
                </div>
                <div className={`h-96 rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  {solution.image ? (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <p className="text-gray-600">Image: {solution.image}</p>
                    </div>
                  ) : (
                    <div className={`bg-gradient-to-br from-${theme.primaryColor} to-${theme.gradientFrom} h-96 rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-32 h-32 text-white/20" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Real Wins Section */}
          <div className={`bg-${solutions.winsSection.backgroundColor} text-${solutions.winsSection.textColor} p-12 rounded-lg text-center`}>
            <h3 className="font-serif text-3xl font-bold mb-8">{solutions.winsSection.title}</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {solutions.winsSection.stats.map((stat, index) => (
                <div key={index}>
                  <div className={`text-4xl font-bold text-${theme.accentColor} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}