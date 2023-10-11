import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';
import cls from './Button.module.scss';
import { Icon } from '../Icon/Icon';

export type ButtonVariant =
  | 'primary'
  | 'ghost'
  | 'outlined'
  | 'destructive'
  | 'secondary'
  | 'icon';

export type ButtonSize = 's' | 'm' | 'l';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    size = 's',
    variant = 'primary',
    disabled,
    fullWidth,
    children,
    iconLeft,
    iconRight,
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
      {iconLeft && <Icon size={18} className={cls.iconLeft} icon={iconLeft} />}
      {children}
      {iconRight && (
        <Icon size={18} className={cls.iconRight} icon={iconRight} />
      )}
    </button>
  );
});
