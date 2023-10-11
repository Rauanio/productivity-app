import { pb } from '@/shared/api/pocketbase';
import cls from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={cls.main}>
      <h1>User logged in : {pb.authStore.model?.email} </h1>
      MainPage 1231231
      <div>Sula chort</div>
    </div>
  );
};

export default MainPage;
