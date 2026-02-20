// src/utils/theme.ts
export type Theme = 'light' | 'dark' | 'system';

/**
 * Apply the theme class to <html>
 */
export function applyTheme(theme: Theme) {
  const root = document.documentElement;

  if (theme === 'dark') {
    root.classList.add('dark');
  } else if (theme === 'light') {
    root.classList.remove('dark');
  } else {
    // system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }

  localStorage.setItem('theme', theme);
}

/**
 * Get the saved theme or default to 'system'
 */
export function getSavedTheme(): Theme {
  const stored = localStorage.getItem('theme');
  return stored === 'light' || stored === 'dark' || stored === 'system'
    ? stored
    : 'system';
}

/**
 * Watch system changes (only if theme is system)
 */
export function watchSystemTheme(callback: () => void) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', callback);
}
