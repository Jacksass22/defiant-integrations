import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Users, 
  TrendingUp, 
  Eye, 
  Lock, 
  Scale, 
  Target,
  Building2,
  Database,
  Settings,
  Award,
  ArrowRight,
  Zap
} from 'lucide-react';
import BlurText from '@/components/BlurText';

export default function GovernanceFrameworks() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-slate-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-slate-600 font-semibold text-sm uppercase tracking-wider mb-4">
                RESPONSIBLE AI WITH BULLETPROOF COMPLIANCE
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <BlurText text="AI Governance That Protects Your Business" delay={150} animateBy="words" direction="top" />
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Enterprise-grade governance frameworks that ensure AI compliance, mitigate risks, and build stakeholder confidence while maximizing business value.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Schedule Governance Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-slate-600 text-slate-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300">
                  Download Framework Guide
                </button>
              </div>
              
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-600" />
                  <span className="text-gray-600">200+ Organizations Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-600" />
                  <span className="text-gray-600">Zero Compliance Failures</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-6">Governance Framework Dashboard</h3>
                
                {/* Compliance Status */}
                <div className="space-y-6">
                  {[
                    { framework: "GDPR Compliance", status: 100, risk: "low" },
                    { framework: "SOX Requirements", status: 98, risk: "low" },
                    { framework: "CCPA Adherence", status: 95, risk: "medium" },
                    { framework: "Industry Standards", status: 92, risk: "medium" }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{item.framework}</span>
                        <div className="flex items-center gap-3 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.risk === 'low' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {item.risk} risk
                          </span>
                          <span className="font-bold text-slate-600">{item.status}%</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-slate-600 to-slate-500 h-3 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${item.status}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Overall Compliance Score:</span>
                    <span className="font-bold text-slate-600">96.3%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12"
          >
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                AI Without Governance Is a Liability Waiting to Happen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive governance frameworks provide the structure, policies, and oversight mechanisms that enable confident AI adoption while protecting your business from regulatory, ethical, and operational risks.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Regulatory Protection</h3>
                <p className="text-gray-600">Stay ahead of evolving AI regulations and avoid costly compliance failures with proactive governance frameworks.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Risk Mitigation</h3>
                <p className="text-gray-600">Comprehensive risk assessment and management strategies that protect your business from AI-related vulnerabilities.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Stakeholder Trust</h3>
                <p className="text-gray-600">Build confidence with customers, investors, and regulators through transparent and accountable AI practices.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Governance Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Governance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four foundational pillars of AI governance that protect your business and enable responsible innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Strategy & Policy Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-slate-700 transition-colors duration-300 mb-2">
                    AI Strategy & Policy Development
                  </h3>
                  <p className="text-slate-800 font-medium mb-4">Foundation for Responsible AI</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-600 group-hover:text-slate-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">AI Ethics Framework: Principles and guidelines for ethical AI use</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-600 group-hover:text-slate-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Data Governance Policies: Privacy, security, and usage protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-600 group-hover:text-slate-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Risk Management Framework: Identification and mitigation strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-600 group-hover:text-slate-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Compliance Mapping: Alignment with industry regulations</span>
                </li>
              </ul>
              
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Foundation Package</span>
                  <span className="font-bold text-slate-600">$25K-45K</span>
                </div>
              </div>
            </motion.div>

            {/* Regulatory Compliance & Risk Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 mb-2">
                    Regulatory Compliance & Risk Management
                  </h3>
                  <p className="text-blue-800 font-medium mb-4">Stay Ahead of Evolving Regulations</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Regulatory Landscape Monitoring: Tracking emerging requirements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Compliance Assessment: Gap analysis against requirements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Risk Assessment & Mitigation: Comprehensive evaluation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Audit Preparation: Documentation for regulatory audits</span>
                </li>
              </ul>
              
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Compliance Package</span>
                  <span className="font-bold text-blue-600">$45K-85K</span>
                </div>
              </div>
            </motion.div>

            {/* Operational Governance Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300 mb-2">
                    Operational Governance Implementation
                  </h3>
                  <p className="text-green-800 font-medium mb-4">Governance in Action</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">AI Oversight Committees: Structure and processes for governance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Decision-Making Frameworks: Clear protocols for AI decisions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Performance Monitoring: KPIs for responsible AI operation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Incident Response Plans: Procedures for AI-related issues</span>
                </li>
              </ul>
              
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Implementation Package</span>
                  <span className="font-bold text-green-600">$65K-120K</span>
                </div>
              </div>
            </motion.div>

            {/* Transparency & Accountability Systems */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 mb-2">
                    Transparency & Accountability Systems
                  </h3>
                  <p className="text-purple-800 font-medium mb-4">Building Trust Through Transparency</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 group-hover:text-purple-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Explainable AI Implementation: Auditable decision-making</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 group-hover:text-purple-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Audit Trail Systems: Complete documentation of processes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 group-hover:text-purple-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Stakeholder Reporting: Regular governance reporting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 group-hover:text-purple-700 transition-colors duration-300 flex-shrink-0" />
                  <span className="group-hover:text-gray-800 transition-colors duration-300">Public Transparency: External communication about AI use</span>
                </li>
              </ul>
              
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Transparency Package</span>
                  <span className="font-bold text-purple-600">$35K-75K</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              The TRUST Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Comprehensive 5-Pillar Governance Model for Responsible AI Implementation
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                letter: "T",
                title: "Transparency",
                description: "Clear AI decision-making processes",
                items: ["Clear AI decision-making", "Explainable outcomes", "Open stakeholder communication", "Regular public reporting"],
                color: "blue"
              },
              {
                letter: "R",
                title: "Responsibility",
                description: "Clear ownership and accountability",
                items: ["Clear ownership structure", "Defined roles & responsibilities", "Performance measurement", "Consequence management"],
                color: "green"
              },
              {
                letter: "U",
                title: "User-Centric Design",
                description: "Human oversight and control",
                items: ["Human oversight & control", "User consent & choice", "Accessibility & fairness", "Privacy by design"],
                color: "purple"
              },
              {
                letter: "S",
                title: "Security & Safety",
                description: "Robust cybersecurity measures",
                items: ["Robust cybersecurity", "AI safety protocols", "Risk mitigation strategies", "Incident response"],
                color: "orange"
              },
              {
                letter: "T",
                title: "Testing & Validation",
                description: "Continuous monitoring and evaluation",
                items: ["Continuous monitoring", "Bias & fairness testing", "Performance validation", "Third-party audits"],
                color: "red"
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center cursor-pointer"
              >
                <div className={`w-16 h-16 bg-${pillar.color}-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4`}>
                  {pillar.letter}
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 mb-4">{pillar.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {pillar.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 bg-${pillar.color}-500 rounded-full flex-shrink-0`}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Governance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Industry-Specific Governance Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored governance frameworks that address unique regulatory and compliance requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Financial Services",
                focus: "SEC, FINRA, OCC Compliance",
                areas: ["Algorithmic trading", "Credit decisions", "Fraud detection", "Model risk management"],
                investment: "$85K-150K",
                icon: <Building2 className="w-8 h-8" />
              },
              {
                title: "Healthcare",
                focus: "FDA, HIPAA Regulations",
                areas: ["Diagnostic AI", "Patient data privacy", "Clinical decision support", "Medical device regulations"],
                investment: "$75K-140K",
                icon: <Shield className="w-8 h-8" />
              },
              {
                title: "E-commerce",
                focus: "Consumer Protection",
                areas: ["Pricing algorithms", "Recommendation systems", "Customer profiling", "Data consent management"],
                investment: "$45K-95K",
                icon: <Target className="w-8 h-8" />
              },
              {
                title: "Enterprise",
                focus: "Employment & Data Protection",
                areas: ["HR AI systems", "Customer service automation", "Business intelligence", "Vendor management"],
                investment: "$55K-115K",
                icon: <Users className="w-8 h-8" />
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 mb-4">
                  {industry.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-slate-600 font-medium mb-4">{industry.focus}</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Areas:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {industry.areas.map((area, areaIndex) => (
                        <li key={areaIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-slate-600 flex-shrink-0" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-3 text-center">
                  <span className="font-bold text-slate-600">{industry.investment}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Assessment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              360-Degree Risk Evaluation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive risk assessment across all dimensions of AI implementation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { category: "Technical Risks", impact: "High", mitigation: "98%" },
              { category: "Legal & Regulatory", impact: "Critical", mitigation: "96%" },
              { category: "Operational Risks", impact: "Medium", mitigation: "94%" },
              { category: "Reputational Risks", impact: "High", mitigation: "97%" }
            ].map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-slate-600 mb-2">{risk.mitigation}</div>
                <div className="font-semibold text-gray-900 mb-1">{risk.category}</div>
                <div className={`text-sm px-2 py-1 rounded-full inline-block ${
                  risk.impact === 'Critical' ? 'bg-red-100 text-red-700' :
                  risk.impact === 'High' ? 'bg-orange-100 text-orange-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {risk.impact} Impact
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Risk Categories</h3>
                <div className="space-y-4">
                  {[
                    { risk: "Algorithm bias and discrimination", severity: "high" },
                    { risk: "Data quality and integrity issues", severity: "medium" },
                    { risk: "System security vulnerabilities", severity: "high" },
                    { risk: "Non-compliance with regulations", severity: "critical" },
                    { risk: "Reputational damage", severity: "high" },
                    { risk: "Over-reliance on AI systems", severity: "medium" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-700">{item.risk}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.severity === 'critical' ? 'bg-red-100 text-red-700' :
                        item.severity === 'high' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Mitigation Strategies</h3>
                <ul className="space-y-3">
                  {[
                    "Proactive risk identification and assessment",
                    "Multi-layered security and compliance frameworks",
                    "Continuous monitoring and early warning systems",
                    "Incident response and recovery procedures",
                    "Regular audits and third-party validations",
                    "Stakeholder communication and transparency"
                  ].map((strategy, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                      <span className="text-gray-700">{strategy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Governance Implementation Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to building bulletproof AI governance from foundation to maturity
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                phase: "Phase 1",
                title: "Assessment & Design",
                duration: "Months 1-2",
                tasks: ["Current state evaluation", "Risk assessment", "Custom framework design", "Stakeholder alignment"],
                deliverable: "Governance Blueprint"
              },
              {
                phase: "Phase 2",
                title: "Framework Implementation",
                duration: "Months 3-4",
                tasks: ["Policy development", "Governance structure", "Platform deployment", "Team training"],
                deliverable: "Operational Framework"
              },
              {
                phase: "Phase 3",
                title: "Operationalization",
                duration: "Months 5-6",
                tasks: ["Process integration", "Monitoring setup", "Response validation", "Communication launch"],
                deliverable: "Live Governance System"
              },
              {
                phase: "Phase 4",
                title: "Optimization & Maturity",
                duration: "Months 7-12",
                tasks: ["Continuous improvement", "Advanced analytics", "Expanded scope", "External validation"],
                deliverable: "Mature Governance Practice"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative"
              >
                <div className="absolute -top-3 left-6 bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {phase.phase}
                </div>
                <div className="pt-4">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-slate-600 font-medium mb-4">{phase.duration}</p>
                  
                  <ul className="text-sm text-gray-600 space-y-2 mb-4">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0"></div>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-slate-50 rounded-lg p-3">
                    <span className="font-semibold text-sm text-gray-900">Key Deliverable:</span>
                    <div className="text-slate-600 font-medium">{phase.deliverable}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & ROI */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Governance Investment & Value Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise governance frameworks that protect against million-dollar risks
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Small Organizations",
                subtitle: "50-200 employees",
                price: "$25K-45K",
                description: "Foundational governance framework",
                features: [
                  "Basic policy framework",
                  "Risk assessment",
                  "Compliance mapping",
                  "Initial training",
                  "Quarterly reviews"
                ],
                featured: false
              },
              {
                title: "Medium Enterprises",
                subtitle: "200-1000 employees",
                price: "$45K-85K",
                description: "Comprehensive governance system",
                features: [
                  "Full governance framework",
                  "Advanced risk management",
                  "Industry-specific compliance",
                  "Training programs",
                  "Monthly monitoring"
                ],
                featured: true
              },
              {
                title: "Large Corporations",
                subtitle: "1000+ employees",
                price: "$85K-150K",
                description: "Enterprise-grade governance",
                features: [
                  "Complete governance ecosystem",
                  "Multi-jurisdictional compliance",
                  "Executive governance programs",
                  "Continuous monitoring",
                  "Board-level reporting"
                ],
                featured: false
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  scale: tier.featured ? 1.05 : 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group ${tier.featured ? 'ring-2 ring-slate-600 scale-105' : ''}`}
              >
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-slate-700 transition-colors duration-300 mb-2">{tier.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-4">{tier.subtitle}</p>
                  <div className="text-3xl font-bold text-slate-600 group-hover:text-slate-700 transition-colors duration-300 mb-2">{tier.price}</div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{tier.description}</p>
                </div>
                
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-slate-600 group-hover:text-slate-700 transition-colors duration-300 flex-shrink-0" />
                      <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12"
          >
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                Risk Mitigation Value
              </h3>
              <p className="text-xl text-gray-600">
                The cost of governance is minimal compared to the potential costs of non-compliance
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { metric: "$1M-10M+", label: "Regulatory Penalty Avoidance", sublabel: "potential savings" },
                { metric: "25-40%", label: "Compliance Overhead Reduction", sublabel: "operational efficiency" },
                { metric: "100%", label: "Regulatory Compliance", sublabel: "across all frameworks" },
                { metric: "Zero", label: "Critical Incidents", sublabel: "governance failures" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-slate-600 mb-2">{stat.metric}</div>
                  <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-600 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Secure Your AI Future with Bulletproof Governance
            </h2>
            <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
              Get a comprehensive evaluation of your current AI governance maturity and a roadmap for bulletproof compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-slate-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule Your Governance Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Download Framework Guide
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-slate-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>200+ Organizations Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Zero Compliance Failures</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Former Big 4 Consultants</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}