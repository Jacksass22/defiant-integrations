import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';
import { Doughnut, Radar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler);

export default function StrategyArticle() {
  useScrollToTop();
  
  // Chart data for performance distribution
  const performanceChartData = {
    labels: ['Top 20% (High Performers)', 'Middle 60% (Average)', 'Bottom 20% (Underperformers)'],
    datasets: [{
      data: [80, 15, 5],
      backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
      borderWidth: 0
    }]
  };

  const performanceChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    }
  };

  // Chart data for capability gaps
  const capabilityChartData = {
    labels: ['Strategic Design', 'Mobilization', 'Execution', 'Leadership Alignment', 'Resource Allocation'],
    datasets: [{
      label: 'High Performers',
      data: [8, 9, 8, 9, 8],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderWidth: 2
    }, {
      label: 'Average Companies',
      data: [6, 3, 5, 4, 3],
      borderColor: '#ef4444',
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
      borderWidth: 2
    }]
  };

  const capabilityChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 10,
        ticks: {
          stepSize: 1,
          font: {
            size: 14
          }
        },
        pointLabels: {
          font: {
            size: 16
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            size: 14
          }
        }
      }
    }
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      
      
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              From Strategy Confusion to Strategy Execution: How Top Companies Win in Uncertain Times
            </h1>
            <p className="text-xl text-gray-600">
              Most business leaders believe strategy is important. But here's the uncomfortable truth...
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              In today's volatile business environment—where AI capabilities evolve weekly, supply chains face constant disruption, and customer expectations shift rapidly—having a solid strategy isn't just important. It's the difference between thriving and merely surviving.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-lg text-blue-900 font-medium italic">
                The companies that consistently outperform their competitors haven't just gotten lucky. They've developed specific capabilities that any business can learn and implement.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              What Strategy Actually Means
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Let me be clear about what strategy isn't: it's not a lengthy document that sits in a drawer. It's not a wish list of goals. And it's definitely not something you create once a year and forget about.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              <strong>Real strategy is the discipline of making a few critical, hard-to-reverse choices under uncertainty—with the clear intention of creating sustainable competitive advantage.</strong>
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Effective strategy requires saying no to good opportunities so you can say yes to great ones. It means aligning every resource, every team, and every decision around those few strategic bets that will define your future.
            </p>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              The Performance Reality Check
            </h2>

            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
              <div className="text-center font-semibold text-gray-900 mb-4 text-lg">
                Business Performance Distribution
              </div>
              <div className="h-64">
                <Doughnut data={performanceChartData} options={performanceChartOptions} />
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-600">
                <strong>Industry Research Note:</strong> Multiple studies including recent McKinsey research show a consistent pattern where a small percentage of companies capture the majority of industry profits, while the middle majority struggle to create meaningful value.
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Research consistently shows a stark reality across industries: a small percentage of companies capture the vast majority of profits, while most companies in the middle generate modest returns at best. The gap between top performers and everyone else has been widening over the past two decades.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                <p className="text-gray-600">Of industry profits typically captured by the top 20% of companies</p>
              </div>
              <div className="bg-gray-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">1 in 10</div>
                <p className="text-gray-600">Companies successfully move from middle to top performance</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Why do so few companies make this leap? They fail to connect strategic thinking to strategic execution. They have plans, they have ambitions, but they lack the organizational muscle to translate vision into reality.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-600">
                <strong>Industry Research Note:</strong> Multiple studies including recent McKinsey research show a consistent pattern where a small percentage of companies capture the majority of industry profits, while the middle majority struggle to create meaningful value.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              The Three Foundations of Strategic Success
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Through analysis of high-performing companies, three core capabilities emerge that separate strategy champions from the rest:
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">1</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Strategic Design</h3>
                <p className="text-gray-700 mb-4">Making bold, coherent choices about how you'll win in your market.</p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Solving the right problems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Aligning on trends that matter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Having courage to act boldly</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">2</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Mobilization</h3>
                <p className="text-gray-700 mb-4">Turning strategy into action through people, systems, and resources.</p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Assigning clear owners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Aligning incentives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Embedding in budgets</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">3</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Execution</h3>
                <p className="text-gray-700 mb-4">Where strategy meets reality through results, iteration, and learning.</p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Tracking right metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Course-correcting quickly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Adapting to reality</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              Where Winners Break Away: The Mobilization Advantage
            </h2>

            <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
              <div className="text-center font-semibold text-gray-900 mb-6 text-xl">
                Strategic Capability Gaps: High Performers vs. Average
              </div>
              <div className="h-96 md:h-[450px] px-4">
                <Radar data={capabilityChartData} options={capabilityChartOptions} />
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Designing a good strategy is challenging, but it's not where most companies fail. The critical differentiator is mobilization—the ability to turn strategic ideas into organizational momentum.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <p className="text-lg text-yellow-900 font-medium">
                <strong>Key Insight:</strong> Top companies are dramatically better at assigning the right people to lead strategic initiatives (regardless of rank), aligning incentives to strategy, and embedding strategy into budgets and operating models.
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Consider how leading companies approach this: At Nvidia, every major decision is assigned a "pilot in command"—the person best suited to deliver, regardless of title. It's not about hierarchy. It's about ownership and capability.
            </p>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              What Strategy Champions Do Differently
            </h2>

            <div className="space-y-8 mb-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  They build on facts, not politics
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  The best leaders start strategy conversations with clear insight about what's actually changing in their market, which trends they're underestimating, and where they have real competitive advantage.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  This isn't just about data—it's about alignment. Everyone from the board to front-line teams needs to see the same reality.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  They commit to bold moves
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Top performers don't hedge. They bet on transformative shifts:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="font-semibold text-blue-600 mb-2">Walmart</div>
                    <div className="text-sm text-gray-600">Supply chain automation investment</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="font-semibold text-blue-600 mb-2">Disney</div>
                    <div className="text-sm text-gray-600">Marvel, Star Wars, Pixar acquisitions</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="font-semibold text-blue-600 mb-2">Microsoft</div>
                    <div className="text-sm text-gray-600">Cloud pivot despite Windows revenue</div>
                  </div>
                </div>
                <p className="text-lg text-gray-700">
                  Strategy Champions aren't always right—but they're rarely passive.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  They make strategy everyone's job
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  In great companies, strategy isn't owned by the C-suite alone. It's translated into initiatives with clear owners, funded properly, and built into performance reviews, operating models, and hiring plans.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  They test, adapt, and evolve
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Great strategy isn't static. Top companies document their assumptions clearly, track signals to test those assumptions, and adapt quickly when the market shifts.
                </p>
                <p className="text-lg text-gray-700">
                  Execution is a feedback loop—not a finish line.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              Adapting to Market Conditions
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Top companies adjust their strategy playbook based on market conditions, recognizing that different environments require different approaches.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-4">
                  In stable markets, Champions:
                </h4>
                <ul className="text-gray-700 space-y-2 list-disc list-inside">
                  <li>Seek disruption proactively</li>
                  <li>Use bold bets to shake up entrenched players</li>
                  <li>Move fast to exploit predictable dynamics</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-4">
                  In volatile markets, Champions:
                </h4>
                <ul className="text-gray-700 space-y-2 list-disc list-inside">
                  <li>Prioritize alignment and speed over perfection</li>
                  <li>Double down on risk management</li>
                  <li>Use scenario planning and assumption testing constantly</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              There's no one-size-fits-all approach. Strategy Champions match their approach to the environment they're operating in.
            </p>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              Practical Steps for Business Leaders
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              You don't need to be a Fortune 500 company to apply these principles. Here's how to get started:
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-serif text-xl font-bold text-blue-900 mb-4">Strategic Implementation Framework</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">1. Start with clarity</h4>
                  <p className="text-blue-800">What trends will matter most in the next 5 years? How do you win in that future?</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">2. Make fewer, bolder choices</h4>
                  <p className="text-blue-800">Strategy is not about doing everything. It's about placing smart, asymmetric bets.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">3. Get your team aligned</h4>
                  <p className="text-blue-800">Make sure everyone understands the strategy—and their role in it.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">4. Translate ideas into action</h4>
                  <p className="text-blue-800">Set targets. Assign owners. Fund the real priorities.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">5. Build feedback loops</h4>
                  <p className="text-blue-800">Track progress. Learn. Adapt. Evolve.</p>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              Strategy as a Discipline, Not an Event
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              If you've ever felt like your company is "busy but not moving," you're not alone. That's the trap of disconnected strategy—having plans without the organizational muscle to execute them.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              What separates the top performers is not just vision—it's the ability to move fast, align people, and adjust in real time. Strategy isn't just knowing what to do. It's building the system and culture to actually do it.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              The companies that thrive in uncertain times aren't just lucky—they've built specific capabilities that enable them to design bold strategies and execute them with precision. These are learnable skills, not innate talents.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              If your business can master the discipline of strategic execution—no matter the size—you're already on the path to becoming a Strategy Champion.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}