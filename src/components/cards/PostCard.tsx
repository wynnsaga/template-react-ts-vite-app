import { NavLink } from "react-router";
import { InteractiveHoverButton } from "../buttons/interactive-hover-button";
import dayjs from "dayjs";

interface PostCardProps {
    slug: string;
    title: string;
    description: string;
    date: Date;
    imagePath: string;
}

export function PostCard({ slug, title, description, date, imagePath }: PostCardProps) {
    return (
        <div className="w-full mx-auto">
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                    <img
                        src={imagePath}
                        alt="thumbnail"
                        className="w-full h-[30vh] group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                    />
                </div>
                <div className=" p-4">
                    <h2 className="font-bold my-4 text-lg text-zinc-700">{title}</h2>
                    <h2 className="font-normal my-4 text-sm text-zinc-500">{description}</h2>
                    <div className="flex flex-row justify-between items-center mt-10">
                        <span className="text-sm text-gray-500">{dayjs(date).format("Do MMMM, YYYY")}</span>
                        <NavLink to={`/blog/post/${slug}`}>
                            <InteractiveHoverButton>Read More</InteractiveHoverButton>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
