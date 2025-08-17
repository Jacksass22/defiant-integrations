import { useEffect, useRef } from 'react';

export function VapiVoiceButton() {
  const widgetRef = useRef<HTMLDivElement>(null);

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

    // Create the VAPI widget element after script loads
    script.onload = () => {
      if (widgetRef.current) {
        const vapiWidget = document.createElement('vapi-widget');
        vapiWidget.setAttribute('public-key', 'daf87472-30a2-44a9-96bb-1b832815c8d1');
        vapiWidget.setAttribute('assistant-id', '1fa0e900-ab80-449a-b8c7-02e55c371cc5');
        vapiWidget.setAttribute('mode', 'voice');
        vapiWidget.setAttribute('theme', 'dark');
        vapiWidget.setAttribute('base-bg-color', '#000000');
        vapiWidget.setAttribute('accent-color', '#14B8A6');
        vapiWidget.setAttribute('cta-button-color', '#000000');
        vapiWidget.setAttribute('cta-button-text-color', '#ffffff');
        vapiWidget.setAttribute('border-radius', 'large');
        vapiWidget.setAttribute('size', 'full');
        vapiWidget.setAttribute('position', 'bottom-right');
        vapiWidget.setAttribute('title', 'Talk with an AI receptionist! ');
        vapiWidget.setAttribute('start-button-text', 'Start');
        vapiWidget.setAttribute('end-button-text', 'End Call');
        vapiWidget.setAttribute('chat-first-message', 'Hey, How can I help you today?');
        vapiWidget.setAttribute('chat-placeholder', 'Type your message...');
        vapiWidget.setAttribute('voice-show-transcript', 'true');
        vapiWidget.setAttribute('consent-required', 'true');
        vapiWidget.setAttribute('consent-title', 'Terms and conditions');
        vapiWidget.setAttribute('consent-content', 'By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.');
        vapiWidget.setAttribute('consent-storage-key', 'vapi_widget_consent');
        
        widgetRef.current.appendChild(vapiWidget);
      }
    };

    // If script is already loaded, create widget immediately
    if (existingScript && widgetRef.current) {
      const vapiWidget = document.createElement('vapi-widget');
      vapiWidget.setAttribute('public-key', 'daf87472-30a2-44a9-96bb-1b832815c8d1');
      vapiWidget.setAttribute('assistant-id', '1fa0e900-ab80-449a-b8c7-02e55c371cc5');
      vapiWidget.setAttribute('mode', 'voice');
      vapiWidget.setAttribute('theme', 'dark');
      vapiWidget.setAttribute('base-bg-color', '#000000');
      vapiWidget.setAttribute('accent-color', '#14B8A6');
      vapiWidget.setAttribute('cta-button-color', '#000000');
      vapiWidget.setAttribute('cta-button-text-color', '#ffffff');
      vapiWidget.setAttribute('border-radius', 'large');
      vapiWidget.setAttribute('size', 'full');
      vapiWidget.setAttribute('position', 'bottom-right');
      vapiWidget.setAttribute('title', 'Talk with an AI receptionist! ');
      vapiWidget.setAttribute('start-button-text', 'Start');
      vapiWidget.setAttribute('end-button-text', 'End Call');
      vapiWidget.setAttribute('chat-first-message', 'Hey, How can I help you today?');
      vapiWidget.setAttribute('chat-placeholder', 'Type your message...');
      vapiWidget.setAttribute('voice-show-transcript', 'true');
      vapiWidget.setAttribute('consent-required', 'true');
      vapiWidget.setAttribute('consent-title', 'Terms and conditions');
      vapiWidget.setAttribute('consent-content', 'By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.');
      vapiWidget.setAttribute('consent-storage-key', 'vapi_widget_consent');
      
      widgetRef.current.appendChild(vapiWidget);
    }

    return () => {
      // Cleanup
      if (widgetRef.current) {
        widgetRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={widgetRef} />;
}