import { DirectionAwareHover } from "@/components/miscs/direction-aware-hover";

export function ProfileCard() {
    const imageUrl =
        "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <DirectionAwareHover
            imageUrl={imageUrl}
            className="md:w-1/3">
            <p className="font-bold text-xl">Wynn</p>
        </DirectionAwareHover>
    );
}
