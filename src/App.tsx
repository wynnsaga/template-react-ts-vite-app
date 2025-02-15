import "@/styles/app.css";
import { Welcome } from "./pages/Welcome";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { About } from "./pages/About";
import { Archive } from "./pages/Archive";
import { Layout } from "./layouts/Layout";

export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Welcome></Welcome>}></Route>
                    <Route
                        path="/page"
                        element={<Layout></Layout>}>
                        <Route
                            path="home"
                            element={<Home></Home>}></Route>
                        <Route
                            path="blog"
                            element={<Blog></Blog>}></Route>
                        <Route
                            path="archive"
                            element={<Archive></Archive>}></Route>
                        <Route
                            path="about"
                            element={<About></About>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
