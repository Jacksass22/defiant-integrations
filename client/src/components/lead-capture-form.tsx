import { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface FormData {
  // Contact Information
  fullName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  
  // Business Context
  industry: string;
  companySize: string;
  techMaturity: string;
  
  // AI Transformation Goals
  businessChallenges: string;
  improvementAreas: string[];
  drivingFactor: string;
  timeline: string;
  
  // Investment & Decision Making
  investmentRange: string;
  roiTimeline: string;
  decisionProcess: string;
}

interface FormErrors {
  [key: string]: string;
}

const industries = [
  'HVAC Services',
  'Plumbing Services',
  'Electrical Services',
  'Landscaping Services',
  'Roofing Services',
  'Painting Services',
  'General Contracting',
  'Cleaning Services',
  'Remodeling & Renovation',
  'Restaurants & Cafés',
  'Beauty Salons & Spas',
  'Barbershops',
  'Gyms & Personal Trainers',
  'Wellness & Life Coaches',
  'Pet Grooming & Boarding',
  'Golf Courses',
  'Brick-and-Mortar Retail',
  'E-commerce Brands',
  'Cannabis Retail & Growers',
  'Specialty Food Makers',
  'Local Boutiques',
  'Real Estate Agencies',
  'Law Firms',
  'Accounting & Tax Services',
  'Insurance Brokers',
  'HR & Recruiting',
  'Business Consultants',
  'Other'
];

const improvementAreaOptions = [
  'Customer acquisition & lead generation',
  'Operations & process automation',
  'Customer service & support',
  'Data management & analytics',
  'Marketing & sales efficiency',
  'Inventory & supply chain',
  'Financial management & reporting',
  'Team productivity & collaboration',
  'Quality control & compliance',
  'Other'
];

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  onClose?: () => void;
}

