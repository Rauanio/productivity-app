import { pb } from '@/shared/api/pocketbase';
import cls from './MainPage.module.scss';
import { Button, Input } from '@/shared/ui';

const MainPage = () => {
  return (
    <div className={cls.main}>
      <h1>User logged in : {pb.authStore.model?.username} </h1>
      MainPage
      <div>
        <Input label="city" placeholder="mamma" />
        <Button>sfas</Button>
      </div>
    </div>
  );
};

export default MainPage;
