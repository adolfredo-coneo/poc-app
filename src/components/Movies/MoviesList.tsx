import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { fetchMovies } from '../../api/movies';
import { MoviesResponse } from '../../types/MoviesResponse';
import MovieCard from '../../components/Movies/MovieCard';
import classes from './MoviesList.module.css';

const MoviesList: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const { isLoading, isError, error, data, isPreviousData } =
    useQuery<MoviesResponse, Error>(['movies', page], () => fetchMovies(page), {
      keepPreviousData: true,
    });

  const handleNextPage = () => {
    if (!isPreviousData && data && data?.total_pages > page) {
      setPage((old) => old + 1);
    }
  };

  const handlePreviousPage = () => {
    setPage((old) => Math.max(old - 1, 0));
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred: {error}</div>;

  return (
    <div className={classes.container}>
      {data && (
        <>
          <div className={classes.pagination}>
            <button onClick={handlePreviousPage} disabled={page === 1}>
              Previous Page
            </button>{' '}
            <button
              onClick={handleNextPage}
              disabled={isPreviousData || !(data.total_pages > page)}
            >
              Next Page
            </button>
          </div>
          <div className={classes['grid-container']}>
            {data.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MoviesList;
