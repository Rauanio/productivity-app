import { LogOut, User } from 'lucide-react';
import { isUserAuth } from '@/shared/api/pocketbase';
import { useLogout } from '@/hooks/useLogout';
import cls from './Header.module.scss';
import { AppLink, Button } from '@/shared/ui';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { RoutePath } from '@/shared/consts/route';
import alma from '@/shared/assets/debil.jpg';

export const Header = () => {
  const { onLogout } = useLogout();

  return (
    <div className={cls.header}>
      {!isUserAuth ? (
        <div className={cls.btns}>
          <AppLink to="/login">
            <Button variant="ghost">Log in</Button>
          </AppLink>
          <AppLink to="/signup">
            <Button variant="outlined">Sign up</Button>
          </AppLink>
        </div>
      ) : (
        <Dropdown
          trigger={<Avatar src={alma} />}
          label="My account"
          items={[
            {
              content: 'Profile',
              href: RoutePath.profle,
              icon: User,
            },
            {
              content: 'Logout',
              onClick: onLogout,
              icon: LogOut,
            },
          ]}
        />
      )}
    </div>
  );
};
