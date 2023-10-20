import { z } from 'zod';

export const taskSchema = z.object({
  title: z.string().min(1, { message: 'Title field is required' }),
  desc: z.string().min(1, { message: 'Description field is required' }),
  tag: z.string().min(1, { message: 'Tag field is required' }),
});

export type TaskSchemaType = z.infer<typeof taskSchema>;
