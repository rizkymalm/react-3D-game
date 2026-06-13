import '@/styles/fog.css';

import BackgroundHero from '@public/models/background-hero.png';
import React, { useEffect, useState } from 'react';

import HeroAnimation from '@/components/models/HeroAnimation';
import Page from '@/components/Page';
import HeroDetail from '@/components/sections/HeroDetail';
import HeroList from '@/components/sections/HeroList';
import { findObj } from '@/lib/findObj';
import { hero } from '@/lib/hero';
import { type HeroTypes } from '@/types/hero.type';

const HomePage = () => {
    const [slideValue, setSlideValue] = useState<string | null>('');
    const [selectedHero, setSelectedHero] = useState<
        HeroTypes | undefined | null
    >();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        function getHero() {
            if (slideValue) {
                setLoading(true);
                const value = findObj(hero, 'id', slideValue);
                setTimeout(() => {
                    setSelectedHero(value);
                    setLoading(false);
                }, 500);
            }
        }
        getHero();
    }, [slideValue]);
    return (
        <Page title="3D Game">
            <div className="m-auto min-h-screen w-full">
                <div className="absolute inset-0 z-9 m-auto h-screen w-full">
                    {loading ? loading : <HeroAnimation data={selectedHero} />}
                </div>
                <div id="foglayer_01" className="fog">
                    <div className="image01"></div>
                    <div className="image02"></div>
                </div>
                <div id="foglayer_02" className="fog">
                    <div className="image01"></div>
                    <div className="image02"></div>
                </div>
                <div className="absolute inset-y-0 left-0 z-9 m-auto h-full w-[23%]">
                    {selectedHero ? (
                        <HeroDetail data={selectedHero} />
                    ) : (
                        'loading'
                    )}
                </div>
                <div className="absolute inset-x-0 -bottom-0 z-9 m-auto w-[50%]">
                    <div className="relative inset-0 m-auto h-full w-full">
                        <HeroList value={data => setSlideValue(data)} />
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 z-9 m-auto h-[40%] w-[28%] pr-10">
                    <div className="bgGradient-right absolute inset-0 z-0 m-auto h-full w-full" />
                    <div className="flex h-full w-full flex-col gap-2 px-4 py-2">
                        <div className="relative w-full">
                            <p className="ty-body tier-silver font-medium">
                                Attack
                            </p>
                            <div className="progress-bar bg-light-3/20">
                                <div className={`progress w-10/12`} />
                            </div>
                        </div>
                        <div className="relative w-full">
                            <p className="ty-body tier-silver font-medium">
                                Defense
                            </p>
                            <div className="progress-bar bg-light-3/20">
                                <div className={`progress w-7/12`} />
                            </div>
                        </div>
                        <div className="relative w-full">
                            <p className="ty-body tier-silver font-medium">
                                Ulti
                            </p>
                            <div className="progress-bar bg-light-3/20">
                                <div className={`progress w-8/12`} />
                            </div>
                        </div>
                        <div className="relative w-full">
                            <p className="ty-body tier-silver font-medium">
                                Ability
                            </p>
                            <div className="progress-bar bg-light-3/20">
                                <div className={`progress w-7/12`} />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-0 z-1 m-auto h-screen w-full"
                    style={{
                        backgroundImage: `url(${BackgroundHero})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </div>
        </Page>
    );
};

export default HomePage;
