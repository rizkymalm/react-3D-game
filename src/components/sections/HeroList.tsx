import React from 'react';

import { hero } from '@/lib/hero';

import SlideshowMultiple from '../slideshow/SlideshowMultiple';

interface Props {
    value?: (value: string | null) => void;
}

const HeroList = ({ value }: Props) => {
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
                        value &&
                        value(event.currentTarget.getAttribute('data-key'))
                    }
                />
            </ul>
        </div>
    );
};

export default HeroList;
