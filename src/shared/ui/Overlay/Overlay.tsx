import { memo } from 'react';
import clsx from 'clsx';
import cls from './Overlay.module.scss';

export interface OverlayProps {
  className?: string;
  close: () => void;
}

export const Overlay = memo(({ className, close }: OverlayProps) => {
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  return <div onClick={close} className={clsx(cls.overlay, {}, [className])} />;
});
