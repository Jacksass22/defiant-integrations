import { ArrowRight, Target, Map, Users, TrendingUp, CheckCircle, Clock, Lightbulb } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import { SubscriptionModal } from '@/components/subscription-modal';
import BlurText from '@/components/BlurText';

export default function AIStrategyDevelopment() {
  useScrollToTop();
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  
  return (
    <div className="bg-white text-charcoal font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <BlurText
              text="AI Strategy Development"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
            />
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Designing Intelligent Transformation, Not Just Technology Experiments
            </p>
            <button 
              onClick={() => setShowLeadCaptureModal(true)}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 font-medium hover:bg-blue-700 transition-colors rounded-lg"
            >
              <span>Book Your AI Readiness Session</span>
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
              The Strategy Gap Most Businesses Face
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              In today's race toward AI adoption, most businesses don't have a technology problem. They have a strategy gap.
            </p>
            
            <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 shadow-2xl rounded-xl mb-12 overflow-hidden group hover:shadow-3xl transition-all duration-500 border border-gray-200/50">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-100/20 to-orange-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Executives know AI is important. What they often don't know is:
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3 group/item hover:transform hover:scale-105 transition-all duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-100 to-red-200 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:shadow-lg transition-all duration-200">
                      <span className="text-sm font-bold">?</span>
                    </div>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Which use cases are worth pursuing</span>
                  </div>
                  <div className="flex items-start space-x-3 group/item hover:transform hover:scale-105 transition-all duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-100 to-red-200 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:shadow-lg transition-all duration-200">
                      <span className="text-sm font-bold">?</span>
                    </div>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Where to start with their existing infrastructure</span>
                  </div>
                  <div className="flex items-start space-x-3 group/item hover:transform hover:scale-105 transition-all duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-100 to-red-200 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:shadow-lg transition-all duration-200">
                      <span className="text-sm font-bold">?</span>
                    </div>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">How to align AI with their core business priorities</span>
                  </div>
                  <div className="flex items-start space-x-3 group/item hover:transform hover:scale-105 transition-all duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-100 to-red-200 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:shadow-lg transition-all duration-200">
                      <span className="text-sm font-bold">?</span>
                    </div>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">How to avoid fragmented pilots that never scale</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white p-8 rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-blue-600/30">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <p className="text-xl font-semibold mb-4">
                  At Defiant Integrations, we help ambitious businesses move from guesswork to a clear, customized AI strategy—one that generates outcomes, not overwhelm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Deliver */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full mb-6">
              <Target className="w-10 h-10" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What We Deliver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We design intelligent transformations that save time and generate revenue. </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Map className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                    Assess current operational maturity
                  </h3>
                  <p className="text-gray-600">We map your workflows, data flows, and capability gaps to see what we can do for you</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                    Prioritize AI opportunities by business value
                  </h3>
                  <p className="text-gray-600">
                    Efficiency, revenue, customer experience, or compliance
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                    Design a phased roadmap for intelligent transformation
                  </h3>
                  <p className="text-gray-600">
                    Sequenced steps tied to ROI
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                    Define clear implementation pathways
                  </h3>
                  <p className="text-gray-600">
                    That include people, process, and platforms—not just code
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                    Establish governance, measurement, and iteration plans
                  </h3>
                  <p className="text-gray-600">
                    So your AI doesn't plateau
                  </p>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500 border border-gray-200/50">
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/30 to-purple-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <p className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                    This isn't an off-the-shelf strategy deck. It's a business operating system redesign—customized for your real constraints, team capacity, and industry dynamics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Strategic Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Strategic Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every engagement follows our proprietary five-phase process
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-white to-gray-50 p-6 shadow-2xl rounded-xl text-center overflow-hidden group hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  1
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                  Operational Mapping
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  We capture and structure your existing processes, decision points, and data landscape.
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white to-gray-50 p-6 shadow-2xl rounded-xl text-center overflow-hidden group hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  2
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                  Infrastructure Alignment
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  We consolidate templates, assets, workflows, and tooling into a unified foundation.
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white to-gray-50 p-6 shadow-2xl rounded-xl text-center overflow-hidden group hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  3
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                  Opportunity Identification
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  We locate the most valuable use cases for AI, automation, and augmentation across the business.
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white to-gray-50 p-6 shadow-2xl rounded-xl text-center overflow-hidden group hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  4
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                  Intelligent Integration Planning
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  We map how to embed intelligent tools into existing workflows—with minimal disruption.
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white to-gray-50 p-6 shadow-2xl rounded-xl text-center overflow-hidden group hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  5
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                  Measurement & Refinement
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  We define success metrics and build systems to ensure continuous improvement.
                </p>
              </div>
            </div>
          </div>

          {/* Callout removed per request */}
        </div>
      </section>
      {/* What You Walk Away With */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
              <Lightbulb className="w-10 h-10" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What You Walk Away With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you work with us on AI Strategy Development, you get:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                Fully Tailored AI Roadmap
              </h3>
              <p className="text-gray-600">
                Aligned to your goals, tech, and talent
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                Prioritized Use Cases
              </h3>
              <p className="text-gray-600">
                AI use cases and workflows with real business upside
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                Practical Blueprint
              </h3>
              <p className="text-gray-600">
                How to start, scale, and measure your AI journey
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                Executive-Level Clarity
              </h3>
              <p className="text-gray-600">
                Team-wide alignment on AI strategy and priorities
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                Strategic Confidence
              </h3>
              <p className="text-gray-600">
                Grounded in decades of cross-industry expertise
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                Implementation Readiness
              </h3>
              <p className="text-gray-600">
                Clear next steps and resource requirements
              </p>
            </div>
          </div>

          {/* Build & Integration CTA */}
          <div className="mt-12">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">
                  We don’t just strategize—we build, too.
                </h3>
                <p className="text-gray-600">
                  When you’re ready, our team can design, integrate, and operate your AI solutions.
                </p>
              </div>
              <Link href="/services" className="inline-flex items-center space-x-2 rounded-lg bg-blue-600 text-white px-5 py-3 hover:bg-blue-700 transition-colors">
                <span>See how we build</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Why Defiant */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why Defiant?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6">
                We're not just technologists.
              </h3>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                We're strategic systems thinkers who've delivered results across 27 industries—from trades to legal, retail to consulting.
              </p>
              <p className="text-xl text-gray-200 leading-relaxed">
                We bring the clarity, structure, and execution plan your team needs to win with AI—not just test it.
              </p>
            </div>

            {/* Clean, simplified value props card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <h4 className="font-serif text-xl font-bold mb-6 text-white">Why teams choose us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-200">Cross-industry expertise with 27+ verticals</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-200">Outcome-focused strategy tied to measurable ROI</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-200">Build-and-operate capability—yes, we implement too</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-200">Security, governance, and change management baked in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to See Where AI Fits Into Your Business?
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Book a 30-minute AI Readiness Session. We'll walk you through our strategic lens—and show you exactly where the hidden wins are.
          </p>
          <p className="text-2xl font-semibold mb-12">
            Defiant Integrations. What's your next intelligent breakthrough?
          </p>
          <button 
            onClick={() => setShowLeadCaptureModal(true)}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 font-medium hover:bg-blue-700 transition-colors text-lg rounded-lg"
          >
            <span>Book Your AI Readiness Session</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
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
                <li><Link href="/restaurants-cafes" className="hover:text-blue-400 transition-colors">Restaurants & Cafés</Link></li>
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
                <li><button 
                  onClick={() => setShowLeadCaptureModal(true)}
                  className="hover:text-blue-400 transition-colors"
                >
                  Careers
                </button></li>
                <li><button 
                  onClick={() => setShowLeadCaptureModal(true)}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </button></li>
                <li><Link href="/#blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button 
                  onClick={() => setShowSubscriptionModal(true)}
                  className="hover:text-blue-400 transition-colors"
                >
                  Subscribe
                </button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Defiant Integrations. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <LeadCaptureModal
        open={showLeadCaptureModal}
        onOpenChange={setShowLeadCaptureModal}
      />
      
      <SubscriptionModal 
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
      />
    </div>
  );
}