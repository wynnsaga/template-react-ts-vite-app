import "@/styles/app.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "./components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import { ScriptCopyBtn } from "./components/magicui/script-copy-btn";
import { Meteors } from "./components/magicui/meteors";
import { TypingAnimation } from "./components/magicui/typing-animation";

function App() {
  const customCommandMap = {
    npm: "npm run shadcn add button",
    yarn: "yarn shadcn add button",
    pnpm: "pnpm dlx shadcn@latest add button",
    bun: "bun x shadcn@latest add button",
  };

  return (
    <div className="app">
      {/* Header 组件 */}
      <Header />

      {/* 页面主要内容 */}
      <main className="main-content">
        <span className="text-red-500">Hello, World!</span>
        <div>
          <p>组件效果测试</p>
          <Button>按钮</Button>
          <Avatar>
            <AvatarImage src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msKSk.img"></AvatarImage>
            <AvatarFallback>WYNN</AvatarFallback>
          </Avatar>
          <ScriptCopyBtn
            showMultiplePackageOptions={true}
            codeLanguage="shell"
            lightTheme="nord"
            darkTheme="vitesse-dark"
            commandMap={customCommandMap}
          />
          <TypingAnimation>Typing Animation</TypingAnimation>

          <Meteors></Meteors>
        </div>
      </main>

      {/* Footer 组件 */}
      <Footer />
    </div>
  );
}

export default App;
