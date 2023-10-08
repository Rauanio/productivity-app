import { Toaster } from 'sonner';
import { useTheme } from '@/hooks/useTheme';
import { AppRouter } from './providers/router/AppRouter';

export function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Toaster theme={theme} />
      <AppRouter />
    </div>
  );
}
