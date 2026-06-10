'use client';

import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type HeroProps = {
    model: string;
    radius: number;
    speed: number;
    size: number;
    onClick: (worldPosition: THREE.Vector3) => void;
};

export default function HeroModel({ model, size, onClick }: HeroProps) {
    const ref = useRef<THREE.Group>(null);
    const { scene, animations } = useGLTF(model);
    const { actions, names } = useAnimations(animations, ref);

    useEffect(() => {
        console.log('Available animations:', names);

        const idleAction = actions.city_idle;
        const introAction = actions.city_action;

        if (!idleAction || !introAction) return;

        // Intro hanya sekali
        introAction.reset();
        introAction.setLoop(THREE.LoopOnce, 1);
        introAction.clampWhenFinished = true;
        introAction.play();

        const mixer = introAction.getMixer();

        const handleFinished = (e: any) => {
            if (e.action === introAction) {
                idleAction.reset();
                idleAction.setLoop(THREE.LoopRepeat, Infinity);
                idleAction.fadeIn(0.5);
                idleAction.play();
            }
        };

        mixer.addEventListener('finished', handleFinished);

        return () => {
            mixer.removeEventListener('finished', handleFinished);
        };
    }, [actions]);

    // Orbit motion

    const handleClick = () => {
        if (!ref.current) return;

        const worldPos = new THREE.Vector3();
        ref.current.getWorldPosition(worldPos);

        onClick(worldPos);
    };

    return (
        <group ref={ref} scale={size} onClick={handleClick}>
            <primitive object={scene} />
        </group>
    );
}
