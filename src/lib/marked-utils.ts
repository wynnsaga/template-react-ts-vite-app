import { marked, Renderer } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

function initMarkedRenders() {
    // 插件
    marked.use(
        markedHighlight({
            emptyLangClass: "hljs",
            langPrefix: "hljs language-",
            highlight(code, lang, info) {
                const language = hljs.getLanguage(lang) ? lang : "plaintext";
                return hljs.highlight(code, { language }).value;
            },
        })
    );

    // 自定义渲染器
    const render = new Renderer();

    // render.heading = function ({ tokens, depth }) {
    //     const text = this.parser.parseInline(tokens);
    //     return `<h${depth}>${text}</h${depth}>`;
    // };

    render.paragraph = function ({ tokens }) {
        const text = this.parser.parseInline(tokens);

        return `<p class='bp-p'>${text}<p>`;
    };

    marked.setOptions({
        renderer: render,
        gfm: true, // 启用 GitHub Flavored Markdown
        breaks: true, // 将换行符转换为 <br>
    });

    return marked;
}

export { initMarkedRenders };
