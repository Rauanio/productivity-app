import { z } from 'zod';

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: 'Username must be at least 3 characters' }),
    email: z
      .string()
      .email()
      .min(1, { message: 'Email is required' })
      .email('Invalid email address'),
    password: z.string().min(5, 'Password must be at least 5 characters'),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords must match',
    path: ['passwordConfirm'],
  });

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
