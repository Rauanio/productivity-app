import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import cls from './Layout.module.scss';
import { Header } from '../Header/Header';

export const Layout = () => {
  return (
    <div className={cls.container}>
      <Sidebar />

      <div className={cls.main_content}>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
