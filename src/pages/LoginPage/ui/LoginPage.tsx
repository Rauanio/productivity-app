import { useForm } from 'react-hook-form';
import GoogleButton from 'react-google-button';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchemaType, loginSchema } from '@/shared/types/loginSchema';
import { useLogin } from '@/hooks/useLogin';
import { useGoogleAuth } from '@/hooks/useGoogleAuth';
import { useGithubAuth } from '@/hooks/useGithubAuth';
import { Input } from '@/shared/ui/Input/Input';
import cls from './LoginPage.module.scss';

const LoginPage = () => {
  const { isLoading, onLogin } = useLogin();
  const { onGoogleAuth } = useGoogleAuth();
  const { onGithubAuth } = useGithubAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (data: LoginSchemaType) => {
    onLogin(data);
  };

  return (
    <div className={cls.main}>
      <h1>Login</h1>
      {isLoading && <h1>Loading...</h1>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          error={errors.email}
          register={register('email')}
          type="text"
          placeholder="email"
        />
        <Input
          type="password"
          placeholder="password"
          register={register('password')}
          error={errors.password}
        />
        <button type="submit" disabled={isLoading}>
          Login
        </button>
      </form>
      <GoogleButton type="dark" onClick={onGoogleAuth} />
      <button type="button" onClick={onGithubAuth}>
        Github
      </button>
    </div>
  );
};

export default LoginPage;
