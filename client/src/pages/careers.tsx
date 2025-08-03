import React, { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { ArrowRight, ArrowLeft, Upload, Users, Code, TrendingUp, CheckCircle, User, Phone, FileText, HelpCircle } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

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

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    setCurrentStep(6); // Success step
  };

  const getCareerPathInfo = (path: CareerPath) => {
    switch (path) {
      case 'developer':
        return {
          title: 'Software Developer',
          description: 'Build cutting-edge solutions that transform how businesses operate',
          icon: <Code className="w-8 h-8" />,
          color: 'from-blue-600 to-blue-800'
        };
      case 'intern':
        return {
          title: 'Internship Program',
          description: 'Launch your career with hands-on experience in enterprise consulting',
          icon: <Users className="w-8 h-8" />,
          color: 'from-green-600 to-green-800'
        };
      case 'sales-marketing':
        return {
          title: 'Sales & Marketing',
          description: 'Drive growth and build relationships with enterprise clients',
          icon: <TrendingUp className="w-8 h-8" />,
          color: 'from-purple-600 to-purple-800'
        };
      default:
        return null;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
              Choose Your Career Path
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Join our team of experts who are transforming businesses through intelligent technology
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div 
                onClick={() => handleCareerPathSelect('developer')}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-blue-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg mb-6">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Software Developer</h3>
                <p className="text-gray-600 mb-6">
                  Build cutting-edge solutions that transform how businesses operate
                </p>
                <div className="inline-flex items-center space-x-2 text-blue-600 font-medium">
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div 
                onClick={() => handleCareerPathSelect('intern')}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-green-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Internship Program</h3>
                <p className="text-gray-600 mb-6">
                  Launch your career with hands-on experience in enterprise consulting
                </p>
                <div className="inline-flex items-center space-x-2 text-green-600 font-medium">
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div 
                onClick={() => handleCareerPathSelect('sales-marketing')}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-purple-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg mb-6">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Sales & Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Drive growth and build relationships with enterprise clients
                </p>
                <div className="inline-flex items-center space-x-2 text-purple-600 font-medium">
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        const pathInfo = getCareerPathInfo(formData.careerPath);
        return (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${pathInfo?.color} text-white rounded-lg mb-4`}>
                {pathInfo?.icon}
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
                {pathInfo?.title}
              </h2>
              <p className="text-lg text-gray-600">
                {pathInfo?.description}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-semibold text-xl text-gray-900 mb-6 flex items-center">
                <User className="w-5 h-5 mr-2" />
                Personal Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-semibold text-xl text-gray-900 mb-6 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Resume Upload
              </h3>
              
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={triggerFileInput}
              >
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <div className="mb-4">
                  <span className="text-blue-600 hover:text-blue-700 font-medium">
                    Click to upload your resume
                  </span>
                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <p className="text-gray-500 text-sm mt-2">
                    or drag and drop your file here
                  </p>
                </div>
                <p className="text-xs text-gray-400">
                  Supported formats: PDF, DOC, DOCX (Max 10MB)
                </p>
                
                {formData.resume && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center justify-center text-green-700">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-medium">{formData.resume.name}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-semibold text-xl text-gray-900 mb-6 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2" />
                Tell Us About Yourself
              </h3>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h4 className="font-medium text-blue-900 mb-3">Question:</h4>
                <p className="text-blue-800 leading-relaxed">
                  {formData.randomQuestion}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Answer *
                </label>
                <textarea
                  value={formData.randomAnswer}
                  onChange={(e) => setFormData({ ...formData, randomAnswer: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Share your thoughts here..."
                />
                <p className="text-sm text-gray-500 mt-2">
                  Take your time to provide a thoughtful response. This helps us understand your perspective and approach to problem-solving.
                </p>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-semibold text-xl text-gray-900 mb-6">
                Review Your Application
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Position</h4>
                  <p className="text-gray-600">{getCareerPathInfo(formData.careerPath)?.title}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Personal Information</h4>
                  <p className="text-gray-600">{formData.firstName} {formData.lastName}</p>
                  <p className="text-gray-600">{formData.email}</p>
                  <p className="text-gray-600">{formData.phone}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Resume</h4>
                  <p className="text-gray-600">{formData.resume?.name || 'No file uploaded'}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Your Response</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2 font-medium">Question:</p>
                    <p className="text-sm text-gray-600 mb-4">{formData.randomQuestion}</p>
                    <p className="text-sm text-gray-700 mb-2 font-medium">Answer:</p>
                    <p className="text-sm text-gray-600">{formData.randomAnswer}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  By submitting this application, you consent to Defiant Integrations storing and processing your personal information for recruitment purposes.
                </p>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                Application Submitted Successfully
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Thank you for your interest in joining Defiant Integrations. We've received your application and will review it carefully.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Our team will review your application within 5-7 business days</li>
                  <li>• If there's a potential fit, we'll reach out to schedule an initial conversation</li>
                  <li>• You'll receive updates via email at {formData.email}</li>
                </ul>
              </div>
              
              <button 
                onClick={() => window.location.href = '/'}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 font-medium hover:bg-blue-700 transition-colors rounded-lg"
              >
                <span>Return to Homepage</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Build the future of intelligent enterprise transformation with us
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      {currentStep <= 5 && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Form Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderStep()}
        </div>
      </section>

      {/* Navigation Buttons */}
      {currentStep > 1 && currentStep <= 5 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 px-6 py-4 flex items-center space-x-4">
            <button
              onClick={handleBack}
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            
            <div className="w-px bg-gray-300 h-6" />
            
            <button
              onClick={currentStep === 5 ? handleSubmit : handleNext}
              disabled={!canProceed()}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 font-medium hover:bg-blue-700 transition-colors rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{currentStep === 5 ? 'Submit Application' : 'Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}