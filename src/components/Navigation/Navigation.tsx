import React from 'react';
import { useNavigate } from 'react-router';

import { useAuth } from '../../stores/auth/AuthProvider';
import classes from './Navigation.module.css';

const Navigation: React.FC = () => {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (event: React.FormEvent<HTMLSpanElement>) => {
    event.preventDefault();
    signout(() => {
      navigate('/', { replace: true });
    });
  };

  return (
    <nav className={classes.nav}>
      <ul>
        {user && (
          <>
            <li className={classes.link}>
              {user.email}
            </li>
            <li className={classes.link} onClick={handleLogout}>
              Logout
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
