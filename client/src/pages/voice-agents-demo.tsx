import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Play, Pause, User } from 'lucide-react';
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
      waveform: Array.from({ length: 15 }, (_, i) => Math.random() * 40 + 10)
    },
    {
      id: 'lead-qualification',
      title: 'Lead Qualification', 
      industry: 'Cannabis Retail',
      waveform: Array.from({ length: 15 }, (_, i) => Math.random() * 40 + 10)
    },
    {
      id: 'appointment-booking',
      title: 'Appointment Booking',
      industry: 'Beauty Salons',
      waveform: Array.from({ length: 15 }, (_, i) => Math.random() * 40 + 10)
    },
    {
      id: 'customer-support',
      title: 'Customer Support',
      industry: 'Electrical Services',
      waveform: Array.from({ length: 15 }, (_, i) => Math.random() * 40 + 10)
    },
    {
      id: 'order-processing',
      title: 'Order Processing',
      industry: 'Ecommerce',
      waveform: Array.from({ length: 15 }, (_, i) => Math.random() * 40 + 10)
    },
    {
      id: 'consultation-booking',
      title: 'Consultation Booking',
      industry: 'Accounting Firms',
      waveform: Array.from({ length: 15 }, (_, i) => Math.random() * 40 + 10)
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Main Content */}
      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Hear AI Voice Agents in action
            </h1>
          </div>
          
          {/* Voice Agent Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {voiceAgentDemos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Top Section: Avatar + Text */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    {/* Avatar Circle */}
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-400" />
                    </div>
                    {/* Green Status Dot */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{demo.title}</h3>
                    <div className="text-blue-600 text-sm font-medium">
                      {demo.industry}
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Play Button + Waveform */}
                <div className="flex items-center gap-4">
                  {/* Blue Play Button */}
                  <button
                    onClick={() => toggleDemo(demo.id)}
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors duration-200 flex-shrink-0"
                    data-testid={`play-button-${demo.id}`}
                  >
                    {playingDemo === demo.id ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5 ml-0.5" />
                    )}
                  </button>
                  
                  {/* Waveform */}
                  <div className="flex items-center gap-1 flex-1">
                    {demo.waveform.map((height, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-purple-400 rounded-full"
                        style={{ height: `${height}px` }}
                        animate={{
                          height: playingDemo === demo.id 
                            ? [`${height}px`, `${height * 1.5}px`, `${height}px`]
                            : `${height}px`,
                          backgroundColor: playingDemo === demo.id 
                            ? ["#c084fc", "#a855f7", "#c084fc"]
                            : "#c084fc"
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: playingDemo === demo.id ? Infinity : 0,
                          delay: i * 0.05
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}