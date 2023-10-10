import { LucideIcon, LucideProps } from 'lucide-react';
import { memo } from 'react';

export interface IconProps extends LucideProps {
  icon: LucideIcon;
  size?: string | number;
}

export const Icon = memo(
  ({ icon: IconComponent, size = 20, ...restProps }: IconProps) => {
    return <IconComponent size={size} {...restProps} />;
  }
);
