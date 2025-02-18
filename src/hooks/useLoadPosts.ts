import { Post, PostMetadata, PostHeading } from "@/types/global";
import { useEffect, useState } from "react";
import { marked, Tokens } from "marked";
import matter from "front-matter";

function useLoadPosts(count: number = 0) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);

    const mdFiles = import.meta.glob<string>("/src/contents/posts/*.md", {
        query: "?raw",
        import: "default",
        eager: true,
    });

    useEffect(() => {
        const localPosts: Post[] = Object.entries(mdFiles).map(([path, content]) => {
            // 提取slug
            const slug = path.replace(/\.md$/, "").replace("/src/contents/posts/", "");

            // 提取metadata
            const { attributes, body } = matter<PostMetadata>(content);

            // 提取headings
            const tokens = marked.lexer(body);
            const headingTokens = tokens.filter((token): token is Tokens.Heading => token.type === "heading");
            const headings: PostHeading[] = headingTokens.map((heading) => {
                return {
                    level: heading.depth,
                    text: heading.text,
                };
            });

            return {
                path,
                slug,
                metadata: attributes,
                headings,
                body,
            };
        });
        if (count > 0) {
            setPosts(localPosts.slice(0, count));
        } else {
            setPosts(localPosts);
        }
        setLoading(false);
    }, [count]);

    return { posts, loading };
}

export { useLoadPosts };
