import React from 'react';
import MainHeader from '../components/Header/Header';

import classes from './MainLayout.module.css';
import BottomTabBar from '../components/BottomTabBar/BottomTabBar';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main className="container">
        <div className={classes.content}>{children}</div>
      </main>
      <BottomTabBar />
    </>
  );
};

export default MainLayout;
