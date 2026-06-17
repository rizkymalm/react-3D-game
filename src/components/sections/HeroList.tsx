import React, { useEffect, useState } from 'react';

import { useResponsive } from '@/hooks/useResponsive';
import { hero, roleOption } from '@/lib/hero';
import type { HeroTypes } from '@/types/hero.type';

import SlideshowMultiple from '../slideshow/SlideshowMultiple';

interface Props {
    value?: (value: string | null) => void;
}

const HeroList = ({ value }: Props) => {
    const [selectedRole, setSelectedRole] = useState('fighter');
    const [data, setData] = useState<string | null>(null);
    const [heroList, setHeroList] = useState<HeroTypes[]>([]);
    const isMobile = useResponsive();
    useEffect(() => {
        setHeroList([]);
        const heros = hero.filter(item => item.role === selectedRole);
        setHeroList(heros);
    }, [selectedRole]);

    const handleSelectRole = (role: string) => {
        setSelectedRole(role);
    };
    return (
        <div className="relative h-full w-full">
            <div className="absolute inset-x-0 -top-14 z-9 m-auto h-10 w-[90%]">
                <div className="relative inset-x-0 m-auto flex w-full justify-center gap-2 lg:w-[50%]">
                    {roleOption.map(item => (
                        <div
                            className={`cursor-pointer rounded-full p-2 transition-all duration-300 ${item.role === selectedRole ? 'bg-accent-light/20' : 'bg-transparent'}`}
                            onClick={() => handleSelectRole(item.role)}
                            title={item.role}
                        >
                            <img src={item.iconFlat} className="h-6 w-6" />
                        </div>
                    ))}
                </div>
            </div>
            <ul>
                {heroList.length > 0 ? (
                    <SlideshowMultiple
                        data={heroList}
                        show={isMobile ? 4 : 8}
                        ratio="1:1"
                        peek
                        isSelected
                        selected={data}
                        hoverIncrease
                        onClick={event => {
                            if (value) {
                                value(
                                    event.currentTarget.getAttribute('data-key')
                                );
                                setData(
                                    event.currentTarget.getAttribute('data-key')
                                );
                            }
                        }}
                    />
                ) : (
                    'Loading'
                )}
            </ul>
        </div>
    );
};

export default HeroList;
