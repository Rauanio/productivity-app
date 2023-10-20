import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button, Input, Text } from '@/shared/ui';
import { TaskSchemaType, taskSchema } from '@/shared/types/taskSchema';
import { Select } from '@/shared/ui/Popups';
import { colors } from '@/shared/consts/colors';
import { useTasks } from '@/hooks/useTasks';
import { Column } from '@/pages/KanbanPage';
import cls from './TaskForm.module.scss';

export interface TaskFormProps {
  column: Column;
}

export const TaskForm = ({ column }: TaskFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskSchemaType>({
    resolver: zodResolver(taskSchema),
    defaultValues: { title: '', desc: '', tag: '' },
  });

  const { onAddNewTask, onTagChange } = useTasks({ column });

  const onSubmit = (data: TaskSchemaType) => {
    onAddNewTask(column.id, data);
    window.location.reload();
  };

  return (
    <div>
      <Text title="Create new task" />
      <Text
        className={cls.text}
        text="Create task in this column. Click save when you're done."
        variant="muted"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Task title"
          placeholder="Homework"
          register={register('title')}
          error={errors.title}
          fullWidth
        />
        <Input
          label="Description"
          placeholder="blabla"
          register={register('desc')}
          error={errors.desc}
          fullWidth
        />
        <Input
          label="Tag name"
          placeholder="Design"
          register={register('tag')}
          error={errors.tag}
          fullWidth
        />
        <Select
          value="Choose tag color"
          onChange={onTagChange}
          items={[
            { value: colors[0], content: 'orange' },
            { value: colors[1], content: 'blue' },
            { value: colors[2], content: 'red' },
          ]}
        />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};
