import React, { useEffect, useState } from 'react';

import { findIndex } from '@/lib/findObj';
import { hero } from '@/lib/hero';

import SlideshowMultiple from '../slideshow/SlideshowMultiple';

interface Props {
    value?: (value: string | null) => void;
}

const HeroList = ({ value }: Props) => {
    const [data, setData] = useState<string | null>(null);
    const [model, setModel] = useState<number>(-1);
    useEffect(() => {
        if (data) {
            const find = findIndex(hero, 'id', data);
            setModel(find);
        }
    }, [value]);

    return (
        <div className="h-full w-full">
            <ul>
                <SlideshowMultiple
                    data={hero}
                    show={9}
                    ratio="1:1"
                    peek
                    interval={10000}
                    isSelected
                    selected={model}
                    hoverIncrease
                    draggable
                    onClick={event => {
                        if (value) {
                            value(event.currentTarget.getAttribute('data-key'));
                            setData(
                                event.currentTarget.getAttribute('data-key')
                            );
                        }
                    }}
                />
            </ul>
        </div>
    );
};

export default HeroList;
