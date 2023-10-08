import clsx from 'clsx';
import { SidebarItemType } from '../../types/sidebar';
import { AppLink, Icon } from '@/shared/ui';
import cls from './SidebarItem.module.scss';

export interface SidebarItemProps {
  className?: string;
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = ({
  item,
  className,
  collapsed,
}: SidebarItemProps) => {
  return (
    <AppLink
      activeClassName={cls.active}
      className={clsx(cls.item, { [cls.collapsed]: collapsed }, [className])}
      to={item.path}
    >
      <Icon icon={item.icon} />
      <p>{item.name}</p>
    </AppLink>
  );
};
