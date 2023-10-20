import { MoreVertical } from 'lucide-react';
import { Task } from '@/pages/KanbanPage';
import cls from './TaskItem.module.scss';
import { Dropdown } from '@/shared/ui/Popups';

interface TaskProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskProps) => {
  return (
    <div className={cls.taskWrapper}>
      <div className={cls.header}>
        <span className={cls.tag} style={{ backgroundColor: task.tagColor }}>
          {task.tag}
        </span>
        <Dropdown trigger={<MoreVertical size={16} />} />
      </div>
      <h3 className={cls.title}>{task.title}</h3>
      <p className={cls.desc}>{task.desc}</p>
    </div>
  );
};
