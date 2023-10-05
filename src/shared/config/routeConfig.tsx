import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from '../consts/route';
import { LoginPage } from '@/pages/LoginPage';
import { SignupPage } from '@/pages/SignupPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { KanbanPage } from '@/pages/KanbanPage';
import { PomodoroPage } from '@/pages/PomodoroPage';
import { TodoListPage } from '@/pages/TodoListPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { MainPage } from '@/pages/MainPage';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
  },
  [AppRoutes.SIGNUP]: {
    path: RoutePath.signup,
    element: <SignupPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profle,
    element: <ProfilePage />,
  },
  [AppRoutes.KANBAN]: {
    path: RoutePath.kanban,
    element: <KanbanPage />,
  },
  [AppRoutes.POMODORO]: {
    path: RoutePath.pomodoro,
    element: <PomodoroPage />,
  },
  [AppRoutes.TODO]: {
    path: RoutePath.todo,
    element: <TodoListPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
