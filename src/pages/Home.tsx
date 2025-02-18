import { PageLayout } from "@/layouts/PageLayout";
import { ProfileCard } from "@/components/cards/ProfileCard";
import { LayoutGridDemo } from "@/components/demo/LayoutGridDemo";
import { Carousel } from "@/components/miscs/carousel";
import { PageSection } from "@/components/skeleton/PageSection";
import {
    IconBrandGit,
    IconBrandGithub,
    IconBrandJavascript,
    IconBrandNodejs,
    IconBrandNpm,
    IconBrandReact,
    IconBrandTypescript,
    IconBrandVite,
    IconBrandVue,
    IconBrandHtml5,
} from "@tabler/icons-react";
import { StackLabel } from "@/components/miscs/StatckLabel";
import { loadPosts } from "@/lib/post-utils";

export function Home() {
    const posts = loadPosts(4);

    // latest posts
    const slideData = posts.map((post) => {
        return {
            slug: post.slug,
            title: post.metadata.title,
            button: "Explore More",
            src: post.metadata.image,
        };
    });

    const stackItems = [
        {
            text: "HTML",
            icon: <IconBrandHtml5 />,
            bgColor: "#E34F26",
            textColor: "#FFFFFF",
        },
        {
            text: "CSS",
            icon: <IconBrandReact />,
            bgColor: "#087EA4",
            textColor: "#FFFFFF",
        },
        {
            text: "JavaScript",
            icon: <IconBrandJavascript />,
            bgColor: "#F7DF1E",
        },
        {
            text: "TypeScript",
            icon: <IconBrandTypescript />,
            bgColor: "#007ACC",
            textColor: "#FFFFFF",
        },
        {
            text: "React",
            icon: <IconBrandReact />,
            bgColor: "#087EA4",
            textColor: "#FFFFFF",
        },
        {
            text: "Vue",
            icon: <IconBrandVue />,
            bgColor: "#41B883",
            textColor: "#FFFFFF",
        },
        {
            text: "Github",
            icon: <IconBrandGithub />,
            bgColor: "#000000",
            textColor: "#FFFFFF",
        },
        {
            text: "Git",
            icon: <IconBrandGit />,
            bgColor: "#DB4932",
            textColor: "#FFFFFF",
        },
        {
            text: "Nodejs",
            icon: <IconBrandNodejs />,
            bgColor: "#4A9642",
            textColor: "#FFFFFF",
        },
        {
            text: "NPM",
            icon: <IconBrandNpm />,
            bgColor: "#CB3837",
            textColor: "#FFFFFF",
        },
        {
            text: "Vite",
            icon: <IconBrandVite />,
            bgColor: "#B73BFE",
            textColor: "#FFFFFF",
        },
    ];

    return (
        <PageLayout headerTitle="Home">
            <div className="my-10 flex gap-10">
                <ProfileCard></ProfileCard>
                <div className=" flex flex-wrap flex-1 max-w-[50%] gap-4 ">
                    {stackItems.map((item, index) => (
                        <StackLabel
                            key={index}
                            text={item.text}
                            icon={item.icon}
                            bgColor={item.bgColor}
                            textColor={item.textColor}></StackLabel>
                    ))}
                </div>
            </div>

            <div>
                <PageSection title="Latest Posts"></PageSection>
                <div className="relative overflow-hidden w-full h-full py-20">
                    <Carousel slides={slideData} />
                </div>
            </div>

            <div>
                <PageSection title="Latest Photos"></PageSection>
                <LayoutGridDemo></LayoutGridDemo>
            </div>
        </PageLayout>
    );
}
