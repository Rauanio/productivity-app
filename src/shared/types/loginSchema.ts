import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('No such email exists'),
  password: z.string().min(5, 'Incorrect password'),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
