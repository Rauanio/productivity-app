import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { pb } from '@/shared/api/pocketbase';
import { SignUpSchemaType } from '@/shared/types/signUpSchema';

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
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }

    navigate('/login');
  }

  return {
    onSignup,
    isLoading,
  };
};
