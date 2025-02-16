import { NavLink } from "react-router";
export function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
            <div className="text-center">
                {/* 404 图标或图片 */}
                <div className="mb-8">
                    <svg
                        className="w-24 h-24 mx-auto text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>

                {/* 标题 */}
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">
                    Oops! Page not found.
                </p>

                {/* 返回首页按钮 */}
                <NavLink
                    to="/" // 替换为你的首页路由
                    className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black transition duration-300">
                    Go Back Home
                </NavLink>
            </div>
        </div>
    );
}
