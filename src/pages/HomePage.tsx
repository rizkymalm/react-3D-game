import '@/styles/fog.css';

import BackgroundHero from '@public/models/background-hero.png';
import React from 'react';

import HeroFreya from '@/components/models/HeroFreya';
import Page from '@/components/Page';
import HeroList from '@/components/sections/HeroList';

const HomePage = () => {
    return (
        <Page title="3D Game">
            <div className="m-auto min-h-screen w-full">
                <div className="absolute inset-0 z-9 m-auto h-screen w-full">
                    <HeroFreya />
                </div>
                <div id="foglayer_01" className="fog">
                    <div className="image01"></div>
                    <div className="image02"></div>
                </div>
                <div id="foglayer_02" className="fog">
                    <div className="image01"></div>
                    <div className="image02"></div>
                </div>
                <div className="absolute inset-x-0 bottom-0 z-9 m-auto w-[50%]">
                    <div className="relative inset-0 m-auto h-full w-full">
                        <HeroList />
                    </div>
                </div>
                <div
                    className="absolute inset-0 z-1 m-auto h-screen w-full"
                    style={{
                        backgroundImage: `url(${BackgroundHero})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                    }}
                />
            </div>
        </Page>
    );
};

export default HomePage;
