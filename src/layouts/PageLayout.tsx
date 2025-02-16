import { Footer } from "@/components/skeleton/Footer";
import { Header } from "@/components/skeleton/Header";

export function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-[5000px]">
            <Header title="Home"></Header>
            {children}
            <Footer></Footer>
        </div>
    );
}
