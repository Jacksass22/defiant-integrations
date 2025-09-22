import { CheckCircle } from 'lucide-react';
import { IndustryData } from '@/data/industries';

interface TimelineSectionProps {
  data: IndustryData;
}

export function TimelineSection({ data }: TimelineSectionProps) {
  const { timeline } = data;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {timeline.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {timeline.phases.map((phase, index) => (
            <div key={index} className="bg-white p-8 shadow-lg">
              <div className={`text-${phase.color} font-bold text-lg mb-2`}>
                {phase.month}
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                {phase.title}
              </h3>
              <ul className="space-y-3 text-gray-600">
                {phase.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}