// import { Navigate, useLocation } from 'react-router-dom';
// import { isUserAuth } from '@/shared/api/pocketbase';
// import { RoutePath } from '@/shared/consts/route';

// export function RequireAuth({ children }: { children: JSX.Element }) {
//   const location = useLocation();

//   if (!isUserAuth) {
//     return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
//   }

//   return children;
// }
