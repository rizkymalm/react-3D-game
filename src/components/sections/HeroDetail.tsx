import React, { useEffect, useState } from 'react';

import { type HeroTypes } from '@/types/hero.type';

interface Props {
    data: any;
}

const HeroDetail = ({ data }: Props) => {
    const [hero, setHero] = useState<HeroTypes | null>(null);
    useEffect(() => {
        if (data) {
            setHero(data);
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
                                backgroundImage: `url('/hero/role/role-fighter.png')`,
                                backgroundSize: 'cover',
                            }}
                        />
                        <div className="orbitron-bold flex flex-col">
                            <p className="ty-h4 text-center text-white">
                                {hero?.name}
                            </p>
                            <p className="ty-body tier-gold relative z-99">
                                {hero?.role}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-4">
                <ul className="flex w-full gap-2">
                    <li>
                        <img src="/hero/magic/magic-freya-1.png" width={50} />
                    </li>
                    <li>
                        <img src="/hero/magic/magic-freya-2.png" width={50} />
                    </li>
                    <li>
                        <img src="/hero/magic/magic-freya-3.png" width={50} />
                    </li>
                    <li>
                        <img src="/hero/magic/magic-freya-4.png" width={50} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HeroDetail;
