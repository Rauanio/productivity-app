import { memo } from 'react';
import { useTheme } from '@/hooks/useTheme';
import cls from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = memo(() => {
  const { toggleTheme } = useTheme();
  return (
    <input
      type="checkbox"
      className={cls.theme_checkbox}
      onClick={toggleTheme}
    />
  );
});
