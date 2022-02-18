import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import MainLayout from '../../layouts/MainLayout';
import { useAuth } from '../../stores/auth/AuthProvider';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user) {
      navigate('/dashboard', { replace: true });
    }
  }, [auth.user, navigate]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth.signin({ email, password }, () => {
      navigate('/dashboard', { replace: true });
    });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <MainLayout>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={handleEmailChange}
            value={email}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={handlePasswordChange}
            value={password}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </MainLayout>
  );
};

export default LoginPage;
