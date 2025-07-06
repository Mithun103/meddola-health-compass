
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Mesh } from 'three';

function FloatingIcon({ position, icon }: { position: [number, number, number], icon: string }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  const getGeometry = () => {
    switch (icon) {
      case 'brain':
        return (
          <sphereGeometry args={[0.5, 16, 16]} />
        );
      case 'pill':
        return (
          <boxGeometry args={[0.3, 0.8, 0.3]} />
        );
      case 'heart':
        return (
          <torusGeometry args={[0.4, 0.2, 8, 16]} />
        );
      default:
        return (
          <sphereGeometry args={[0.4, 12, 12]} />
        );
    }
  };

  const getColor = () => {
    switch (icon) {
      case 'brain':
        return "#00ffff";
      case 'pill':
        return "#ff00ff";
      case 'heart':
        return "#ff0080";
      default:
        return "#00ff80";
    }
  };

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group position={position}>
        <mesh ref={meshRef}>
          {getGeometry()}
          <MeshDistortMaterial 
            color={getColor()} 
            distort={0.3} 
            speed={2} 
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function FloatingIcons3D() {
  const icons = useMemo(() => [
    { position: [-4, 2, -2] as [number, number, number], icon: 'brain' },
    { position: [4, -1, -3] as [number, number, number], icon: 'pill' },
    { position: [-2, -3, -1] as [number, number, number], icon: 'heart' },
    { position: [3, 3, -4] as [number, number, number], icon: 'dna' },
    { position: [-5, -1, -5] as [number, number, number], icon: 'pulse' },
    { position: [2, -4, -2] as [number, number, number], icon: 'molecule' }
  ], []);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
        {icons.map((icon, index) => (
          <FloatingIcon key={index} position={icon.position} icon={icon.icon} />
        ))}
      </Canvas>
    </div>
  );
}
