import React from 'react';
import { Plus } from 'lucide-react';
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
import { toast } from 'sonner';
import clsx from 'clsx';
import { Button } from '@/shared/ui';
import { ColumnItem } from '@/components/ColumnItem/ColumnItem';
import cls from './KanbanPage.module.scss';
import { Column } from '@/shared/types/column';
import { pb } from '@/shared/api/pocketbase';

const KanbanPage = () => {
  const [columns, setColumns] = React.useState<Column[]>([]);
  const limit = columns.length >= 4;

  async function getColumns() {
    return pb.collection('columns').getFullList();
  }

  // const getChanges = () => {
  //   return pb.collection('columns');
  // };

  React.useEffect(() => {
    getColumns().then((res) => setColumns(res));
    // getChanges().subscribe('*', (change) => {
    //   console.log(change);

    //   setColumns([...columns, change]);
    // });
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const onCreateColumn = async () => {
    if (limit) {
      return toast.error('You can only create 4 columns');
    }

    const newColumn = {
      title: `Column ${columns.length + 1}`,
    };

    const newCol = await pb.collection('columns').create(newColumn);
    setColumns((oldCol) => [...oldCol, newCol]);
  };

  const onDeleteColumn = async (id: string) => {
    const del = await pb.collection('columns').delete(id);
    if (del) {
      setColumns(columns.filter((col) => col.id !== id));
    }
  };

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
      <Button
        className={clsx(cls.btn, { [cls.limit]: limit })}
        onClick={onCreateColumn}
        iconLeft={Plus}
      >
        Create column
      </Button>
      <DndContext onDragEnd={onDragEnd} sensors={sensors}>
        <div className={cls.column_container}>
          <SortableContext
            strategy={horizontalListSortingStrategy}
            items={columns}
          >
            {columns.map((column) => {
              return (
                <ColumnItem
                  onDeleteColumn={onDeleteColumn}
                  column={column}
                  key={column.id}
                />
              );
            })}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};

export default KanbanPage;
