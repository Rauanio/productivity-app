import { ProfilePage } from '@/pages/ProfilePage';
import { KanbanPage } from '@/pages/KanbanPage';
import { PomodoroPage } from '@/pages/PomodoroPage';
import { TodoListPage } from '@/pages/TodoListPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
// import { SignupPage } from '@/pages/SignupPage';
// import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
import { AppRoutes, RoutePath } from '../consts/route';
import { AppRoutesProps } from '../types/route';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
    authOnly: true,
  },
  // [AppRoutes.LOGIN]: {
  //   path: RoutePath.login,
  //   element: <LoginPage />,
  // },
  // [AppRoutes.SIGNUP]: {
  //   path: RoutePath.signup,
  //   element: <SignupPage />,
  // },
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
