import React, { useEffect, useState } from 'react';

import { type HeroTypes } from '@/types/hero.type';

const HeroStats = ({ data }: any) => {
    const [hero, setHero] = useState<HeroTypes | null>(null);
    useEffect(() => {
        if (data) {
            setHero(data);
        }
    }, [data]);
    return (
        <div
            className={`absolute inset-y-0 right-0 z-9 m-auto h-[25%] w-full pr-10 transition-transform duration-300 lg:h-[40%] ${data ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className="bgGradient-right absolute inset-0 z-0 m-auto h-full w-full" />
            <div className="orbitron-bold flex h-full w-full flex-col gap-2 px-4 py-2">
                <div className="relative w-full">
                    <p className="tier-silver text-text-sm font-medium lg:text-text-lg">
                        Attack
                    </p>
                    <div className="progress-bar bg-light-3/20">
                        <div
                            className={`progress transition-all duration-1000`}
                            style={{
                                width: data ? `${hero?.stats.attack}%` : '0%',
                            }}
                        />
                    </div>
                </div>
                <div className="relative w-full">
                    <p className="tier-silver text-text-sm font-medium lg:text-text-lg">
                        Defense
                    </p>
                    <div className="progress-bar bg-light-3/20">
                        <div
                            className={`progress transition-all duration-1000`}
                            style={{
                                width: data ? `${hero?.stats.defense}%` : '0%',
                            }}
                        />
                    </div>
                </div>
                <div className="relative w-full">
                    <p className="tier-silver text-text-sm font-medium lg:text-text-lg">
                        Ulti
                    </p>
                    <div className="progress-bar bg-light-3/20">
                        <div
                            className={`progress transition-all duration-1000`}
                            style={{
                                width: data ? `${hero?.stats.ulti}%` : '0%',
                            }}
                        />
                    </div>
                </div>
                <div className="relative w-full">
                    <p className="tier-silver text-text-sm font-medium lg:text-text-lg">
                        Ability
                    </p>
                    <div className="progress-bar bg-light-3/20">
                        <div
                            className={`progress transition-all duration-1000`}
                            style={{
                                width: data ? `${hero?.stats.ability}%` : '0%',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroStats;
