import { Footer } from "@/components/skeleton/Footer";
import { Header } from "@/components/skeleton/Header";
import { NavBar } from "@/components/ui/tubelight-nav";
import { IconHome, IconUser, IconProgress, IconPaperBag } from "@tabler/icons-react";

export function PageLayout({ children, headerTitle }: { children: React.ReactNode; headerTitle: string }) {
    return (
        <div className="min-h-screen">
            <NavBar
                items={[
                    { name: "Home", url: "/home", icon: IconHome },
                    { name: "Blog", url: "/blog", icon: IconPaperBag },
                    { name: "Archive", url: "/archive", icon: IconProgress },
                    { name: "About", url: "/about", icon: IconUser },
                ]}></NavBar>
            <Header title={headerTitle}></Header>
            <div>{children}</div>
            <Footer></Footer>
        </div>
    );
}
