import { cn } from "@/lib/utils";
import { motion, MotionProps, useScroll } from "motion/react";
import React, { useEffect, useState } from "react";
interface ScrollProgressProps
    extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
    contianerRef: React.RefObject<null>;
}

export const ScrollProgress = React.forwardRef<
    HTMLDivElement,
    ScrollProgressProps
>(({ className, contianerRef, ...props }, ref) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        if (contianerRef.current) {
            setMounted(true);
        }
    });

    const { scrollYProgress } = useScroll({
        container: mounted ? contianerRef : undefined,
    });

    return (
        <motion.div
            ref={ref}
            className={cn(
                "fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#000000] via-[#FFFFFF] to-[#FF6884]",
                className
            )}
            style={{
                scaleX: scrollYProgress,
            }}
            {...props}
        />
    );
});

ScrollProgress.displayName = "ScrollProgress";
