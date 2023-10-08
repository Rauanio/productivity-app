export enum AppRoutes {
  MAIN = 'main',
  // SIGNUP = 'signup',
  // LOGIN = 'login',
  PROFILE = 'profle',
  KANBAN = 'kanban',
  TODO = 'todo',
  POMODORO = 'pomodoro',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  // [AppRoutes.SIGNUP]: '/signup',
  // [AppRoutes.LOGIN]: '/login',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.KANBAN]: '/kanban',
  [AppRoutes.TODO]: '/todo',
  [AppRoutes.POMODORO]: '/pomodoro',
  [AppRoutes.NOT_FOUND]: '*',
};
