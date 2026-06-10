import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type * as THREE from 'three';

export function useThreeJs(radius: number, speed: number, offset = 0) {
    const ref = useRef<THREE.Group>(null!);
    const angle = useRef(offset);

    useFrame((_, delta) => {
        angle.current += delta * speed;

        ref.current.position.x = Math.cos(angle.current) * radius;
        ref.current.position.z = Math.sin(angle.current) * radius;
    });

    return ref;
}
