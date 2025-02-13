import { useState } from 'react';
import './index.css'; // 引入样式文件

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // 切换菜单状态
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      {/* 左边：Logo 和标题 */}
      <div className='header-left'>
        <div className='logo'>Logo</div>
        <h1 className='title'>My Website</h1>
      </div>

      {/* 中间：空白 */}
      <div className='header-center'></div>

      {/* 右边：菜单项 */}
      <div className={`header-right ${isMenuOpen ? 'open' : ''}`}>
        <nav className='nav-menu'>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/services'>Services</a>
          <a href='/contact'>Contact</a>
        </nav>
      </div>

      {/* 汉堡菜单按钮（移动端显示） */}
      <div className='hamburger' onClick={toggleMenu}>
        <div className='hamburger-line'></div>
        <div className='hamburger-line'></div>
        <div className='hamburger-line'></div>
      </div>
    </header>
  );
};

export default Header;
