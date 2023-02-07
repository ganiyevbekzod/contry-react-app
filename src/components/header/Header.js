import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './header.scss';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header className={`site-header ${theme}`}>
      <div className='container'>
        <div className='site-header__inner'>
          <a
            className='logo text-decoration-none'
            href='./index.html'
          >
            Where in the world?
          </a>
          <button
            className='mode-btn'
            type='button'
            onClick={() => setTheme(theme === 'dark' ? '' : 'dark')}
          >
            {theme === 'dark' ? 'light' : 'dark'} mode
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
