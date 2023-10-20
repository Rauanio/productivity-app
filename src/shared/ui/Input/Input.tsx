import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import clsx from 'clsx';
import { InputHTMLAttributes, memo, useId } from 'react';
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

export const Input = memo((props: InputProps) => {
  const {
    className,
    label,
    placeholder,
    readonly,
    type,
    register,
    fullWidth,
    error,
    ...restProps
  } = props;

  const id = useId();

  return (
    <div className={clsx(cls.inputWrapper, { [cls.readonly]: readonly })}>
      <label htmlFor={id} className={cls.label}>
        {label}
      </label>
      <input
        id={id}
        {...register}
        type={type}
        placeholder={placeholder}
        readOnly={readonly}
        className={clsx(cls.input, { [cls.fullWidth]: fullWidth }, [className])}
        {...restProps}
      />
      {error && <p className={cls.error}>{error.message}</p>}
    </div>
  );
});
