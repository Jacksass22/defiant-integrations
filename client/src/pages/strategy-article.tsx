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
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full border border-blue-400/30">
                Strategic Insights
              </span>
            </div>

            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Why Most Strategies Fail
              <span className="text-blue-300">and How the Best Beat the Odds</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl">
              Every year, thousands of companies create strategic plans. Most will fail to execute them.
              The few that succeed share specific habits you can learn.
            </p>

            <div className="mt-8 flex items-center space-x-6 text-gray-400">
              <span className="text-sm">8 min read</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Strategy & Execution</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">

            {/* Opening section with better visual design */}
            <div className="text-center mb-16">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8 rounded-full"></div>
            </div>

            <div className="text-xl text-gray-700 leading-relaxed mb-12 font-light">
              <p className="mb-6">
                Walk into any boardroom and you'll hear the same story. Leadership spent months crafting their strategic plan.
                They have slides, timelines, and ambitious goals. Everyone nods in agreement.
              </p>
              <p className="mb-6">
                Fast forward eighteen months, and barely half of those initiatives exist. The ones that do are behind schedule,
                over budget, or delivering disappointing results.
              </p>
            </div>

            <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mb-12 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
              <div className="relative z-10">
                <p className="text-xl font-medium leading-relaxed">
                  Companies that consistently beat their competition didn't get lucky.
                  They mastered something most organizations never learn: how to turn strategy into reality.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-8 mt-16">
              What Strategy Really Is
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <h3 className="font-semibold text-red-800 mb-3">Strategy is NOT:</h3>
                <ul className="text-red-700 space-y-2 list-none">
                  <li>A 50-page document nobody reads</li>
                  <li>Annual planning sessions</li>
                  <li>A wish list of everything you want</li>
                  <li>Copying what successful companies do</li>
                </ul>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h3 className="font-semibold text-green-800 mb-3">Strategy IS:</h3>
                <ul className="text-green-700 space-y-2 list-none">
                  <li>Making tough choices about where to compete</li>
                  <li>Saying no to good opportunities</li>
                  <li>Betting on what will matter in 3-5 years</li>
                  <li>Building capabilities others can't copy</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 border-l-4 border-gray-600 p-8 mb-12 rounded-r-lg">
              <p className="text-xl text-gray-800 font-medium leading-relaxed">
                Strategy is choosing a few critical bets under uncertainty, then aligning your entire organization
                to win on those bets. Everything else is just planning.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              The Performance Reality Check
            </h2>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 mb-12 border border-gray-200">
              <div className="text-center font-serif text-2xl font-bold text-gray-900 mb-6">
                Business Performance Distribution
              </div>
              <div className="h-64 mb-6">
                <Doughnut data={performanceChartData} options={performanceChartOptions} />
              </div>
              <div className="text-center text-sm text-gray-600 bg-white p-4 rounded-lg">
                <strong>Source:</strong> Analysis of S&P 500 performance data shows consistent patterns where
                top-performing companies capture disproportionate market value and profits.
              </div>
            </div>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Every industry tells the same story. A handful of companies dominate returns while everyone else
              fights for scraps. The top 20% typically capture 80% of industry profits.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white shadow-md border-l-4 border-blue-500 p-8 rounded-r-xl">
                <div className="text-4xl font-bold text-blue-600 mb-3">80%</div>
                <p className="text-gray-700 font-medium">Of industry profits captured by top 20% of companies</p>
              </div>
              <div className="bg-white shadow-md border-l-4 border-red-500 p-8 rounded-r-xl">
                <div className="text-4xl font-bold text-red-600 mb-3">1 in 10</div>
                <p className="text-gray-700 font-medium">Companies successfully move from middle to top tier</p>
              </div>
            </div>

            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              What separates the winners? They don't just create strategy—they execute it.
              Most companies have plans and ambitions, but lack the organizational discipline
              to turn ideas into results.
            </p>

            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-8 mt-16">
              Where Winners Separate Themselves
            </h2>

            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Study successful companies and you'll find they excel at three things most organizations struggle with:
            </p>

            <div className="space-y-8 mb-16">
              <div className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-blue-500">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Smart Choices</h3>
                    <p className="text-lg text-gray-700 mb-6">Deciding where to compete and how to win, then sticking to it.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-900 font-medium">Focus on what matters</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-900 font-medium">Bet on future trends</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-900 font-medium">Make bold moves</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-green-500">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Getting Organized</h3>
                    <p className="text-lg text-gray-700 mb-6">Turning ideas into action by assigning owners and allocating resources.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-900 font-medium">Clear ownership</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-900 font-medium">Right incentives</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-purple-500">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Staying Flexible</h3>
                    <p className="text-lg text-gray-700 mb-6">Tracking results, learning fast, and adjusting when things change.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-purple-900 font-medium">Watch key metrics</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-purple-900 font-medium">Learn from failures</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-purple-900 font-medium">Adapt quickly</p>
                      </div>
                    </div>
                  </div>
                </div>
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