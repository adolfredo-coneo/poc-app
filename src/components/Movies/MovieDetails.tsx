import React from 'react';

import { ExtendedMovie } from '../../models/Movie';
import classes from './MovieDetails.module.css';

type MovieDetailsProps = {
  movie: ExtendedMovie;
};

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div className={classes.container}>
      <div className={classes.poster}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className={classes.details}>
        <h3>Tagline: {movie.tagline}</h3>
        <p>{movie.overview}</p>
        <ul>
          <li>
            <span>Release date: </span>
            <span>{movie.release_date}</span>
          </li>
          <li>
            <span>Original language: </span>
            <span>{movie.original_language}</span>
          </li>
          <li>
            <span>Status: </span>
            <span>{movie.status}</span>
          </li>
          <li>
            <span>Runtime: </span>
            <span>{movie.runtime} minutes</span>
          </li>
          <li>
            <span>Score: </span>
            <span>{movie.vote_average}</span>
          </li>
          <li>
            <span>Total votes: </span>
            <span>{movie.vote_count}</span>
          </li>
        </ul>
        <div className={classes.poster}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>
      </div>
    </div>
  );
};

export default MovieDetails;
