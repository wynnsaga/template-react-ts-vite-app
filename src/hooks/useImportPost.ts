import { Post, PostMetadata, PostHeading } from "@/types/global";
import { useEffect, useState } from "react";
import { marked, Tokens } from "marked";
import matter from "front-matter";

export function useImportPost({ path }: { path: string | undefined }) {
    const [post, setPost] = useState<Post>();

    console.log(path);

    const mdFiles = import.meta.glob<string>(`/src/contents/posts/${path}.md`, {
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
        if (localPosts.length > 0) {
            setPost(localPosts[0]);
        } else {
            setPost(undefined);
        }
    }, [path]);

    return post;
}
