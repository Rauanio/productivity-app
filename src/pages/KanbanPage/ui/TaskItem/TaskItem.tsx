import { Edit, MoreVertical, Trash } from 'lucide-react';
import React from 'react';

import { Task } from '@/pages/KanbanPage';
import { Dropdown } from '@/shared/ui/Popups';
import { Modal } from '@/shared/ui';
import { pb } from '@/shared/api/pocketbase';
import { TaskSchemaType } from '@/shared/types/taskSchema';
import cls from './TaskItem.module.scss';
import { EditTaskForm } from '@/components/EditTaskForm/EditTaskForm';

interface TaskProps {
  task: Task;
  onDeleteTask: (id?: string) => void;
}

export const TaskItem = ({ task, onDeleteTask }: TaskProps) => {
  const [isEditModal, setEditModal] = React.useState(false);

  const onEditTask = (data: TaskSchemaType) => {
    pb.collection('tasks').update(task.id ?? '', data);
    window.location.reload();
  };

  const onOpenModal = () => {
    setEditModal(true);
  };

  const onCloseModal = () => {
    setEditModal(false);
  };

  return (
    <div className={cls.taskWrapper}>
      <div className={cls.header}>
        <span className={cls.tag} style={{ backgroundColor: task.tagColor }}>
          {task.tag}
        </span>
        <Dropdown
          className={cls.dropdown}
          items={[
            { content: 'Edit', icon: Edit, onClick: onOpenModal },
            {
              content: 'Delete',
              icon: Trash,
              onClick: () => onDeleteTask(task.id),
            },
          ]}
          trigger={<MoreVertical className={cls.icon} size={16} />}
        />
        <Modal lazy isOpen={isEditModal} onClose={onCloseModal}>
          <EditTaskForm onEditTask={onEditTask} />
        </Modal>
      </div>
      <h3 className={cls.title}>{task.title}</h3>
      <p className={cls.desc}>{task.desc}</p>
    </div>
  );
};
