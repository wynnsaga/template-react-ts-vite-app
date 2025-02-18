import { Outlet } from "react-router";
import "./PostLayout.css";

export function PostLayout() {
    return (
        <div className="bp-box">
            <Outlet></Outlet>
        </div>
    );
}
