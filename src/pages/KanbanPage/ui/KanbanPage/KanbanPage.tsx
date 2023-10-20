import React from 'react';
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { ColumnItem } from '@/pages/KanbanPage/ui/ColumnItem/ColumnItem';
import { useColumns } from '@/hooks/useColumns';
import cls from './KanbanPage.module.scss';

const KanbanPage = () => {
  const { columns, fetchColumns, onDragEnd } = useColumns();
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  React.useEffect(() => {
    fetchColumns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
