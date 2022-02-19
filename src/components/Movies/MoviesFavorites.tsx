import React from 'react';

import { useMovies } from '../../stores/movies/MoviesProvider';
import MovieCard from './MovieCard';
import classes from './MoviesList.module.css';

const MoviesFavorites = () => {
  const { movies } = useMovies();

  return (
    <div className={classes.container}>
      {movies && (
        <div className={classes['grid-container']}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesFavorites;
