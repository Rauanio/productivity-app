import { ReactNode } from 'react';
import clsx from 'clsx';
import { X } from 'lucide-react';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from '@/hooks/useModal';
import { Mods } from '@/shared/types/Mods';

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children, className, lazy } = props;
  const { close, isClosing, isMounted } = useModal({
    onClose,
    animationDelay: 300,
    isOpen,
  });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={clsx(cls.modal, mods, [className])}>
        <Overlay close={close} />
        <div className={cls.content}>
          <X className={cls.icon} size={20} onClick={close} />
          {children}
        </div>
      </div>
    </Portal>
  );
};
