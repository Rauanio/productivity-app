import { useNavigate } from 'react-router-dom';
import { pb } from '@/shared/api/pocketbase';

export const useGithubAuth = () => {
  const navigate = useNavigate();

  async function onGithubAuth() {
    await pb.collection('users').authWithOAuth2({ provider: 'github' });
    navigate('/');
  }

  return { onGithubAuth };
};
