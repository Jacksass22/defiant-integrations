import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  showBookingButton?: boolean;
}

interface ChatWidgetProps {
  n8nWebhookUrl: string;
  primaryColor?: string;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ 
  n8nWebhookUrl, 
  primaryColor = '#2563eb' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI assistant for Defiant Integrations. I can help you understand our AI solutions, discuss your business needs, or answer questions about our services. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
          timestamp: new Date().toISOString(),
          sessionId: getSessionId()
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      let responseText = "I'm sorry, I couldn't process your request right now. Please try again.";
      
      // Handle both 'response' and 'output' fields from n8n
      let rawResponse = '';
      if (data.response) {
        rawResponse = data.response;
        responseText = formatChatResponse(data.response);
      } else if (data.output) {
        rawResponse = data.output;
        responseText = formatChatResponse(data.output);
      } else if (data.message && data.message.includes("Workflow could not be started")) {
        responseText = "I'm currently being updated to serve you better. Please try again in a moment or contact us directly for immediate assistance.";
      }
      
      // Check if response suggests booking a call
      const shouldShowBookingButton = checkForBookingKeywords(rawResponse);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
        showBookingButton: shouldShowBookingButton
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      let errorText = "I'm experiencing technical difficulties. Please try again in a moment or contact us directly.";
      
      // More specific error handling
      if (error instanceof Error) {
        if (error.message.includes('json')) {
          // Try to handle non-JSON responses
          errorText = "I received an unexpected response format. Please try again.";
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          errorText = "Connection issue detected. Please check your internet and try again.";
        }
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const checkForBookingKeywords = (text: string) => {
    const bookingKeywords = [
      'book', 'schedule', 'consultation', 'call', 'meeting', 'appointment', 
      'strategy session', 'discuss your needs', 'talk about', 'consultation call',
      'free consultation', 'discovery call', 'initial consultation'
    ];
    
    const lowerText = text.toLowerCase();
    return bookingKeywords.some(keyword => lowerText.includes(keyword));
  };

  const formatChatResponse = (text: string) => {
    // Clean up numbered lists and make them more conversational
    let formatted = text
      // Remove markdown-style numbered lists
      .replace(/^\d+\.\s+\*\*/gm, '')
      .replace(/\*\*:/g, ':')
      // Remove excessive asterisks
      .replace(/\*\*/g, '')
      // Replace numbered points with more natural flow
      .replace(/(\d+)\.\s+/g, '')
      // Clean up spacing
      .replace(/\s{2,}/g, ' ')
      .trim();
    
    // Split into sentences and add double line breaks for readability
    const sentences = formatted.split(/(?<=[.!?])\s+/);
    
    // Group sentences into logical paragraphs (2-3 sentences each)
    const paragraphs = [];
    for (let i = 0; i < sentences.length; i += 2) {
      const paragraph = sentences.slice(i, Math.min(i + 2, sentences.length)).join(' ');
      if (paragraph.trim()) {
        paragraphs.push(paragraph.trim());
      }
    }
    
    // Join with double line breaks for better readability
    formatted = paragraphs.join('\n\n');
    
    // If response is very long, limit it and add follow-up
    if (paragraphs.length > 3) {
      formatted = paragraphs.slice(0, 3).join('\n\n') + '\n\nWould you like me to elaborate on any specific aspect?';
    }
    
    return formatted;
  };

  const getSessionId = () => {
    let sessionId = localStorage.getItem('chatSessionId');
    if (!sessionId) {
      sessionId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('chatSessionId', sessionId);
    }
    return sessionId;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-2xl shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 flex items-center justify-center text-white relative overflow-hidden group bg-gradient-to-br from-blue-500 to-blue-700 border border-white/30 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Notification dot for new messages */}
          {!isOpen && messages.length > 1 && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          )}
        </button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-3xl z-50 flex flex-col overflow-hidden border border-white/20 backdrop-blur-xl"
            style={{
              boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.95) 0%, rgba(59, 130, 246, 0.95) 35%, rgba(96, 165, 250, 0.95) 70%, rgba(147, 197, 253, 0.95) 100%)'
            }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Premium Header */}
            <div className="relative px-6 py-5 bg-gradient-to-r from-blue-500/80 via-blue-400/80 to-blue-600/80 backdrop-blur-sm border-b border-white/20">
              {/* Animated background particles */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                <div className="absolute top-3 right-1/3 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-2 left-2/3 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse delay-700"></div>
              </div>
              
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-white to-blue-100 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Bot className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse shadow-sm"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm tracking-wide">Executive AI Assistant</h3>
                    <p className="text-white/90 text-xs font-medium">Defiant Integrations</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20 hover:border-white/40 group"
                >
                  <X className="w-4 h-4 text-white/90 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>

            {/* Premium Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-blue-400/20 to-blue-600/30">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-white/80 to-blue-100/80 border border-white/40 flex items-center justify-center flex-shrink-0 mt-1 backdrop-blur-sm shadow-lg">
                      <Bot className="w-4 h-4 text-blue-600" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl shadow-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-br from-white to-blue-50 text-blue-900 rounded-br-lg border border-white/50 shadow-blue-200/50'
                        : 'bg-white/90 text-blue-900 rounded-bl-lg border border-white/50 backdrop-blur-sm shadow-blue-100/50'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">{message.text}</p>
                    
                    {/* Show booking button for bot messages with booking keywords */}
                    {message.sender === 'bot' && message.showBookingButton && (
                      <motion.button
                        onClick={() => {
                          setIsOpen(false);
                          // Trigger the lead capture modal from parent component
                          window.dispatchEvent(new CustomEvent('openLeadCapture'));
                        }}
                        className="mt-3 w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Calendar className="w-4 h-4" />
                        Book Strategy Call
                      </motion.button>
                    )}
                    
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-blue-600/70' : 'text-blue-700/60'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>

                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border border-white/40 flex items-center justify-center flex-shrink-0 mt-1 backdrop-blur-sm shadow-lg">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Premium Typing indicator */}
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 justify-start"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-white/80 to-blue-100/80 border border-white/40 flex items-center justify-center flex-shrink-0 backdrop-blur-sm shadow-lg">
                    <Bot className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="bg-white/90 border border-white/50 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-bl-lg shadow-lg shadow-blue-100/50">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Premium Input Area */}
            <div className="relative p-4 bg-gradient-to-r from-blue-500/80 via-blue-400/80 to-blue-600/80 backdrop-blur-sm border-t border-white/20">
              <div className="flex gap-3 items-end">
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about AI strategy, pricing, or book a consultation..."
                    className="w-full px-4 py-3 bg-white/90 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-white/70 text-sm text-blue-900 placeholder-blue-600/60 backdrop-blur-sm transition-all duration-300 shadow-lg"
                    disabled={isTyping}
                  />
                </div>
                <motion.button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 bg-gradient-to-br from-white to-blue-50 hover:from-blue-50 hover:to-white disabled:from-gray-600 disabled:to-gray-700 text-blue-600 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-white/25 disabled:opacity-50 disabled:cursor-not-allowed border border-white/50"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default ChatWidget;