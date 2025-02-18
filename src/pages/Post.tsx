import { convertToHtml } from "@/lib/md-utils";
import { importPost } from "@/lib/post-utils";
import { Post as PostProps } from "@/types/global";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NotFound } from "./NotFound";

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

        const renderHtml = convertToHtml(post.body);
        setHtml(renderHtml);
    }, [slug]);

    if (!post) {
        return <NotFound></NotFound>;
    }

    return (
        <div>
            <h1> {post?.metadata.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
    );
}
