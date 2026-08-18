import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('projectx-theme') || 'auto'; } catch { return 'auto'; }
  });
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'auto') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', theme);
    try { localStorage.setItem('projectx-theme', theme); } catch { /* private mode */ }
  }, [theme]);
  const isDark = theme === 'dark' || (theme === 'auto' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const toggle = () => setTheme(isDark ? 'light' : 'dark');
  return { theme, isDark, toggle };
}
