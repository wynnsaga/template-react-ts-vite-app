import "@/styles/main.css";
import { basic } from "@/configs/site.config";
import { createRoot } from "react-dom/client";
import { App } from "@/App.tsx";
import { StrictMode } from "react";

// 设置网站标题
document.title = basic.title;

// 渲染根组件
createRoot(document.getElementById("root")!).render(<App></App>);
