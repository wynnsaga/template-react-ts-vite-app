import { marked, Tokens } from "marked";
import matter from "front-matter";
import DOMPurify from "dompurify";
import { PostHeading, PostMetadata } from "@/types/global";

function extractStructure(content: any) {
    const { attributes, body } = matter<PostMetadata>(content);
    const tokens = marked.lexer(body);
    const headingTokens = tokens.filter(
        (token): token is Tokens.Heading => token.type === "heading"
    );

    const headings: PostHeading[] = headingTokens.map((heading) => {
        return {
            level: heading.depth,
            text: heading.text,
        };
    });

    return {
        metadata: attributes,
        headings,
        body,
    };
}

function convertToHtml(body: string) {
    // HTML转换结果
    const html = marked.parse(body, {
        async: false,
    });
    return DOMPurify.sanitize(html);
}

export { extractStructure, convertToHtml };
