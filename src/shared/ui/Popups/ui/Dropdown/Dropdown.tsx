import { Menu } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, ReactNode, useId } from 'react';
import { LucideIcon } from 'lucide-react';
import cls from './Dropdown.module.scss';
import { AppLink, Icon } from '@/shared/ui';
import { PopupDirection } from '../../types/popup';

export interface DropdownItem {
  content: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: LucideIcon;
}

export interface DropdownProps {
  className?: string;
  items?: DropdownItem[];
  trigger?: ReactNode;
  direction?: PopupDirection;
  label?: string;
}

export const Dropdown = ({
  className,
  items,
  trigger,
  label,
  direction = 'bottom left',
}: DropdownProps) => {
  const mapDirectionClass: Record<PopupDirection, string> = {
    'bottom left': cls.directionBottomLeft,
    'bottom right': cls.directionBottomRight,
    'top left': cls.directionTopLeft,
    'top right': cls.directionTopRight,
  };

  const id = useId();

  const directionClasses = mapDirectionClass[direction];

  return (
    <Menu as="div" className={clsx(cls.dropdown, {}, [className])}>
      <Menu.Button className={cls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={clsx(cls.options, {}, [directionClasses])}>
        {label && (
          <label htmlFor={id} className={cls.label}>
            {label}
          </label>
        )}
        {items?.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={item.onClick}
              disabled={item.disabled}
              className={clsx(cls.item, {
                [cls.active]: active,
                [cls.disabled]: item.disabled,
              })}
            >
              {item.icon && (
                <Icon size={18} className={cls.icon} icon={item.icon} />
              )}
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                className={cls.link}
                to={item.href}
                key={item.content}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item
              as={Fragment}
              key={item.content}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
