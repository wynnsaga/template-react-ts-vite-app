import { marked } from "marked";
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
    const html = marked.parse(content, {
        async: false,
    });
    return DOMPurify.sanitize(html);
}
