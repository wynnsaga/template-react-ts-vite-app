import { Footer } from "@/components/skeleton/Footer";
import { Header } from "@/components/skeleton/Header";

export function PageLayout({
    children,
    headerTitle,
}: {
    children: React.ReactNode;
    headerTitle: string;
}) {
    return (
        <div className="h-[5000px]">
            <Header title={headerTitle}></Header>
            {children}
            <Footer></Footer>
        </div>
    );
}
