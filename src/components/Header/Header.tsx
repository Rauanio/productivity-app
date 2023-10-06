import { Link } from 'react-router-dom';
import { isUserAuth } from '@/shared/api/pocketbase';
import { useLogout } from '@/hooks/useLogout';
import { useTheme } from '@/hooks/useTheme';
import cls from './Header.module.scss';
import { Button } from '@/shared/ui';
import { ButtonSize } from '@/shared/ui/Button/Button';

export const Header = () => {
  const { onLogout } = useLogout();
  const { toggleTheme } = useTheme();

  return (
    <div className={cls.header}>
      {!isUserAuth ? (
        <>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Link to="/signup">
            <Button>Signup</Button>
          </Link>
        </>
      ) : (
        <Button onClick={onLogout}>Logout</Button>
      )}
      <Button size={ButtonSize.S} type="button" onClick={toggleTheme}>
        theme
      </Button>
    </div>
  );
};
