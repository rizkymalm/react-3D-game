import { ContactShadows, OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';

import { type HeroTypes } from '@/types/hero.type';

import HeroModel from './HeroModel';

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
                    <Canvas camera={{ position: hero.position, fov: 45 }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={2} />
                        <React.Suspense fallback={null}>
                            <HeroModel
                                model={hero.model}
                                radius={0}
                                size={hero.size}
                                idle={hero.idle}
                                action={hero.action}
                            />
                            <Preload all />
                        </React.Suspense>
                        <ContactShadows
                            position={[0, -4, 0]}
                            opacity={0.8}
                            scale={20}
                            blur={2.5}
                            far={10}
                            resolution={1024}
                        />
                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            rotateSpeed={0.2}
                            target={[0, 0, -5]}
                        />
                        {/* <gridHelper args={[20, 20]} />
                        <axesHelper args={[5]} /> */}
                    </Canvas>
                ) : (
                    'loading'
                )}
            </div>
        </div>
    );
};

export default HeroAnimation;
