import {
  Home,
  KanbanSquareIcon,
  ListTodo,
  LucideIcon,
  Timer,
} from 'lucide-react';
import { RoutePath } from '@/shared/consts/route';

export interface SidebarItemType {
  path: string;
  icon: LucideIcon;
  name: string;
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    icon: Home,
    name: 'Main',
  },
  {
    path: RoutePath.kanban,
    icon: KanbanSquareIcon,
    name: 'Kanban',
  },
  {
    path: RoutePath.pomodoro,
    icon: Timer,
    name: 'Pomodoro',
  },
  {
    path: RoutePath.todo,
    icon: ListTodo,
    name: 'Todo List',
  },
];
