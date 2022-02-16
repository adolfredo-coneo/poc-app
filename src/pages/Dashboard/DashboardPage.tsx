import React from 'react';

import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth } from '../../stores/auth/AuthProvider';

type Props = {};

const DashboardPage = (props: Props) => {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (event: React.FormEvent<HTMLSpanElement>) => {
    event.preventDefault();
    signout(() => {
      navigate('/dashboard', { replace: true });
    });
  };

  return (
    <>
      <div>Dashboard</div>
      <span>User: {user?.email}</span>
      <hr />
      <Link to="/">login</Link>
      <span onClick={handleLogout}>Logout</span>
    </>
  );
};

export default DashboardPage;
