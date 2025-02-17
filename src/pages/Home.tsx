import { PageLayout } from "@/layouts/PageLayout";
import { convertToHtml } from "@/lib/md-utils";
import { loadPosts } from "@/lib/post-utils";
import { Post } from "@/types/global";
import { useEffect, useState } from "react";

export function Home() {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        const posts = loadPosts();
        console.log(posts);
        setPosts(posts);
    }, []);
    return (
        <PageLayout headerTitle="Home">
            <div className="text-black">
                <>
                    {posts.map((p) => {
                        // const html = convertToHtml(p.body);
                        // return (
                        //     <div
                        //         key={p.path}
                        //         dangerouslySetInnerHTML={{
                        //             __html: html,
                        //         }}></div>
                        // );
                        return <div key={p.slug}>{p.metadata.title}</div>;
                    })}
                </>
            </div>
        </PageLayout>
    );
}
