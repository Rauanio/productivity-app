import React from 'react';
import { Edit, MoreVertical, Plus, Trash } from 'lucide-react';
import { Column, ColumnId } from '@/pages/KanbanPage/ui/KanbanPage';
import cls from './ColumnItem.module.scss';
import { Button } from '@/shared/ui';
import { Dropdown } from '@/shared/ui/Popups';

export interface ColumnItemProps {
  column: Column;
  onDeleteColumn: (id: ColumnId) => void;
}

export const ColumnItem = ({ column, onDeleteColumn }: ColumnItemProps) => {
  return (
    <div className={cls.item_container}>
      <div className={cls.title}>
        <div>{column.title}</div>
        <Dropdown
          trigger={<MoreVertical size={18} cursor="pointer" />}
          className={cls.drp}
          items={[
            {
              content: 'Edit',
              icon: Edit,
            },
            {
              content: 'Delete',
              icon: Trash,
              onClick: () => onDeleteColumn(column.id),
            },
          ]}
        />
      </div>
      <Button variant="secondary" fullWidth>
        <Plus size={16} />
      </Button>
      <div className={cls.column_item} />
    </div>
  );
};
