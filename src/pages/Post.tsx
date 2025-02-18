import { useLoadPosts } from "@/hooks/useLoadPosts";
import { Post as PostProps } from "@/types/global";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function Post() {
    const { slug } = useParams();
    console.log("render");
    const { posts } = useLoadPosts();
    const [post, setPost] = useState<PostProps | null>(null);

    console.log("render", post);
    // useEffect(() => {
    //     const matchPost = posts.find((i) => i.slug === slug);
    //     setPost(matchPost);
    // }, [slug]);

    return (
        <div>
            <h1> {"Post :" + slug}</h1>
        </div>
    );
}
