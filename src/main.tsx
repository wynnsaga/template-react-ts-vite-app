import "@/styles/main.css";
import { basic } from "@/configs/site.config";
import { createRoot } from "react-dom/client";
import { App } from "@/App.tsx";
import { StrictMode } from "react";
import { initMarkedRenders } from "./lib/marked-utils";

// 设置网站标题
document.title = basic.title;

// 初始化 marked 渲染器
initMarkedRenders();

// 渲染根组件
createRoot(document.getElementById("root")!).render(<App></App>);
