import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';

import { fetchMovieDetails } from '../../api/movies';
import PageTitle from '../../components/PageTitle/PageTitle';
import MainLayout from '../../layouts/MainLayout';
import MovieDetails from '../../components/Movies/MovieDetails';
import { ExtendedMovie } from '../../models/Movie';

const MovieDetailsPage = () => {
  const { id } = useParams();

  const { isLoading, isError, error, data, remove } = useQuery<ExtendedMovie>(
    'movie-details',
    () => fetchMovieDetails(id as unknown as number)
  );

  useEffect(() => {
    return () => {
      remove();
    };
  }, [remove]);

  return (
    <MainLayout>
      {isLoading && <div>Loading...</div>}
      {isError && <div>An error has occurred: {error}</div>}
      {data && (
        <>
          <PageTitle title={data.title} />
          <MovieDetails movie={data} />
        </>
      )}
    </MainLayout>
  );
};

export default MovieDetailsPage;
