import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface GridDistortionProps {
  imageSrc?: string;
  grid?: number;
  mouse?: number;
  strength?: number;
  relaxation?: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

const GridDistortion: React.FC<GridDistortionProps> = ({
  imageSrc = '',
  grid = 20,
  mouse = 0.25,
  strength = 0.4,
  relaxation = 0.9,
  className = '',
  style = {},
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Create a simple animated background instead of complex WebGL
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
      const rect = container.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = (e.clientY - rect.top) / rect.height;
    };

    const handleMouseLeave = () => {
      mouseX = 0.5;
      mouseY = 0.5;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      time += 0.02;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create grid pattern with distortion
      const gridSize = Math.max(20, grid);
      const cellWidth = canvas.width / gridSize;
      const cellHeight = canvas.height / gridSize;
      
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        for (let j = 0; j <= gridSize; j++) {
          const x = i * cellWidth;
          const y = j * cellHeight;
          
          // Add distortion based on mouse position and time
          const distanceToMouse = Math.sqrt(
            Math.pow((x / canvas.width) - mouseX, 2) + 
            Math.pow((y / canvas.height) - mouseY, 2)
          );
          
          const distortion = Math.sin(time + distanceToMouse * 10) * strength * 20;
          const finalX = x + distortion * Math.cos(time * 0.5);
          const finalY = y + distortion * Math.sin(time * 0.3);
          
          if (j === 0) {
            ctx.moveTo(finalX, finalY);
          } else {
            ctx.lineTo(finalX, finalY);
          }
        }
        ctx.stroke();
        
        ctx.beginPath();
        for (let j = 0; j <= gridSize; j++) {
          const x = j * cellWidth;
          const y = i * cellHeight;
          
          const distanceToMouse = Math.sqrt(
            Math.pow((x / canvas.width) - mouseX, 2) + 
            Math.pow((y / canvas.height) - mouseY, 2)
          );
          
          const distortion = Math.sin(time + distanceToMouse * 10) * strength * 20;
          const finalX = x + distortion * Math.cos(time * 0.5);
          const finalY = y + distortion * Math.sin(time * 0.3);
          
          if (j === 0) {
            ctx.moveTo(finalX, finalY);
          } else {
            ctx.lineTo(finalX, finalY);
          }
        }
        ctx.stroke();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resize);
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, [grid, mouse, strength, relaxation, imageSrc]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 ${className}`}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        ...style 
      }}
      {...rest}
    />
  );
};

export default GridDistortion;