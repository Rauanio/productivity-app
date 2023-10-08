import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { SignUpSchemaType } from '@/shared/types/signUpSchema';
import { pb } from '@/shared/api/pocketbase';

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function onSignup(data: SignUpSchemaType) {
    const authData = {
      username: data.username,
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
    };
    setIsLoading(true);
    try {
      await pb.collection('users').create(authData);
      navigate('/login');
      toast.success('You have successfully create your account');
    } catch (e) {
      toast.error('something went wrong while creating account');
    } finally {
      setIsLoading(false);
    }
  }

  return {
    onSignup,
    isLoading,
  };
};
