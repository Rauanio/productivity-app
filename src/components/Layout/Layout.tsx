import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import cls from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={cls.container}>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
