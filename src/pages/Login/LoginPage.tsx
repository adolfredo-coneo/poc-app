import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import LoginForm from '../../components/LoginForm/LoginForm';
import MainLayout from '../../layouts/MainLayout';
import { useAuth } from '../../stores/auth/AuthProvider';

const LoginPage: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user) {
      navigate('/dashboard', { replace: true });
    }
  }, [auth.user, navigate]);

  const handleSubmit = (email: string, password: string) => {
    auth.signin({ email, password }, () => {
      navigate('/dashboard', { replace: true });
    });
  };

  return (
    <MainLayout>
      <LoginForm onSubmit={handleSubmit} />
    </MainLayout>
  );
};

export default LoginPage;
