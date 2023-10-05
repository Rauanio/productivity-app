import { ButtonHTMLAttributes, ReactNode } from 'react';
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
  size?: ButtonSize;
  theme?: ButtonTheme;
  disabled?: boolean;
  children: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    size = ButtonSize.S,
    theme = ButtonTheme.CONTAINED,
    disabled,
    children,
    ...otherProps
  } = props;
  return (
    <button
      className={clsx(cls.btn, {
        [cls.size_s]: ButtonSize.S,
        [cls.theme]: theme,
        [cls.disabled]: disabled,
      })}
      type="button"
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
