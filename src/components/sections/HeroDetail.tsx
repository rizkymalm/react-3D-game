import React, { useEffect, useState } from 'react';

import { findObj } from '@/lib/findObj';
import { roleOption } from '@/lib/hero';
import type { RoleTypes } from '@/types/hero.type';
import { type HeroTypes } from '@/types/hero.type';

interface Props {
    data: any;
}

const HeroDetail = ({ data }: Props) => {
    const [hero, setHero] = useState<HeroTypes | null>(null);
    const [role, setRole] = useState<RoleTypes | null>(null);
    useEffect(() => {
        if (data) {
            setHero(data);
            const roles = findObj(roleOption, 'role', data.role);
            if (roles) {
                setRole(roles);
            }
        }
    }, [data]);
    return (
        <div
            className={`absolute inset-0 m-auto h-40 w-full transition-transform duration-300 ${data ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className="relative min-h-10 w-full p-4">
                <div className="bgGradient-left absolute inset-0 z-0 m-auto h-full w-full" />
                <div className="relative z-99">
                    <div className="flex gap-4">
                        <div
                            className="h-14 w-14"
                            style={{
                                backgroundImage: `url('${role?.icon}')`,
                                backgroundSize: 'cover',
                            }}
                        />
                        <div className="orbitron-bold flex flex-col">
                            <p className="ty-h4 text-center text-white">
                                {hero?.name}
                            </p>
                            <p className="ty-body tier-gold relative z-99 capitalize">
                                {hero?.role}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-4">
                <ul className="flex w-full gap-2">
                    {hero?.skill &&
                        hero.skill.map(item => (
                            <li>
                                <img src={item} width={50} />
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default HeroDetail;
