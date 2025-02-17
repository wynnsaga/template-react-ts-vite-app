import { Footer } from "@/components/skeleton/Footer";
import { Header } from "@/components/skeleton/Header";

export function PageLayout({ children, headerTitle }: { children: React.ReactNode; headerTitle: string }) {
    return (
        <div className="min-h-screen">
            <Header title={headerTitle}></Header>
            <div>{children}</div>
            <Footer></Footer>
        </div>
    );
}
