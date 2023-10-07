import { Github } from 'lucide-react';
import { Button, Text } from '@/shared/ui';
import { TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import cls from './AlternativeAuth.module.scss';
import { ButtonTheme } from '@/shared/ui/Button/Button';
import { useGithubAuth } from '@/hooks/useGithubAuth';
import { useGoogleAuth } from '@/hooks/useGoogleAuth';

export const AlternativeAuth = () => {
  const { onGithubAuth } = useGithubAuth();
  const { onGoogleAuth } = useGoogleAuth();
  return (
    <>
      <div className={cls.alternativeBtns}>
        <Button theme={ButtonTheme.OUTLINED} onClick={onGoogleAuth}>
          Google
        </Button>
        <Button
          className={cls.github}
          theme={ButtonTheme.OUTLINED}
          onClick={onGithubAuth}
        >
          <Github />
          Github
        </Button>
      </div>
      <Text
        text="Or continue with"
        theme={TextTheme.MUTED}
        align={TextAlign.CENTER}
        className={cls.alternative}
      />
    </>
  );
};
