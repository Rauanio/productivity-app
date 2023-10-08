import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import clsx from 'clsx';
import cls from './Button.module.scss';

export type ButtonVariant = 'contained' | 'clear' | 'outlined';

export type ButtonSize = 's' | 'm' | 'l';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    size = 's',
    variant = 'contained',
    disabled,
    fullWidth,
    children,
    ...restProps
  } = props;
  return (
    <button
      className={clsx(
        cls.btn,
        {
          [cls.disabled]: disabled,
          [cls.fullWidth]: fullWidth,
        },
        [className, cls[variant], cls[size]]
      )}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
});
