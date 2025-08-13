import { useEffect } from 'react';

interface CalendlyWidgetProps {
  url?: string;
  minWidth?: string;
  height?: string;
  className?: string;
}

export function CalendlyWidget({ 
  url = "https://calendly.com/team-defiantintegration",
  minWidth = "320px",
  height = "700px",
  className = ""
}: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className={`calendly-inline-widget ${className}`} 
         data-url={url}
         style={{ minWidth, height }}
    />
  );
}