import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  Target,
  Cog,
  Handshake,
  Lightbulb,
  TrendingUp,
  Shield,
  Users,
  Award,
  Clock,
  Heart,
  Star,
  Zap,
  Eye,
  MessageSquare,
  Building,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import GridDistortion from '@/components/GridDistortion';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function CompanyValues() {
  useScrollToTop();
  const [expandedValue, setExpandedValue] = useState<number | null>(null);
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

  const toggleValue = (index: number) => {
    setExpandedValue(expandedValue === index ? null : index);
  };

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
            imageSrc="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1920&h=1080&q=80"
            grid={10}
            mouse={0.08}
            strength={0.12}
            relaxation={0.9}
          />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-10 w-80 h-80 bg-acquisition-primary/10 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`
            }}
          />
          <div
            className="absolute top-60 right-20 w-64 h-64 bg-acquisition-accent/15 rounded-full blur-2xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * -18}px, ${mousePosition.y * 18}px)`,
              animationDelay: '1.5s'
            }}
          />
          <div
            className="absolute bottom-40 left-1/3 w-48 h-48 bg-acquisition-primary/12 rounded-full blur-xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * -30}px)`,
              animationDelay: '3s'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Content - 60% */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-acquisition-primary/10 backdrop-blur-sm border border-acquisition-primary/20 rounded-full px-6 py-2 mb-8"
              >
                <Heart className="w-4 h-4 text-acquisition-accent" />
                <span className="text-sm text-acquisition-secondary font-medium">Our Values</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-acquisition-primary leading-tight"
              >
                Values That Drive <br />
                <span className="gradient-text">Results</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-acquisition-secondary mb-10 leading-relaxed max-w-2xl"
              >
                Our core values aren't just words on a wall—they're the foundation of every client relationship, every solution we build, and every result we deliver.
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
                  <span>Experience Our Values in Action</span>
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
                  <span className="text-acquisition-secondary">Values-Driven Results</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-acquisition-accent" />
                  <span className="text-acquisition-secondary">Authentic Partnerships</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual - 40% */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="acquisition-card p-8">
                <h3 className="font-semibold text-xl text-acquisition-primary mb-6 flex items-center">
                  <div className="w-8 h-8 bg-acquisition-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <Building className="w-4 h-4 text-acquisition-primary" />
                  </div>
                  Company Culture
                </h3>

                {/* Culture Metrics */}
                <div className="space-y-6">
                  {[
                    { label: "Client Success Focus", value: "100%", description: "Every decision starts here", delay: 0.2 },
                    { label: "System Reliability", value: "99.9%", description: "Technical excellence", delay: 0.4 },
                    { label: "Transparent Communication", value: "Weekly", description: "Progress updates", delay: 0.6 },
                    { label: "Practical Innovation", value: "Purpose", description: "Technology that works", delay: 0.8 }
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
                        <span className="text-acquisition-primary font-bold text-sm">{metric.value}</span>
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

                  {/* Values Commitment */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="bg-acquisition-primary/10 rounded-xl p-4 mt-6"
                  >
                    <div className="text-sm font-medium text-acquisition-primary mb-2">Our Commitment</div>
                    <div className="text-xs text-acquisition-secondary">Living our values in every client interaction and business decision</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Expandable */}
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
                Our <span className="gradient-text">Core Values</span>
              </h2>
              <p className="text-xl text-acquisition-secondary max-w-3xl mx-auto">
                Four principles that guide every decision, drive every project, and define every partnership
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
                  title: "Client Success Above All",
                  principle: "Your success is our only metric that matters",
                  inPractice: "Every decision starts with 'How does this create measurable value for our clients?'",
                  example: "Turning down profitable projects that don't align with client goals",
                  icon: <Target className="w-6 h-6" />,
                  details: {
                    heading: "We Measure Success by Your Growth",
                    points: [
                      "ROI tracking and regular business impact assessments",
                      "Proactive optimization to maximize your investment returns",
                      "Long-term partnerships focused on scaling your competitive advantages",
                      "Success guarantees backed by performance commitments"
                    ]
                  }
                },
                {
                  title: "Relentless Technical Excellence",
                  principle: "Good enough isn't good enough when it comes to your business",
                  inPractice: "Continuous learning, rigorous testing, and world-class implementation standards",
                  example: "99.9% system uptime through obsessive attention to quality and reliability",
                  icon: <Cog className="w-6 h-6" />,
                  details: {
                    heading: "Building Systems That Work, Always",
                    points: [
                      "Rigorous testing protocols ensuring 99.9% reliability",
                      "Continuous performance monitoring and optimization",
                      "Security-first architecture protecting your business data",
                      "Future-proof technology choices that scale with your growth"
                    ]
                  }
                },
                {
                  title: "Transparent Partnership",
                  principle: "Honest communication builds lasting relationships",
                  inPractice: "Clear timelines, realistic expectations, proactive problem-solving communication",
                  example: "Weekly progress reports with honest assessments of challenges and solutions",
                  icon: <Handshake className="w-6 h-6" />,
                  details: {
                    heading: "No Surprises, Just Solutions",
                    points: [
                      "Weekly progress reports with honest milestone assessments",
                      "Upfront communication about challenges and realistic timelines",
                      "Open-book approach to project costs and resource allocation",
                      "Proactive problem-solving before issues impact your business"
                    ]
                  }
                },
                {
                  title: "Innovation with Purpose",
                  principle: "Technology should solve real problems, not create new ones",
                  inPractice: "Practical AI applications that improve business operations, not just flashy features",
                  example: "Custom solutions that integrate seamlessly with existing workflows",
                  icon: <Lightbulb className="w-6 h-6" />,
                  details: {
                    heading: "Technology That Actually Improves Your Business",
                    points: [
                      "Practical AI applications that solve real operational challenges",
                      "Custom solutions designed for your specific industry and workflows",
                      "Integration strategies that enhance rather than disrupt existing processes",
                      "Continuous innovation that creates sustainable competitive advantages"
                    ]
                  }
                }
              ].map((value, index) => (
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
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        className="w-16 h-16 bg-acquisition-primary/10 rounded-2xl flex items-center justify-center text-acquisition-primary"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {value.icon}
                      </motion.div>
                      <motion.button
                        onClick={() => toggleValue(index)}
                        className="text-acquisition-secondary hover:text-acquisition-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {expandedValue === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </motion.button>
                    </div>

                    <h3 className="font-sans text-2xl font-bold text-acquisition-primary mb-4 group-hover:text-acquisition-accent transition-colors">{value.title}</h3>
                    <p className="text-acquisition-accent font-medium mb-4">"{value.principle}"</p>
                    <p className="text-acquisition-secondary text-sm mb-3">
                      <strong>In Practice:</strong> {value.inPractice}
                    </p>
                    <p className="text-acquisition-secondary text-sm mb-4">
                      <strong>Example:</strong> {value.example}
                    </p>

                    {/* Expandable Details */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: expandedValue === index ? "auto" : 0,
                        opacity: expandedValue === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {expandedValue === index && (
                        <div className="border-t border-acquisition-primary/20 pt-4 mt-4">
                          <h4 className="font-semibold text-acquisition-primary mb-3">{value.details.heading}</h4>
                          <ul className="space-y-2">
                            {value.details.points.map((point, pointIndex) => (
                              <motion.li
                                key={pointIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: pointIndex * 0.1 }}
                                className="flex items-start gap-2 text-sm text-acquisition-secondary"
                              >
                                <CheckCircle className="w-4 h-4 text-acquisition-accent flex-shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Bottom glow effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acquisition-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Values-Driven Decision Making */}
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
                Values-Driven <span className="gradient-text">Decision Making</span>
              </h2>
              <p className="text-xl text-acquisition-secondary max-w-3xl mx-auto">
                How our principles guide tough decisions and exceptional service delivery
              </p>
            </motion.div>

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
              className="grid md:grid-cols-2 gap-12"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="acquisition-card p-8"
              >
                <motion.div
                  className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center text-red-400 mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Shield className="w-10 h-10" />
                </motion.div>
                <h3 className="font-sans text-3xl font-bold text-acquisition-primary mb-4">When We Say No</h3>
                <p className="text-lg text-red-400 font-medium mb-6">Protecting Client Interests</p>

                <ul className="space-y-4 text-acquisition-secondary">
                  {[
                    "Projects that don't align with client long-term success",
                    "Technology solutions that create more complexity than value",
                    "Timelines that compromise quality or sustainability",
                    "Engagements that would stretch our ability to deliver excellence"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="acquisition-card p-8"
              >
                <motion.div
                  className="w-20 h-20 bg-green-500/10 rounded-3xl flex items-center justify-center text-green-400 mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Star className="w-10 h-10" />
                </motion.div>
                <h3 className="font-sans text-3xl font-bold text-acquisition-primary mb-4">When We Go Above and Beyond</h3>
                <p className="text-lg text-green-400 font-medium mb-6">Exceeding Expectations</p>

                <ul className="space-y-4 text-acquisition-secondary">
                  {[
                    "Emergency support for critical business operations",
                    "Additional optimization opportunities discovered during projects",
                    "Industry insights and competitive intelligence sharing",
                    "Strategic advice beyond the scope of current engagements"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Client Testimonials */}
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
                Client Testimonials on <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-acquisition-secondary max-w-3xl mx-auto">
                How our values translate into real client experiences and business outcomes
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
                  title: "They Actually Care About Our Success",
                  quote: "Unlike other consultants who just deliver and leave, Defiant Integrations stayed engaged until we saw real ROI. Their success is tied to ours.",
                  author: "CEO, $50M E-commerce Company",
                  value: "Client Success Above All",
                  icon: <Target className="w-6 h-6" />
                },
                {
                  title: "Transparent and Reliable",
                  quote: "Every week we knew exactly where we stood, what was working, and what needed attention. No surprises, just steady progress.",
                  author: "CTO, SaaS Platform",
                  value: "Transparent Partnership",
                  icon: <Handshake className="w-6 h-6" />
                },
                {
                  title: "Innovation That Makes Sense",
                  quote: "They didn't push the latest AI buzzwords on us. They built exactly what our business needed to grow.",
                  author: "Founder, Professional Services Firm",
                  value: "Innovation with Purpose",
                  icon: <Lightbulb className="w-6 h-6" />
                }
              ].map((testimonial, index) => (
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
                      {testimonial.icon}
                    </motion.div>

                    <h3 className="font-sans text-xl font-bold text-acquisition-primary mb-4 group-hover:text-acquisition-accent transition-colors">{testimonial.title}</h3>
                    <p className="text-acquisition-secondary mb-6 italic leading-relaxed">"{testimonial.quote}"</p>

                    <div className="border-t border-acquisition-primary/20 pt-4">
                      <p className="text-sm font-medium text-acquisition-primary">{testimonial.author}</p>
                      <p className="text-xs text-acquisition-accent font-medium mt-1">{testimonial.value}</p>
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

      {/* Culture in Action */}
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
                Culture in <span className="text-acquisition-accent">Action</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                How we live our values every day through continuous learning and results-driven collaboration
              </p>
            </motion.div>

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
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Users className="w-8 h-8" />
                </motion.div>
                <h3 className="font-sans text-2xl font-bold text-white mb-6">Continuous Learning</h3>

                <ul className="space-y-4 text-blue-100">
                  {[
                    "Monthly team training on emerging AI technologies",
                    "Industry conference participation and knowledge sharing",
                    "Client feedback integration into service improvement",
                    "Cross-industry best practice development and application"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-acquisition-accent flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Award className="w-8 h-8" />
                </motion.div>
                <h3 className="font-sans text-2xl font-bold text-white mb-6">Results-Driven Collaboration</h3>

                <ul className="space-y-4 text-blue-100">
                  {[
                    "Team incentives aligned with client success metrics",
                    "Collaborative problem-solving across all disciplines",
                    "Knowledge sharing that benefits entire client portfolio",
                    "Innovation initiatives driven by real client challenges"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-acquisition-accent flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
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
                Ready to Experience <span className="gradient-text">Values-Driven</span> Results?
              </h2>
              <p className="text-xl text-acquisition-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
                See how our value-driven approach creates measurable business transformation and lasting partnerships.
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
                  "Values-Driven Partnership",
                  "Measurable Business Impact",
                  "Transparent Communication"
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