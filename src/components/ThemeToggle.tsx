// src/components/ThemeToggle.tsx
import { useEffect, useState } from 'react';
import type { Theme } from '../utils/theme';
import { applyTheme, getSavedTheme, watchSystemTheme } from '../utils/theme';
import { HiSun, HiMoon, HiDesktopComputer } from 'react-icons/hi';

const themes: Theme[] = ['light', 'dark', 'system'];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getSavedTheme());

  useEffect(() => {
    applyTheme(theme);

    // react to system changes
    watchSystemTheme(() => {
      if (getSavedTheme() === 'system') applyTheme('system');
    });
  }, [theme]);

  // click cycles Light → Dark → System → Light …
  const handleClick = () => {
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  // pick icon based on current theme
  const icon =
    theme === 'light' ? (
      <HiSun className="w-5 h-5" />
    ) : theme === 'dark' ? (
      <HiMoon className="w-5 h-5" />
    ) : (
      <HiDesktopComputer className="w-5 h-5" />
    );

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:ring-2 hover:ring-indigo-500 transition-all duration-300"
      title={`Switch theme (current: ${theme})`}
    >
      {icon}
    </button>
  );
}
