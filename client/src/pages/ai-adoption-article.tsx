import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { Navigation } from '@/components/navigation';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler, BarElement, CategoryScale, LinearScale);

export default function AIAdoptionArticle() {
  // Chart data for AI Implementation Challenges
  const challengesChartData = {
    labels: ['Culture & Change Resistance', 'Skills Gap', 'Data Quality', 'Leadership Buy-in', 'Technology Issues'],
    datasets: [{
      data: [35, 25, 20, 10, 10],
      backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6', '#10b981', '#8b5cf6'],
      borderWidth: 0
    }]
  };

  const challengesChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    }
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      <Navigation />
      
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Accelerating AI Adoption
            </h1>
            <p className="text-xl lg:text-2xl font-light">
              Why AI Success Is 70% Culture Change, 30% Technology
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Artificial intelligence promises transformative business value—from streamlined operations to new revenue streams. Yet many mid-sized companies struggle to move beyond proof-of-concept projects. The issue isn't the technology itself; it's the organizational change required to harness it effectively.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-lg text-blue-900 font-medium italic">
                Successful AI adoption hinges on leadership, culture, and workforce readiness more than on procuring the latest algorithms.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">37%</div>
                <p className="text-gray-600">Of businesses using AI report significant productivity improvements</p>
              </div>
              <div className="bg-gray-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <div className="text-3xl font-bold text-yellow-600 mb-2">70%</div>
                <p className="text-gray-600">Of employees worry about what AI means for their jobs and careers</p>
              </div>
              <div className="bg-gray-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">88%</div>
                <p className="text-gray-600">Of AI pilots fail to reach production deployment</p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              The Culture Challenge: Why Most AI Projects Fail
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Implementing AI isn't a plug-and-play IT upgrade—it's a cultural transformation. Research consistently shows that organizations with open, change-embracing cultures are far more likely to achieve high AI maturity and meaningful impact.
            </p>

            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
              <div className="text-center font-semibold text-gray-900 mb-4 text-lg">
                AI Implementation Challenges
              </div>
              <div className="text-center text-sm text-gray-600 mb-4">
                Where companies struggle most with AI adoption
              </div>
              <div className="h-64">
                <Doughnut data={challengesChartData} options={challengesChartOptions} />
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-600">
                <strong>Research Insight:</strong> According to Gartner research, about 70% of AI implementation challenges stem from people and process issues—not technology limitations. Only 10% are due to algorithm constraints.
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Despite heavy investments in AI, many firms see limited tangible gains in productivity. The technology may work perfectly, but if employees don't trust it or adapt their processes to leverage it effectively, ROI remains disappointingly low.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-red-700 font-semibold text-xl mb-4">Common Problems</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">×</span>
                    <span>Teams bypass AI tools due to mistrust</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">×</span>
                    <span>Data silos prevent effective AI training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">×</span>
                    <span>Lack of clear AI governance framework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">×</span>
                    <span>Skills gap leads to poor implementation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-green-700 font-semibold text-xl mb-4">Proven Solutions</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Build trust through transparency and education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Create cross-functional AI teams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Establish clear ethical guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Invest in continuous learning programs</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              Three Pillars of AI-Ready Culture
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">1</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Executive Sponsorship</h3>
                <p className="text-gray-700 mb-4">Senior leaders must model AI usage and champion its potential while addressing workforce concerns transparently.</p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Visible leadership commitment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Clear AI vision and strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Resource allocation for change</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">2</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Workforce Empowerment</h3>
                <p className="text-gray-700 mb-4">Give employees the skills, tools, and confidence to work alongside AI rather than fear replacement by it.</p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Comprehensive training programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Career path clarity with AI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Recognition for AI adoption</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">3</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Trust Architecture</h3>
                <p className="text-gray-700 mb-4">Build systems and processes that ensure AI is used ethically, transparently, and in ways that augment human capability.</p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Explainable AI decisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Human oversight protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Regular ethics reviews</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <p className="text-lg text-yellow-900 font-medium">
                <strong>Key Insight:</strong> Companies that treat AI adoption as a change management initiative—not just a technology project—are 3x more likely to see positive ROI within 18 months.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              Implementation Roadmap: From Pilot to Scale
            </h2>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Phase 1: Foundation (Months 1-3)</h3>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>Establish AI governance committee with diverse stakeholders</li>
                <li>Conduct workforce readiness assessment</li>
                <li>Launch "AI for Everyone" education series</li>
                <li>Identify and prioritize high-impact use cases</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Phase 2: Pilot Success (Months 4-9)</h3>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>Run controlled pilots with volunteer teams</li>
                <li>Document and share early wins transparently</li>
                <li>Iterate based on user feedback</li>
                <li>Build internal AI champions network</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Phase 3: Scale with Confidence (Months 10-18)</h3>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>Expand successful pilots across departments</li>
                <li>Embed AI into standard operating procedures</li>
                <li>Measure and communicate business impact</li>
                <li>Continuously upskill workforce</li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              Real Success Stories
            </h2>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-green-700 font-semibold text-xl mb-4">Manufacturing Leader Transforms Quality Control</h3>
              <p className="text-gray-700 mb-4">
                A mid-sized manufacturer implemented AI-powered quality inspection after extensive workforce training. Key to success: operators were involved in system design from day one.
              </p>
              <p className="text-gray-700 font-semibold">
                Result: 42% reduction in defects, 30% faster inspection times, and 95% employee satisfaction with the new system.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-green-700 font-semibold text-xl mb-4">Financial Services Firm Enhances Customer Experience</h3>
              <p className="text-gray-700 mb-4">
                By focusing on augmenting human advisors rather than replacing them, this firm used AI to provide real-time insights during client meetings.
              </p>
              <p className="text-gray-700 font-semibold">
                Result: 28% increase in client satisfaction, 35% more personalized recommendations, and advisors reporting higher job satisfaction.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              Your AI Transformation Starts with People
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              The path to AI success isn't through technology alone—it's through your people. Organizations that invest in culture change, workforce development, and trust-building create the conditions for AI to deliver transformative value.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-serif text-xl font-bold text-blue-900 mb-4">Ready to Build an AI-Ready Culture?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Start with leadership alignment</h4>
                  <p className="text-blue-800">Ensure your executive team shares a unified vision for AI's role in your organization.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Invest in your people first</h4>
                  <p className="text-blue-800">Build skills and confidence before deploying technology at scale.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Measure what matters</h4>
                  <p className="text-blue-800">Track adoption rates, employee sentiment, and business outcomes—not just technical metrics.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Iterate and evolve</h4>
                  <p className="text-blue-800">Treat AI adoption as an ongoing journey, not a destination.</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Remember: Technology may be advancing at breakneck speed, but sustainable AI adoption happens at the speed of trust. Build that trust, and the transformation will follow.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}