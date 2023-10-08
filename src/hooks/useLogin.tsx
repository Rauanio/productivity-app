import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { pb } from '@/shared/api/pocketbase';
import { LoginSchemaType } from '@/shared/types/loginSchema';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function onLogin({ email, password }: LoginSchemaType) {
    setIsLoading(true);
    try {
      await pb.collection('users').authWithPassword(email, password);
      navigate('/');
      toast.success('You have successfully logged into your account');
    } catch (e) {
      toast.error('something went wrong while logged into your account');
    } finally {
      setIsLoading(false);
    }
  }

  return {
    onLogin,
    isLoading,
  };
};
