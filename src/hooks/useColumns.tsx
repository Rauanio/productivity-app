import React from 'react';
import { DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { Column } from '@/pages/KanbanPage';
import { getColumns } from '@/pages/KanbanPage/api/getColumns';
// import { LOCAL_STORAGE_SORT_KEY } from '@/shared/consts/localStorage';

interface UseColumnsProps {
  columns: Column[];
  onDragEnd: (event: DragEndEvent) => void;
  fetchColumns: () => void;
}

export const useColumns = (): UseColumnsProps => {
  const [columns, setColumns] = React.useState<Column[]>([]);

  function fetchColumns() {
    getColumns().then((res) => setColumns(res));
  }

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over) return;

    if (active.id === over?.id) return;

    setColumns((column) => {
      const activeColumnIndex = column.findIndex((col) => col.id === active.id);

      const overColumnIndex = column.findIndex((col) => col.id === over?.id);

      // localStorage.setItem(LOCAL_STORAGE_SORT_KEY, overColumnIndex.toString());
      return arrayMove(column, activeColumnIndex, overColumnIndex);
    });
    // localStorage.getItem(LOCAL_STORAGE_SORT_KEY);
  };

  return {
    columns,
    fetchColumns,
    onDragEnd,
  };
};
