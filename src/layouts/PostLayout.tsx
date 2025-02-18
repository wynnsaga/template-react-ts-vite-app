import { Outlet } from "react-router";
import "./PostLayout.css";
import { Header } from "@/components/skeleton/Header";
import { Footer } from "@/components/skeleton/Footer";

export function PostLayout() {
    return (
        <div className="min-h-screen">
            <Header title={"Post"}></Header>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
}
