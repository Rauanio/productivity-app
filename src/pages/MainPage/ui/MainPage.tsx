import React from 'react';
import { pb } from '@/shared/api/pocketbase';
import cls from './MainPage.module.scss';
import { Button, Modal } from '@/shared/ui';

const MainPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onOpenModal = () => {
    console.log('Opened');

    setIsOpen(true);
  };

  return (
    <div className={cls.main}>
      <h1>User logged in : {pb.authStore.model?.email} </h1>
      MainPage 1231231
      <div>Sula chort</div>
      <Modal lazy onClose={() => setIsOpen(false)} isOpen={isOpen}>
        1231231
      </Modal>
      <Button onClick={onOpenModal}>123</Button>
    </div>
  );
};

export default MainPage;
