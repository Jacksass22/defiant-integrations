import { useState, useEffect } from 'react';
import { X, Mail, CheckCircle, Loader2 } from 'lucide-react';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SubmissionState = 'idle' | 'loading' | 'success' | 'error';

export function SubscriptionModal({ isOpen, onClose }: SubscriptionModalProps) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<SubmissionState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      const emailInput = document.getElementById('subscription-email');
      emailInput?.focus();
    }
  }, [isOpen]);

  // Auto-close on success
  useEffect(() => {
    if (state === 'success') {
      const timer = setTimeout(() => {
        onClose();
        setState('idle');
        setEmail('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state, onClose]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setState('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://adk.defiantintegration.com/webhook/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim()
        })
      });

      if (response.ok) {
        setState('success');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setState('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const resetModal = () => {
    setState('idle');
    setEmail('');
    setErrorMessage('');
  };

  const handleClose = () => {
    onClose();
    // Reset modal state after animation
    setTimeout(resetModal, 300);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8">
          {state === 'success' ? (
            // Success State
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                Successfully Subscribed!
              </h2>
              <p className="text-gray-600">
                Thanks for joining our monthly AI insights newsletter.
              </p>
            </div>
          ) : (
            // Form State
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                  Subscribe to Monthly AI Insights
                </h2>
                <p className="text-gray-600">
                  Get exclusive analysis, case studies, and AI trends delivered monthly
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="subscription-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="subscription-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorMessage('');
                    }}
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errorMessage ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    disabled={state === 'loading'}
                    aria-describedby={errorMessage ? 'email-error' : undefined}
                  />
                  {errorMessage && (
                    <p id="email-error" className="mt-2 text-sm text-red-600">
                      {errorMessage}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={state === 'loading' || !email.trim()}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {state === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}