import { useEffect, useRef } from 'react';

interface SilkBackgroundProps {
  color?: string;
  speed?: number;
  scale?: number;
}

const SilkBackground = ({ 
  color = '#1e3a8a',
  speed = 1,
  scale = 1 
}: SilkBackgroundProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const animationRef = useRef<number>();
  
  useEffect(() => {
    let time = 0;
    
    const animate = () => {
      if (!svgRef.current) return;
      
      time += 0.01 * speed;
      
      const paths = svgRef.current.querySelectorAll('path');
      paths.forEach((path, index) => {
        const offset = index * 0.5;
        const d = generateSilkPath(time + offset, index, scale);
        path.setAttribute('d', d);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, scale]);
  
  const generateSilkPath = (time: number, index: number, scale: number) => {
    const points: string[] = [];
    const steps = 50;
    const amplitude = 80 * scale;
    const frequency = 0.02 * scale;
    const phaseShift = index * Math.PI / 3;
    
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * 100;
      const baseY = 50 + index * 10;
      
      // Create flowing wave pattern
      const wave1 = Math.sin((x * frequency) + time + phaseShift) * amplitude * 0.5;
      const wave2 = Math.sin((x * frequency * 2) + time * 1.5 + phaseShift) * amplitude * 0.3;
      const wave3 = Math.cos((x * frequency * 0.5) + time * 0.7 + phaseShift) * amplitude * 0.2;
      
      const y = baseY + wave1 + wave2 + wave3;
      
      points.push(`${x},${y}`);
    }
    
    // Create smooth path
    return `M 0,${50 + index * 10} ${points.map((point, i) => {
      if (i === 0) return `L ${point}`;
      if (i % 2 === 0) {
        const [prevX, prevY] = points[i - 1].split(',').map(Number);
        const [currX, currY] = point.split(',').map(Number);
        const cpX = (prevX + currX) / 2;
        const cpY = (prevY + currY) / 2;
        return `Q ${prevX},${prevY} ${cpX},${cpY}`;
      }
      return '';
    }).join(' ')} L 100,100 L 0,100 Z`;
  };
  
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-black"></div>
      
      {/* SVG Silk Pattern */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="silkGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0" />
            <stop offset="20%" stopColor={color} stopOpacity="0.1" />
            <stop offset="50%" stopColor={color} stopOpacity="0.2" />
            <stop offset="80%" stopColor={color} stopOpacity="0.1" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="silkGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="30%" stopColor="#06b6d4" stopOpacity="0.05" />
            <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.1" />
            <stop offset="90%" stopColor="#06b6d4" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="silkGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.03" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Multiple flowing layers */}
        <path fill="url(#silkGradient1)" opacity="0.8" />
        <path fill="url(#silkGradient2)" opacity="0.6" />
        <path fill="url(#silkGradient1)" opacity="0.5" />
        <path fill="url(#silkGradient3)" opacity="0.4" />
        <path fill="url(#silkGradient2)" opacity="0.3" />
      </svg>
      
      {/* Overlay for shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-shimmer"></div>
    </div>
  );
};

export default SilkBackground;