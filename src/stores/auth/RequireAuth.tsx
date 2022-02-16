import React from 'react';
import { useAuth } from './AuthProvider';

import { Navigate } from 'react-router-dom';

type Props = { children: JSX.Element };

const RequireAuth: React.FC<Props> = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RequireAuth;
