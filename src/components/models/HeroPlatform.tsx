import { Bounds, OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';

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

const HeroPlatform = () => {
    return (
        <div className="absolute inset-0 z-9 m-auto max-h-full w-full items-center justify-center">
            <div className="relative size-full">
                <Canvas camera={{ position: [0, 0, 40], fov: 80 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={2} />
                    <React.Suspense fallback={null}>
                        <Bounds fit>
                            <HeroMove
                                model="/models/platform.glb"
                                radius={0}
                                speed={0.4}
                                size={4}
                            />
                            <Preload all />
                        </Bounds>
                    </React.Suspense>
                    <OrbitControls
                        makeDefault
                        enableZoom={false}
                        enablePan={false}
                        rotateSpeed={0.2}
                        target={[0, 2, 0]}
                    />
                </Canvas>
            </div>
        </div>
    );
};

export default HeroPlatform;
