import { useContext } from 'react';
import { Theme } from '@/shared/consts/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts/localStorage';
import { ThemeContext } from '@/shared/context/ThemeContext';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
