import { memo } from 'react';
import clsx from 'clsx';
import cls from './Icon.module.scss';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, Svg, ...otherProps }: IconProps) => {
  return <Svg className={clsx(cls.Icon, {}, [className])} {...otherProps} />;
});
