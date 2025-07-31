import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface GridDistortionAnimationProps {
  grid?: number;
  strength?: number;
  className?: string;
}

const GridDistortionAnimation: React.FC<GridDistortionAnimationProps> = ({
  grid = 20,
  strength = 0.4,
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

    // Create grid
    const gridLines: THREE.Line[] = [];
    const material = new THREE.LineBasicMaterial({
      color: 0xffffff,
      opacity: 0.1,
      transparent: true,
    });

    // Horizontal lines
    for (let i = 0; i <= grid; i++) {
      const geometry = new THREE.BufferGeometry();
      const points = [];
      
      for (let j = 0; j <= grid; j++) {
        const x = (j / grid) * width - width / 2;
        const y = (i / grid) * height - height / 2;
        points.push(new THREE.Vector3(x, y, 0));
      }
      
      geometry.setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      scene.add(line);
      gridLines.push(line);
    }

    // Vertical lines
    for (let i = 0; i <= grid; i++) {
      const geometry = new THREE.BufferGeometry();
      const points = [];
      
      for (let j = 0; j <= grid; j++) {
        const x = (i / grid) * width - width / 2;
        const y = (j / grid) * height - height / 2;
        points.push(new THREE.Vector3(x, y, 0));
      }
      
      geometry.setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      scene.add(line);
      gridLines.push(line);
    }

    // Mouse tracking
    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left) / rect.width;
      targetMouseY = (e.clientY - rect.top) / rect.height;
    };

    const handleMouseLeave = () => {
      targetMouseX = 0.5;
      targetMouseY = 0.5;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.02;

      // Smooth mouse movement
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      // Update grid distortion
      gridLines.forEach((line, lineIndex) => {
        const positions = line.geometry.attributes.position;
        const pointCount = positions.count;
        const isHorizontal = lineIndex < grid + 1;

        for (let i = 0; i < pointCount; i++) {
          const originalX = positions.getX(i);
          const originalY = positions.getY(i);
          
          // Calculate distance to mouse
          const normalizedX = (originalX + width / 2) / width;
          const normalizedY = (originalY + height / 2) / height;
          const distanceToMouse = Math.sqrt(
            Math.pow(normalizedX - mouseX, 2) + 
            Math.pow(normalizedY - mouseY, 2)
          );
          
          // Apply distortion
          const distortion = Math.sin(time + distanceToMouse * 10) * strength * 20;
          const influence = Math.exp(-distanceToMouse * 3);
          
          if (isHorizontal) {
            positions.setY(i, originalY + distortion * influence * Math.sin(time * 0.3));
          } else {
            positions.setX(i, originalX + distortion * influence * Math.cos(time * 0.5));
          }
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
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      
      gridLines.forEach(line => {
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
        scene.remove(line);
      });
      
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [grid, strength]);

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

export default GridDistortionAnimation;