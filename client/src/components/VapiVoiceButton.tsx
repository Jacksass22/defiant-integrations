import { useEffect } from 'react';

export function VapiVoiceButton() {
  useEffect(() => {
    // Load the VAPI widget script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
    script.async = true;
    script.type = 'text/javascript';
    
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="vapi-ai/client-sdk-react"]');
    if (!existingScript) {
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const vapiWidgetHTML = `
    <vapi-widget
      public-key="daf87472-30a2-44a9-96bb-1b832815c8d1"
      assistant-id="1fa0e900-ab80-449a-b8c7-02e55c371cc5"
      mode="voice"
      theme="dark"
      base-bg-color="#000000"
      accent-color="#0040e3"
      cta-button-color="#000000"
      cta-button-text-color="#ffffff"
      border-radius="large"
      size="full"
      position="bottom-right"
      title="Try a Golf Course AI Assistant Now"
      start-button-text="Start"
      end-button-text="End Call"
      chat-first-message="Hey, How can I help you today?"
      chat-placeholder="Type your message..."
      voice-show-transcript="true"
      consent-required="true"
      consent-title="Terms and conditions"
      consent-content="By clicking 'Agree,' and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service."
      consent-storage-key="vapi_widget_consent"
    ></vapi-widget>
  `;

  return <div dangerouslySetInnerHTML={{ __html: vapiWidgetHTML }} />;
}