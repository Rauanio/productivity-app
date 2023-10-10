import { pb } from '@/shared/api/pocketbase';
import cls from './MainPage.module.scss';
import { Select } from '@/shared/ui/Popups';

const MainPage = () => {
  return (
    <div className={cls.main}>
      <h1>User logged in : {pb.authStore.model?.username} </h1>
      MainPage 1231231
      <Select
        defaultValue="Banana"
        onChange={(value: string) => {}}
        value={undefined}
        items={[
          {
            value: '1',
            content: 'Appple',
          },
          {
            value: '2',
            content: 'Banana',
            disabled: true,
          },
          {
            value: '3',
            content: 'Orange',
          },
        ]}
      />
    </div>
  );
};

export default MainPage;
