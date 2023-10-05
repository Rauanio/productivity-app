import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { pb } from '@/shared/api/pocketbase';
import { LoginSchemaType } from '@/shared/types/loginSchema';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function onLogin({ email, password }: LoginSchemaType) {
    setIsLoading(true);
    try {
      await pb.collection('users').authWithPassword(email, password);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
    navigate('/');
  }

  return {
    onLogin,
    isLoading,
  };
};
