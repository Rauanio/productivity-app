import { useNavigate } from 'react-router-dom';
import { pb } from '@/shared/api/pocketbase';
import cls from './MainPage.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';

const MainPage = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    pb.authStore.clear();
    navigate('/login');
  };

  return (
    <div className={cls.main}>
      <h1>User logged in : {pb.authStore.model?.username} </h1>
      MainPage
      <button onClick={onLogout} type="submit">
        Logout
      </button>
      <Button disabled size={ButtonSize.S} theme={ButtonTheme.CONTAINED}>
        blabla
      </Button>
    </div>
  );
};

export default MainPage;
