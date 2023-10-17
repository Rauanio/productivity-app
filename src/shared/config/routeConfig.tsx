import { ProfilePage } from '@/pages/ProfilePage';
import { PomodoroPage } from '@/pages/PomodoroPage';
import { TodoListPage } from '@/pages/TodoListPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { MainPage } from '@/pages/MainPage';
import { AppRoutes, RoutePath } from '../consts/route';
import { AppRoutesProps } from '../types/route';
import { KanbanPage } from '@/pages/KanbanPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
    authOnly: true,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profle,
    element: <ProfilePage />,
    // authOnly: true,
  },
  [AppRoutes.KANBAN]: {
    path: RoutePath.kanban,
    element: <KanbanPage />,
    authOnly: true,
  },
  [AppRoutes.POMODORO]: {
    path: RoutePath.pomodoro,
    element: <PomodoroPage />,
    authOnly: true,
  },
  [AppRoutes.TODO]: {
    path: RoutePath.todo,
    element: <TodoListPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
    authOnly: true,
  },
};
