import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import GoogleButton from 'react-google-button';
import { SignUpSchemaType, signUpSchema } from '@/shared/types/signUpSchema';
import { useSignup } from '@/hooks/useSignup';
import { useGithubAuth } from '@/hooks/useGithubAuth';
import { useGoogleAuth } from '@/hooks/useGoogleAuth';
import { Button, Input } from '@/shared/ui';

const SignupPage = () => {
  const { isLoading, onSignup } = useSignup();
  const { onGithubAuth } = useGithubAuth();
  const { onGoogleAuth } = useGoogleAuth();
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>SignUp</h1>
        {isLoading && <div>Loading...</div>}
        <Input
          label="Username"
          type="text"
          placeholder="Vasya"
          register={register('username')}
          error={errors.username}
        />
        <Input
          label="Email"
          type="email"
          placeholder="sobaka@gmail.com"
          register={register('email')}
          error={errors.email}
        />
        <Input
          label="Password"
          type="password"
          placeholder="password"
          register={register('password')}
          error={errors.password}
        />
        <Input
          label="Confirm password"
          type="password"
          placeholder="confirm password"
          register={register('passwordConfirm')}
          error={errors.passwordConfirm}
        />
        <Button type="submit" disabled={isLoading}>
          SignUp
        </Button>
      </form>
      <GoogleButton
        label="Sign up with Google"
        type="dark"
        onClick={onGoogleAuth}
      />
      <Button type="button" onClick={onGithubAuth}>
        onGithub
      </Button>
    </div>
  );
};

export default SignupPage;
