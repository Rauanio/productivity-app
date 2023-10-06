import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { LoginSchemaType, loginSchema } from '@/shared/types/loginSchema';
import { useLogin } from '@/hooks/useLogin';
import { useGoogleAuth } from '@/hooks/useGoogleAuth';
import { useGithubAuth } from '@/hooks/useGithubAuth';
import { Button, Input } from '@/shared/ui';
import cls from './LoginPage.module.scss';
import { ButtonTheme } from '@/shared/ui/Button/Button';

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
    <div className={cls.signup}>
      <h2>Create an account</h2>
      <p className={cls.text}>Enter your email below to create your account</p>
      {isLoading && <h1>Loading...</h1>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          fullWidth
          label="Email"
          type="text"
          placeholder="sobaka@gmail.com"
          register={register('email')}
          error={errors.email}
        />
        <Input
          fullWidth
          label="Password"
          type="password"
          placeholder="qwerty123"
          register={register('password')}
          error={errors.password}
        />
        <Button
          fullWidth
          type="submit"
          className={cls.loginBtn}
          disabled={isLoading}
        >
          Login
        </Button>
      </form>
      <p className={cls.alternative}>Or continue with</p>
      <div className={cls.alternativeBtns}>
        <Button theme={ButtonTheme.OUTLINED} onClick={onGoogleAuth}>
          Google
        </Button>
        <Button theme={ButtonTheme.OUTLINED} onClick={onGithubAuth}>
          Github
        </Button>
      </div>

      <p>Нету аккаунта ? зарегистрируйтесь</p>
      <Link to="/signup">зарегистрироватся</Link>
    </div>
  );
};

export default LoginPage;
