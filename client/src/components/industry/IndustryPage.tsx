import { ArrowRight, Clock, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import BlurText from '@/components/BlurText';
import Lightning from '@/components/Lightning';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import { useState } from 'react';
import { IndustryData } from '@/data/industries/types';

// Import icon components dynamically
import * as Icons from 'lucide-react';

interface IndustryPageProps {
  data: IndustryData;
}

export default function IndustryPage({ data }: IndustryPageProps) {
  useScrollToTop();
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);

  // Get the icon component dynamically
  const getIconComponent = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent || Icons.Star; // Fallback to Star if icon not found
  };

  return (
    <div className="bg-white text-charcoal font-sans">
      {/* Hero Section */}
      <section className={`relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-br from-${data.theme.gradientFrom} via-${data.theme.gradientVia} to-${data.theme.gradientTo} overflow-hidden`}>

        {/* Background Effects */}
        {data.theme.backgroundEffect === 'lightning' && (
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

        {data.theme.backgroundEffect === 'tech-pattern' && (
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
        )}

        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <BlurText
              text={data.hero.title}
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
            />
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              {data.hero.subtitle}
            </p>
            <button
              onClick={() => setShowLeadCaptureModal(true)}
              className={`inline-flex items-center space-x-2 bg-white text-${data.theme.gradientFrom} px-8 py-4 font-medium hover:bg-gray-100 transition-colors`}
            >
              <span>{data.hero.ctaText}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              {data.problem.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              {data.problem.description}
            </p>

            {/* Stats Grid */}
            {data.problem.stats && data.problem.stats.length > 0 && (
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {data.problem.stats.map((stat, index) => (
                  <div key={index} className="bg-white p-8 shadow-lg">
                    <div className={`text-5xl font-bold text-${data.theme.primaryColor} mb-4`}>
                      {stat.value}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600">{stat.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Legacy Stats Grid Support */}
            {data.problem.statistics && data.problem.statistics.length > 0 && (
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {data.problem.statistics.map((stat, index) => (
                  <div key={index} className="bg-white p-8 shadow-lg">
                    <div className={`text-5xl font-bold text-${data.theme.primaryColor} mb-4`}>
                      {stat.number}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-gray-600">{stat.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Pain Points Section */}
            {data.problem.painPoints && data.problem.painPoints.length > 0 && (
              <div className={`bg-${data.theme.primaryColor}-900 text-white p-8 rounded-lg`}>
                <h3 className="font-serif text-2xl font-bold mb-4">What This Means for Your Business</h3>
                <ul className="space-y-3">
                  {data.problem.painPoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className={`w-6 h-6 text-${data.theme.primaryColor}-300 flex-shrink-0 mt-0.5`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Legacy Summary Support */}
            {data.problem.summary && (
              <div className={`bg-${data.solutions?.winsSection?.backgroundColor || data.theme.primaryColor + '-900'} text-${data.solutions?.winsSection?.textColor || 'white'} p-8 rounded-lg`}>
                <h3 className="font-serif text-2xl font-bold mb-4">{data.problem.summary.title}</h3>
                <ul className="space-y-3">
                  {data.problem.summary.points.map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className={`w-6 h-6 text-${data.theme.accentColor} flex-shrink-0 mt-0.5`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {data.solutions.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {data.solutions.subtitle}
            </p>
          </div>

          {/* Solution Cards */}
          <div className="space-y-20">
            {data.solutions.items.map((solution, index) => {
              const IconComponent = getIconComponent(solution.icon);
              const isEven = index % 2 === 0;

              // Handle different data structures
              const iconBgColor = solution.iconBgColor || `${data.theme.primaryColor}-100`;
              const iconColor = solution.iconColor || data.theme.primaryColor;
              const problemText = solution.problem || solution.subtitle;
              const solutionText = solution.solution || solution.description;

              return (
                <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={isEven ? '' : 'order-2 lg:order-1'}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-${iconBgColor} text-${iconColor} rounded-lg mb-6`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    {problemText && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-red-600 mb-2">The Problem:</h4>
                        <p className="text-lg text-gray-600">{problemText}</p>
                      </div>
                    )}
                    {solutionText && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-green-600 mb-2">Our Solution:</h4>
                        <p className="text-lg text-gray-600">{solutionText}</p>
                      </div>
                    )}
                    {solution.features && solution.features.length > 0 && (
                      <div className="bg-gray-50 p-6 rounded-lg mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">What This Looks Like:</h4>
                        <ul className="space-y-2 text-gray-600">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {solution.results && (
                      <div className={`bg-${iconBgColor.replace('-100', '-50')} border-l-4 border-${iconColor} p-4`}>
                        <p className={`text-${iconColor.replace('-600', '-900')} font-semibold`}>
                          {solution.results}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className={isEven ? '' : 'order-1 lg:order-2'}>
                    <div className={`bg-gradient-to-br from-${iconColor} to-${iconColor.replace('600', '800')} h-96 rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-32 h-32 text-white/20" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Wins Section - Handle both data structures */}
          {data.solutions.winsSection && (
            <div className={`mt-20 bg-${data.solutions.winsSection.backgroundColor} text-${data.solutions.winsSection.textColor} py-16 rounded-lg`}>
              <div className="text-center mb-12">
                <h3 className="font-serif text-3xl font-bold mb-4">
                  {data.solutions.winsSection.title}
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {data.solutions.winsSection.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Alternative stats display for different data structure */}
          {data.problem.stats && data.problem.stats.length > 0 && !data.solutions.winsSection && (
            <div className={`mt-20 bg-${data.theme.gradientFrom} text-white py-16 rounded-lg`}>
              <div className="text-center mb-12">
                <h3 className="font-serif text-3xl font-bold mb-4">
                  Real Results for Businesses Like Yours
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {data.problem.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                    {stat.description && (
                      <div className="text-xs opacity-75 mt-1">{stat.description}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Implementation Timeline - Handle both data structures */}
      {(data.timeline || data.implementation) && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {data.timeline?.title || data.implementation?.title || "Implementation Timeline"}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {data.implementation?.subtitle || "A proven 90-day implementation roadmap designed for minimal disruption and maximum impact"}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {(data.timeline?.phases || data.implementation?.phases)?.map((phase, index) => (
                <div key={index} className="bg-white p-8 shadow-lg">
                  <div className={`text-${phase.color || data.theme.primaryColor} font-bold text-lg mb-2`}>
                    {phase.month || phase.phase}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                  <ul className="space-y-3 text-gray-600">
                    {(phase.tasks || phase.items)?.map((task, taskIndex) => (
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
      )}

      {/* Benefits Section - Handle optional data */}
      {data.benefits && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                {data.benefits.title}
              </h2>
              {data.benefits.subtitle && (
                <p className="text-xl text-gray-600 mb-8">{data.benefits.subtitle}</p>
              )}
              {data.benefits.description && (
                <p className="text-lg text-gray-600 mb-8">{data.benefits.description}</p>
              )}
              {data.benefits.points && data.benefits.points.length > 0 && (
                <div className="text-left max-w-2xl mx-auto mb-8">
                  <ul className="space-y-4">
                    {data.benefits.points.map((point, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className={`w-6 h-6 text-${data.theme.primaryColor} flex-shrink-0 mt-0.5`} />
                        <span className="text-lg text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {data.benefits.highlightText && (
                <p className="text-xl font-semibold text-gray-900 italic">
                  {data.benefits.highlightText}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Handle both data structures */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {data.cta.title}
          </h2>

          {/* Handle subtitle for newer data structure */}
          {data.cta.subtitle && (
            <p className="text-xl mb-8 leading-relaxed text-gray-300">
              {data.cta.subtitle}
            </p>
          )}

          {/* Handle paragraphs for legacy data structure */}
          {data.cta.paragraphs && data.cta.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-xl mb-8 leading-relaxed text-gray-300">
              {paragraph}
            </p>
          ))}

          {/* Handle features list for newer data structure */}
          {data.cta.features && data.cta.features.length > 0 && (
            <div className="text-left max-w-2xl mx-auto mb-8">
              <ul className="space-y-3">
                {data.cta.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Handle question for legacy data structure */}
          {data.cta.question && (
            <p className="text-2xl font-semibold mb-12">
              {data.cta.question}
            </p>
          )}

          <button
            onClick={() => setShowLeadCaptureModal(true)}
            className={`inline-flex items-center space-x-2 bg-${data.theme.primaryColor} text-white px-8 py-4 font-medium hover:bg-${data.theme.primaryColor.replace('600', '700')} transition-colors text-lg`}
          >
            <span>{data.cta.buttonText || data.cta.primaryButton || 'Start Your Free Assessment'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Lead Capture Modal - Handle optional modal data */}
      <LeadCaptureModal
        open={showLeadCaptureModal}
        onOpenChange={setShowLeadCaptureModal}
        title={data.modal?.title || `${data.hero.title} - Get Started`}
        subtitle={data.modal?.subtitle || 'Get your free assessment and custom automation strategy'}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            <div className="col-span-2 sm:col-span-3 lg:col-span-2">
              <div className="text-xl sm:text-2xl font-serif font-bold mb-4">
                Defiant <span className="text-gray-300">Integrations</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">
                Architecting intelligent transformations that scale.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/hvac" className="hover:text-blue-400 transition-colors">HVAC</Link></li>
                <li><Link href="/plumbing" className="hover:text-blue-400 transition-colors">Plumbing</Link></li>
                <li><Link href="/electrical" className="hover:text-blue-400 transition-colors">Electrical</Link></li>
                <li><Link href="/landscaping" className="hover:text-blue-400 transition-colors">Landscaping</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ai-strategy-development" className="hover:text-blue-400 transition-colors">AI Strategy</Link></li>
                <li><Link href="/system-integration" className="hover:text-blue-400 transition-colors">Implementation</Link></li>
                <li><Link href="/change-management" className="hover:text-blue-400 transition-colors">Scaling</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-blue-400 transition-colors">Careers</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Contact</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Blog</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button className="hover:text-blue-400 transition-colors">Subscribe</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Defiant Integrations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}