import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import clsx from 'clsx';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINED = 'outlined',
  OUTLINED_iNVERTED = 'outlinedInverted',
  CONTAINED = 'contained',
  CONTAINED_INVERTED = 'containedInverted',
}

export enum ButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: ButtonSize;
  theme?: ButtonTheme;
  disabled?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    size = ButtonSize.S,
    theme = ButtonTheme.CONTAINED,
    disabled,
    fullWidth,
    children,
    ...otherProps
  } = props;
  return (
    <button
      className={clsx(
        cls.btn,
        {
          [cls.disabled]: disabled,
          [cls.fullWidth]: fullWidth,
        },
        [className, cls[theme], cls[size]]
      )}
      type="button"
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
