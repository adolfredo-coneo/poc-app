import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { useAuth } from '../../stores/auth/AuthProvider';

const LoginPage: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user) {
      navigate('/dashboard', { replace: true });
    }
  }, [auth.user, navigate]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth.signin({ email: 'ado.@gmail.com', password: '123456' }, () => {
      navigate('/dashboard', { replace: true });
    });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
        <Link to="/dashboard">Dashboard</Link>
      </form>
    </>
  );
};

export default LoginPage;
