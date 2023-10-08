import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { pb } from '@/shared/api/pocketbase';

export const useGithubAuth = () => {
  const navigate = useNavigate();

  async function onGithubAuth() {
    try {
      await pb.collection('users').authWithOAuth2({ provider: 'github' });
      navigate('/');
      toast.success('You have successfully logged into your account');
    } catch (e) {
      toast.error('something went wrong while logged into your account');
    }
  }

  return { onGithubAuth };
};
