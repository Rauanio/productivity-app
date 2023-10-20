import React, { useCallback } from 'react';
import { Plus } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import cls from './ColumnItem.module.scss';
import { Button } from '@/shared/ui';
import { Column, TaskItem } from '@/pages/KanbanPage';
import { useTasks } from '@/hooks/useTasks';
import { TaskModal } from '@/components/TaskModal/TaskModal';

export interface ColumnItemProps {
  column: Column;
}

export const ColumnItem = ({ column }: ColumnItemProps) => {
  const { filteredTask, fetchTasks } = useTasks({ column });
  const [taskModal, setTaskModal] = React.useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: column.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  React.useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // pb.collection('tasks').subscribe('*', function (e) {
  //   console.log(e.record);

  //   fetchTasks();
  // });

  const onCloseModal = useCallback(() => {
    setTaskModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setTaskModal(true);
  }, []);

  return (
    <div ref={setNodeRef} style={style} className={cls.item_container}>
      <div {...attributes} {...listeners} className={cls.column_header}>
        <div
          className={cls.colorItem}
          style={{ backgroundColor: column.color }}
        />
        <div className={cls.title}>{column.title}</div>
        <span className={cls.count}>{column.count}</span>
      </div>
      <Button
        variant="secondary"
        onClick={onOpenModal}
        iconLeft={Plus}
        fullWidth
      >
        Add new Task
      </Button>
      {taskModal && (
        <TaskModal
          column={column}
          taskModal={taskModal}
          onCloseModal={onCloseModal}
        />
      )}
      <div className={cls.column_item}>
        {filteredTask.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
