import { marked } from "marked";
import matter from "front-matter";
import DOMPurify from "dompurify";

export function generatePostRoutes() {
    const mdFiles = import.meta.glob("/src/contents/posts/*.md", {
        query: "?raw",
        import: "default",
        eager: true,
    });

    const slugs = Object.entries(mdFiles).map(([path, _]) => {
        return path.replace(/\.md$/, "").replace("/src/contents/posts/", "");
    });

    return slugs;
}

export function parseMarkdown(content: any) {
    const { attributes, body } = matter(content);

    const html = marked.parse(body, {
        async: false,
    });

    return {
        metadata: attributes,
        body: body,
        html: DOMPurify.sanitize(html),
    };
}
