import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Play, Pause, User, Phone, Calendar, MessageSquare, Shield, Zap } from 'lucide-react';
import { useState } from 'react';

export default function VoiceAgentsDemo() {
  const [playingDemo, setPlayingDemo] = useState<string | null>(null);

  const toggleDemo = (demoId: string) => {
    if (playingDemo === demoId) {
      setPlayingDemo(null);
    } else {
      setPlayingDemo(demoId);
    }
  };

  const voiceAgentDemos = [
    {
      id: 'virtual-receptionist',
      title: 'Virtual Receptionist',
      industry: 'General Contracting',
      description: 'Professional call handling and appointment scheduling',
      avatar: '/api/placeholder/60/60',
      waveform: Array.from({ length: 20 }, (_, i) => Math.random() * 100),
      color: 'blue'
    },
    {
      id: 'lead-qualification',
      title: 'Lead Qualification', 
      industry: 'Cannabis Retail',
      description: 'Smart customer screening and information capture',
      avatar: '/api/placeholder/60/60',
      waveform: Array.from({ length: 20 }, (_, i) => Math.random() * 100),
      color: 'green'
    },
    {
      id: 'appointment-booking',
      title: 'Appointment Booking',
      industry: 'Beauty Salons',
      description: 'Automated scheduling with calendar integration',
      avatar: '/api/placeholder/60/60', 
      waveform: Array.from({ length: 20 }, (_, i) => Math.random() * 100),
      color: 'purple'
    },
    {
      id: 'customer-support',
      title: 'Customer Support',
      industry: 'Electrical Services',
      description: '24/7 technical assistance and issue resolution',
      avatar: '/api/placeholder/60/60',
      waveform: Array.from({ length: 20 }, (_, i) => Math.random() * 100),
      color: 'yellow'
    },
    {
      id: 'order-processing',
      title: 'Order Processing',
      industry: 'Ecommerce',
      description: 'Intelligent order management and status updates',
      avatar: '/api/placeholder/60/60',
      waveform: Array.from({ length: 20 }, (_, i) => Math.random() * 100),
      color: 'red'
    },
    {
      id: 'consultation-booking',
      title: 'Consultation Booking',
      industry: 'Accounting Firms',
      description: 'Professional consultation scheduling and preparation',
      avatar: '/api/placeholder/60/60',
      waveform: Array.from({ length: 20 }, (_, i) => Math.random() * 100),
      color: 'indigo'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Hear AI Voice Agents in Action
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
              Experience how our intelligent voice agents transform customer interactions across industries. 
              Listen to real conversations that drive results and streamline operations.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-gray-600 mb-16">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Natural Conversations</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>Industry-Specific Training</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Voice Agent Demos Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {voiceAgentDemos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Header with Avatar and Info */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className={`w-12 h-12 bg-${demo.color}-100 rounded-full flex items-center justify-center`}>
                      <User className={`w-6 h-6 text-${demo.color}-600`} />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-${demo.color}-500 rounded-full flex items-center justify-center`}>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{demo.title}</h3>
                    <div className={`text-sm font-medium text-${demo.color}-600 mb-2`}>
                      {demo.industry}
                    </div>
                    <p className="text-sm text-gray-600">{demo.description}</p>
                  </div>
                </div>

                {/* Audio Player Interface */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <button
                      onClick={() => toggleDemo(demo.id)}
                      className={`w-12 h-12 bg-${demo.color}-500 hover:bg-${demo.color}-600 rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-lg hover:shadow-xl`}
                      data-testid={`play-button-${demo.id}`}
                    >
                      {playingDemo === demo.id ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5 ml-0.5" />
                      )}
                    </button>
                    
                    {/* Animated Waveform */}
                    <div className="flex items-center gap-1 flex-1">
                      {demo.waveform.map((height, i) => (
                        <motion.div
                          key={i}
                          className={`w-1 bg-${demo.color}-400 rounded-full`}
                          style={{ height: `${Math.max(4, height * 0.3)}px` }}
                          animate={{
                            height: playingDemo === demo.id 
                              ? [`${Math.max(4, height * 0.3)}px`, `${Math.max(4, height * 0.5)}px`, `${Math.max(4, height * 0.3)}px`]
                              : `${Math.max(4, height * 0.3)}px`
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: playingDemo === demo.id ? Infinity : 0,
                            delay: i * 0.1
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className="text-xs text-gray-500 font-mono">
                      {playingDemo === demo.id ? "0:23" : "0:00"} / 1:45
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <motion.div 
                      className={`bg-${demo.color}-500 h-1 rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ 
                        width: playingDemo === demo.id ? "25%" : 0 
                      }}
                      transition={{ duration: playingDemo === demo.id ? 2 : 0.3 }}
                    />
                  </div>
                </div>

                {/* Demo Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className={`text-xs px-2 py-1 bg-${demo.color}-50 text-${demo.color}-700 rounded-full font-medium`}>
                    Live Demo
                  </span>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                    Real Conversation
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Our Voice Agents Excel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trained specifically for your industry, integrated with your systems, and designed to sound authentically human
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry-Specific Training",
                description: "Each agent is trained on your industry's terminology, processes, and customer expectations",
                icon: <MessageSquare className="w-6 h-6" />,
                color: "blue"
              },
              {
                title: "Seamless Integration", 
                description: "Connect directly to your CRM, scheduling system, and business workflows",
                icon: <Zap className="w-6 h-6" />,
                color: "green"
              },
              {
                title: "Natural Conversations",
                description: "Advanced voice synthesis that customers can't distinguish from human agents",
                icon: <Phone className="w-6 h-6" />,
                color: "purple"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center text-${feature.color}-600 mx-auto mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Deploy Your Voice Agent?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transform your customer interactions with AI voice agents tailored to your industry and business needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule Demo Call
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                View Implementation Guide
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>2-Week Implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}