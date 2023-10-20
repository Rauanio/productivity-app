import React from 'react';
import { pb } from '@/shared/api/pocketbase';
import { ColumnItemProps } from '@/pages/KanbanPage/ui/ColumnItem/ColumnItem';
import { Task } from '@/pages/KanbanPage';
import { getTasks } from '@/pages/KanbanPage/api/getTasks';
import { TaskSchemaType } from '@/shared/types/taskSchema';

interface UseTasksProps {
  onAddNewTask: (columnId: string, data: TaskSchemaType) => Promise<void>;
  filteredTask: Task[];
  fetchTasks: () => void;
  onTagChange: (value: string) => void;
}

export const useTasks = ({ column }: ColumnItemProps): UseTasksProps => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [colorValue, setColorValue] = React.useState('');

  const filteredTask = tasks.filter((task) => task.columnId === column.id);

  function fetchTasks() {
    getTasks().then((res) => setTasks(res));
  }

  const onTagChange = (value: string) => {
    setColorValue(value);
  };

  const onAddNewTask = async (columnId: string, data: TaskSchemaType) => {
    const { desc, tag, title } = data;
    const NewTask: Task = {
      user: pb.authStore.model?.id,
      title,
      desc,
      tag,
      tagColor: colorValue,
      columnId,
      column: columnId,
    };

    await pb.collection('tasks').create(NewTask);
  };

  return {
    onAddNewTask,
    filteredTask,
    fetchTasks,
    onTagChange,
  };
};
