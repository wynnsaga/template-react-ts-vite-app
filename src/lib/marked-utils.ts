import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

function initMarkedRenders() {
    // 高亮插件
    marked.use(
        markedHighlight({
            emptyLangClass: "hljs",
            langPrefix: "hljs language-",
            highlight(code, lang) {
                const language = hljs.getLanguage(lang) ? lang : "plaintext";
                return hljs.highlight(code, { language }).value;
            },
        })
    );

    marked.setOptions({
        gfm: true, // 启用 GitHub Flavored Markdown
        breaks: true, // 将换行符转换为 <br>
    });

    return marked;
}

export { initMarkedRenders };
