import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Upload, Users, Code, TrendingUp, CheckCircle, User, Phone, FileText, HelpCircle, Zap, Target, Layers } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { motion, useAnimation } from 'framer-motion';
import GridDistortion from '@/components/GridDistortion';

type CareerPath = 'developer' | 'intern' | 'sales-marketing' | '';

interface FormData {
  careerPath: CareerPath;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resume: File | null;
  randomQuestion: string;
  randomAnswer: string;
}

const randomQuestions = [
  "If you could solve any business problem in the world using technology, what would it be and why?",
  "Describe a time when you had to learn something completely new. How did you approach it?",
  "What emerging technology trend excites you most and how do you think it will impact businesses?",
  "Tell us about a project or achievement you're most proud of and what made it special.",
  "How would you explain artificial intelligence to a 10-year-old?",
  "What's one industry that you think is ripe for digital transformation and why?",
  "Describe your ideal work environment and what motivates you to do your best work.",
  "If you were starting a consulting company, what would be your first piece of advice to businesses?",
  "What's a skill you're currently developing and how are you going about learning it?",
  "How do you stay updated with the latest trends in your field of interest?"
];

export default function CareersPage() {
  useScrollToTop();

  const [currentStep, setCurrentStep] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    careerPath: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null,
    randomQuestion: '',
    randomAnswer: ''
  });

  const totalSteps = 5;

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

  const handleCareerPathSelect = (path: CareerPath) => {
    const randomQuestion = randomQuestions[Math.floor(Math.random() * randomQuestions.length)];
    setFormData({ ...formData, careerPath: path, randomQuestion });
    setCurrentStep(2);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFormData({ ...formData, resume: file });
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0] || null;
    if (file && (file.type === 'application/pdf' || file.type.includes('document'))) {
      setFormData({ ...formData, resume: file });
    }
  };

  const triggerFileInput = () => {
    const fileInput = document.getElementById('resume-upload') as HTMLInputElement;
    fileInput?.click();
  };

  const handleSubmit = async () => {
    try {
      const submissionData = {
        careerPath: formData.careerPath,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        resumeFileName: formData.resume?.name || null,
        randomQuestion: formData.randomQuestion,
        randomAnswer: formData.randomAnswer,
        status: 'pending'
      };

      const response = await fetch('/api/career-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Application submitted successfully:', result);
        setCurrentStep(6); // Success step
      } else {
        const errorData = await response.json();
        console.error('Submission error:', errorData);
        alert('There was an error submitting your application. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('There was a network error. Please check your connection and try again.');
    }
  };

  const getCareerPathInfo = (path: CareerPath) => {
    switch (path) {
      case 'developer':
        return {
          title: 'Software Developer',
          description: 'Build cutting-edge solutions that transform how businesses operate',
          icon: <Code className="w-8 h-8" />,
          gradient: 'from-acquisition-primary to-acquisition-accent',
          hoverColor: 'hover:border-acquisition-primary/30'
        };
      case 'intern':
        return {
          title: 'Internship Program',
          description: 'Launch your career with hands-on experience in enterprise consulting',
          icon: <Users className="w-8 h-8" />,
          gradient: 'from-green-500 to-emerald-600',
          hoverColor: 'hover:border-green-500/30'
        };
      case 'sales-marketing':
        return {
          title: 'Sales & Marketing',
          description: 'Drive growth and build relationships with enterprise clients',
          icon: <TrendingUp className="w-8 h-8" />,
          gradient: 'from-purple-500 to-violet-600',
          hoverColor: 'hover:border-purple-500/30'
        };
      default:
        return null;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-sans text-4xl sm:text-5xl font-bold text-acquisition-primary mb-6">
                Choose Your <span className="gradient-text">Career Path</span>
              </h2>
              <p className="text-xl text-acquisition-secondary max-w-3xl mx-auto leading-relaxed">
                Join our team of experts who are transforming businesses through intelligent technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { path: 'developer', delay: 0.2 },
                { path: 'intern', delay: 0.4 },
                { path: 'sales-marketing', delay: 0.6 }
              ].map(({ path, delay }) => {
                const pathInfo = getCareerPathInfo(path as CareerPath);
                if (!pathInfo) return null;

                return (
                  <motion.div
                    key={path}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    onClick={() => handleCareerPathSelect(path as CareerPath)}
                    className="group relative acquisition-card cursor-pointer overflow-hidden"
                  >
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-acquisition-primary/5 via-transparent to-acquisition-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-acquisition-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                    <div className="relative p-8 z-10">
                      <motion.div
                        className="mb-6"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${pathInfo.gradient} text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          {pathInfo.icon}
                        </div>
                      </motion.div>

                      <h3 className="font-sans text-2xl font-bold text-acquisition-primary mb-4 group-hover:text-acquisition-accent transition-colors">
                        {pathInfo.title}
                      </h3>

                      <p className="text-acquisition-secondary mb-6 leading-relaxed group-hover:text-acquisition-primary transition-colors">
                        {pathInfo.description}
                      </p>

                      <motion.div
                        className="inline-flex items-center space-x-2 text-acquisition-primary font-medium group-hover:text-acquisition-accent transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>

                    {/* Bottom glow effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acquisition-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                );
              })}
            </div>

            {/* Company Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { icon: Target, number: '25+', label: 'Industries Served' },
                { icon: TrendingUp, number: '90%', label: 'Client Retention' },
                { icon: Users, number: '50+', label: 'Team Members' },
                { icon: Layers, number: '24/7', label: 'System Operation' }
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
        );

      case 2:
        const pathInfo = getCareerPathInfo(formData.careerPath);
        return (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${pathInfo?.gradient} text-white rounded-2xl mb-4 shadow-lg`}
              >
                {pathInfo?.icon}
              </motion.div>
              <h2 className="font-sans text-3xl font-bold text-acquisition-primary mb-2">
                {pathInfo?.title}
              </h2>
              <p className="text-lg text-acquisition-secondary">
                {pathInfo?.description}
              </p>
            </div>

            <div className="acquisition-card p-8">
              <h3 className="font-semibold text-xl text-acquisition-primary mb-6 flex items-center">
                <div className="w-8 h-8 bg-acquisition-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <User className="w-4 h-4 text-acquisition-primary" />
                </div>
                Personal Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-acquisition-secondary mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 bg-acquisition-primary/5 border border-acquisition-primary/20 rounded-lg focus:ring-2 focus:ring-acquisition-primary/50 focus:border-acquisition-primary text-acquisition-primary placeholder-acquisition-secondary/60 transition-all duration-300"
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-acquisition-secondary mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 bg-acquisition-primary/5 border border-acquisition-primary/20 rounded-lg focus:ring-2 focus:ring-acquisition-primary/50 focus:border-acquisition-primary text-acquisition-primary placeholder-acquisition-secondary/60 transition-all duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-acquisition-secondary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-acquisition-primary/5 border border-acquisition-primary/20 rounded-lg focus:ring-2 focus:ring-acquisition-primary/50 focus:border-acquisition-primary text-acquisition-primary placeholder-acquisition-secondary/60 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-acquisition-secondary mb-2 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-acquisition-primary/5 border border-acquisition-primary/20 rounded-lg focus:ring-2 focus:ring-acquisition-primary/50 focus:border-acquisition-primary text-acquisition-primary placeholder-acquisition-secondary/60 transition-all duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="acquisition-card p-8">
              <h3 className="font-semibold text-xl text-acquisition-primary mb-6 flex items-center">
                <div className="w-8 h-8 bg-acquisition-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-acquisition-primary" />
                </div>
                Resume Upload
              </h3>

              <motion.div
                className="border-2 border-dashed border-acquisition-primary/30 rounded-2xl p-8 text-center hover:border-acquisition-primary/50 transition-all duration-300 cursor-pointer bg-acquisition-primary/5 hover:bg-acquisition-primary/10"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={triggerFileInput}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Upload className="w-12 h-12 text-acquisition-primary mx-auto mb-4" />
                </motion.div>
                <div className="mb-4">
                  <span className="text-acquisition-primary hover:text-acquisition-accent font-medium transition-colors">
                    Click to upload your resume
                  </span>
                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <p className="text-acquisition-secondary text-sm mt-2">
                    or drag and drop your file here
                  </p>
                </div>
                <p className="text-xs text-acquisition-secondary/70">
                  Supported formats: PDF, DOC, DOCX (Max 10MB)
                </p>

                {formData.resume && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg"
                  >
                    <div className="flex items-center justify-center text-green-400">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-medium">{formData.resume.name}</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="acquisition-card p-8">
              <h3 className="font-semibold text-xl text-acquisition-primary mb-6 flex items-center">
                <div className="w-8 h-8 bg-acquisition-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <HelpCircle className="w-4 h-4 text-acquisition-primary" />
                </div>
                Tell Us About Yourself
              </h3>

              <div className="bg-acquisition-primary/10 border border-acquisition-primary/20 rounded-2xl p-6 mb-6">
                <h4 className="font-medium text-acquisition-primary mb-3 flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Question:
                </h4>
                <p className="text-acquisition-secondary leading-relaxed">
                  {formData.randomQuestion}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-acquisition-secondary mb-2">
                  Your Answer *
                </label>
                <textarea
                  value={formData.randomAnswer}
                  onChange={(e) => setFormData({ ...formData, randomAnswer: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-acquisition-primary/5 border border-acquisition-primary/20 rounded-lg focus:ring-2 focus:ring-acquisition-primary/50 focus:border-acquisition-primary text-acquisition-primary placeholder-acquisition-secondary/60 resize-none transition-all duration-300"
                  placeholder="Share your thoughts here..."
                />
                <p className="text-sm text-acquisition-secondary/70 mt-2">
                  Take your time to provide a thoughtful response. This helps us understand your perspective and approach to problem-solving.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="acquisition-card p-8">
              <h3 className="font-semibold text-xl text-acquisition-primary mb-6">
                Review Your Application
              </h3>

              <div className="space-y-6">
                <div className="p-4 bg-acquisition-primary/5 rounded-lg">
                  <h4 className="font-medium text-acquisition-primary mb-2">Position</h4>
                  <p className="text-acquisition-secondary">{getCareerPathInfo(formData.careerPath)?.title}</p>
                </div>

                <div className="p-4 bg-acquisition-primary/5 rounded-lg">
                  <h4 className="font-medium text-acquisition-primary mb-2">Personal Information</h4>
                  <p className="text-acquisition-secondary">{formData.firstName} {formData.lastName}</p>
                  <p className="text-acquisition-secondary">{formData.email}</p>
                  <p className="text-acquisition-secondary">{formData.phone}</p>
                </div>

                <div className="p-4 bg-acquisition-primary/5 rounded-lg">
                  <h4 className="font-medium text-acquisition-primary mb-2">Resume</h4>
                  <p className="text-acquisition-secondary">{formData.resume?.name || 'No file uploaded'}</p>
                </div>

                <div className="p-4 bg-acquisition-primary/5 rounded-lg">
                  <h4 className="font-medium text-acquisition-primary mb-2">Your Response</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-acquisition-primary font-medium mb-1">Question:</p>
                      <p className="text-sm text-acquisition-secondary">{formData.randomQuestion}</p>
                    </div>
                    <div>
                      <p className="text-sm text-acquisition-primary font-medium mb-1">Answer:</p>
                      <p className="text-sm text-acquisition-secondary">{formData.randomAnswer}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-acquisition-accent/10 border border-acquisition-accent/20 rounded-lg">
                <p className="text-sm text-acquisition-secondary">
                  By submitting this application, you consent to Defiant Integrations storing and processing your personal information for recruitment purposes.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="acquisition-card p-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 text-green-400 rounded-full mb-6"
              >
                <CheckCircle className="w-10 h-10" />
              </motion.div>

              <h2 className="font-sans text-3xl font-bold text-acquisition-primary mb-4">
                Application Submitted Successfully
              </h2>

              <p className="text-lg text-acquisition-secondary mb-8">
                Thank you for your interest in joining Defiant Integrations. We've received your application and will review it carefully.
              </p>

              <div className="bg-acquisition-primary/5 p-6 rounded-lg mb-8">
                <h3 className="font-semibold text-acquisition-primary mb-3">What happens next?</h3>
                <ul className="text-sm text-acquisition-secondary space-y-2 text-left">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-acquisition-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Our team will get back to you.
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-acquisition-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    If there's a potential fit, we'll reach out to schedule an initial conversation
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-acquisition-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    You'll receive updates via email at {formData.email}
                  </li>
                </ul>
              </div>

              <motion.button
                onClick={() => window.location.href = '/'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-acquisition inline-flex items-center space-x-2 text-lg"
              >
                <span>Return to Homepage</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 2:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 3:
        return formData.resume !== null;
      case 4:
        return formData.randomAnswer.length > 10;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-acquisition-dark text-acquisition-secondary font-sans">

      {/* Hero Section with 3D Effects */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center pt-16 overflow-hidden"
      >
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-acquisition-primary" />
        <div className="absolute inset-0 bg-gradient-radial from-acquisition-primary/10 via-transparent to-transparent" />

        {/* Grid Distortion Effect */}
        <div className="absolute inset-0 opacity-20">
          <GridDistortion
            imageSrc="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&h=1080&q=80"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-acquisition-primary/10 backdrop-blur-sm border border-acquisition-primary/20 rounded-full px-6 py-2 mb-8"
          >
            <Users className="w-4 h-4 text-acquisition-accent" />
            <span className="text-sm text-acquisition-secondary font-medium">Join Our Growing Team</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-acquisition-primary"
          >
            Build the Future with <span className="gradient-text">Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-acquisition-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Transform businesses through intelligent enterprise solutions. Shape the future of AI-powered automation.
          </motion.p>
        </div>
      </section>

      {/* Progress Bar */}
      {currentStep > 1 && currentStep <= 5 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sticky top-0 z-50 bg-acquisition-darker/95 backdrop-blur-sm border-b border-acquisition-primary/20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-acquisition-secondary">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-acquisition-secondary/70">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-acquisition-primary/20 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-acquisition-primary to-acquisition-accent h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Form Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderStep()}
        </div>
      </section>

      {/* Navigation Buttons */}
      {currentStep > 1 && currentStep <= 5 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-acquisition-darker/95 backdrop-blur-sm rounded-2xl shadow-lg border border-acquisition-primary/20 px-6 py-4 flex items-center space-x-4">
            <motion.button
              onClick={handleBack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 text-acquisition-secondary hover:text-acquisition-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </motion.button>

            <div className="w-px bg-acquisition-primary/30 h-6" />

            <motion.button
              onClick={currentStep === 5 ? handleSubmit : handleNext}
              disabled={!canProceed()}
              whileHover={canProceed() ? { scale: 1.05 } : {}}
              whileTap={canProceed() ? { scale: 0.95 } : {}}
              className="btn-acquisition inline-flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span>{currentStep === 5 ? 'Submit Application' : 'Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}