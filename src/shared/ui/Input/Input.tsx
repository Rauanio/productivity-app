import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  readonly?: boolean;
  register?: UseFormRegisterReturn;
  fullWidth?: boolean;
  error?: FieldError;
}

export const Input = (props: InputProps) => {
  const {
    className,
    label,
    placeholder,
    readonly,
    type,
    register,
    fullWidth,
    error,
    ...otherProps
  } = props;

  return (
    <div className={clsx(cls.inputWrapper, { [cls.readonly]: readonly })}>
      <div className={cls.label}>{label}</div>
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        readOnly={readonly}
        className={clsx(cls.input, { [cls.fullWidth]: fullWidth }, [className])}
        {...otherProps}
      />
      {error && <p className={cls.error}>{error.message}</p>}
    </div>
  );
};
