import { Spinner } from '../Spinner/Spinner';
import cls from './PageLoader.module.scss';

export const PageLoader = () => {
  return (
    <div className={cls.pageLoader}>
      <Spinner />
    </div>
  );
};
