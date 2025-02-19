import { Outlet } from "react-router";
import { Footer } from "@/components/skeleton/Footer";

export function PostLayout() {
    return (
        <div className="min-h-screen">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}
