import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect } from "react";
import "./embla.css";

export function CarouselDemo() {
    const slides = Array.from(Array(8).keys());

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoScroll({ playOnInit: true })]);

    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (!autoScroll) return;

        autoScroll.play();
    }, [emblaApi]);

    return (
        <div className="embla">
            <div
                className="embla__viewport"
                ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div
                            className="embla__slide"
                            key={index}>
                            <div className="embla__slide__number">
                                <span>{index + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
