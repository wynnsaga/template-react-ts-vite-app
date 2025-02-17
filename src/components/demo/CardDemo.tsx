import { NavLink } from "react-router";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

export function CardDemo() {
    return (
        <div className="w-2/6 mx-auto">
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                    <img
                        src={blogContent.image}
                        alt="thumbnail"
                        className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
                    />
                </div>
                <div className=" p-4">
                    <h2 className="font-bold my-4 text-lg text-zinc-700">{blogContent.title}</h2>
                    <h2 className="font-normal my-4 text-sm text-zinc-500">{blogContent.description}</h2>
                    <div className="flex flex-row justify-between items-center mt-10">
                        <span className="text-sm text-gray-500">{blogContent.date}</span>
                        <NavLink to={"/blog/post/hello-world"}>
                            <InteractiveHoverButton>Read More</InteractiveHoverButton>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

const blogContent = {
    author: "Manu Arora",
    date: "28th March, 2023",
    title: "Amazing Tailwindcss Grid Layout Examples",
    description:
        "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msKSm.img",
};
