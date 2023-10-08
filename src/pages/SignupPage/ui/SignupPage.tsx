import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchemaType, signUpSchema } from '@/shared/types/signUpSchema';
import { useSignup } from '@/hooks/useSignup';
import { Button, Input, Text } from '@/shared/ui';
import { AlternativeAuth } from '@/components/AlternativeAuth/AlternativeAuth';

const SignupPage = () => {
  const { isLoading, onSignup } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const onSubmit = (data: SignUpSchemaType) => {
    onSignup(data);
  };

  return (
    <div className="authForm">
      <Text title="Create an account" />
      <Text
        text="Enter your email below to create your account"
        variant="muted"
        className="formText"
      />
      <AlternativeAuth />
      <form onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <div>Loading...</div>}
        <Input
          label="Username"
          type="text"
          placeholder="Vasya"
          fullWidth
          register={register('username')}
          error={errors.username}
        />
        <Input
          label="Email"
          type="email"
          placeholder="sobaka@gmail.com"
          fullWidth
          register={register('email')}
          error={errors.email}
        />
        <Input
          label="Password"
          type="password"
          placeholder="password"
          fullWidth
          register={register('password')}
          error={errors.password}
        />
        <Input
          label="Confirm password"
          type="password"
          placeholder="confirm password"
          fullWidth
          register={register('passwordConfirm')}
          error={errors.passwordConfirm}
        />
        <Button type="submit" disabled={isLoading}>
          SignUp
        </Button>
      </form>
    </div>
  );
};

export default SignupPage;
