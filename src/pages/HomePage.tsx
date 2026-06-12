import '@/styles/fog.css';

import BackgroundHero from '@public/models/background-hero.png';
import React, { useEffect, useState } from 'react';

import HeroAnimation from '@/components/models/HeroAnimation';
import Page from '@/components/Page';
import HeroList from '@/components/sections/HeroList';
import { findObj } from '@/lib/findObj';
import { hero } from '@/lib/hero';
import { type HeroTypes } from '@/types/hero.type';

const HomePage = () => {
    const [slideValue, setSlideValue] = useState<string | null>(null);
    const [heroSlide, setHeroSlide] = useState<HeroTypes | null>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        function getHero() {
            if (slideValue) {
                setLoading(true);
                const value = findObj(hero, 'id', slideValue);
                setTimeout(() => {
                    setHeroSlide(value);
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
                    {loading ? loading : <HeroAnimation data={heroSlide} />}
                    {/* <HeroFreya data={heroSlide} /> */}
                </div>
                <div id="foglayer_01" className="fog">
                    <div className="image01"></div>
                    <div className="image02"></div>
                </div>
                <div id="foglayer_02" className="fog">
                    <div className="image01"></div>
                    <div className="image02"></div>
                </div>
                <div className="absolute inset-x-0 -bottom-0 z-9 m-auto w-[50%]">
                    <div className="relative inset-0 m-auto h-full w-full">
                        <HeroList value={data => setSlideValue(data)} />
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
