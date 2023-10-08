import { Github } from 'lucide-react';
import { Button, Text } from '@/shared/ui';
import cls from './AlternativeAuth.module.scss';
import { useGithubAuth } from '@/hooks/useGithubAuth';
import { useGoogleAuth } from '@/hooks/useGoogleAuth';

export const AlternativeAuth = () => {
  const { onGithubAuth } = useGithubAuth();
  const { onGoogleAuth } = useGoogleAuth();
  return (
    <>
      <div className={cls.alternativeBtns}>
        <Button variant="outlined" onClick={onGoogleAuth}>
          Google
        </Button>
        <Button
          className={cls.github}
          variant="outlined"
          onClick={onGithubAuth}
        >
          <Github />
          Github
        </Button>
      </div>
      <Text
        text="Or continue with"
        variant="muted"
        align="center"
        className={cls.alternative}
      />
    </>
  );
};
