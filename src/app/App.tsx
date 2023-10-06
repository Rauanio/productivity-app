import { useTheme } from '@/hooks/useTheme';
import { AppRouter } from './providers/router/AppRouter';

export function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <AppRouter />
    </div>
  );
}
