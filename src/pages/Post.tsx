// src/components/Posts.jsx
import { parseMarkdown } from "@/lib/md-utils";
import { useEffect, useState } from "react";

const Posts = () => {
    return (
        <div>
            {posts.map((post) => (
                <div
                    key={post.path}
                    dangerouslySetInnerHTML={{ __html: post.html }}
                    className="markdown-content"
                />
            ))}
        </div>
    );
};

export default Posts;
