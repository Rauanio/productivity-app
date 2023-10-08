import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { pb } from '@/shared/api/pocketbase';

export const useGoogleAuth = () => {
  const navigate = useNavigate();

  async function onGoogleAuth() {
    try {
      await pb.collection('users').authWithOAuth2({ provider: 'google' });
      navigate('/');
      toast.success('You have successfully logged into your account');
    } catch (e) {
      toast.error('something went wrong while logged into your account');
    }
  }

  return { onGoogleAuth };
};
