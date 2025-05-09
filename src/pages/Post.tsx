import { parseToHtmlAsync } from "@/lib/md-utils";
import { importPost } from "@/lib/post-utils";
import { Post as PostProps } from "@/types/global";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "@/styles/post.css";

export function Post() {
    const { slug } = useParams();
    const [post, setPost] = useState<PostProps>();
    const [html, setHtml] = useState("");
    useEffect(() => {
        if (!slug) {
            alert(slug);
            return;
        }
        const post = importPost(slug);
        setPost(post);
        if (!post) {
            return;
        }

        parseToHtmlAsync(post.body)
            .then((value) => {
                setHtml(value);
            })
            .catch((error) => {
                console.error("Parse Error: ", error);
                return;
            });
    }, [slug]);

    return (
        <div>
            <img
                src={post?.metadata.image}
                className="w-full md:w-2/3 h-[40%] rounded-xl shadow-md my-10  overflow-hidden  mx-auto"></img>
            <div
                className="bp"
                dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
    );
}
