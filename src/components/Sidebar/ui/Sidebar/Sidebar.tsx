import { MenuIcon } from 'lucide-react';
import React from 'react';
import clsx from 'clsx';
import { SidebarItemList } from '../../types/sidebar';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { LangSwitcher, Text, ThemeSwitcher } from '@/shared/ui';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={clsx(cls.sidebar, { [cls.collapsed]: collapsed }, [])}>
      <div className={cls.top}>
        <Text className={cls.logo} title="Logo" />
        <MenuIcon onClick={onToggle} className={cls.burgerMenu} />
      </div>
      <div className={cls.sidebarItem}>
        {SidebarItemList.map((item) => (
          <SidebarItem item={item} key={item.path} collapsed={collapsed} />
        ))}
      </div>
      <div className={cls.switchers}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
