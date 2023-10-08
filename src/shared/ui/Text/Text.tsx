import { memo } from 'react';
import clsx from 'clsx';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'muted';

export type TextAlign = 'left' | 'right' | 'center';

export type TextSize = 's' | 'm';

export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    variant = 'primary',
    align = 'left',
    size = 's',
  } = props;

  return (
    <div
      className={clsx(cls.Text, {}, [
        className,
        cls[variant],
        cls[align],
        cls[size],
      ])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
