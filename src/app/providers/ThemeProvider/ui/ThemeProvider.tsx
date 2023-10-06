import React, { FC, ReactNode } from 'react';
import { Theme } from '@/shared/consts/theme';
import { ThemeContext } from '@/shared/context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts/localStorage';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK;

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const [theme, setTheme] = React.useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
