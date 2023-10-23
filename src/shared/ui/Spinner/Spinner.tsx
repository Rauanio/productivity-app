import cls from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <svg className={cls.spinner} viewBox="25 25 50 50">
      <circle className={cls.circle} r="20" cy="50" cx="50" />
    </svg>
  );
};
