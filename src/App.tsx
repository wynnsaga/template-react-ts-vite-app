import "@/styles/app.css";
import { Welcome } from "./pages/Welcome";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { About } from "./pages/About";
import { Archive } from "./pages/Archive";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/NotFound";

import { generatePostRoutes } from "./lib/md-utils";

export function App() {
    const postSlugs = generatePostRoutes();
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* 欢迎页 */}
                    <Route
                        path="/"
                        element={<Welcome></Welcome>}></Route>

                    {/* 页面 */}
                    <Route
                        path="/home"
                        element={<Layout />}>
                        <Route
                            index
                            element={<Home />}
                        />
                    </Route>
                    <Route
                        path="/blog"
                        element={<Layout />}>
                        <Route
                            index
                            element={<Blog />}></Route>
                        {postSlugs.map((slug) => (
                            <Route
                                key={slug}
                                path={`post/${slug}`}
                                element={<NotFound />}></Route>
                        ))}
                    </Route>
                    <Route
                        path="/archive"
                        element={<Layout></Layout>}>
                        <Route
                            index
                            element={<Archive />}></Route>
                    </Route>
                    <Route
                        path="/about"
                        element={<Layout></Layout>}>
                        <Route
                            index
                            element={<About />}></Route>
                    </Route>

                    {/* 错误路由 */}
                    <Route
                        path="*"
                        element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
