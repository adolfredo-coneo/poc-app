import React from 'react';

import { useAuth } from '../../stores/auth/AuthProvider';
import BottomTabBar from '../BottomTabBar/BottomTabBar';
import classes from './Footer.module.css';

const Footer: React.FC = () => {
  const { user } = useAuth();

  return (
    <footer className={classes.footer}>
      {user && <BottomTabBar />}
      <p className="">
        ©Copyright 2022 by{' '}
        <a
          href="https://adolconeo.com/"
          target="_blank"
          rel="noreferrer"
          className="font-black"
        >
          <span className="text-yellow-400">&#123; </span>adolConeo
          <span className="text-yellow-400"> &#125;</span>
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
