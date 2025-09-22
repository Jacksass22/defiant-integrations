import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  Target,
  Eye,
  Users,
  TrendingUp,
  Brain,
  Globe,
  Clock,
  Zap,
  Shield,
  Heart,
  Star,
  Award,
  Building,
  Lightbulb,
  Rocket,
  Settings,
  BarChart
} from 'lucide-react';
import GridDistortion from '@/components/GridDistortion';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function MissionVision() {
  useScrollToTop();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Track mouse movement for 3D effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);

    return (
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-acquisition-dark text-acquisition-secondary font-sans">

      {/* Hero Section with 3D Effects */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      >
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-acquisition-primary" />
        <div className="absolute inset-0 bg-gradient-radial from-acquisition-primary/10 via-transparent to-transparent" />

        {/* Grid Distortion Effect */}
        <div className="absolute inset-0 opacity-20">
          <GridDistortion
            imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&h=1080&q=80"
            grid={8}
            mouse={0.06}
            strength={0.1}
            relaxation={0.95}
          />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-acquisition-primary/12 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
            }}
          />
          <div
            className="absolute top-60 right-20 w-56 h-56 bg-acquisition-accent/18 rounded-full blur-2xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * 15}px)`,
              animationDelay: '2s'
            }}
          />
          <div
            className="absolute bottom-40 left-1/3 w-40 h-40 bg-acquisition-primary/10 rounded-full blur-xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * -25}px)`,
              animationDelay: '4s'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - 50% */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-acquisition-primary/10 backdrop-blur-sm border border-acquisition-primary/20 rounded-full px-6 py-2 mb-8"
              >
                <Target className="w-4 h-4 text-acquisition-accent" />
                <span className="text-sm text-acquisition-secondary font-medium">Our Mission & Vision</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-acquisition-primary leading-tight"
              >
                Making AI Work for <br />
                <span className="gradient-text">Every Business</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-acquisition-secondary mb-10 leading-relaxed max-w-2xl"
              >
                We exist to bridge the gap between AI's infinite potential and practical business transformation—turning complexity into competitive advantage.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="acquisition-card p-6 mb-10"
              >
                <h3 className="font-semibold text-lg text-acquisition-primary mb-4">Our Mission Statement</h3>
                <p className="text-acquisition-secondary leading-relaxed italic">
                  "Empowering businesses of every size to harness the transformative power of artificial intelligence through practical, profitable, and sustainable solutions that amplify human potential rather than replace it."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-acquisition inline-flex items-center space-x-2 text-lg"
                >
                  <span>Join Our Mission</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Visual - 50% */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="acquisition-card p-8">
                <h3 className="font-semibold text-xl text-acquisition-primary mb-6 flex items-center">
                  <div className="w-8 h-8 bg-acquisition-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <Eye className="w-4 h-4 text-acquisition-primary" />
                  </div>
                  Future Vision Tracking
                </h3>

                {/* Vision Progress */}
                <div className="space-y-6">
                  {[
                    {
                      label: "Intelligent Operations",
                      progress: 35,
                      timeline: "3-5 years",
                      description: "Predictive business intelligence",
                      delay: 0.2
                    },
                    {
                      label: "Democratized AI",
                      progress: 60,
                      timeline: "2-3 years",
                      description: "Accessible to any business size",
                      delay: 0.4
                    },
                    {
                      label: "Human-AI Partnership",
                      progress: 75,
                      timeline: "1-2 years",
                      description: "Seamless collaboration",
                      delay: 0.6
                    },
                    {
                      label: "Autonomous Growth",
                      progress: 20,
                      timeline: "5-7 years",
                      description: "Self-optimizing systems",
                      delay: 0.8
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: item.delay }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-acquisition-secondary">{item.label}</span>
                        <span className="text-acquisition-primary font-bold text-sm">{item.progress}%</span>
                      </div>
                      <div className="text-xs text-acquisition-secondary/70">{item.description}</div>
                      <div className="text-xs text-acquisition-accent">{item.timeline}</div>

                      <div className="w-full bg-acquisition-primary/20 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.progress}%` }}
                          transition={{ duration: 1.2, delay: item.delay + 0.2 }}
                          className="bg-gradient-to-r from-acquisition-primary to-acquisition-accent h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Breakdown */}
      <AnimatedSection>
        <section className="py-20 bg-acquisition-darker">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-center mb-16"
            >
              <h2 className="font-sans text-4xl sm:text-5xl font-bold text-acquisition-primary mb-6">
                How We Fulfill <span className="gradient-text">Our Mission</span>
              </h2>
              <p className="text-xl text-acquisition-secondary max-w-3xl mx-auto">
                Three core principles that guide every client relationship and solution we deliver
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Empowering Businesses",
                  meaning: "Giving companies the tools and knowledge to succeed with AI",
                  howWeDo: "Hands-on implementation, comprehensive training, ongoing support",
                  commitment: "Every client becomes AI-capable and confident",
                  icon: <Users className="w-6 h-6" />
                },
                {
                  title: "Practical & Profitable",
                  meaning: "AI solutions that solve real problems and generate measurable ROI",
                  howWeDo: "Business-first approach, proven methodologies, performance guarantees",
                  commitment: "Technology that pays for itself and drives growth",
                  icon: <TrendingUp className="w-6 h-6" />
                },
                {
                  title: "Amplifying Human Potential",
                  meaning: "AI that makes people more effective, not obsolete",
                  howWeDo: "Workflow enhancement, decision support, capability expansion",
                  commitment: "Technology that empowers teams rather than replaces them",
                  icon: <Brain className="w-6 h-6" />
                }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative acquisition-card overflow-hidden"
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-acquisition-primary/5 via-transparent to-acquisition-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-acquisition-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                  <div className="relative p-8 z-10">
                    <motion.div
                      className="w-16 h-16 bg-acquisition-primary/10 rounded-2xl flex items-center justify-center text-acquisition-primary mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {principle.icon}
                    </motion.div>

                    <h3 className="font-sans text-2xl font-bold text-acquisition-primary mb-6 group-hover:text-acquisition-accent transition-colors">{principle.title}</h3>

                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-medium text-acquisition-primary mb-2">What It Means:</h4>
                        <p className="text-acquisition-secondary">{principle.meaning}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-acquisition-primary mb-2">How We Do It:</h4>
                        <p className="text-acquisition-secondary">{principle.howWeDo}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-acquisition-primary mb-2">Our Commitment:</h4>
                        <p className="text-acquisition-accent font-medium">{principle.commitment}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom glow effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acquisition-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Vision Statement */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-acquisition-primary via-acquisition-darker to-acquisition-dark relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-acquisition-primary/10 via-transparent to-acquisition-primary/5" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <h2 className="font-sans text-4xl sm:text-5xl font-bold text-white mb-8">
                Our Vision for the <span className="text-acquisition-accent">Future</span>
              </h2>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3 } }
                }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 mb-8 max-w-5xl mx-auto border border-white/20"
              >
                <p className="text-xl text-white leading-relaxed italic">
                  "A world where every business operates with intelligent systems that anticipate needs, optimize performance, and unlock unprecedented growth—making AI-powered excellence the standard, not the exception."
                </p>
              </motion.div>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }
                }}
                className="text-blue-100 text-lg max-w-3xl mx-auto"
              >
                We're building the foundation for a future where AI amplifies human creativity and business potential across every industry and organization size.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Vision Components */}
      <AnimatedSection>
        <section className="py-20 bg-acquisition-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-center mb-16"
            >
              <h2 className="font-sans text-4xl sm:text-5xl font-bold text-acquisition-primary mb-6">
                The Future We're <span className="gradient-text">Building</span>
              </h2>
              <p className="text-xl text-acquisition-secondary max-w-3xl mx-auto">
                Four transformative outcomes that define our vision for AI-powered business excellence
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  title: "Intelligent Operations",
                  futureState: "Businesses run on AI that predicts and prevents problems",
                  timeline: "3-5 years for widespread adoption",
                  ourRole: "Leading the development of predictive business intelligence",
                  icon: <Settings className="w-6 h-6" />
                },
                {
                  title: "Democratized AI",
                  futureState: "AI expertise accessible to businesses of any size",
                  timeline: "2-3 years for standardized, affordable solutions",
                  ourRole: "Creating plug-and-play AI solutions for every industry",
                  icon: <Globe className="w-6 h-6" />
                },
                {
                  title: "Human-AI Partnership",
                  futureState: "Seamless collaboration between human creativity and AI efficiency",
                  timeline: "1-2 years for mature integration models",
                  ourRole: "Designing intuitive AI that enhances human decision-making",
                  icon: <Heart className="w-6 h-6" />
                },
                {
                  title: "Autonomous Growth",
                  futureState: "Self-optimizing businesses that continuously improve",
                  timeline: "5-7 years for fully autonomous optimization",
                  ourRole: "Building the foundation for self-improving business systems",
                  icon: <Rocket className="w-6 h-6" />
                }
              ].map((component, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative acquisition-card overflow-hidden"
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-acquisition-primary/5 via-transparent to-acquisition-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-acquisition-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                  <div className="relative p-6 z-10">
                    <motion.div
                      className="w-16 h-16 bg-acquisition-primary/10 rounded-2xl flex items-center justify-center text-acquisition-primary mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {component.icon}
                    </motion.div>

                    <h3 className="font-sans text-lg font-bold text-acquisition-primary mb-3 group-hover:text-acquisition-accent transition-colors">{component.title}</h3>

                    <div className="space-y-3 text-sm">
                      <div>
                        <h4 className="font-medium text-acquisition-primary mb-1">Future State:</h4>
                        <p className="text-acquisition-secondary">{component.futureState}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-acquisition-primary mb-1">Timeline:</h4>
                        <p className="text-acquisition-secondary">{component.timeline}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-acquisition-primary mb-1">Our Role:</h4>
                        <p className="text-acquisition-accent font-medium">{component.ourRole}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom glow effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acquisition-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Progress Toward Vision */}
      <AnimatedSection>
        <section className="py-20 bg-acquisition-darker">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-center mb-16"
            >
              <h2 className="font-sans text-4xl sm:text-5xl font-bold text-acquisition-primary mb-6">
                Progress Toward <span className="gradient-text">Our Vision</span>
              </h2>
              <p className="text-xl text-acquisition-secondary max-w-3xl mx-auto">
                Measurable milestones demonstrating our commitment to transforming the future of business
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* Current Achievements */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="acquisition-card p-8"
              >
                <motion.div
                  className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center text-blue-400 mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Award className="w-10 h-10" />
                </motion.div>
                <h3 className="font-sans text-2xl font-bold text-acquisition-primary mb-6">Current Achievements (2025)</h3>

                <div className="space-y-4">
                  {[
                    { metric: "500+", label: "Businesses successfully AI-enabled" },
                    { metric: "27", label: "Industries transformed with intelligent solutions" },
                    { metric: "$50M+", label: "In measurable client value generated" },
                    { metric: "99.9%", label: "System reliability across all implementations" }
                  ].map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="text-2xl font-bold text-blue-400">{achievement.metric}</div>
                      <div className="text-acquisition-secondary">{achievement.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Near-Term Goals */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="acquisition-card p-8"
              >
                <motion.div
                  className="w-20 h-20 bg-green-500/10 rounded-3xl flex items-center justify-center text-green-400 mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Target className="w-10 h-10" />
                </motion.div>
                <h3 className="font-sans text-2xl font-bold text-acquisition-primary mb-6">Near-Term Goals (2026-2027)</h3>

                <div className="space-y-4">
                  {[
                    { metric: "1,000+", label: "AI-powered businesses in our network" },
                    { metric: "50", label: "Industry-specific solution templates" },
                    { metric: "$200M+", label: "In client value creation" },
                    { metric: "Global", label: "Expansion to serve businesses worldwide" }
                  ].map((goal, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="text-2xl font-bold text-green-400">{goal.metric}</div>
                      <div className="text-acquisition-secondary">{goal.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Long-Term Vision */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="acquisition-card p-8"
              >
                <motion.div
                  className="w-20 h-20 bg-purple-500/10 rounded-3xl flex items-center justify-center text-purple-400 mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Eye className="w-10 h-10" />
                </motion.div>
                <h3 className="font-sans text-2xl font-bold text-acquisition-primary mb-6">Long-Term Vision (2028-2030)</h3>

                <div className="space-y-4">
                  {[
                    { label: "AI-First Business Standard", desc: "Every business operates with intelligent systems" },
                    { label: "Industry Leadership", desc: "Recognized as the definitive AI transformation partner" },
                    { label: "Ecosystem Development", desc: "Network of AI-enabled businesses sharing insights" },
                    { label: "Continuous Innovation", desc: "Leading research in practical business AI applications" }
                  ].map((vision, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="space-y-1"
                    >
                      <div className="font-medium text-purple-400">{vision.label}</div>
                      <div className="text-sm text-acquisition-secondary">{vision.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Impact Stories */}
      <AnimatedSection>
        <section className="py-20 bg-acquisition-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-center mb-16"
            >
              <h2 className="font-sans text-4xl sm:text-5xl font-bold text-acquisition-primary mb-6">
                Mission in <span className="gradient-text">Action</span>
              </h2>
              <p className="text-xl text-acquisition-secondary max-w-3xl mx-auto">
                Real transformations that demonstrate our mission's impact across different business scales
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Small Business Transformation",
                  story: "A local restaurant chain went from manual inventory management to AI-powered demand forecasting, reducing waste by 60% and increasing profits by 35%.",
                  impact: "60% waste reduction, 35% profit increase",
                  icon: <Building className="w-6 h-6" />
                },
                {
                  title: "Enterprise Innovation",
                  story: "A manufacturing company implemented our predictive maintenance system, preventing $2M in downtime while optimizing production efficiency by 40%.",
                  impact: "$2M downtime prevented, 40% efficiency gain",
                  icon: <BarChart className="w-6 h-6" />
                },
                {
                  title: "Industry Evolution",
                  story: "We've helped transform entire supply chains, enabling real-time optimization that benefits every business in the network.",
                  impact: "Industry-wide optimization, network benefits",
                  icon: <Globe className="w-6 h-6" />
                }
              ].map((story, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative acquisition-card overflow-hidden"
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-acquisition-primary/5 via-transparent to-acquisition-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-acquisition-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                  <div className="relative p-8 z-10">
                    <motion.div
                      className="w-16 h-16 bg-acquisition-primary/10 rounded-2xl flex items-center justify-center text-acquisition-primary mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {story.icon}
                    </motion.div>

                    <h3 className="font-sans text-xl font-bold text-acquisition-primary mb-4 group-hover:text-acquisition-accent transition-colors">{story.title}</h3>
                    <p className="text-acquisition-secondary mb-4 italic leading-relaxed">"{story.story}"</p>

                    <div className="text-acquisition-accent font-medium text-sm">
                      Impact: {story.impact}
                    </div>
                  </div>

                  {/* Bottom glow effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acquisition-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection>
        <section className="py-20 bg-acquisition-darker">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <h2 className="font-sans text-4xl sm:text-5xl font-bold text-acquisition-primary mb-6">
                Join Our Mission to Transform <span className="gradient-text">Business</span> with AI
              </h2>
              <p className="text-xl text-acquisition-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
                Be part of the AI-powered future we're building, one business at a time
              </p>

              <motion.div
                className="flex justify-center mb-12"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="btn-acquisition inline-flex items-center space-x-2 text-lg">
                  <span>Start Your Transformation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
                className="flex flex-wrap justify-center gap-8 text-acquisition-secondary"
              >
                {[
                  "Practical AI Solutions",
                  "Measurable Business Impact",
                  "Human-Centered Technology"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-acquisition-accent" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}