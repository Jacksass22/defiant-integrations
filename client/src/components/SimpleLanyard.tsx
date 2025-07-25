import { Canvas } from '@react-three/fiber';
import { Text, Box, OrbitControls } from '@react-three/drei';
import { useRef, useState, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Card() {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1 - 1;
    }
  });

  return (
    <group
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      {/* Card Background */}
      <Box args={[3.5, 5, 0.1]} position={[0, 0, 0]}>
        <meshPhysicalMaterial 
          color="#1a1a1a" 
          clearcoat={1} 
          clearcoatRoughness={0.15} 
          roughness={0.9} 
          metalness={0.8} 
        />
      </Box>
      
      {/* Main Text */}
      <Text
        position={[0, 1.2, 0.06]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
        textAlign="center"
      >
        Never have to answer{'\n'}another client{'\n'}phone call again
      </Text>
      
      {/* Description Text */}
      <Text
        position={[0, -0.5, 0.06]}
        fontSize={0.16}
        color="#cccccc"
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
        textAlign="center"
        lineHeight={1.4}
      >
        AI handles appointments,{'\n'}questions, and follow-ups.{'\n'}{'\n'}Personal calls and{'\n'}important matters are{'\n'}seamlessly transferred{'\n'}to you.
      </Text>
      
      {/* Branding */}
      <Text
        position={[0, -2, 0.06]}
        fontSize={0.12}
        color="#666666"
        anchorX="center"
        anchorY="middle"
      >
        Defiant Integrations
      </Text>
      
      {/* Lanyard Hole */}
      <Box args={[0.3, 0.3, 0.2]} position={[0, 2.2, 0]}>
        <meshStandardMaterial color="#333333" metalness={1} roughness={0.3} />
      </Box>
    </group>
  );
}

export default function SimpleLanyard() {
  return (
    <div style={{ width: '100%', height: '600px', background: 'transparent' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 35 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.3} />
          <Card />
          <OrbitControls 
            enablePan={false} 
            enableZoom={false} 
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}