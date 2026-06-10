import {
    Bounds,
    ContactShadows,
    OrbitControls,
    Preload,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';

import { type HeroTypes } from '@/types/hero.type';

import HeroModel from './HeroModel';
import { useThreeJs } from './useThreeJs';

function HeroMove({ model, radius, speed, size, onClick }: any) {
    const ref = useThreeJs(radius, speed);
    return (
        <group ref={ref}>
            <HeroModel
                model={model}
                size={size}
                onClick={onClick}
                radius={radius}
                speed={speed}
            />
        </group>
    );
}

const HeroAnimation = ({ data }: any) => {
    const [hero, setHero] = useState<HeroTypes | null>(null);
    useEffect(() => {
        if (data) {
            setHero(data);
        }
    }, [data]);
    return (
        <div className="absolute inset-0 z-9 m-auto max-h-full w-full items-center justify-center">
            <div className="relative size-full">
                {hero ? (
                    <Canvas camera={{ position: [0, 10, 10], fov: 50 }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={2} />
                        <React.Suspense fallback={null}>
                            <Bounds fit>
                                <HeroMove
                                    model={hero.model}
                                    radius={0}
                                    speed={0.4}
                                    size={6}
                                />
                                <Preload all />
                            </Bounds>
                        </React.Suspense>
                        <ContactShadows
                            position={[0, -2, 0]}
                            opacity={0.8}
                            scale={20}
                            blur={2.5}
                            far={10}
                            resolution={1024}
                        />
                        <OrbitControls
                            makeDefault
                            enableZoom={false}
                            enablePan={false}
                            rotateSpeed={0.2}
                            target={[0, 2, 0]}
                        />
                    </Canvas>
                ) : (
                    'loading'
                )}
            </div>
        </div>
    );
};

export default HeroAnimation;
