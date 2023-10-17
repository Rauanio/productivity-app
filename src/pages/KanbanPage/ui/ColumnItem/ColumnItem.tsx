import React from 'react';
import { Plus } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import cls from './ColumnItem.module.scss';
import { Button } from '@/shared/ui';
import { Column, TaskItem } from '@/pages/KanbanPage';
import { useTasks } from '@/hooks/useTasks';
// import { pb } from '@/shared/api/pocketbase';

export interface ColumnItemProps {
  column: Column;
}

export const ColumnItem = ({ column }: ColumnItemProps) => {
  const { onAddNewTask, filteredTask, fetchTasks } = useTasks({ column });
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
        onClick={() => onAddNewTask(column.id)}
        iconLeft={Plus}
        fullWidth
      >
        Add new Task
      </Button>
      <div className={cls.column_item}>
        {filteredTask.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};