import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { Navigation } from '@/components/navigation';

export default function StrategyArticle() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Navigation />
      
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
            <p className="text-xl text-gray-700 mb-8">
              Most business leaders believe strategy is important. But here's the uncomfortable truth:
            </p>
            
            <ul className="text-lg text-gray-700 mb-8">
              <li>Fewer than 1 in 5 companies believe they have a high-quality strategy.</li>
              <li>Even fewer actually execute on it.</li>
            </ul>

            <p className="text-lg text-gray-700 mb-8">
              In a world shaped by volatility—where AI is evolving weekly, supply chains are in flux, and customer behavior is unpredictable—strategy is no longer a luxury. It's a survival skill.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              <strong>But here's the good news:</strong><br />
              The top-performing companies aren't just smarter. They've built specific habits and capabilities that any business—yes, even yours—can replicate.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Let's unpack how the world's best businesses design, mobilize, and execute strategy in a way that drives long-term success.
            </p>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              What Strategy Really Means (Hint: It's Not a Plan)
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Strategy isn't a spreadsheet. It's not a mission statement. It's not a 3-year plan you make once a year and forget.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Strategy is the art of making a few critical, hard-to-reverse choices under uncertainty—with the goal of creating lasting value.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              True strategy demands trade-offs. It means saying no to 10 good ideas so you can go all-in on 1 great one. It also means aligning every team, system, and resource around those few bold moves.
            </p>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              The Economic Power Curve: Why It's Harder Than Ever to "Just Get By"
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              McKinsey analyzed the economic performance of thousands of large companies worldwide. They discovered something fascinating:
            </p>

            <p className="text-lg text-gray-700 mb-8">
              <strong>The top 20% of companies earn nearly 90% of all profits.</strong><br />
              <strong>The bottom 20% lose nearly as much.</strong><br />
              <strong>The middle 60%? They're treading water, delivering little to no value.</strong>
            </p>

            <p className="text-lg text-gray-700 mb-8">
              And here's the real kicker: <strong>Only 1 in 10 companies make it from the middle to the top over a decade.</strong>
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Why? Because they fail to connect strategy to execution. They have plans. They might even have ambition. But they don't have the muscle to move.
            </p>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              The Three Pillars of Strategy Excellence
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              After studying 400+ companies, McKinsey identified 12 critical capabilities that determine whether a strategy succeeds or stalls. These fall into three phases:
            </p>

            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 mt-8">
              1. Design
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Where you make bold, coherent choices about how you'll win.
            </p>
            <ul className="text-lg text-gray-700 mb-8">
              <li>✅ Are you solving the right problems?</li>
              <li>✅ Are you aligned on trends that matter?</li>
              <li>✅ Are you brave enough to act?</li>
            </ul>

            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 mt-8">
              2. Mobilization
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Where you turn strategy into action—through people, systems, and resources.
            </p>
            <ul className="text-lg text-gray-700 mb-8">
              <li>✅ Have you assigned true owners?</li>
              <li>✅ Are incentives aligned?</li>
              <li>✅ Have you made the strategy "real" in budgets and daily decisions?</li>
            </ul>

            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 mt-8">
              3. Execution
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Where strategy meets reality—results, iteration, and learning.
            </p>
            <ul className="text-lg text-gray-700 mb-8">
              <li>✅ Are you tracking the right metrics?</li>
              <li>✅ Are you course-correcting?</li>
              <li>✅ Can your strategy survive your own systems?</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              Where the Winners Break Away: Mobilization
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Designing a good strategy is hard. But it's not the hardest part.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              <strong>The biggest gap between top performers and everyone else?</strong><br />
              Mobilization—turning ideas into organizational momentum.
            </p>

            <p className="text-lg text-gray-700 mb-4">
              Top companies are dramatically better at:
            </p>
            <ul className="text-lg text-gray-700 mb-8">
              <li>Assigning the right people to lead strategic initiatives (regardless of rank)</li>
              <li>Aligning incentives to strategy (not just KPIs)</li>
              <li>Embedding strategy into budgets, plans, and operating models</li>
              <li>Making leaders accountable through clear targets</li>
            </ul>

            <p className="text-lg text-gray-700 mb-8">
              At Nvidia, every major decision is assigned a "pilot in command"—the person best suited to deliver, regardless of title. It's not about hierarchy. It's about ownership.
            </p>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              What Strategy Champions Do Differently (And You Can Too)
            </h2>

            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 mt-8">
              ✅ They build on facts, not politics.
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              The best leaders start strategy conversations with clear insight:
            </p>
            <ul className="text-lg text-gray-700 mb-8">
              <li>What's actually changing in our market?</li>
              <li>What trends are we underestimating?</li>
              <li>Where do we have real advantage?</li>
            </ul>
            <p className="text-lg text-gray-700 mb-8">
              This isn't just about data—it's about alignment. Everyone from the board to front-line teams needs to see the same reality.
            </p>

            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 mt-8">
              ✅ They commit to bold moves.
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Top performers don't hedge. They bet on transformative shifts:
            </p>
            <ul className="text-lg text-gray-700 mb-8">
              <li>Walmart investing in supply chain automation</li>
              <li>Disney acquiring Marvel, Star Wars, and Pixar</li>
              <li>Microsoft pivoting to the cloud—even at the cost of Windows revenue</li>
            </ul>
            <p className="text-lg text-gray-700 mb-8">
              Strategy Champions aren't always right—but they're rarely passive.
            </p>

            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 mt-8">
              ✅ They make strategy everyone's job.
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              In great companies, strategy isn't owned by the C-suite alone.
            </p>
            <ul className="text-lg text-gray-700 mb-8">
              <li>It's translated into initiatives with clear owners.</li>
              <li>It's funded properly.</li>
              <li>It's built into performance reviews, operating models, and hiring plans.</li>
            </ul>

            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 mt-8">
              ✅ They test, adapt, and evolve.
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Great strategy isn't static. Top companies:
            </p>
            <ul className="text-lg text-gray-700 mb-8">
              <li>Document their assumptions clearly</li>
              <li>Track signals to test those assumptions</li>
              <li>Adapt quickly when the market shifts</li>
            </ul>
            <p className="text-lg text-gray-700 mb-8">
              Execution is a feedback loop—not a finish line.
            </p>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              Context Matters: Strategy in Stable vs. Volatile Times
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              McKinsey also discovered something powerful: <strong>Top companies adjust their strategy playbook based on market conditions.</strong>
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-4">
                  In stable markets, Champions:
                </h4>
                <ul className="text-lg text-gray-700">
                  <li>Seek disruption proactively</li>
                  <li>Use bold bets to shake up entrenched players</li>
                  <li>Move fast to exploit predictable dynamics</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-4">
                  In volatile markets, Champions:
                </h4>
                <ul className="text-lg text-gray-700">
                  <li>Prioritize alignment and speed over perfection</li>
                  <li>Double down on risk management</li>
                  <li>Use scenario planning and assumption testing constantly</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Bottom line: There's no one-size-fits-all approach. Strategy Champions match their strengths to the environment they're in.
            </p>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              If You're a Business Owner, What Should You Do?
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              You don't need to be McKinsey, Disney, or Microsoft to use these lessons. Here's how to get started:
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  Start with clarity.
                </h4>
                <p className="text-lg text-gray-700">
                  What trends will matter most in the next 5 years? How do you win in that future?
                </p>
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  Make fewer, bolder choices.
                </h4>
                <p className="text-lg text-gray-700">
                  Strategy is not about doing everything. It's about placing smart, asymmetric bets.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  Get your team aligned.
                </h4>
                <p className="text-lg text-gray-700">
                  Make sure everyone understands the strategy—and their role in it.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  Translate ideas into action.
                </h4>
                <p className="text-lg text-gray-700">
                  Set targets. Assign owners. Fund the real priorities.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  Build feedback loops.
                </h4>
                <p className="text-lg text-gray-700">
                  Track progress. Learn. Adapt. Evolve.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
              Final Word: Strategy Is a Discipline, Not an Event
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              If you've ever felt like your company is "busy but not moving," you're not alone. That's the trap of disconnected strategy.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              What separates the top performers is not just vision—it's the ability to move fast, align people, and adjust in real time.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Strategy isn't just knowing what to do.<br />
              It's building the system and culture to actually do it.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              If your business can do that—no matter the size—you're already becoming a Strategy Champion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}