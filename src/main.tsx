import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/main.css";
import { basic } from "@/configs/config";
import App from "@/App.tsx";

// 设置网站标题
document.title = basic.title;

// 渲染根组件
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
