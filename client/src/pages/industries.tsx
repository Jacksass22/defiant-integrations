import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { Search, ArrowRight, Zap, Target, TrendingUp, Layers, Home, Users, ShoppingBag, Briefcase, Package } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { getAllIndustries } from '@/data/industries';
import { motion, useInView, useAnimation } from 'framer-motion';
import GridDistortion from '@/components/GridDistortion';

export default function Industries() {
  useScrollToTop();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const allIndustries = getAllIndustries();

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

  // Industry sections with different animation styles
  const industrySections = [
    {
      id: 'trades-home-services',
      title: 'Trades & Home Services',
      subtitle: 'Our most popular and proven solutions',
      description: 'Transform field service businesses with automation that handles scheduling, follow-ups, and customer communication.',
      icon: Home,
      bgColor: 'bg-acquisition-dark',
      industries: allIndustries.filter(industry =>
        ['hvac', 'plumbing', 'electrical', 'landscaping', 'roofing', 'painting', 'general-contracting', 'cleaning-services', 'remodeling-renovation'].includes(industry.slug)
      ),
      animationType: 'slideUp',
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      id: 'consumer-lifestyle',
      title: 'Consumer & Lifestyle',
      subtitle: 'Elevating customer experiences',
      description: 'Boost customer retention and attract new clients with intelligent marketing and service automation.',
      icon: Users,
      bgColor: 'bg-acquisition-darker',
      industries: allIndustries.filter(industry =>
        ['restaurants-cafes', 'beauty-salons-spas', 'barbershops', 'gyms-personal-trainers', 'wellness-life-coaches', 'pet-grooming-boarding', 'golf-courses'].includes(industry.slug)
      ),
      animationType: 'slideLeft',
      gradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      id: 'retail-product',
      title: 'Retail & Product',
      subtitle: 'Driving sales and growth',
      description: 'Optimize inventory, enhance customer experience, and boost sales with intelligent retail solutions.',
      icon: ShoppingBag,
      bgColor: 'bg-acquisition-dark',
      industries: allIndustries.filter(industry =>
        ['brick-mortar-retail', 'ecommerce-brands', 'cannabis-retail', 'specialty-food-makers', 'local-boutiques'].includes(industry.slug)
      ),
      animationType: 'slideRight',
      gradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      id: 'professional-services',
      title: 'Professional Services',
      subtitle: 'Streamlining expertise delivery',
      description: 'Automate client management, document processing, and service delivery for professional firms.',
      icon: Briefcase,
      bgColor: 'bg-acquisition-darker',
      industries: allIndustries.filter(industry =>
        ['real-estate-agencies', 'law-firms', 'accounting-tax-firms', 'insurance-brokers', 'hr-recruiting-firms', 'business-consultants'].includes(industry.slug)
      ),
      animationType: 'slideUp',
      gradient: 'from-orange-500/10 to-red-500/10'
    },
    {
      id: 'other-services',
      title: 'Specialized Services',
      subtitle: 'Unique solutions for niche needs',
      description: 'Custom automation solutions designed for specialized business models and requirements.',
      icon: Package,
      bgColor: 'bg-acquisition-dark',
      industries: allIndustries.filter(industry =>
        ['storage-companies'].includes(industry.slug)
      ),
      animationType: 'slideLeft',
      gradient: 'from-teal-500/10 to-cyan-500/10'
    }
  ];

  // Filter industries based on search and category
  const getFilteredSections = () => {
    if (selectedCategory === 'All' && !searchTerm) {
      return industrySections;
    }

    return industrySections.map(section => ({
      ...section,
      industries: section.industries.filter(industry => {
        const matchesSearch = !searchTerm ||
          industry.hero.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          industry.hero.subtitle.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = selectedCategory === 'All' ||
          (selectedCategory === 'Trades & Home Services' && section.id === 'trades-home-services') ||
          (selectedCategory === 'Consumer & Lifestyle' && section.id === 'consumer-lifestyle') ||
          (selectedCategory === 'Retail & Product' && section.id === 'retail-product') ||
          (selectedCategory === 'Professional Services' && section.id === 'professional-services') ||
          (selectedCategory === 'Other Services' && section.id === 'other-services');

        return matchesSearch && matchesCategory;
      })
    })).filter(section => section.industries.length > 0);
  };

  const filteredSections = getFilteredSections();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const getCardVariants = (animationType: string) => {
    const baseVariants = {
      hidden: { opacity: 0, y: 60 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    };

    switch (animationType) {
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: -100, y: 30 },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              duration: 0.7,
              ease: "easeOut"
            }
          }
        };
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: 100, y: 30 },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              duration: 0.7,
              ease: "easeOut"
            }
          }
        };
      case 'slideUp':
      default:
        return baseVariants;
    }
  };

  const IndustrySection = ({ section }: { section: any }) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);

    if (section.industries.length === 0) return null;

    const SectionIcon = section.icon;

    return (
      <section ref={sectionRef} className={`py-20 ${section.bgColor} relative overflow-hidden`}>
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-30`} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-acquisition-primary/20 to-acquisition-primary/10 rounded-2xl">
                <SectionIcon className="w-8 h-8 text-acquisition-primary" />
              </div>
              <div>
                <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-acquisition-primary text-left">
                  {section.title}
                </h2>
                <p className="text-acquisition-accent font-medium text-left">{section.subtitle}</p>
              </div>
            </div>
            <p className="text-xl text-acquisition-secondary max-w-4xl mx-auto leading-relaxed">
              {section.description}
            </p>
          </motion.div>

          {/* Industries Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {section.industries.map((industry: any, index: number) => {
              const industryName = industry.hero.title.replace(/: Smart Technology.*/, '').replace(/: .*/, '');
              const firstStat = industry.problem.stats?.[0] || industry.problem.statistics?.[0];

              return (
                <motion.div
                  key={industry.slug}
                  variants={getCardVariants(section.animationType)}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                >
                  <Link href={`/${industry.slug}`}>
                    <div className="relative acquisition-card overflow-hidden h-full cursor-pointer">
                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-acquisition-primary/5 via-transparent to-acquisition-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-acquisition-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                      <div className="relative p-8 z-10">
                        {/* Industry icon with 3D effect */}
                        <motion.div
                          className="mb-6"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-acquisition-primary/20 to-acquisition-accent/20 rounded-2xl shadow-lg group-hover:shadow-acquisition-primary/25 transition-all duration-300">
                            <ArrowRight className="w-8 h-8 text-acquisition-primary group-hover:text-acquisition-accent transition-colors" />
                          </div>
                        </motion.div>

                        {/* Title */}
                        <h3 className="font-sans text-2xl font-bold text-acquisition-primary mb-4 group-hover:text-acquisition-accent transition-colors line-clamp-2">
                          {industryName}
                        </h3>

                        {/* Subtitle */}
                        <p className="text-acquisition-secondary text-sm mb-6 line-clamp-3 leading-relaxed group-hover:text-acquisition-primary transition-colors">
                          {industry.hero.subtitle}
                        </p>

                        {/* Stats display */}
                        {firstStat && (
                          <div className="flex items-center justify-between pt-4 border-t border-acquisition-primary/20 group-hover:border-acquisition-accent/20 transition-colors">
                            <div className="flex items-center space-x-2">
                              <motion.div
                                className="w-3 h-3 bg-gradient-to-r from-acquisition-primary to-acquisition-accent rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                              <span className="text-lg font-bold text-acquisition-primary">
                                {firstStat.value || firstStat.number}
                              </span>
                              <span className="text-acquisition-secondary text-sm">
                                {firstStat.label || firstStat.title}
                              </span>
                            </div>
                            <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ArrowRight className="w-5 h-5 text-acquisition-secondary group-hover:text-acquisition-primary transition-colors" />
                            </motion.div>
                          </div>
                        )}
                      </div>

                      {/* Bottom glow effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acquisition-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <div className="bg-acquisition-dark text-acquisition-secondary font-sans min-h-screen">
      {/* Hero Section with 3D Effects */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center pt-16 overflow-hidden"
      >
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-acquisition-primary" />
        <div className="absolute inset-0 bg-gradient-radial from-acquisition-primary/10 via-transparent to-transparent" />

        {/* Grid Distortion Effect */}
        <div className="absolute inset-0 opacity-20">
          <GridDistortion
            imageSrc="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1920&h=1080&q=80"
            grid={10}
            mouse={0.1}
            strength={0.15}
            relaxation={0.9}
          />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-10 w-64 h-64 bg-acquisition-primary/10 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
            }}
          />
          <div
            className="absolute top-40 right-20 w-96 h-96 bg-acquisition-accent/15 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * 15}px)`,
              animationDelay: '2s'
            }}
          />
          <div
            className="absolute bottom-20 left-1/4 w-32 h-32 bg-acquisition-primary/20 rounded-full blur-2xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * -25}px)`,
              animationDelay: '4s'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-acquisition-primary/10 backdrop-blur-sm border border-acquisition-primary/20 rounded-full px-6 py-2 mb-8"
            >
              <Zap className="w-4 h-4 text-acquisition-accent" />
              <span className="text-sm text-acquisition-secondary font-medium">25+ Industries Transformed</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-acquisition-primary leading-tight"
            >
              Industries We <span className="gradient-text">Transform</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-acquisition-secondary mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              From strategy development to full implementation - we deliver end-to-end AI solutions across diverse industries with measurable results and 24/7 operation capability.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { icon: Target, number: '25+', label: 'Industries Served' },
                { icon: TrendingUp, number: '300%', label: 'Avg ROI Increase' },
                { icon: Layers, number: '90', label: 'Days to Transform' },
                { icon: Zap, number: '24/7', label: 'System Operation' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-acquisition-primary/10 border border-acquisition-primary/20 rounded-2xl mb-4 group-hover:bg-acquisition-accent/10 group-hover:border-acquisition-accent/30 transition-all duration-300">
                      <Icon className="w-8 h-8 text-acquisition-primary group-hover:text-acquisition-accent transition-colors" />
                    </div>
                    <div className="text-3xl font-bold text-acquisition-primary mb-1">{stat.number}</div>
                    <div className="text-acquisition-secondary text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter - Floating Section */}
      <section className="sticky top-0 z-50 py-6 px-4 sm:px-6 lg:px-8 bg-acquisition-darker/95 backdrop-blur-sm border-b border-acquisition-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-acquisition-primary/10 to-acquisition-accent/10 rounded-2xl blur-sm"></div>
              <div className="relative bg-acquisition-primary/5 backdrop-blur-sm border border-acquisition-primary/20 rounded-2xl overflow-hidden">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-acquisition-secondary w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search industries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-transparent text-acquisition-primary placeholder-acquisition-secondary focus:outline-none focus:ring-2 focus:ring-acquisition-primary/50"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {['All', 'Trades & Home Services', 'Consumer & Lifestyle', 'Retail & Product', 'Professional Services', 'Other Services'].map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-acquisition-primary to-acquisition-accent text-white shadow-lg shadow-acquisition-primary/25'
                      : 'bg-acquisition-primary/10 text-acquisition-secondary hover:bg-acquisition-primary/20 border border-acquisition-primary/20 hover:border-acquisition-primary/30'
                  }`}
                >
                  <span className="relative z-10">{category}</span>
                  {selectedCategory === category && (
                    <div className="absolute inset-0 bg-gradient-to-r from-acquisition-primary/20 to-acquisition-accent/20 rounded-xl blur-sm"></div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      {filteredSections.length === 0 ? (
        <section className="py-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-acquisition-primary/10 border border-acquisition-primary/20 rounded-2xl mb-6">
            <Search className="w-10 h-10 text-acquisition-secondary" />
          </div>
          <p className="text-acquisition-secondary text-lg mb-4">No industries found matching your search.</p>
          <p className="text-acquisition-muted text-sm">Try adjusting your search terms or filters</p>
        </section>
      ) : (
        filteredSections.map((section) => (
          <IndustrySection key={section.id} section={section} />
        ))
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-acquisition-darker to-acquisition-dark text-acquisition-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-acquisition-primary/10 via-transparent to-acquisition-primary/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready to <span className="text-acquisition-accent">Transform</span> Your Industry?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-acquisition-secondary mb-8 leading-relaxed"
          >
            Let's discuss which solutions are the perfect fit for your business goals and growth objectives.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="btn-acquisition inline-flex items-center space-x-2 text-lg"
          >
            <span>Get Your Custom Solution</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}