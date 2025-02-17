import { CardDemo } from "@/components/demo/CardDemo";
import { LayoutGridDemo } from "@/components/demo/LayoutGridDemo";
import { PageLayout } from "@/layouts/PageLayout";

export function Blog() {
    return (
        <PageLayout headerTitle="Blog">
            <LayoutGridDemo></LayoutGridDemo>
        </PageLayout>
    );
}
