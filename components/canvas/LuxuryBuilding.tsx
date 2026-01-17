'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Sparkles, Center } from '@react-three/drei';
import * as THREE from 'three';

function GoldSegments() {
  // Use deterministic generation instead of Math.random to satisfy React purity rules
  const segments = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => {
      // Simple deterministic pseudo-random based on index
      const hash = (n: number) => Math.sin(n) * 10000 - Math.floor(Math.sin(n) * 10000);
      const r1 = hash(i);
      const r2 = hash(i + 40);
      const r3 = hash(i + 80);

      return {
        position: [r1 * 2 - 1, (i * 0.4) - 8, r2 * 2 - 1] as [number, number, number],
        rotation: [0, r3 * Math.PI, 0] as [number, number, number],
        scale: [0.8 + r1, 0.5, 0.8 + r2] as [number, number, number],
      };
    });
  }, []);

  return (
    <group>
      {segments.map((s, i) => (
        <mesh key={i} position={s.position} rotation={s.rotation} scale={s.scale}>
          <boxGeometry />
          <meshStandardMaterial
            color="#bb9200"
            roughness={0.15}
            metalness={1}
            envMapIntensity={2.5}
          />
        </mesh>
      ))}
    </group>
  );
}

function CrystalCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = -state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1.5, 2]} />
      <MeshTransmissionMaterial
        backside
        samples={16}
        resolution={1024}
        transmission={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        thickness={2}
        chromaticAberration={2}
        anisotropy={5}
        distortion={1}
        distortionScale={0.5}
        temporalDistortion={0.5}
        ior={1.5}
        color="#f3d466"
        background={new THREE.Color('#0a0a0a')}
      />
    </mesh>
  );
}

function FloatingRings() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[3, 4, 5].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.02, 16, 100]} />
          <meshBasicMaterial color="#f3d466" toneMapped={false} />
        </mesh>
      ))}
    </group>
  )
}

export default function LuxuryBuilding() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.5, 0.5]}>
      <group ref={groupRef}>

        {/* Central Crystal Structure */}
        <Center top>
          <CrystalCore />
        </Center>

        {/* Floating Gold Facade Elements */}
        <group position={[0, 4, 0]}>
          <GoldSegments />
        </group>

        {/* Orbiting Elements */}
        <FloatingRings />

        {/* Atmosphere */}
        <Sparkles count={200} scale={12} size={4} speed={0.4} opacity={0.5} color="#fbf1cc" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#f3d466" distance={10} />
      </group>
    </Float>
  );
}
