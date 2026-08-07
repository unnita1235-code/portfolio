import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolio.js';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(() => {
    return localStorage.getItem('portfolio-theme') || PORTFOLIO_CONFIG.themes[0].name;
  });

  const activeTheme = useMemo(() => {
    return PORTFOLIO_CONFIG.themes.find((theme) => theme.name === themeName) || PORTFOLIO_CONFIG.themes[0];
  }, [themeName]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', activeTheme.accent);
    root.style.setProperty('--accent-2', activeTheme.accent2);
    root.style.setProperty('--accent-3', activeTheme.accent3);
    root.style.setProperty('--accent-glow', activeTheme.glow);
    root.style.setProperty('--border-hover', activeTheme.borderHover);
    localStorage.setItem('portfolio-theme', activeTheme.name);
  }, [activeTheme]);

  const value = useMemo(() => ({
    themeName: activeTheme.name,
    activeTheme,
    themes: PORTFOLIO_CONFIG.themes,
    setTheme: setThemeName,
  }), [activeTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error('useTheme must be used inside ThemeProvider');
  return value;
}
