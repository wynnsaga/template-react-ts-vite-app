import "@/styles/app.css";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Header } from "./components/blocks/Header";
import OldHeader from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "./components/ui/button";
import { ScriptCopyBtn } from "./components/magicui/script-copy-btn";
import { TypingAnimation } from "./components/magicui/typing-animation";

import { TimelineDemo } from "./components/TimeLineTest";

function App() {
    const customCommandMap = {
        npm: "npm run shadcn add button",
        yarn: "yarn shadcn add button",
        pnpm: "pnpm dlx shadcn@latest add button",
        bun: "bun x shadcn@latest add button",
    };

    return (
        <div className="app">
            <ScrollProgress></ScrollProgress>
            {/* Header 组件 */}
            <Header />
            <OldHeader></OldHeader>

            {/* 页面主要内容 */}
            <main className="main-content">
                <span className="text-red-500">Hello, World!</span>
                <div>
                    <p>组件效果测试</p>
                    <Button>按钮</Button>
                    <ScriptCopyBtn
                        showMultiplePackageOptions={true}
                        codeLanguage="shell"
                        lightTheme="nord"
                        darkTheme="vitesse-dark"
                        commandMap={customCommandMap}
                    />
                    <TypingAnimation>Typing Animation</TypingAnimation>
                </div>

                <TimelineDemo></TimelineDemo>

                <div className="h-56"></div>
            </main>

            {/* Footer 组件 */}
            <Footer />
        </div>
    );
}

export default App;
