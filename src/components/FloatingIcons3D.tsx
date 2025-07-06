
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, MeshDistortMaterial, Sphere, Box, Torus } from '@react-three/drei';
import { Mesh } from 'three';

function FloatingIcon({ position, icon }: { position: [number, number, number], icon: string }) {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  const IconGeometry = () => {
    switch (icon) {
      case 'brain':
        return <Sphere args={[0.5, 16, 16]} ref={meshRef}>
          <MeshDistortMaterial color="#00ffff" distort={0.3} speed={2} />
        </Sphere>;
      case 'pill':
        return <Box args={[0.3, 0.8, 0.3]} ref={meshRef}>
          <MeshDistortMaterial color="#ff00ff" distort={0.2} speed={1.5} />
        </Box>;
      case 'heart':
        return <Torus args={[0.4, 0.2, 8, 16]} ref={meshRef}>
          <MeshDistortMaterial color="#ff0080" distort={0.4} speed={2.5} />
        </Torus>;
      default:
        return <Sphere args={[0.4, 12, 12]} ref={meshRef}>
          <MeshDistortMaterial color="#00ff80" distort={0.5} speed={1.8} />
        </Sphere>;
    }
  };

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group position={position}>
        <IconGeometry />
      </group>
    </Float>
  );
}

export default function FloatingIcons3D() {
  const icons = useMemo(() => [
    { position: [-4, 2, -2], icon: 'brain' },
    { position: [4, -1, -3], icon: 'pill' },
    { position: [-2, -3, -1], icon: 'heart' },
    { position: [3, 3, -4], icon: 'dna' },
    { position: [-5, -1, -5], icon: 'pulse' },
    { position: [2, -4, -2], icon: 'molecule' }
  ] as const, []);

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
