import React from 'react';
import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { ColumnItem } from '@/pages/KanbanPage/ui/ColumnItem/ColumnItem';
import cls from './KanbanPage.module.scss';
import { Column } from '../../types/column';
import { getColumns } from '../../api/getColumns';

const KanbanPage = () => {
  const [columns, setColumns] = React.useState<Column[]>([]);

  React.useEffect(() => {
    getColumns().then((res) => setColumns(res));
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over) return;

    if (active.id === over?.id) return;

    setColumns((column) => {
      const activeColumnIndex = column.findIndex((col) => col.id === active.id);

      const overColumnIndex = column.findIndex((col) => col.id === over?.id);

      return arrayMove(column, activeColumnIndex, overColumnIndex);
    });
  };

  return (
    <div>
      <DndContext onDragEnd={onDragEnd} sensors={sensors}>
        <div className={cls.column_container}>
          <SortableContext
            strategy={horizontalListSortingStrategy}
            items={columns}
          >
            {columns.map((column) => {
              return <ColumnItem column={column} key={column.id} />;
            })}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};

export default KanbanPage;
