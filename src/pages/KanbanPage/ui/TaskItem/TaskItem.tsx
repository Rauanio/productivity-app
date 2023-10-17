import { Task } from '@/pages/KanbanPage';
import cls from './TaskItem.module.scss';

interface TaskProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskProps) => {
  return (
    <div className={cls.taskWrapper}>
      <div className={cls.task}>
        <div>{task.title}</div>
      </div>
    </div>
  );
};
