import React, { useEffect, useRef, useState } from 'react';

import { ButtonIcon } from '../buttons';

interface PropsDataSlide {
    id: number | string;
    name: string;
    description?: string;
    image: string;
}

interface PropsSlider extends React.HTMLAttributes<HTMLDivElement> {
    data: PropsDataSlide[];
    show?: number;
    peek?: boolean;
    ratio: '16:9' | '16:7' | '16:12' | '1:1' | '7:16' | '9:16' | '12:16';
    autoSlide?: boolean;
    interval?: number;
    draggable?: boolean;
    isSelected?: boolean;
    selected?: number;
    hoverIncrease?: boolean;
}

type ControlSlideshow = 'next' | 'prev';

const SlideshowMultiple = ({
    data,
    show = 3,
    peek,
    ratio,
    autoSlide = false,
    interval = 5000,
    draggable,
    isSelected,
    selected = -1,
    hoverIncrease,
    ...props
}: PropsSlider) => {
    const ref = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const draggableRef = useRef<HTMLDivElement>(null);
    const startX = useRef(0);

    const [imageWidth, setImageWidth] = useState(0);
    const [wrapperWidth, setWrapperWidth] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        if (ref.current) {
            if (ref.current.offsetWidth) {
                const contentWidth = !peek
                    ? ref.current.offsetWidth / show
                    : ref.current.offsetWidth / (show + 0.5);
                const wrapper = contentWidth * data.length;
                const ratioSplit = ratio.split(':');
                const calculateHeight =
                    (contentWidth * parseInt(ratioSplit[0]!, 10)) /
                    parseInt(ratioSplit[1]!, 10);
                setWrapperWidth(wrapper);
                setImageWidth(contentWidth);
                setHeight(calculateHeight);
            }
        }
    }, [ref, show]);

    const handleControlSlideshow = (type: ControlSlideshow) => {
        if (type === 'next') {
            setTranslateX(prev => prev - imageWidth);
        } else {
            setTranslateX(prev => prev + imageWidth);
        }
    };

    // set interval autoslide useEffect
    useEffect(() => {
        if (!autoSlide) return undefined;
        const timer = setInterval(() => {
            const maxTranslateX = !peek
                ? (data.length - show) * imageWidth
                : (data.length - show - 0.5) * imageWidth;

            setTranslateX(prev => {
                const newTranslate = prev - imageWidth;
                if (Math.abs(newTranslate) > maxTranslateX) {
                    return 0;
                }
                return newTranslate;
            });
        }, interval);
        return () => clearInterval(timer);
    }, [autoSlide, show, imageWidth]);

    // draggable function with useEffect
    useEffect(() => {
        if (!draggable) return undefined;

        const element = draggableRef.current;
        const handleMouseMove = (event: any) => {
            if (element) {
                const moveCursor = event.clientX - startX.current;
                const newTranslate = translateX + moveCursor;
                setTranslateX(newTranslate);
            }
        };
        const handleMouseUp = () => {
            isDragging.current = false;
            startX.current = 0;
            if (element) {
                element.style.cursor = 'grab';
                element.removeEventListener('mousemove', handleMouseMove);
                element.removeEventListener('mouseup', handleMouseUp);
            }
        };
        const handleMouseLeave = () => {
            isDragging.current = false;
            startX.current = 0;
            if (element) {
                element.style.cursor = 'grab';
                element.removeEventListener('mousemove', handleMouseMove);
                element.removeEventListener('mouseleave', handleMouseUp);
            }
        };
        const handleMouseDown = (event: any) => {
            isDragging.current = true;
            startX.current = event.clientX;
            if (element) {
                element.style.cursor = 'grabbing';
                element.addEventListener('mouseup', handleMouseUp);
                element.addEventListener('mouseleave', handleMouseLeave);
                element.addEventListener('mousemove', handleMouseMove);
            }
        };
        if (element) {
            element.addEventListener('mousedown', handleMouseDown);
        }

        return () => {
            if (element) {
                element.addEventListener('mousedown', handleMouseDown);
            }
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [draggable, translateX]);

    // set max translate x for all
    useEffect(() => {
        if (data.length > show) {
            const maxTranslateX = !peek
                ? (data.length - show) * imageWidth
                : (data.length - show - 0.5) * imageWidth;
            if (translateX > 0) {
                setTimeout(() => {
                    setTranslateX(0);
                }, 300);
            }
            if (translateX < -maxTranslateX) {
                setTimeout(() => {
                    setTranslateX(-maxTranslateX);
                }, 300);
            }
        }
    }, [translateX, imageWidth, show, data]);
    return (
        <div
            className="no-scrollbar relative w-full max-w-full overflow-hidden"
            ref={ref}
        >
            <div
                className="relative flex w-full py-2 transition-transform duration-300"
                style={{
                    width: `${wrapperWidth}px`,
                    transform: `translateX(${translateX}px)`,
                    cursor: draggable ? 'grab' : 'default',
                }}
                ref={draggableRef}
            >
                {/* this is image content */}
                {data.map((item, index: number) => (
                    <div
                        className={`bg-bg-dark-1 relative cursor-pointer rounded-md transition-transform duration-300 dark:border-light-3/10 ${hoverIncrease && 'increase'}`}
                        style={{
                            backgroundImage: `url('${item.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            width: `${imageWidth}px`,
                            height: `${height}px`,
                            transform:
                                isSelected && selected === index
                                    ? 'scale(1.1) translateY(-4px)'
                                    : 'unset',
                            zIndex: isSelected && selected === index ? 9 : 1,
                            margin:
                                isSelected && selected === index
                                    ? '0px 8px'
                                    : '0px 4px',
                        }}
                        aria-label="slider image"
                        key={`${item.id}`}
                        data-key={`${item.id}`}
                        {...props}
                    />
                ))}
            </div>
            <div className="absolute inset-y-0 left-0 m-auto h-6 w-6">
                <ButtonIcon
                    type="button"
                    icon="mdi:keyboard-arrow-left"
                    iconSize={24}
                    onClick={() => handleControlSlideshow('prev')}
                />
            </div>
            <div className="absolute inset-y-0 right-0 m-auto h-6 w-6">
                <ButtonIcon
                    type="button"
                    icon="mdi:keyboard-arrow-right"
                    iconSize={24}
                    onClick={() => handleControlSlideshow('next')}
                />
            </div>
        </div>
    );
};

export default SlideshowMultiple;
