import React from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../../stores/auth/AuthProvider';
import Footer from '../Footer/Footer';
import classes from './BottomTabBar.module.css';

const BottomTabBar: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className={classes.navbar}>
      {user && (
        <>
          <NavLink
            to="/dashboard"
            className={(isActive) =>
              classes.link + (isActive ? ` ${classes.active}` : '')
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={(isActive) =>
              classes.link + (isActive ? ` ${classes.active}` : '')
            }
          >
            Favorites
          </NavLink>
        </>
      )}
      <Footer />
    </div>
  );
};

export default BottomTabBar;
