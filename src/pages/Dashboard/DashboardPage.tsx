import React from 'react';

import MainLayout from '../../layouts/MainLayout';
import MoviesList from '../../components/Movies/MoviesList';
import PageTitle from '../../components/PageTitle/PageTitle';

const DashboardPage = () => {
  return (
    <MainLayout>
      <PageTitle title="Movies" />
      <MoviesList />
    </MainLayout>
  );
};

export default DashboardPage;
