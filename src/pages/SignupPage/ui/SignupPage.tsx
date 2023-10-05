import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import GoogleButton from 'react-google-button';
import { SignUpSchemaType, signUpSchema } from '@/shared/types/signUpSchema';
import { useSignup } from '@/hooks/useSignup';
import { useGithubAuth } from '@/hooks/useGithubAuth';
import { useGoogleAuth } from '@/hooks/useGoogleAuth';
import { Input } from '@/shared/ui/Input/Input';

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
          type="text"
          placeholder="username"
          register={register('username')}
          error={errors.username}
        />
        <Input
          type="email"
          placeholder="email"
          register={register('email')}
          error={errors.email}
        />
        <Input
          type="password"
          placeholder="password"
          register={register('password')}
          error={errors.password}
        />
        <Input
          type="password"
          placeholder="confirm password"
          register={register('passwordConfirm')}
          error={errors.passwordConfirm}
        />
        <button type="submit" disabled={isLoading}>
          SignUp
        </button>
      </form>
      <GoogleButton
        label="Sign up with Google"
        type="dark"
        onClick={onGoogleAuth}
      />
      <button type="button" onClick={onGithubAuth}>
        onGithub
      </button>
    </div>
  );
};

export default SignupPage;
