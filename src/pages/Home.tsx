import { Logo } from "@/components/skeleton/Logo";
import { PageLayout } from "@/layouts/PageLayout";
import { parseMarkdown } from "@/lib/md-utils";
import { useEffect, useState } from "react";

interface PostProps {
    path: string;
    html: string;
}

export function Home() {
    const [posts, setPosts] = useState<PostProps[]>([]);
    useEffect(() => {
        const loadPosts = () => {
            // 动态导入所有 Markdown 文件
            const mdFiles = import.meta.glob("/src/contents/posts/*.md", {
                query: "?raw",
                import: "default",
                eager: true, // 同步加载
            });
            console.log(mdFiles);
            const posts = Object.entries(mdFiles).map(([path, content]) => {
                return {
                    path,
                    html: parseMarkdown(content),
                };
            });
            setPosts(posts);
        };

        loadPosts();
    }, []);
    return (
        <PageLayout headerTitle="Home">
            <div className="text-black">
                <Logo></Logo>
                <>
                    {posts.map((p) => {
                        console.log(p);
                        return (
                            <div
                                key={p.path}
                                dangerouslySetInnerHTML={{
                                    __html: p.html,
                                }}></div>
                        );
                    })}
                </>
            </div>
        </PageLayout>
    );
}
