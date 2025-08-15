import { Phone, Mic, X } from 'lucide-react';
import { useState } from 'react';

export function VoiceAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Always visible floating button */}
      <div className="fixed bottom-24 left-6 z-[100]">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full p-5 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-pulse"
            aria-label="Open Voice Assistant"
          >
            <div className="absolute inset-0 bg-purple-600 rounded-full animate-ping opacity-30"></div>
            <Mic className="w-8 h-8 relative z-10" />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
              NEW
            </div>
          </button>
        )}
      </div>

      {/* Voice Assistant Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-4 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <div>
                    <h2 className="text-lg font-bold">AI Voice Assistant</h2>
                    <p className="text-sm opacity-90">Powered by Vapi</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Vapi Iframe */}
            <div className="p-4 bg-gray-50">
              <div className="bg-white rounded-lg overflow-hidden shadow-inner">
                <iframe
                  src="https://vapi.ai/embed?publicKey=daf87472-30a2-44a9-96bb-1b832815c8d1&assistantId=1fa0e900-ab80-449a-b8c7-02e55c371cc5"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  allow="microphone"
                  title="Vapi Voice Assistant"
                  className="w-full"
                />
              </div>
              <p className="text-center text-sm text-gray-600 mt-3">
                Click the microphone to start talking
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}