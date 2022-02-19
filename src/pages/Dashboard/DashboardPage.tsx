import React from 'react';

import MainLayout from '../../layouts/MainLayout';
import Movies from '../../components/Movies/MoviesList';

const DashboardPage = () => {

  return (
    <MainLayout>
      <div>Popular Movies</div>
      <hr />
      <Movies />
    </MainLayout>
  );
};

export default DashboardPage;
