import { Post } from "@/types/global";
import { extractStructure } from "./md-utils";

function loadPosts(count: number = 0): Post[] {
    const mdFiles = import.meta.glob("/src/contents/posts/*.md", {
        query: "?raw",
        import: "default",
        eager: true, // 同步加载
    });
    const posts: Post[] = Object.entries(mdFiles).map(([path, content]) => {
        const slug = path
            .replace(/\.md$/, "")
            .replace("/src/contents/posts/", "");
        const { metadata, headings, body } = extractStructure(content);
        return {
            slug,
            path,
            metadata,
            headings,
            body,
        };
    });
    if (count < 0) {
        throw new Error("count 不能小于 0");
    }
    if (count == 0) {
        return posts;
    } else {
        return posts.slice(0, count);
    }
}

function importPost(slug: string) {
    const posts = loadPosts();
    const post = posts.find((p) => p.slug === slug);
    return post;
}

export { loadPosts, importPost };
