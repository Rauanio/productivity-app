import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import cls from './Input.module.scss';

interface InputProps {
  type?: string;
  placeholder?: string;
  readonly?: boolean;
  register?: UseFormRegisterReturn;
  error?: FieldError;
}

export const Input = (props: InputProps) => {
  const { placeholder, readonly, type, register, error, ...inputProps } = props;

  return (
    <div>
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        readOnly={readonly}
        className={cls.input}
        {...inputProps}
      />
      {error && <p className={cls.error}>{error.message}</p>}
    </div>
  );
};
