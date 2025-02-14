// site.config.js - 博客网站核心配置文件

// 基础配置
const basic = {
    title: "Sea Light", // 网站标题
    description: "我的技术博客", // 网站描述
    abstract: "",
    author: "Wynn", // 作者姓名
    avatar: "https://avatars.githubusercontent.com/u/45530306?v=4",
    language: "zh-CN", // 网站语言
    email: "wynnsaga@163.com",
};

// SEO配置
const seo = {
    keywords: ["编程", "Web开发", "JavaScript", "Node.js"],
    robots: "index, follow", // 搜索引擎爬虫规则
    googleAnalyticsID: "UA-XXXXX-Y", // Google Analytics跟踪ID
};

// 网站导航
const navigation = [
    { name: "首页", path: "/" },
    { name: "归档", path: "/archives" },
    { name: "关于", path: "/about" },
    { name: "联系", path: "/contact" },
];

// 社交链接
const social = {
    github: "https://github.com/yourname",
    twitter: "https://twitter.com/yourname",
    weibo: "https://weibo.com/yourname",
    rss: "/feed.xml", // RSS订阅地址
};

// 个人技术栈
const stack = {
    frontend: ["HTML", "CSS", "JavaScript", "Vue.js"],
    backend: ["Node.js", "Express", "MongoDB"],
    tools: ["Git", "VS Code", "Postman"],
};

export { basic, seo, navigation, social, stack };
