import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchemaType, loginSchema } from '@/shared/types/loginSchema';
import { useLogin } from '@/hooks/useLogin';
import { AppLink, Button, Input, Text } from '@/shared/ui';
import { TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { AlternativeAuth } from '@/components/AlternativeAuth/AlternativeAuth';
import cls from './LoginPage.module.scss';

const LoginPage = () => {
  const { isLoading, onLogin } = useLogin();

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
    <div className="authForm">
      <Text title="Login to your account" />
      <Text
        text="Enter your email below to login on your account"
        theme={TextTheme.MUTED}
        className="formText"
      />
      <AlternativeAuth />
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
        <Button fullWidth type="submit" disabled={isLoading}>
          Login
        </Button>
      </form>

      <div className={cls.link}>
        <Text text={`Don't have an account?`} align={TextAlign.CENTER} />
        <AppLink to="/signup">Sign up</AppLink>
      </div>
    </div>
  );
};

export default LoginPage;
