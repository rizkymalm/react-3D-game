import React from 'react';

import { hero } from '@/lib/hero';

import SlideshowMultiple from '../slideshow/SlideshowMultiple';

const HeroList = () => {
    return (
        <div className="h-full w-full">
            <ul className="[&>li]:my-2">
                <SlideshowMultiple
                    data={hero}
                    show={7}
                    ratio="1:1"
                    peek
                    autoSlide
                    interval={10000}
                    isSelected
                    selected={0}
                    hoverIncrease
                    draggable
                    onClick={event =>
                        console.log(
                            event.currentTarget.getAttribute('data-key')
                        )
                    }
                />
            </ul>
        </div>
    );
};

export default HeroList;
