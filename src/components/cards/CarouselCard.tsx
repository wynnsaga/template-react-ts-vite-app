// 一个旋转木马滚动Card
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import React, { useEffect } from "react";

interface CardProps {
    items: React.ReactNode[];
}

export function CarouselCard({ items }: CardProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoScroll({ playOnInit: true })]);

    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (!autoScroll) return;
        autoScroll.play();
    }, [emblaApi]);

    return (
        <div className="w-full">
            <div
                className="overflow-hidden"
                ref={emblaRef}>
                <div className="flex justify-evenly">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex-[0_0_25%] min-w-0 flex justify-center">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
