import { LinkProps, NavLink } from 'react-router-dom';
import { ReactNode, memo } from 'react';
import clsx from 'clsx';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary';

export interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
}
export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    children,
    className,
    variant = 'primary',
    activeClassName = '',
    ...restProps
  } = props;
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(cls.appLink, { [activeClassName]: isActive }, [
          className,
          cls[variant],
        ])
      }
      {...restProps}
    >
      {children}
    </NavLink>
  );
});
