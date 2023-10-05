import { useNavigate } from 'react-router-dom';
import { pb } from '@/shared/api/pocketbase';

export const useGoogleAuth = () => {
  const navigate = useNavigate();

  async function onGoogleAuth() {
    await pb.collection('users').authWithOAuth2({ provider: 'google' });
    navigate('/');
  }

  return { onGoogleAuth };
};
