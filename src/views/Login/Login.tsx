import React from 'react';
import { useNavigate } from 'react-router';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit');
    navigate("/dashboard", { replace: true });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
