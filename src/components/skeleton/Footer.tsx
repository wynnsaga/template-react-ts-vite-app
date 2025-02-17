export function Footer() {
    return (
        <footer className="bg-red-100">
            {/* 左边：版权信息 */}
            <div className="footer-left">
                <p>&copy; 2024 My Website. All rights reserved.</p>
            </div>

            {/* 中间：链接 */}
            <div className="footer-center">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/contact">Contact Us</a>
            </div>

            {/* 右边：社交媒体图标 */}
            <div className="footer-right">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </footer>
    );
}
