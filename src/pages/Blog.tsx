import { PostCard } from "@/components/cards/PostCard";
import { useLoadPosts } from "@/hooks/useLoadPosts";
import { PageLayout } from "@/layouts/PageLayout";

export function Blog() {
    const { posts } = useLoadPosts();

    return (
        <PageLayout headerTitle="Blog">
            <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4">
                {posts.map((post, index) => {
                    return (
                        <PostCard
                            key={index}
                            slug={post.slug}
                            title={post.metadata.title}
                            description={post.metadata.description}
                            imagePath={post.metadata.image}
                            date={post.metadata.date}></PostCard>
                    );
                })}
            </div>
        </PageLayout>
    );
}
