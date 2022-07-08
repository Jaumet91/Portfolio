import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('color-theme')
  );

  const rawSetTheme = rawTheme => {
    const root = window.document.documentElement;
    const isDark = rawTheme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);

    localStorage.setItem('color-theme', rawTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;
  const lgScreen = 1023;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, width, breakpoint, lgScreen }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
