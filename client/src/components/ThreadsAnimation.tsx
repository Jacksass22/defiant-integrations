import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreadsAnimationProps {
  color?: [number, number, number];
  amplitude?: number;
  className?: string;
}

const ThreadsAnimation: React.FC<ThreadsAnimationProps> = ({
  color = [1.0, 1.0, 1.0],
  amplitude = 1.0,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.OrthographicCamera(
      width / -2, width / 2,
      height / 2, height / -2,
      1, 1000
    );
    camera.position.z = 100;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Create flowing threads
    const threadCount = 12;
    const threads: THREE.Line[] = [];

    for (let i = 0; i < threadCount; i++) {
      const geometry = new THREE.BufferGeometry();
      const points = [];
      const pointCount = 100;

      for (let j = 0; j < pointCount; j++) {
        const x = (j / pointCount) * width - width / 2;
        const y = 0;
        points.push(new THREE.Vector3(x, y, 0));
      }

      geometry.setFromPoints(points);
      
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(color[0], color[1], color[2]),
        opacity: 0.3,
        transparent: true,
        linewidth: 2,
      });

      const line = new THREE.Line(geometry, material);
      line.position.y = (i - threadCount / 2) * (height / threadCount);
      scene.add(line);
      threads.push(line);
    }

    // Mouse tracking
    let mouseX = 0.5;
    let mouseY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = (e.clientY - rect.top) / rect.height;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.02;

      threads.forEach((thread, index) => {
        const positions = thread.geometry.attributes.position;
        const pointCount = positions.count;

        for (let i = 0; i < pointCount; i++) {
          const x = positions.getX(i);
          const normalizedX = (x + width / 2) / width;
          
          // Create flowing wave effect
          const wave = Math.sin(normalizedX * Math.PI * 4 + time + index * 0.5) * 30;
          const mouseInfluence = Math.sin(normalizedX * Math.PI * 8 + time * 2) * 
            (1 - Math.abs(mouseX - 0.5) * 2) * amplitude * 20;
          
          positions.setY(i, wave + mouseInfluence);
        }
        
        positions.needsUpdate = true;
      });

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = container.offsetWidth;
      const newHeight = container.offsetHeight;
      
      camera.left = newWidth / -2;
      camera.right = newWidth / 2;
      camera.top = newHeight / 2;
      camera.bottom = newHeight / -2;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      threads.forEach(thread => {
        thread.geometry.dispose();
        (thread.material as THREE.Material).dispose();
        scene.remove(thread);
      });
      
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [color, amplitude]);

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
        pointerEvents: 'none'
      }} 
    />
  );
};

export default ThreadsAnimation;