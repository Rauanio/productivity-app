import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/shared/ui';
import { ColumnItem } from '@/components/ColumnItem/ColumnItem';
import cls from './KanbanPage.module.scss';

export type ColumnId = string | number;

export interface Column {
  id: ColumnId;
  title: string;
}

const KanbanPage = () => {
  const [columns, setColumns] = React.useState<Column[]>([]);

  const generateId = () => {
    return Math.floor(Math.random() * 1001);
  };

  const onCreateColumn = () => {
    const newColumn: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, newColumn]);
  };

  const onDeleteColumn = (id: ColumnId) => {
    setColumns(columns.filter((col) => col.id !== id));
  };

  return (
    <div>
      <Button onClick={onCreateColumn} iconLeft={Plus}>
        Create column
      </Button>
      <div className={cls.column_container}>
        {columns.map((column) => {
          return (
            <ColumnItem
              onDeleteColumn={onDeleteColumn}
              column={column}
              key={column.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default KanbanPage;
