import { useEffect, useRef } from 'react';

interface ThreadsProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

const Threads: React.FC<ThreadsProps> = ({
  color = [1.0, 1.0, 1.0],
  amplitude = 1.0,
  distance = 0.3,
  enableMouseInteraction = true,
  className = '',
  style = {},
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Create a simple animated background with Canvas 2D
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    
    container.appendChild(canvas);

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    
    resize();
    window.addEventListener('resize', resize);

    let mouseX = 0.5;
    let mouseY = 0.5;
    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableMouseInteraction) return;
      const rect = container.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = (e.clientY - rect.top) / rect.height;
    };

    const handleMouseLeave = () => {
      mouseX = 0.5;
      mouseY = 0.5;
    };

    if (enableMouseInteraction) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    const animate = () => {
      time += 0.02;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create flowing thread-like patterns
      const colorStr = `rgba(${Math.floor(color[0] * 255)}, ${Math.floor(color[1] * 255)}, ${Math.floor(color[2] * 255)}, 0.3)`;
      ctx.strokeStyle = colorStr;
      ctx.lineWidth = 2;
      
      // Draw multiple flowing lines
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        
        const offsetY = (i / 8) * canvas.height;
        const frequency = 0.01 + (i * 0.003);
        const mouseInfluence = enableMouseInteraction ? 
          Math.sqrt(Math.pow(mouseX - 0.5, 2) + Math.pow(mouseY - 0.5, 2)) * amplitude : 0;
        
        for (let x = 0; x <= canvas.width; x += 5) {
          const normalizedX = x / canvas.width;
          const wave = Math.sin(normalizedX * Math.PI * 4 + time + i * 0.5) * 30;
          const mouseWave = enableMouseInteraction ? 
            Math.sin(normalizedX * Math.PI * 8 + time * 2) * mouseInfluence * 20 : 0;
          
          const y = offsetY + wave + mouseWave;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      }
      
      // Add some flowing particles
      ctx.fillStyle = colorStr;
      for (let i = 0; i < 5; i++) {
        const particleTime = time + i * 2;
        const x = ((particleTime * 50) % (canvas.width + 50)) - 25;
        const y = canvas.height * 0.3 + Math.sin(particleTime) * 50;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      if (enableMouseInteraction) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('resize', resize);
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, [color, amplitude, distance, enableMouseInteraction]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 ${className || ''}`}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        ...style 
      }}
      {...rest} 
    />
  );
};

export default Threads;