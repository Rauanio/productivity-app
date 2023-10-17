import React from 'react';
import { pb } from '@/shared/api/pocketbase';
import { ColumnItemProps } from '@/pages/KanbanPage/ui/ColumnItem/ColumnItem';
import { Task } from '@/pages/KanbanPage';
import { getTasks } from '@/pages/KanbanPage/api/getTasks';

interface UseTasksProps {
  onAddNewTask: (columnId: string) => Promise<void>;
  filteredTask: Task[];
  fetchTasks: () => void;
}

export const useTasks = ({ column }: ColumnItemProps): UseTasksProps => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const filteredTask = tasks.filter((task) => task.columnId === column.id);

  const fetchTasks = () => {
    getTasks().then((res) => setTasks(res));
  };

  // console.log(tasks);

  const onAddNewTask = async (columnId: string) => {
    const data = {
      title: `New task ${tasks.length + 1}`,
      columnId,
      column: columnId,
    };

    if (filteredTask) {
      await pb.collection('tasks').create(data);
    }
  };

  return {
    onAddNewTask,
    filteredTask,
    fetchTasks,
  };
};
