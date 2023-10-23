import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TaskSchemaType, taskSchema } from '@/shared/types/taskSchema';
import { Button, Input } from '@/shared/ui';

interface EditTaskProps {
  onEditTask: (data: TaskSchemaType) => void;
}

export const EditTaskForm = ({ onEditTask }: EditTaskProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskSchemaType>({
    resolver: zodResolver(taskSchema),
    defaultValues: { title: '', desc: '', tag: '' },
  });

  return (
    <form onSubmit={handleSubmit(onEditTask)}>
      <Input
        label="Edit title"
        placeholder="Go to gym"
        register={register('title')}
        error={errors.title}
      />
      <Input
        label="Edit description"
        placeholder="Go to the gym at 18:00"
        register={register('desc')}
        error={errors.desc}
      />
      <Input
        label="Edit tag"
        placeholder="Sport"
        register={register('tag')}
        error={errors.tag}
      />
      <Button type="submit">Edit</Button>
    </form>
  );
};
