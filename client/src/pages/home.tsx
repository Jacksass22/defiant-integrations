import { ArrowRight, ChevronRight, Users, TrendingUp, Target, Map, Settings, Repeat, ExternalLink } from 'lucide-react';
import { Navigation } from '@/components/navigation';

export default function Home() {
  return (
    <div className="bg-white text-charcoal font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                What's your next <span className="text-cyan-accent">intelligent breakthrough</span>?
              </h1>
              <h2 className="text-xl lg:text-2xl mb-8 text-gray-300 font-light">
                From local service providers to global enterprises, we architect AI transformations that scale.
              </h2>
              <p className="text-lg mb-8 text-gray-400 leading-relaxed">
                Most AI initiatives fail to move beyond proof-of-concept. The difference? Strategic implementation that integrates seamlessly with human expertise and drives measurable business outcomes—whether you're optimizing appointment scheduling for a plumbing company or transforming supply chains for a Fortune 500.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-electric-blue text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-2">
                  <span>Architect Your Transformation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-accent text-cyan-accent px-8 py-4 rounded-lg font-medium hover:bg-cyan-accent hover:text-white transition-all">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-electric-blue/20 to-cyan-accent/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center animate-float">
                  <div className="text-6xl text-white/30 font-mono">{"{ AI }"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority & Research Hook Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-light-gray rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-serif font-bold text-navy mb-4">23%</div>
                  <div className="text-medium-gray text-lg">of companies successfully scale AI beyond pilot projects</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl font-bold text-navy mb-6">
                How AI Implementation Champions Scale Success
              </h2>
              <div className="text-electric-blue font-medium mb-4 text-lg">
                Only 23% of companies successfully scale AI beyond pilot projects. What separates the champions from the casualties?
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Most transformation initiatives stall before they scale. Our integrated approach—blending strategy, systems engineering, and change leadership—helps businesses move from promising ideas to measurable results. Whether it's streamlining operations for a single-location service provider or optimizing supply chains for global enterprises, we deliver solutions that work in the real world.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  <span className="text-gray-700">3.2x faster time-to-value for properly architected implementations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  <span className="text-gray-700">67% reduction in change management resistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  <span className="text-gray-700">89% of our clients achieve ROI within 18 months</span>
                </div>
              </div>
              <button className="bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-charcoal transition-colors inline-flex items-center space-x-2">
                <span>Discover Our Implementation Framework</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation Reality Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-navy mb-6">
                Beyond Digital Transformation: Building Intelligence That Amplifies Human Potential
              </h2>
              <div className="text-electric-blue font-medium mb-4 text-lg">
                Transformative strategy isn't just for Fortune 500 companies anymore—it's the difference between businesses that thrive and those that fall behind, no matter their size.
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Organizations that thrive in today's digital era understand that real transformation isn't about replacing people—it's about equipping them. By designing intelligent systems that support better decisions, streamline workflows, and scale operations, we help businesses unlock new levels of performance across every function.
              </p>
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-electric-blue pl-4">
                  <h4 className="font-semibold text-navy mb-2">From small business to enterprise: How AI transforms decision-making at every scale</h4>
                </div>
                <div className="border-l-4 border-electric-blue pl-4">
                  <h4 className="font-semibold text-navy mb-2">The integration advantage: Why seamless deployment beats cutting-edge algorithms</h4>
                </div>
                <div className="border-l-4 border-electric-blue pl-4">
                  <h4 className="font-semibold text-navy mb-2">Measuring what matters: ROI frameworks that work for any business size</h4>
                </div>
              </div>
              <button className="bg-electric-blue text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
                <span>Transform Your Decision-Making</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">Human + AI Collaboration</h4>
                      <p className="text-sm text-gray-600">Augmenting human expertise</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-accent rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">Scalable Operations</h4>
                      <p className="text-sm text-gray-600">From 10 to 10,000 employees</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">Measurable Outcomes</h4>
                      <p className="text-sm text-gray-600">ROI-driven implementations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thought Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-navy to-charcoal rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">📚</div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Intelligence Library</h3>
                    <p className="text-gray-300">2025 Implementation Guide</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl font-bold text-navy mb-6">
                What to Read Next: Defiant Integration's 2025 Intelligence Implementation Guide
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                After each successful deployment, we invite our clients and industry leaders to share the insights, frameworks, and breakthrough moments that shaped their journey. This year's collection includes several essential reads—from technical implementation guides to strategic leadership perspectives that drive real-world impact across industries.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our curated library spans everything from organizational psychology to advanced machine learning, because successful implementation requires mastery across multiple domains—whether you're a local contractor or a global corporation.
              </p>
              <button className="bg-charcoal text-white px-8 py-4 rounded-lg font-medium hover:bg-navy transition-colors inline-flex items-center space-x-2">
                <span>Access Our Intelligence Library</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Insights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-navy mb-4">
              New at Defiant Integration Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Original research, implementation frameworks, and strategic perspectives from the frontlines of AI transformation across all business sizes and industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "IMPLEMENTATION FRAMEWORK",
                title: "From Pilot Purgatory to Production Paradise",
                description: "Research-backed methodology for moving AI initiatives from proof-of-concept to enterprise-wide deployment",
                color: "text-electric-blue"
              },
              {
                category: "CASE STUDIES",
                title: "The Small Business AI Advantage",
                description: "How local service providers are leveraging AI to compete with larger competitors",
                color: "text-cyan-accent"
              },
              {
                category: "RESEARCH ANALYSIS",
                title: "The Integration Imperative",
                description: "Why 78% of AI projects fail at the human-machine interface",
                color: "text-electric-blue"
              },
              {
                category: "ROI FRAMEWORK",
                title: "Measuring AI ROI",
                description: "Beyond vanity metrics to business impact measurement",
                color: "text-cyan-accent"
              },
              {
                category: "TECHNICAL DEEP-DIVE",
                title: "The Architecture of Intelligence",
                description: "Building AI systems that scale across organizations",
                color: "text-electric-blue"
              },
              {
                category: "CHANGE MANAGEMENT",
                title: "Leading Humans Through AI Transformation",
                description: "Psychological insights and practical strategies for overcoming resistance",
                color: "text-cyan-accent"
              }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover">
                <div className={`${article.color} font-mono text-sm mb-2`}>{article.category}</div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <button className="text-electric-blue font-medium hover:underline flex items-center space-x-1">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-charcoal transition-colors inline-flex items-center space-x-2">
              <span>Explore Our Research Library</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Capabilities Deep Dive Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-navy mb-4">
              The Defiant Difference: Strategy, Build, and Beyond
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What We Deliver
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all hover:scale-105">
                <Map className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">Strategy & Architecture</h3>
              <ul className="text-left space-y-3 text-gray-600">
                {[
                  "Operating-model & workflow mapping",
                  "AI & automation road-mapping when ROI is clear",
                  "Business-case & value-capture modeling",
                  "Technology stack rationalization",
                  "Risk & compliance assessment"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-cyan-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all hover:scale-105">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">Build & Integrate</h3>
              <ul className="text-left space-y-3 text-gray-600">
                {[
                  "Rapid proof-of-concepts (2–4 wks)",
                  "Pilot orchestration & KPI tracking",
                  "Systems & data-layer integration",
                  "Process automation (RPA → AI)",
                  "Performance tuning & QA"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all hover:scale-105">
                <Repeat className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">Scale & Sustain</h3>
              <ul className="text-left space-y-3 text-gray-600">
                {[
                  "Change-management playbooks",
                  "Team training & enablement hubs",
                  "Governance & data-stewardship frameworks",
                  "Continuous-improvement sprints",
                  "Ongoing optimization & support SLAs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-charcoal rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-navy mb-4">
              Intelligence in Action: Transformations That Deliver
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "HVAC SERVICES",
                title: "40% Revenue Increase",
                description: "How a Regional HVAC Company leveraged AI-powered scheduling and dispatch optimization.",
                metric: "+40%",
                color: "text-electric-blue"
              },
              {
                industry: "FINANCIAL SERVICES",
                title: "89% Processing Reduction",
                description: "Fortune 500 Financial Services Firm transforms operations through intelligent automation.",
                metric: "-89%",
                color: "text-cyan-accent"
              },
              {
                industry: "RESTAURANT CHAIN",
                title: "25% Cost Reduction",
                description: "Local Restaurant Chain achieves significant savings with AI-driven inventory management.",
                metric: "-25%",
                color: "text-electric-blue"
              },
              {
                industry: "MANUFACTURING",
                title: "$50M Savings",
                description: "Manufacturing Giant transforms operations through AI-powered predictive maintenance.",
                metric: "$50M",
                color: "text-cyan-accent"
              },
              {
                industry: "HEALTHCARE",
                title: "34% Better Outcomes",
                description: "Healthcare System improves patient outcomes with AI-driven diagnostic support.",
                metric: "+34%",
                color: "text-electric-blue"
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className={`${caseStudy.color} font-mono text-sm mb-2`}>{caseStudy.industry}</div>
                <h3 className="font-serif text-xl font-bold text-navy mb-4">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-2xl font-bold ${caseStudy.color}`}>{caseStudy.metric}</span>
                  <button className="text-electric-blue hover:underline flex items-center space-x-1">
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover border-2 border-electric-blue">
              <div className="text-center">
                <h3 className="font-serif text-xl font-bold text-navy mb-4">What's Your Story?</h3>
                <p className="text-gray-600 mb-6">Ready to join our success stories?</p>
                <button className="bg-electric-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            What does it mean to architect intelligent transformation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            It means moving beyond experiments to building systems that fundamentally change how your organization operates, decides, and delivers value—regardless of your industry or size.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-electric-blue text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105">
              Start Your Transformation Journey
            </button>
            <button className="border border-cyan-accent text-cyan-accent px-8 py-4 rounded-lg font-medium hover:bg-cyan-accent hover:text-white transition-all">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-serif font-bold mb-4">
                Defiant <span className="text-electric-blue">Integrations</span>
              </div>
              <p className="text-gray-400 mb-4">
                Architecting intelligent transformations that scale.
              </p>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-electric-blue transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </button>
                <button className="text-gray-400 hover:text-electric-blue transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-electric-blue transition-colors">AI Strategy & Planning</button></li>
                <li><button className="hover:text-electric-blue transition-colors">Implementation</button></li>
                <li><button className="hover:text-electric-blue transition-colors">Scaling & Optimization</button></li>
                <li><button className="hover:text-electric-blue transition-colors">Change Management</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-electric-blue transition-colors">Research Reports</button></li>
                <li><button className="hover:text-electric-blue transition-colors">Case Studies</button></li>
                <li><button className="hover:text-electric-blue transition-colors">Implementation Guides</button></li>
                <li><button className="hover:text-electric-blue transition-colors">Insights Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-electric-blue transition-colors">About Us</button></li>
                <li><button className="hover:text-electric-blue transition-colors">Careers</button></li>
                <li><button className="hover:text-electric-blue transition-colors">Contact</button></li>
                <li><button className="hover:text-electric-blue transition-colors">Privacy Policy</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Defiant Integrations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
