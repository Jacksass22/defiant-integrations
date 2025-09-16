import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, Brain, Cpu, Settings, Bot } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">Defiant Integration Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Strategic perspectives and applied guidance on AI adoption, operating model change, and competitive advantage creation.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Strategy Article */}
            <ArticleCard
              gradient="from-blue-600 via-blue-700 to-indigo-800"
              icon={<Brain className="w-8 h-8 text-white" />}
              badge="STRATEGY"
              title="Strategy Is Tradeoffs, Not Taglines"
              description="Stop confusing slogans and initiative lists with actual strategy. Clarity on choices unlocks alignment & execution speed."
              href="/strategy-article"
            />
            {/* AI Adoption */}
            <ArticleCard
              gradient="from-purple-600 via-indigo-700 to-blue-800"
              icon={<Settings className="w-8 h-8 text-white" />}
              badge="AI ADOPTION"
              title="The Hard Truth About AI Adoption in Business"
              description="70% of AI initiatives fail. Learn what works from real-world implementation experience across industries."
              href="/ai-adoption-article"
            />
            {/* AI + Robotics */}
            <ArticleCard
              gradient="from-emerald-600 via-teal-600 to-cyan-600"
              icon={<Bot className="w-8 h-8 text-white" />}
              badge="AUTOMATION"
              title="AI + Robotics: The New Labor Stack"
              description="Why hybrid human–algorithm–automation workflows redefine productivity curves this cycle."
              href="/ai-robotics-article"
            />
            {/* 2025 Outlook */}
            <ArticleCard
              gradient="from-orange-500 via-amber-600 to-yellow-600"
              icon={<Cpu className="w-8 h-8 text-white" />}
              badge="2025"
              title="AI in 2025: What Actually Changes"
              description="Signal vs noise: where comp advantage shifts as diffusion of capability accelerates."
              href="/ai-2025-article"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

interface ArticleCardProps {
  gradient: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  href: string;
}

function ArticleCard({ gradient, icon, badge, title, description, href }: ArticleCardProps) {
  return (
    <article className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
      <div className={`h-48 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
              {icon}
            </div>
            <div className="text-sm font-medium opacity-90 tracking-wide">{badge}</div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <Link href={href} className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
          <span>Read Full Article</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </article>
  );
}
