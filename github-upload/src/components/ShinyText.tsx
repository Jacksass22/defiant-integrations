import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ 
  text, 
  disabled = false, 
  speed = 5, 
  className = '' 
}) => {
  return (
    <span
      className={`inline-block text-gray-700 ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{ 
        background: 'linear-gradient(120deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        animationDuration: `${speed}s`,
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite'
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;