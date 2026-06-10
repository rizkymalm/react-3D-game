'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type CameraRigProps = {
    zoom: boolean;
    focus?: THREE.Vector3 | null;
};

export default function CameraRig({ zoom, focus }: CameraRigProps) {
    const { camera } = useThree();

    const introPos = useRef(new THREE.Vector3(0, 30, 80));
    const idlePos = useRef(new THREE.Vector3(0, 8, 26));

    const state = useRef<'intro' | 'idle' | 'focus'>('intro');
    const progress = useRef(0);

    useEffect(() => {
        camera.position.copy(introPos.current);
    }, [camera]);

    useFrame((_, delta) => {
        // INTRO
        if (state.current === 'intro') {
            progress.current += delta * 0.25;
            const t = THREE.MathUtils.clamp(progress.current, 0, 1);

            camera.position.lerpVectors(introPos.current, idlePos.current, t);
            camera.lookAt(0, 0, 0);

            if (t >= 1) {
                state.current = 'idle';
            }
        }

        // SWITCH TO FOCUS MODE
        if (zoom && focus && state.current !== 'focus') {
            state.current = 'focus';
        }

        // FOCUS ON PLANET
        if (state.current === 'focus' && focus) {
            const target = focus.clone().add(new THREE.Vector3(0, 0, 4));

            camera.position.lerp(target, delta * 2.2);
            camera.lookAt(focus);
        }
    });

    return null;
}
