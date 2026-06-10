'use client';

import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

type FogParticlesProps = {
    count?: number;
    radius?: number;
};

export default function FogParticles({
    count = 120,
    radius = 12,
}: FogParticlesProps) {
    const ref = useRef<THREE.Points>(null);

    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * radius;
            arr[i * 3 + 1] = Math.random() * 5 - 1;
            arr[i * 3 + 2] = (Math.random() - 0.5) * radius;
        }

        return arr;
    }, [count, radius]);

    useFrame(({ clock }) => {
        if (!ref.current) return;

        const t = clock.getElapsedTime();

        ref.current.rotation.y = t * 0.03;
        ref.current.position.x = Math.sin(t * 0.2) * 0.2;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>

            <pointsMaterial
                size={0.12}
                color="#00ff99"
                transparent
                opacity={0.35}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
