import { CardDemo } from "@/components/demo/CardDemo";
import { PageLayout } from "@/layouts/PageLayout";

export function Blog() {
    return (
        <PageLayout headerTitle="Blog">
            <div>blog</div>
            <CardDemo></CardDemo>
        </PageLayout>
    );
}
