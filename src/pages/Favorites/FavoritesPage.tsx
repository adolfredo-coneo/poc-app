import React from 'react';

import MoviesFavorites from '../../components/Movies/MoviesFavorites';
import PageTitle from '../../components/PageTitle/PageTitle';
import MainLayout from '../../layouts/MainLayout';

const FavoritesPage = () => {
  return (
    <MainLayout>
      <PageTitle title="These are your favorite Movies" />
      <MoviesFavorites />
    </MainLayout>
  );
};

export default FavoritesPage;
