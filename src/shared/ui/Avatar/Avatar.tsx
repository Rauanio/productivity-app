import { CSSProperties, useMemo } from 'react';
import clsx from 'clsx';
import cls from './Avatar.module.scss';

export interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}
export const Avatar = ({ className, src, alt, size }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 50,
      height: size || 50,
    };
  }, [size]);
  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={clsx(cls.avatar, {}, [className])}
    />
  );
};
