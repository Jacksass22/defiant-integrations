import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Lightbulb,
  Shield,
  Award,
  TrendingUp,
  Globe,
  Clock,
  Star,
  Zap,
  Building,
  Heart,
  Brain,
  Rocket,
  Code,
  Layers
} from 'lucide-react';
import GridDistortion from '@/components/GridDistortion';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function OurStory() {
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
            imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&h=1080&q=80"
            grid={12}
            mouse={0.12}
            strength={0.18}
            relaxation={0.85}
          />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-10 w-96 h-96 bg-acquisition-primary/8 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
            }}
          />
          <div
            className="absolute top-60 right-20 w-64 h-64 bg-acquisition-accent/12 rounded-full blur-2xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * 20}px)`,
              animationDelay: '1s'
            }}
          />
          <div
            className="absolute bottom-40 left-1/3 w-48 h-48 bg-acquisition-primary/15 rounded-full blur-xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 35}px, ${mousePosition.y * -35}px)`,
              animationDelay: '2s'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-10 gap-12 items-center">
            {/* Left Content - 70% */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-acquisition-primary/10 backdrop-blur-sm border border-acquisition-primary/20 rounded-full px-6 py-2 mb-8"
              >
                <Building className="w-4 h-4 text-acquisition-accent" />
                <span className="text-sm text-acquisition-secondary font-medium">Our Story</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-acquisition-primary leading-tight"
              >
                Defying Convention, <br />
                <span className="gradient-text">Defining the Future</span> <br />
                of AI Integration
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-acquisition-secondary mb-10 leading-relaxed max-w-2xl"
              >
                Born from the belief that AI should empower businesses, not complicate them. We bridge the gap between cutting-edge technology and practical business transformation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-acquisition inline-flex items-center space-x-2 text-lg"
                >
                  <span>Start Your AI Transformation Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-8"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-acquisition-accent" />
                  <span className="text-acquisition-secondary">500+ Successful Implementations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-acquisition-accent" />
                  <span className="text-acquisition-secondary">27 Industry Verticals</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual - 30% */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="acquisition-card p-8">
                <h3 className="font-semibold text-xl text-acquisition-primary mb-6 flex items-center">
                  <div className="w-8 h-8 bg-acquisition-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <Zap className="w-4 h-4 text-acquisition-primary" />
                  </div>
                  Founding Vision
                </h3>

                {/* Vision Metrics */}
                <div className="space-y-6">
                  {[
                    { label: "AI Made Simple", value: "100%", description: "Practical over complex", delay: 0.2 },
                    { label: "Business First", value: "ROI+", description: "Measurable impact", delay: 0.4 },
                    { label: "Client Owned", value: "Self", description: "Your data, your control", delay: 0.6 }
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: metric.delay }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-acquisition-secondary">{metric.label}</span>
                        <span className="text-acquisition-primary font-bold text-lg">{metric.value}</span>
                      </div>
                      <div className="text-xs text-acquisition-secondary/70">{metric.description}</div>

                      <div className="w-full bg-acquisition-primary/20 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.2, delay: metric.delay + 0.2 }}
                          className="bg-gradient-to-r from-acquisition-primary to-acquisition-accent h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}

                  {/* Mission Statement */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-acquisition-primary/10 rounded-xl p-4 mt-6"
                  >
                    <div className="text-sm font-medium text-acquisition-primary mb-2">Our Mission</div>
                    <div className="text-xs text-acquisition-secondary">Making AI accessible, practical, and profitable for businesses of every size</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
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
                Why We Started <span className="gradient-text">Defiant Integrations</span>
              </h2>
              <p className="text-xl text-acquisition-secondary max-w-4xl mx-auto leading-relaxed">
                We saw too many businesses struggling with AI implementations that promised everything but delivered complexity. Founded by experienced business strategists and proven AI engineers, we built Defiant Integrations to deliver what others couldn't: AI that actually works for business.
              </p>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Company Timeline */}
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
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-xl text-acquisition-secondary max-w-3xl mx-auto">
                From founding vision to industry leadership - the milestones that shaped our mission
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
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  year: "2023",
                  title: "Company Founded",
                  description: "Founded by consulting and AI experts",
                  milestone: "Genesis",
                  icon: <Rocket className="w-6 h-6" />
                },
                {
                  year: "2025",
                  title: "First $10M Delivered",
                  description: "Client transformations delivered",
                  milestone: "Validation",
                  icon: <TrendingUp className="w-6 h-6" />
                },
                {
                  year: "2025",
                  title: "200+ implementations",
                  description: "Successful AI implementations across 27 industries",
                  milestone: "Scale",
                  icon: <Globe className="w-6 h-6" />
                },
                {
                  year: "Future",
                  title: "Next Wave Leadership",
                  description: "Leading autonomous business intelligence",
                  milestone: "Vision",
                  icon: <Brain className="w-6 h-6" />
                }
              ].map((item, index) => (
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
                  className="group relative acquisition-card text-center overflow-hidden"
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-acquisition-primary/5 via-transparent to-acquisition-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-acquisition-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                  <div className="relative p-6 z-10">
                    <motion.div
                      className="w-16 h-16 bg-acquisition-primary/10 rounded-2xl flex items-center justify-center text-acquisition-primary mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="text-2xl font-bold text-acquisition-primary mb-2">{item.year}</div>
                    <h3 className="font-sans text-lg font-bold text-acquisition-primary mb-3 group-hover:text-acquisition-accent transition-colors">{item.title}</h3>
                    <p className="text-acquisition-secondary text-sm mb-4 leading-relaxed">{item.description}</p>
                    <div className="text-xs font-medium text-acquisition-accent bg-acquisition-primary/10 px-3 py-1 rounded-full inline-block">
                      {item.milestone}
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

      {/* Core Values */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-acquisition-primary via-acquisition-darker to-acquisition-dark relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-acquisition-primary/10 via-transparent to-acquisition-primary/5" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-center mb-16"
            >
              <h2 className="font-sans text-4xl sm:text-5xl font-bold text-white mb-6">
                Core <span className="text-acquisition-accent">Values</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                The principles that guide every decision, every project, and every partnership
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
                  title: "Client-First Results",
                  description: "Every solution designed for measurable business impact",
                  icon: <Target className="w-6 h-6" />
                },
                {
                  title: "Technical Excellence",
                  description: "Business strategy expertise meets world-class engineering",
                  icon: <Brain className="w-6 h-6" />
                },
                {
                  title: "Transparent Partnership",
                  description: "Clear communication, realistic timelines, honest guidance",
                  icon: <Heart className="w-6 h-6" />
                },
                {
                  title: "Continuous Innovation",
                  description: "Staying ahead of AI evolution to future-proof client investments",
                  icon: <Rocket className="w-6 h-6" />
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 60, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
                >
                  <motion.div
                    className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="font-sans text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* What Makes Us Different */}
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
                Beyond Traditional <span className="gradient-text">Consulting</span>
              </h2>
              <p className="text-xl text-acquisition-secondary max-w-3xl mx-auto">
                What sets us apart in the world of AI consulting and business transformation
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
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                {
                  title: "We Build, Not Just Advise",
                  description: "Hands-on implementation, not just PowerPoint strategies",
                  features: ["Working code delivery", "Live system deployment", "Real-time optimization", "Ongoing support"],
                  icon: <Code className="w-6 h-6" />
                },
                {
                  title: "Industry Specialization",
                  description: "Deep expertise across 27 specific verticals",
                  features: ["Sector-specific solutions", "Industry best practices", "Regulatory compliance", "Market understanding"],
                  icon: <Globe className="w-6 h-6" />
                },
                {
                  title: "Self-Hosted Solutions",
                  description: "Clients can own and control their AI infrastructure",
                  features: ["Complete data ownership", "Security control", "Custom modifications", "No vendor lock-in"],
                  icon: <Shield className="w-6 h-6" />
                },
                {
                  title: "Proven Methodology",
                  description: "Systematic frameworks that ensure consistent success",
                  features: ["VALIDATE framework", "SCALE methodology", "ASSESS process", "ADAPT approach"],
                  icon: <Award className="w-6 h-6" />
                }
              ].map((differentiator, index) => (
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
                      {differentiator.icon}
                    </motion.div>
                    <h3 className="font-sans text-2xl font-bold text-acquisition-primary mb-4 group-hover:text-acquisition-accent transition-colors">{differentiator.title}</h3>
                    <p className="text-acquisition-secondary mb-6 leading-relaxed">{differentiator.description}</p>

                    <ul className="space-y-3 text-sm text-acquisition-secondary">
                      {differentiator.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-acquisition-accent flex-shrink-0" />
                          <span className="group-hover:text-acquisition-primary transition-colors">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom glow effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acquisition-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection>
        <section className="py-20 bg-acquisition-darker">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3
                  }
                }
              }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="acquisition-card p-10"
              >
                <motion.div
                  className="w-20 h-20 bg-acquisition-primary rounded-3xl flex items-center justify-center text-white mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Target className="w-10 h-10" />
                </motion.div>
                <h3 className="font-sans text-3xl font-bold text-acquisition-primary mb-6">Our Mission</h3>
                <p className="text-lg text-acquisition-secondary leading-relaxed">
                  Making AI accessible, practical, and profitable for businesses of every size
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="acquisition-card p-10"
              >
                <motion.div
                  className="w-20 h-20 bg-acquisition-accent rounded-3xl flex items-center justify-center text-white mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Lightbulb className="w-10 h-10" />
                </motion.div>
                <h3 className="font-sans text-3xl font-bold text-acquisition-primary mb-6">Our Vision</h3>
                <p className="text-lg text-acquisition-secondary leading-relaxed">
                  A world where every business operates with intelligent, autonomous systems that amplify human potential
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* By the Numbers */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-acquisition-primary via-acquisition-darker to-acquisition-dark relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-acquisition-primary/10 via-transparent to-acquisition-primary/5" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-center mb-16"
            >
              <h2 className="font-sans text-4xl sm:text-5xl font-bold text-white mb-6">
                Our <span className="text-acquisition-accent">Impact</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Measurable results that demonstrate our commitment to client success
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
                { number: "200+", label: "Successful AI Implementations", icon: <Code className="w-8 h-8" /> },
                { number: "27", label: "Industry Verticals Served", icon: <Globe className="w-8 h-8" /> },
                { number: "$50M+", label: "Client Value Generated", icon: <TrendingUp className="w-8 h-8" /> },
                { number: "95%", label: "Client Satisfaction Rate", icon: <Star className="w-8 h-8" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 60, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                  }}
                  whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.3 } }}
                  className="text-center group"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-6 group-hover:bg-white/20 transition-all duration-300"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white group-hover:text-acquisition-accent transition-colors">
                      {stat.icon}
                    </div>
                  </motion.div>
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-acquisition-accent transition-colors">{stat.number}</div>
                  <div className="text-blue-100 group-hover:text-white transition-colors">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection>
        <section className="py-20 bg-acquisition-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <h2 className="font-sans text-4xl sm:text-5xl font-bold text-acquisition-primary mb-6">
                Ready to Write Your <span className="gradient-text">Success Story</span>?
              </h2>
              <p className="text-xl text-acquisition-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
                Join the hundreds of businesses that have transformed their operations with AI that actually works. Your story starts here.
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
                  "Partnership Over Projects",
                  "AI That Actually Works",
                  "Your Success is Our Mission"
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