export function LeadCaptureForm({ title = "Start Your AI Transformation", subtitle = "Get a customized strategy consultation", onClose }: LeadCaptureFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    industry: '',
    companySize: '',
    techMaturity: '',
    businessChallenges: '',
    improvementAreas: [],
    drivingFactor: '',
    timeline: '',
    investmentRange: '',
    roiTimeline: '',
    decisionProcess: ''
  });

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    switch (step) {
      case 1:
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
        if (!formData.company.trim()) newErrors.company = 'Company name is required';
        if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
        break;
      
      case 2:
        if (!formData.industry) newErrors.industry = 'Please select your industry';
        if (!formData.companySize) newErrors.companySize = 'Please select company size';
        if (!formData.techMaturity) newErrors.techMaturity = 'Please select technology maturity level';
        break;
      
      case 3:
        if (!formData.businessChallenges.trim()) newErrors.businessChallenges = 'Please describe your business challenges';
        if (formData.improvementAreas.length === 0) newErrors.improvementAreas = 'Please select at least one improvement area';
        if (!formData.drivingFactor) newErrors.drivingFactor = 'Please select what\'s driving this initiative';
        if (!formData.timeline) newErrors.timeline = 'Please select your timeline';
        break;
      
      case 4:
        if (!formData.investmentRange) newErrors.investmentRange = 'Please select your investment range';
        if (!formData.roiTimeline) newErrors.roiTimeline = 'Please select expected ROI timeline';
        if (!formData.decisionProcess) newErrors.decisionProcess = 'Please select your decision-making process';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    
    try {
      const payload = {
        source: "website_typeform",
        timestamp: new Date().toISOString(),
        contactInfo: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          jobTitle: formData.jobTitle
        },
        businessContext: {
          industry: formData.industry,
          companySize: formData.companySize,
          techMaturity: formData.techMaturity
        },
        aiNeeds: {
          businessChallenges: formData.businessChallenges,
          improvementAreas: formData.improvementAreas,
          drivingFactor: formData.drivingFactor,
          timeline: formData.timeline
        },
        qualification: {
          investmentRange: formData.investmentRange,
          roiTimeline: formData.roiTimeline,
          decisionProcess: formData.decisionProcess
        }
      };

      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'There was an error submitting your form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImprovementAreaChange = (area: string, checked: boolean) => {
    if (checked) {
      updateFormData('improvementAreas', [...formData.improvementAreas, area]);
    } else {
      updateFormData('improvementAreas', formData.improvementAreas.filter(item => item !== area));
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-2xl">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Interest!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We've received your strategic consultation request and our team is reviewing your specific needs.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">What happens next:</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                <div>
                  <p className="font-semibold text-gray-900">Strategic Review (24 hours)</p>
                  <p className="text-gray-600">Our team analyzes your requirements</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p className="font-semibold text-gray-900">Initial Consultation (2-3 business days)</p>
                  <p className="text-gray-600">30-minute discovery call</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p className="font-semibold text-gray-900">Custom Proposal (Within 1 week)</p>
                  <p className="text-gray-600">Tailored AI transformation roadmap</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6">
            You'll hear from our senior consultant within 24 hours to schedule your complimentary strategic consultation.
          </p>
          
          {onClose && (
            <Button onClick={onClose} className="bg-blue-600 hover:bg-blue-700">
              Continue Exploring
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-2xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-lg text-gray-600">{subtitle}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Step {currentStep} of 4</span>
          <span className="text-sm text-gray-500">{Math.round((currentStep / 4) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Steps */}
      <div className="space-y-6">
        {/* Step 1: Contact Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => updateFormData('fullName', e.target.value)}
                  className={errors.fullName ? 'border-red-500' : ''}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="Optional"
                />
              </div>
              
              <div>
                <Label htmlFor="jobTitle">Job Title/Role *</Label>
                <Input
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) => updateFormData('jobTitle', e.target.value)}
                  className={errors.jobTitle ? 'border-red-500' : ''}
                />
                {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
              </div>
            </div>
            
            <div>
              <Label htmlFor="company">Company Name *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => updateFormData('company', e.target.value)}
                className={errors.company ? 'border-red-500' : ''}
              />
              {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
            </div>
          </div>
        )}

        {/* Step 2: Business Context */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Business Context</h3>
            
            <div>
              <Label>Industry *</Label>
              <Select value={formData.industry} onValueChange={(value) => updateFormData('industry', value)}>
                <SelectTrigger className={errors.industry ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
            </div>
            
            <div>
              <Label>Company Size *</Label>
              <Select value={formData.companySize} onValueChange={(value) => updateFormData('companySize', value)}>
                <SelectTrigger className={errors.companySize ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10 employees">1-10 employees</SelectItem>
                  <SelectItem value="11-50 employees">11-50 employees</SelectItem>
                  <SelectItem value="51-200 employees">51-200 employees</SelectItem>
                  <SelectItem value="201-1000 employees">201-1000 employees</SelectItem>
                  <SelectItem value="1000+ employees">1000+ employees</SelectItem>
                </SelectContent>
              </Select>
              {errors.companySize && <p className="text-red-500 text-sm mt-1">{errors.companySize}</p>}
            </div>
            
            <div>
              <Label>Current Technology Maturity *</Label>
              <Select value={formData.techMaturity} onValueChange={(value) => updateFormData('techMaturity', value)}>
                <SelectTrigger className={errors.techMaturity ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select technology maturity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Beginner (Just getting started)">Beginner (Just getting started)</SelectItem>
                  <SelectItem value="Intermediate (Some digital tools in place)">Intermediate (Some digital tools in place)</SelectItem>
                  <SelectItem value="Advanced (Digitally mature organization)">Advanced (Digitally mature organization)</SelectItem>
                </SelectContent>
              </Select>
              {errors.techMaturity && <p className="text-red-500 text-sm mt-1">{errors.techMaturity}</p>}
            </div>
          </div>
        )}

        {/* Step 3: AI Transformation Goals */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">AI Transformation Goals</h3>
            
            <div>
              <Label htmlFor="businessChallenges">What specific business challenges are you looking to solve with AI? *</Label>
              <Textarea
                id="businessChallenges"
                value={formData.businessChallenges}
                onChange={(e) => updateFormData('businessChallenges', e.target.value)}
                placeholder="Examples: Automate customer scheduling, reduce manual data entry, improve lead qualification, optimize inventory management, enhance customer service, streamline operations..."
                rows={4}
                className={errors.businessChallenges ? 'border-red-500' : ''}
              />
              {errors.businessChallenges && <p className="text-red-500 text-sm mt-1">{errors.businessChallenges}</p>}
            </div>
            
            <div>
              <Label>Which areas of your business need the most improvement? * (Select all that apply)</Label>
              <div className="grid md:grid-cols-2 gap-3 mt-2">
                {improvementAreaOptions.map((area) => (
                  <div key={area} className="flex items-center space-x-2">
                    <Checkbox
                      id={area}
                      checked={formData.improvementAreas.includes(area)}
                      onCheckedChange={(checked) => handleImprovementAreaChange(area, checked as boolean)}
                    />
                    <Label htmlFor={area} className="text-sm">{area}</Label>
                  </div>
                ))}
              </div>
              {errors.improvementAreas && <p className="text-red-500 text-sm mt-1">{errors.improvementAreas}</p>}
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>What's driving this AI initiative? *</Label>
                <Select value={formData.drivingFactor} onValueChange={(value) => updateFormData('drivingFactor', value)}>
                  <SelectTrigger className={errors.drivingFactor ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select driving factor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Need to reduce operational costs">Need to reduce operational costs</SelectItem>
                    <SelectItem value="Want to increase revenue/sales">Want to increase revenue/sales</SelectItem>
                    <SelectItem value="Struggling with manual processes">Struggling with manual processes</SelectItem>
                    <SelectItem value="Competitors are gaining advantage">Competitors are gaining advantage</SelectItem>
                    <SelectItem value="Looking to scale the business">Looking to scale the business</SelectItem>
                    <SelectItem value="Customer demands/expectations">Customer demands/expectations</SelectItem>
                    <SelectItem value="Regulatory or compliance requirements">Regulatory or compliance requirements</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.drivingFactor && <p className="text-red-500 text-sm mt-1">{errors.drivingFactor}</p>}
              </div>
              
              <div>
                <Label>Timeline for AI Implementation *</Label>
                <Select value={formData.timeline} onValueChange={(value) => updateFormData('timeline', value)}>
                  <SelectTrigger className={errors.timeline ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ready to start immediately (1-30 days)">Ready to start immediately (1-30 days)</SelectItem>
                    <SelectItem value="1-3 months">1-3 months</SelectItem>
                    <SelectItem value="3-6 months">3-6 months</SelectItem>
                    <SelectItem value="6-12 months">6-12 months</SelectItem>
                    <SelectItem value="Just exploring possibilities">Just exploring possibilities</SelectItem>
                  </SelectContent>
                </Select>
                {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Investment & Decision Making */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Investment & Decision Making</h3>
            
            <div>
              <Label>Investment Range for AI Transformation *</Label>
              <Select value={formData.investmentRange} onValueChange={(value) => updateFormData('investmentRange', value)}>
                <SelectTrigger className={errors.investmentRange ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select investment range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="$1K - $5K">$1K - $5K</SelectItem>
                  <SelectItem value="$5K - $15K">$5K - $15K</SelectItem>
                  <SelectItem value="$15K - $35K">$15K - $35K</SelectItem>
                  <SelectItem value="$35K - $75K">$35K - $75K</SelectItem>
                  <SelectItem value="$75K - $150K">$75K - $150K</SelectItem>
                  <SelectItem value="$150K - $300K">$150K - $300K</SelectItem>
                  <SelectItem value="$300K - $500K">$300K - $500K</SelectItem>
                  <SelectItem value="$500K+">$500K+</SelectItem>
                  <SelectItem value="Not sure yet / Need consultation">Not sure yet / Need consultation</SelectItem>
                </SelectContent>
              </Select>
              {errors.investmentRange && <p className="text-red-500 text-sm mt-1">{errors.investmentRange}</p>}
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Expected ROI Timeline *</Label>
                <Select value={formData.roiTimeline} onValueChange={(value) => updateFormData('roiTimeline', value)}>
                  <SelectTrigger className={errors.roiTimeline ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select ROI timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3-6 months">3-6 months</SelectItem>
                    <SelectItem value="6-12 months">6-12 months</SelectItem>
                    <SelectItem value="1-2 years">1-2 years</SelectItem>
                    <SelectItem value="2+ years">2+ years</SelectItem>
                    <SelectItem value="Unsure">Unsure</SelectItem>
                  </SelectContent>
                </Select>
                {errors.roiTimeline && <p className="text-red-500 text-sm mt-1">{errors.roiTimeline}</p>}
              </div>
              
              <div>
                <Label>Decision Making Process *</Label>
                <Select value={formData.decisionProcess} onValueChange={(value) => updateFormData('decisionProcess', value)}>
                  <SelectTrigger className={errors.decisionProcess ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select decision process" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="I make the final decisions">I make the final decisions</SelectItem>
                    <SelectItem value="I'm the primary influencer">I'm the primary influencer</SelectItem>
                    <SelectItem value="Part of a decision committee">Part of a decision committee</SelectItem>
                    <SelectItem value="Researching for leadership team">Researching for leadership team</SelectItem>
                    <SelectItem value="Getting preliminary information">Getting preliminary information</SelectItem>
                  </SelectContent>
                </Select>
                {errors.decisionProcess && <p className="text-red-500 text-sm mt-1">{errors.decisionProcess}</p>}
              </div>
            </div>
            
            {errors.submit && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded">
                <AlertCircle className="w-5 h-5" />
                <span>{errors.submit}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8 pt-6 border-t">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center space-x-2"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </Button>
        
        {currentStep < 4 ? (
          <Button
            onClick={nextStep}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
          >
            {isSubmitting ? (
              <span>Submitting...</span>
            ) : (
              <>
                <span>Submit Consultation Request</span>
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}