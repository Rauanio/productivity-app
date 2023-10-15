import { Edit, MoreVertical, Plus, Trash } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';
import cls from './ColumnItem.module.scss';
import { Button } from '@/shared/ui';
import { Dropdown } from '@/shared/ui/Popups';
import { Column } from '@/shared/types/column';

export interface ColumnItemProps {
  column: Column;
  onDeleteColumn: (id: string) => void;
}

export const ColumnItem = ({ column, onDeleteColumn }: ColumnItemProps) => {
  const [editMode, setEditMode] = React.useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: column.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const onEditColumn = () => {
    setEditMode(!editMode);
  };

  return (
    <div ref={setNodeRef} style={style} className={cls.item_container}>
      <div {...attributes} {...listeners} className={cls.column_header}>
        <div className={cls.title}>
          {editMode ? <input value={column.title} /> : column.title}
        </div>
        <Dropdown
          trigger={<MoreVertical size={18} cursor="pointer" />}
          className={cls.delete}
          items={[
            {
              content: 'Edit',
              icon: Edit,
              onClick: () => onEditColumn(),
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
