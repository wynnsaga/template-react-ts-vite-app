import { CardDemo } from "@/components/demo/CardDemo";
import { PageLayout } from "@/layouts/PageLayout";

export function About() {
    return (
        <PageLayout headerTitle="About">
            <div>about</div>
            <CardDemo></CardDemo>
        </PageLayout>
    );
}
