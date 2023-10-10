import { Fragment, ReactNode } from 'react';
import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import { Check, ChevronDown } from 'lucide-react';
import cls from './Select.module.scss';
import { Icon } from '@/shared/ui';
import { SelectDirection } from '../../types/popup';

export interface SelectItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface SelectProps {
  items?: SelectItem[];
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  direction?: SelectDirection;
}

export const Select = (props: SelectProps) => {
  const { value, defaultValue, items, onChange, direction = 'bottom' } = props;

  const mapDirectionClass: Record<SelectDirection, string> = {
    bottom: cls.directionBottom,
    top: cls.directionTop,
  };

  const directionClasses = mapDirectionClass[direction];

  return (
    <Listbox as="div" className={cls.select} value={value} onChange={onChange}>
      <Listbox.Button className={cls.trigger}>
        {value ?? defaultValue}
        <Icon icon={ChevronDown} size={16} />
      </Listbox.Button>
      <Listbox.Options className={clsx(cls.options, {}, [directionClasses])}>
        {items?.map((item) => (
          <Listbox.Option
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            as={Fragment}
          >
            {({ active, selected }) => (
              <li
                className={clsx(cls.item, {
                  [cls.active]: active,
                  [cls.disabled]: item.disabled,
                })}
              >
                {item.content}
                {selected && <Icon icon={Check} size={16} />}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
