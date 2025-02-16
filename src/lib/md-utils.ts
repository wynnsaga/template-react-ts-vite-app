import { marked } from "marked";
import DOMPurify from "dompurify";

export function parseMarkdown(content: any) {
    const html = marked.parse(content, {
        async: false,
    });
    return DOMPurify.sanitize(html);
}
