'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing';
import LuxuryBuilding from './LuxuryBuilding';
import { Suspense } from 'react';
import * as THREE from 'three';

export default function Scene() {
    return (
        <div className="absolute inset-0 z-0 h-screen w-full bg-black">
            <Canvas
                gl={{ antialias: false, toneMapping: THREE.ReinhardToneMapping, toneMappingExposure: 1.5 }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 2, 12]} fov={45} />

                    <OrbitControls
                        enableZoom={true}
                        maxDistance={20}
                        minDistance={8}
                        autoRotate
                        autoRotateSpeed={0.5}
                        maxPolarAngle={Math.PI / 1.5}
                        minPolarAngle={Math.PI / 3}
                    />

                    {/* Cinematic Lighting */}
                    <ambientLight intensity={0.2} />
                    <spotLight position={[20, 20, 10]} angle={0.2} penumbra={1} intensity={25} color="#fbf1cc" castShadow />
                    <pointLight position={[-10, -10, -10]} intensity={10} color="#bb9200" />

                    {/* Environment */}
                    <Stars radius={200} depth={50} count={5000} factor={4} saturation={1} fade speed={0.5} />
                    <Environment preset="night" />

                    {/* Main Subject */}
                    <LuxuryBuilding />

                    {/* Post Processing */}
                    <EffectComposer enableNormalPass={false}>
                        <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} radius={0.4} />
                        <Noise opacity={0.05} />
                        <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    </EffectComposer>
                </Suspense>
            </Canvas>

            {/* Enhanced overlay */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black pointer-events-none" />
        </div>
    );
}
