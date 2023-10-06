import { useNavigate } from 'react-router-dom';
import { pb } from '@/shared/api/pocketbase';

export const useLogout = () => {
  const navigate = useNavigate();

  function onLogout() {
    pb.authStore.clear();
    navigate('/login');
  }

  return { onLogout };
};
