import { ShimmerButton } from "@/components/buttons/shimmer-button";
import { BackgroundBeamsWithCollision } from "@/components/backgrounds/background-beams-with-collision";
import { TypewriterEffect } from "@/components/miscs/typewriter-effect";
import { NavLink } from "react-router";

export function Welcome() {
    const words = [
        {
            text: "Step",
            className: "text-6xl",
        },
        {
            text: "Into",
            className: "text-6xl",
        },
        {
            text: "a",
            className: "text-6xl",
        },
        {
            text: "World",
            className: "text-6xl",
        },
        {
            text: "of",
            className: "text-6xl",
        },
        {
            text: "Possibilities.",
            className:
                "text-[#FF6884] text-6xl dark:text-[#FF6884] dark:text-6xl",
        },
    ];

    return (
        <div className="w-[100%] mx-auto h-screen overflow-hidden">
            {/* <WavyBackground
                backgroundFill="white"
                className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
                <TypewriterEffect words={words}></TypewriterEffect>
                <p className="text-[#3F3D56] text-sm md:text-2xl max-w-xl mt-6 text-center">
                    向往和平的人放弃了战马，毫不犹豫地走向了橄榄树。
                </p>

                <div className="mt-12">
                    <NavLink to={"/home"}>
                        <ShimmerButton
                            shimmerColor="#FF6884"
                            shimmerSize="0.1rem"
                            className="hover:text-red-400">
                            STEP INTO
                        </ShimmerButton>
                    </NavLink>
                </div>
            </WavyBackground> */}
            <BackgroundBeamsWithCollision className="flex flex-col justify-center items-center bg-white">
                <TypewriterEffect words={words}></TypewriterEffect>
                <p className="text-[#3F3D56] text-sm md:text-2xl max-w-xl mt-6 text-center">
                    向往和平的人放弃了战马，毫不犹豫地走向了橄榄树。
                </p>

                <div className="mt-12">
                    <NavLink to={"/home"}>
                        <ShimmerButton
                            shimmerColor="#FF6884"
                            shimmerSize="0.1rem"
                            className="hover:text-red-400">
                            STEP INTO
                        </ShimmerButton>
                    </NavLink>
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    );
}
