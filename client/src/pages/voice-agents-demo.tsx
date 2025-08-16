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
      waveform: Array.from({ length: 15 }, (_, i) => Math.random() * 40 + 10)
    },
    {
      id: 'lead-qualification',
      title: 'Lead Qualification', 
      industry: 'Cannabis Retail',
      description: 'Smart customer screening and information capture',
      waveform: Array.from({ length: 15 }, (_, i) => Math.random() * 40 + 10)
    },
    {
      id: 'appointment-booking',
      title: 'Appointment Booking',
      industry: 'Beauty Salons',
      description: 'Automated scheduling with calendar integration',
      waveform: Array.from({ length: 15 }, (_, i) => Math.random() * 40 + 10)
    },
    {
      id: 'customer-support',
      title: 'Customer Support',
      industry: 'Electrical Services',
      description: '24/7 technical assistance and issue resolution',
      waveform: Array.from({ length: 15 }, (_, i) => Math.random() * 40 + 10)
    },
    {
      id: 'order-processing',
      title: 'Order Processing',
      industry: 'Ecommerce',
      description: 'Intelligent order management and status updates',
      waveform: Array.from({ length: 15 }, (_, i) => Math.random() * 40 + 10)
    },
    {
      id: 'consultation-booking',
      title: 'Consultation Booking',
      industry: 'Accounting Firms',
      description: 'Professional consultation scheduling and preparation',
      waveform: Array.from({ length: 15 }, (_, i) => Math.random() * 40 + 10)
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Hear AI Voice Agents in action
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {voiceAgentDemos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Header with Avatar and Info */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{demo.title}</h3>
                    <div className="text-blue-600 text-sm font-medium mb-2">
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
                      className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-sm"
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
                          className="w-1 bg-purple-400 rounded-full"
                          style={{ height: `${Math.max(4, height * 0.6)}px` }}
                          animate={{
                            height: playingDemo === demo.id 
                              ? [`${Math.max(4, height * 0.6)}px`, `${Math.max(4, height * 1)}px`, `${Math.max(4, height * 0.6)}px`]
                              : `${Math.max(4, height * 0.6)}px`
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
                      className="bg-blue-600 h-1 rounded-full"
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
                  <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
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
                icon: <MessageSquare className="w-6 h-6" />
              },
              {
                title: "Seamless Integration", 
                description: "Connect directly to your CRM, scheduling system, and business workflows",
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: "Natural Conversations",
                description: "Advanced voice synthesis that customers can't distinguish from human agents",
                icon: <Phone className="w-6 h-6" />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Deploy Your Voice Agent?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transform your customer interactions with AI voice agents tailored to your industry and business needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-sm">
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