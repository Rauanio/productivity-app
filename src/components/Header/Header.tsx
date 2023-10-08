import { Link } from 'react-router-dom';
import { isUserAuth } from '@/shared/api/pocketbase';
import { useLogout } from '@/hooks/useLogout';
import cls from './Header.module.scss';
import { Button } from '@/shared/ui';

export const Header = () => {
  const { onLogout } = useLogout();

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
    </div>
  );
};
