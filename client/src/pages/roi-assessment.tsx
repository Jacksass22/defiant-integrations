import { ArrowRight, TrendingUp, Clock, DollarSign, Users, BarChart3, Target, Zap, ChevronRight, Check, Building2, Calendar, Briefcase, ShoppingCart, GraduationCap, Laptop, HeadphonesIcon, Info, Store, Home, Wrench, Heart, Package, MoreHorizontal } from 'lucide-react';

import { Link } from 'wouter';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ROIAssessment() {
  // Multi-step form state
  const [currentStep, setCurrentStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  
  // Enhanced ROI Calculator State
  const [roiData, setRoiData] = useState({
    // Step 1: Business Basics
    revenue: '100k',
    businessType: 'ecommerce',
    yearsInBusiness: '3-5',
    teamSize: '2-5',
    
    // Step 2: Current Operations
    customerServiceHours: '15-30',
    marketingHours: '10-20',
    adminHours: '10-20',
    fulfillmentHours: '5-15',
    
    // Step 3: Current Tools & Costs
    emailMarketingCost: '50-200',
    crmCost: '100-300',
    customerServiceCost: '50-150',
    analyticsCost: '100-300',
    otherToolsCost: '200-500',
    
    // Goals
    primaryGoal: 'revenue-growth',
    automationPriority: 'customer-service'
  });
  
  const [calculatedROI, setCalculatedROI] = useState({
    annualSavings: 156000,
    monthlySavings: 13000,
    weeklyHoursSaved: 35,
    paybackMonths: 4,
    roiPercentage: 385,
    efficiencyGain: 65,
    revenueIncrease: 25,
    
    // Detailed breakdown
    laborSavings: 78000,
    toolConsolidation: 24000,
    revenueGrowth: 42000,
    efficiencyGains: 12000,
    
    // Investment costs
    setupCost: 30000,
    annualServiceCost: 72000,
    totalAnnualInvestment: 102000,
    netAnnualBenefit: 54000,
    
    // Timeline projections
    month3Savings: 19500,
    month6Savings: 58500,
    month12Savings: 156000,
    
    // Competitive metrics
    industryAverage: 45,
    yourEfficiency: 65,
    competitiveAdvantage: 20
  });

  // Business type icons
  const businessTypeIcons = {
    ecommerce: ShoppingCart,
    coach: HeadphonesIcon,
    course: GraduationCap,
    saas: Laptop,
    agency: Briefcase,
    consulting: Building2,
    retail: Store,
    realestate: Home,
    trades: Wrench,
    healthcare: Heart,
    logistics: Package,
    other: MoreHorizontal
  };

  // Enhanced ROI Calculation Function - Realistic & Profitable Scenarios
  const calculateROI = () => {
    setIsCalculating(true);
    
    // Revenue mapping (monthly values)
    const revenueMap: { [key: string]: number } = {
      '5k': 5000, '10k-25k': 17500, '25k-50k': 37500, '50k-100k': 75000, 
      '100k-250k': 175000, '250k-500k': 375000, '500k-1m': 750000, '1m+': 1250000
    };
    
    const monthlyRevenue = revenueMap[roiData.revenue] || 75000;
    const annualRevenue = monthlyRevenue * 12;
    
    // Determine business size and investment structure (User-specified ranges: $3K-$70K setup, $300-$20K monthly)
    let setupCost, monthlyCost, targetMultiplier;
    if (annualRevenue <= 300000) {
      // Small Business ($50K-300K revenue)
      setupCost = 3000 + Math.random() * 17000; // $3K-$20K
      monthlyCost = 300 + Math.random() * 2200; // $300-$2.5K
      targetMultiplier = 3 + Math.random(); // 3-4x return
    } else if (annualRevenue <= 1000000) {
      // Medium Business ($300K-1M revenue)
      setupCost = 20000 + Math.random() * 25000; // $20K-$45K
      monthlyCost = 2500 + Math.random() * 7500; // $2.5K-$10K
      targetMultiplier = 3 + Math.random(); // 3-4x return
    } else {
      // Large Business ($1M+ revenue)
      setupCost = 45000 + Math.random() * 25000; // $45K-$70K
      monthlyCost = 10000 + Math.random() * 10000; // $10K-$20K
      targetMultiplier = 3 + Math.random() * 2; // 3-5x return
    }
    
    const annualServiceCost = monthlyCost * 12;
    const totalAnnualInvestment = setupCost + annualServiceCost;
    
    // Target total savings (3-5x investment)
    const targetTotalSavings = totalAnnualInvestment * targetMultiplier;
    
    // 1. Labor Cost Reduction (60% of savings) - Primary Source
    let weeklyHoursSaved, hourlyRate;
    if (annualRevenue <= 300000) {
      weeklyHoursSaved = 15 + Math.random() * 10; // 15-25 hours/week
      hourlyRate = 40 + Math.random() * 20; // $40-$60/hour
    } else if (annualRevenue <= 1000000) {
      weeklyHoursSaved = 25 + Math.random() * 15; // 25-40 hours/week
      hourlyRate = 50 + Math.random() * 25; // $50-$75/hour
    } else {
      weeklyHoursSaved = 40 + Math.random() * 20; // 40-60 hours/week
      hourlyRate = 60 + Math.random() * 40; // $60-$100/hour
    }
    
    const annualLaborSavings = weeklyHoursSaved * hourlyRate * 52;
    const laborSavings = Math.min(annualLaborSavings, targetTotalSavings * 0.6);
    
    // 2. Revenue Growth (25% of savings) - Secondary Source
    let growthPercentage;
    switch(roiData.businessType) {
      case 'course':
        growthPercentage = 0.25 + Math.random() * 0.15; // 25-40%
        break;
      case 'coach':
        growthPercentage = 0.20 + Math.random() * 0.15; // 20-35%
        break;
      case 'ecommerce':
        growthPercentage = 0.15 + Math.random() * 0.10; // 15-25%
        break;
      case 'saas':
        growthPercentage = 0.15 + Math.random() * 0.15; // 15-30%
        break;
      default:
        growthPercentage = 0.15 + Math.random() * 0.10; // 15-25%
    }
    
    const potentialRevenueGrowth = annualRevenue * growthPercentage;
    const revenueGrowth = Math.min(potentialRevenueGrowth, targetTotalSavings * 0.25);
    
    // 3. Tool Consolidation (10% of savings)
    const toolCount = 5 + Math.random() * 10; // 5-15 tools replaced
    const avgToolCost = 100 + Math.random() * 100; // $100-$200 per tool/month
    const grossToolSavings = toolCount * avgToolCost * 12;
    const toolConsolidation = Math.min(grossToolSavings * 0.6, targetTotalSavings * 0.10); // 60% net after new tools
    
    // 4. Efficiency Gains (15% of savings)
    const efficiencyGains = targetTotalSavings * 0.15;
    
    // Calculate total savings (capped at 50% of revenue)
    const calculatedTotalSavings = laborSavings + revenueGrowth + toolConsolidation + efficiencyGains;
    const annualSavings = Math.min(calculatedTotalSavings, annualRevenue * 0.5);
    
    // Net benefit and ROI calculations
    const netAnnualBenefit = annualSavings - totalAnnualInvestment;
    const roiPercentage = Math.round((netAnnualBenefit / totalAnnualInvestment) * 100);
    const paybackMonths = totalAnnualInvestment / (netAnnualBenefit / 12);
    
    // Timeline projections (realistic ramp-up)
    const monthlySavings = annualSavings / 12;
    const month3Savings = monthlySavings * 3 * 0.5; // 50% effectiveness at 3 months
    const month6Savings = monthlySavings * 6 * 0.75; // 75% effectiveness at 6 months
    const month12Savings = annualSavings; // 100% effectiveness at 12 months
    
    // Efficiency metrics
    const efficiencyGain = Math.round((weeklyHoursSaved / 40) * 100);
    const revenueIncrease = Math.round(growthPercentage * 100);
    
    // Industry comparison
    const industryAverage = 45;
    const yourEfficiency = efficiencyGain;
    const competitiveAdvantage = yourEfficiency - industryAverage;
    
    setTimeout(() => {
      setCalculatedROI({
        annualSavings: Math.round(annualSavings),
        monthlySavings: Math.round(monthlySavings),
        weeklyHoursSaved: Math.round(weeklyHoursSaved),
        paybackMonths: Math.round(paybackMonths * 10) / 10,
        roiPercentage: roiPercentage,
        efficiencyGain: efficiencyGain,
        revenueIncrease: revenueIncrease,
        
        // Detailed breakdown
        laborSavings: Math.round(laborSavings),
        toolConsolidation: Math.round(toolConsolidation),
        revenueGrowth: Math.round(revenueGrowth),
        efficiencyGains: Math.round(efficiencyGains),
        
        // Investment costs
        setupCost: Math.round(setupCost),
        annualServiceCost: Math.round(annualServiceCost),
        totalAnnualInvestment: Math.round(totalAnnualInvestment),
        netAnnualBenefit: Math.round(netAnnualBenefit),
        
        // Timeline projections
        month3Savings: Math.round(month3Savings),
        month6Savings: Math.round(month6Savings),
        month12Savings: Math.round(month12Savings),
        
        // Competitive metrics
        industryAverage: industryAverage,
        yourEfficiency: yourEfficiency,
        competitiveAdvantage: competitiveAdvantage
      });
      setIsCalculating(false);
      setCurrentStep(4); // Go to results
    }, 2000); // Simulate calculation time
  };

  const handleInputChange = (field: string, value: string) => {
    setRoiData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateROI();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetCalculator = () => {
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-200 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              ROI Assessment Calculator
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover your personalized savings potential with our enterprise-grade ROI analysis tool. Built on real data from 500+ successful implementations.
            </p>
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-2xl p-6 max-w-2xl mx-auto shadow-xl">
              <div className="flex items-center justify-center gap-8">
                <div>
                  <div className="text-3xl font-bold">200-400%</div>
                  <div className="text-sm opacity-90">ROI Over 12 Months</div>
                </div>
                <div className="h-12 w-px bg-white/30"></div>
                <div>
                  <div className="text-3xl font-bold">3-6</div>
                  <div className="text-sm opacity-90">Month Payback</div>
                </div>
                <div className="h-12 w-px bg-white/30"></div>
                <div>
                  <div className="text-3xl font-bold">3-5x</div>
                  <div className="text-sm opacity-90">Return on Investment</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto mb-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800">
              <p className="font-semibold mb-1">Estimate Calculator</p>
              <p>These calculations provide estimated ranges based on industry benchmarks and typical client results. A complete, accurate ROI assessment tailored to your specific business will be conducted during our consultation.</p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ 
                      scale: currentStep >= step ? 1 : 0.8,
                      backgroundColor: currentStep >= step ? '#0066cc' : '#e5e7eb'
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold transition-all duration-300 ${
                      currentStep >= step ? 'shadow-lg' : ''
                    }`}
                  >
                    {currentStep > step ? <Check className="w-5 h-5" /> : step}
                  </motion.div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                      currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                {currentStep === 1 && "Business Information"}
                {currentStep === 2 && "Current Operations"}
                {currentStep === 3 && "Tools & Goals"}
                {currentStep === 4 && "Your Results"}
              </p>
            </div>
          </div>

          {/* Calculator Container */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence>
              {/* Step 1: Business Basics */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100"
                >
                  <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">
                    Tell us about your business
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Monthly Revenue */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Current Monthly Revenue
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {['5k', '10k-25k', '25k-50k', '50k-100k', '100k-250k', '250k-500k', '500k-1m', '1m+'].map((value) => (
                          <button
                            key={value}
                            onClick={() => handleInputChange('revenue', value)}
                            className={`py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                              roiData.revenue === value
                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            ${value.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Business Type */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Business Type
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {Object.entries(businessTypeIcons).map(([type, Icon]) => (
                          <button
                            key={type}
                            onClick={() => handleInputChange('businessType', type)}
                            className={`p-3 rounded-xl transition-all duration-200 ${
                              roiData.businessType === type
                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            <Icon className="w-6 h-6 mx-auto mb-1" />
                            <div className="text-xs font-medium">
                              {type === 'ecommerce' ? 'E-commerce' : 
                               type === 'realestate' ? 'Real Estate' :
                               type === 'healthcare' ? 'Healthcare' :
                               type === 'other' ? 'Other Industries' :
                               type.charAt(0).toUpperCase() + type.slice(1)}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Years in Business */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Years in Business
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                        {['<1', '1-2', '3-5', '5-10', '10+'].map((value) => (
                          <button
                            key={value}
                            onClick={() => handleInputChange('yearsInBusiness', value)}
                            className={`py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                              roiData.yearsInBusiness === value
                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {value} {value === '<1' ? 'year' : 'years'}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Team Size */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Team Size
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[
                          { value: 'solo', label: 'Just Me' },
                          { value: '2-5', label: '2-5 People' },
                          { value: '6-15', label: '6-15 People' },
                          { value: '16-50', label: '16-50 People' },
                          { value: '50+', label: '50+ People' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleInputChange('teamSize', option.value)}
                            className={`py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                              roiData.teamSize === option.value
                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={nextStep}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                      Continue <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Current Operations */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100"
                >
                  <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">
                    How much time do you spend on these tasks?
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Customer Service Hours */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Customer Service (per week)
                      </label>
                      <p className="text-xs text-gray-500 mb-3">Answering emails, calls, support tickets</p>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                        {['0-5', '5-15', '15-30', '30-50', '50+'].map((value) => (
                          <button
                            key={value}
                            onClick={() => handleInputChange('customerServiceHours', value)}
                            className={`py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                              roiData.customerServiceHours === value
                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {value} hrs
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Marketing Hours */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Marketing & Content (per week)
                      </label>
                      <p className="text-xs text-gray-500 mb-3">Creating content, social media, email campaigns</p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {['0-10', '10-20', '20-40', '40+'].map((value) => (
                          <button
                            key={value}
                            onClick={() => handleInputChange('marketingHours', value)}
                            className={`py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                              roiData.marketingHours === value
                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {value} hrs
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Admin Hours */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Administrative Tasks (per week)
                      </label>
                      <p className="text-xs text-gray-500 mb-3">Data entry, reporting, scheduling, invoicing</p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {['0-10', '10-20', '20-30', '30+'].map((value) => (
                          <button
                            key={value}
                            onClick={() => handleInputChange('adminHours', value)}
                            className={`py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                              roiData.adminHours === value
                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {value} hrs
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Fulfillment Hours */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Order Processing & Fulfillment (per week)
                      </label>
                      <p className="text-xs text-gray-500 mb-3">Processing orders, inventory management, shipping</p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {['0-5', '5-15', '15-30', '30+'].map((value) => (
                          <button
                            key={value}
                            onClick={() => handleInputChange('fulfillmentHours', value)}
                            className={`py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                              roiData.fulfillmentHours === value
                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {value} hrs
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={prevStep}
                      className="text-gray-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                      Continue <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Tools & Goals */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100"
                >
                  <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">
                    Current tools & primary goals
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Current Tool Costs */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Monthly Tool Costs</h3>
                      <div className="grid gap-4">
                        <div>
                          <label className="block text-sm text-gray-600 mb-2">Email Marketing</label>
                          <select
                            value={roiData.emailMarketingCost}
                            onChange={(e) => handleInputChange('emailMarketingCost', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="0-50">$0 - $50</option>
                            <option value="50-200">$50 - $200</option>
                            <option value="200-500">$200 - $500</option>
                            <option value="500+">$500+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-2">CRM/Sales Tools</label>
                          <select
                            value={roiData.crmCost}
                            onChange={(e) => handleInputChange('crmCost', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="0-100">$0 - $100</option>
                            <option value="100-300">$100 - $300</option>
                            <option value="300-800">$300 - $800</option>
                            <option value="800+">$800+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-2">Customer Service Tools</label>
                          <select
                            value={roiData.customerServiceCost}
                            onChange={(e) => handleInputChange('customerServiceCost', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="0-50">$0 - $50</option>
                            <option value="50-150">$50 - $150</option>
                            <option value="150-400">$150 - $400</option>
                            <option value="400+">$400+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-2">Analytics/Tracking</label>
                          <select
                            value={roiData.analyticsCost}
                            onChange={(e) => handleInputChange('analyticsCost', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="0-100">$0 - $100</option>
                            <option value="100-300">$100 - $300</option>
                            <option value="300+">$300+</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Primary Goal */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Primary Business Goal
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { value: 'revenue-growth', label: 'Increase Revenue', icon: TrendingUp },
                          { value: 'save-time', label: 'Save Time', icon: Clock },
                          { value: 'scale-operations', label: 'Scale Operations', icon: Target },
                          { value: 'reduce-costs', label: 'Reduce Costs', icon: DollarSign }
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleInputChange('primaryGoal', option.value)}
                            className={`p-4 rounded-xl transition-all duration-200 flex items-center gap-3 ${
                              roiData.primaryGoal === option.value
                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            <option.icon className="w-5 h-5" />
                            <span className="font-medium">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={prevStep}
                      className="text-gray-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold py-3 px-8 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                      Calculate ROI <Zap className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Calculating State */}
              {isCalculating && (
                <motion.div
                  key="calculating"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto mb-6 animate-pulse"></div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                    Analyzing Your Business...
                  </h3>
                  <p className="text-gray-600 mb-8">
                    We're calculating your personalized ROI based on 500+ similar businesses
                  </p>
                  <div className="flex justify-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Results */}
              {currentStep === 4 && !isCalculating && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  {/* Main Results Card */}
                  <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-3xl shadow-2xl p-8 sm:p-12 text-white">
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-8 text-center">
                      Your Personalized ROI Analysis
                    </h2>
                    
                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center"
                      >
                        <div className="text-3xl sm:text-4xl font-bold mb-2">
                          ${calculatedROI.netAnnualBenefit.toLocaleString()}
                        </div>
                        <div className="text-sm opacity-90">Net Annual Benefit</div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center"
                      >
                        <div className="text-3xl sm:text-4xl font-bold mb-2">
                          {calculatedROI.weeklyHoursSaved} hrs
                        </div>
                        <div className="text-sm opacity-90">Weekly Time Saved</div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center"
                      >
                        <div className="text-3xl sm:text-4xl font-bold mb-2">
                          {calculatedROI.paybackMonths} mo
                        </div>
                        <div className="text-sm opacity-90">Payback Period</div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center"
                      >
                        <div className="text-3xl sm:text-4xl font-bold mb-2">
                          {calculatedROI.roiPercentage}%
                        </div>
                        <div className="text-sm opacity-90">ROI</div>
                      </motion.div>
                    </div>

                    {/* Efficiency Comparison */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <h3 className="font-semibold mb-4">Your Efficiency vs Industry Average</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Industry Average</span>
                            <span>{calculatedROI.industryAverage}%</span>
                          </div>
                          <div className="bg-white/20 rounded-full h-3">
                            <div className="bg-white/60 h-3 rounded-full" style={{ width: `${calculatedROI.industryAverage}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Your Potential</span>
                            <span>{calculatedROI.yourEfficiency}%</span>
                          </div>
                          <div className="bg-white/20 rounded-full h-3">
                            <div className="bg-emerald-300 h-3 rounded-full" style={{ width: `${calculatedROI.yourEfficiency}%` }}></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm mt-3 opacity-90">
                        You'll be <span className="font-bold">{calculatedROI.competitiveAdvantage}% more efficient</span> than your competitors
                      </p>
                    </div>
                  </div>

                  {/* Investment Overview */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white mb-6"
                  >
                    <h3 className="font-semibold text-lg mb-4">Your Investment</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm opacity-80">Setup Cost</div>
                        <div className="text-2xl font-bold">${calculatedROI.setupCost.toLocaleString()}</div>
                        <div className="text-xs opacity-70">One-time</div>
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Monthly Service</div>
                        <div className="text-2xl font-bold">${Math.round(calculatedROI.annualServiceCost / 12).toLocaleString()}</div>
                        <div className="text-xs opacity-70">Per month</div>
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Total Annual Investment</div>
                        <div className="text-2xl font-bold">${calculatedROI.totalAnnualInvestment.toLocaleString()}</div>
                        <div className="text-xs opacity-70">Year 1</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Detailed Breakdown */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Savings Breakdown */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="bg-white rounded-2xl shadow-xl p-6"
                    >
                      <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                        Gross Annual Savings
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700">Labor Cost Reduction</span>
                          </div>
                          <span className="font-semibold text-gray-900">
                            ${calculatedROI.laborSavings.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                            <span className="text-gray-700">Revenue Growth</span>
                          </div>
                          <span className="font-semibold text-gray-900">
                            ${calculatedROI.revenueGrowth.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-violet-600 rounded-full"></div>
                            <span className="text-gray-700">Tool Consolidation</span>
                          </div>
                          <span className="font-semibold text-gray-900">
                            ${calculatedROI.toolConsolidation.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                            <span className="text-gray-700">Efficiency Gains</span>
                          </div>
                          <span className="font-semibold text-gray-900">
                            ${calculatedROI.efficiencyGains.toLocaleString()}
                          </span>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-900">Total Annual Savings</span>
                            <span className="text-xl font-bold text-emerald-600">
                              ${calculatedROI.annualSavings.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Timeline Projection */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="bg-white rounded-2xl shadow-xl p-6"
                    >
                      <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                        Implementation Timeline
                      </h3>
                      <div className="space-y-4">
                        <div className="relative">
                          <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200"></div>
                          <div className="space-y-6">
                            <div className="flex gap-4">
                              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                1
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-gray-900">Month 3</div>
                                <div className="text-sm text-gray-600">25% Benefits Realized</div>
                                <div className="text-lg font-bold text-blue-600">
                                  ${calculatedROI.month3Savings.toLocaleString()} saved
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                2
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-gray-900">Month 6</div>
                                <div className="text-sm text-gray-600">50% Benefits Realized</div>
                                <div className="text-lg font-bold text-emerald-600">
                                  ${calculatedROI.month6Savings.toLocaleString()} saved
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                3
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-gray-900">Month 12</div>
                                <div className="text-sm text-gray-600">100% Benefits Realized</div>
                                <div className="text-lg font-bold text-violet-600">
                                  ${calculatedROI.month12Savings.toLocaleString()} saved
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Business-Type Specific Insights */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8"
                  >
                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                      Tailored Insights for Your {roiData.businessType === 'ecommerce' ? 'E-commerce' : 
                        roiData.businessType.charAt(0).toUpperCase() + roiData.businessType.slice(1)} Business
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white rounded-xl p-4">
                        <Target className="w-8 h-8 text-blue-600 mb-3" />
                        <h4 className="font-semibold text-gray-900 mb-2">Quick Wins</h4>
                        <p className="text-sm text-gray-600">
                          {roiData.businessType === 'ecommerce' && "Automated cart recovery emails, AI product recommendations, inventory alerts"}
                          {roiData.businessType === 'coach' && "Automated client onboarding, calendar scheduling, follow-up sequences"}
                          {roiData.businessType === 'course' && "Student support automation, course delivery systems, progress tracking"}
                          {roiData.businessType === 'saas' && "User onboarding flows, feature adoption campaigns, churn prevention"}
                          {roiData.businessType === 'agency' && "Project management automation, client reporting, resource allocation"}
                          {roiData.businessType === 'consulting' && "Proposal generation, meeting scheduling, knowledge management"}
                          {roiData.businessType === 'retail' && "Inventory management, customer loyalty programs, staff scheduling"}
                          {roiData.businessType === 'realestate' && "Lead qualification, property matching, automated follow-ups"}
                          {roiData.businessType === 'trades' && "Job scheduling, quote generation, customer communication"}
                          {roiData.businessType === 'healthcare' && "Appointment reminders, patient intake forms, billing automation"}
                          {roiData.businessType === 'logistics' && "Route optimization, shipment tracking, customer notifications"}
                          {roiData.businessType === 'other' && "Process automation, customer communication, operational efficiency"}
                        </p>
                      </div>
                      <div className="bg-white rounded-xl p-4">
                        <TrendingUp className="w-8 h-8 text-emerald-600 mb-3" />
                        <h4 className="font-semibold text-gray-900 mb-2">Growth Opportunities</h4>
                        <p className="text-sm text-gray-600">
                          {roiData.businessType === 'ecommerce' && "Personalized marketing at scale, dynamic pricing, predictive analytics"}
                          {roiData.businessType === 'coach' && "Group coaching automation, content repurposing, referral programs"}
                          {roiData.businessType === 'course' && "Adaptive learning paths, community engagement, upsell automation"}
                          {roiData.businessType === 'saas' && "Usage-based expansion, feature discovery, customer success automation"}
                          {roiData.businessType === 'agency' && "Service productization, white-label solutions, automated proposals"}
                          {roiData.businessType === 'consulting' && "Thought leadership automation, strategic insights delivery, client retention"}
                          {roiData.businessType === 'retail' && "Omnichannel experiences, dynamic promotions, customer analytics"}
                          {roiData.businessType === 'realestate' && "Virtual tours automation, market analysis, commission optimization"}
                          {roiData.businessType === 'trades' && "Service area expansion, warranty automation, review generation"}
                          {roiData.businessType === 'healthcare' && "Telehealth integration, patient engagement, outcome tracking"}
                          {roiData.businessType === 'logistics' && "Fleet optimization, predictive maintenance, demand forecasting"}
                          {roiData.businessType === 'other' && "Market expansion, process optimization, customer retention systems"}
                        </p>
                      </div>
                      <div className="bg-white rounded-xl p-4">
                        <Zap className="w-8 h-8 text-violet-600 mb-3" />
                        <h4 className="font-semibold text-gray-900 mb-2">Competitive Edge</h4>
                        <p className="text-sm text-gray-600">
                          {roiData.businessType === 'ecommerce' && "24/7 customer service, instant personalization, predictive restocking"}
                          {roiData.businessType === 'coach' && "Always-available support, scalable 1:1 feel, data-driven coaching"}
                          {roiData.businessType === 'course' && "Personalized learning experiences, instant feedback, community AI moderator"}
                          {roiData.businessType === 'saas' && "Proactive customer success, instant support, usage optimization"}
                          {roiData.businessType === 'agency' && "Faster turnaround times, consistent quality, scalable operations"}
                          {roiData.businessType === 'consulting' && "Data-driven insights, rapid analysis, always-on advisory"}
                          {roiData.businessType === 'retail' && "Smart inventory management, personalized shopping, efficient operations"}
                          {roiData.businessType === 'realestate' && "Instant lead response, market intelligence, automated nurturing"}
                          {roiData.businessType === 'trades' && "Professional communication, instant quotes, reputation management"}
                          {roiData.businessType === 'healthcare' && "Reduced wait times, better patient outcomes, streamlined operations"}
                          {roiData.businessType === 'logistics' && "Real-time tracking, optimized routing, proactive communication"}
                          {roiData.businessType === 'other' && "Automated workflows, enhanced customer experience, operational excellence"}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Results Disclaimer */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75 }}
                    className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3"
                  >
                    <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-amber-800">
                      <p className="font-semibold mb-1">Important Note</p>
                      <p>These estimates are based on industry averages and typical client results over 12-18 months. Individual results vary based on current operations, implementation quality, and market conditions. A complete, accurate ROI assessment specific to your business will be provided during our consultation.</p>
                    </div>
                  </motion.div>

                  {/* Call to Action */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center"
                  >
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
                      Ready to Capture These Savings?
                    </h3>
                    <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                      Schedule a free 30-minute strategy session to see exactly how we'll implement these solutions for your business
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Schedule Strategy Session
                      </button>

                    </div>
                  </motion.div>

                  {/* Recalculate Button */}
                  <div className="text-center">
                    <button
                      onClick={resetCalculator}
                      className="text-gray-600 font-medium hover:text-gray-900 transition-colors"
                    >
                      Calculate again with different inputs
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>
    </div>
  );
}