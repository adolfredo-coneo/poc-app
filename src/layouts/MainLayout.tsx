import React from 'react';
import MainHeader from '../components/Header/Header';

import Footer from '../components/Footer/Footer';
//import Notification from '../../components/UI/Notification/Notification';
import classes from './MainLayout.module.css';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main className="container">
        {/*<Notification />*/}
        <div className={classes.content}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
