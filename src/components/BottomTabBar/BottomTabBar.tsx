import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './BottomTabBar.module.css';

const BottomTabBar: React.FC = () => {
  
  return (
    <div className={classes.footer}>
      <ul>
        <li className={classes.link}>
          <NavLink
            to="/dashboard"
            className={(isActive) =>
              classes.link + (isActive ? ` ${classes.active}` : '')
            }
          >
            Home
          </NavLink>
        </li>
        <li className={classes.link}><NavLink
            to="/favorites"
            className={(isActive) =>
              classes.link + (isActive ? ` ${classes.active}` : '')
            }
          >
            Favorites
          </NavLink></li>
      </ul>
    </div>
  );
};

export default BottomTabBar;
