import { Suspense } from 'react';
import { Modal } from '@/shared/ui';
import { Column } from '@/pages/KanbanPage';
import { TaskForm } from '../TaskForm/TaskForm';

export interface ModalProps {
  taskModal: boolean;
  onCloseModal: () => void;
  column: Column;
}

export const TaskModal = ({ taskModal, onCloseModal, column }: ModalProps) => {
  return (
    <Modal isOpen={taskModal} onClose={onCloseModal}>
      <Suspense>
        <TaskForm column={column} />
      </Suspense>
    </Modal>
  );
};
