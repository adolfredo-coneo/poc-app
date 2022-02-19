import React from 'react';

import { Movie } from '../../models/Movie';
import classes from './MovieCard.module.css';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={classes.container}>
      <div className={classes.movie}>
        <div className={classes.menu}>
          <button className={classes['menu-icon']}><HeartIcon /></button>
        </div>
        <div>
          <img
            className={classes.movieImg}
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className={classes.textMovieCont}>
          <div className={classes.mrGrid}>
            <h1 className={classes.movieTitle}>{movie.title}</h1>
            Release Date: <span>{movie.release_date}</span>
          </div>
          <div className={classes.mrGrid}>Score: {movie.vote_average}</div>
          <div className={classes.mrGrid}>Total Votes: {movie.vote_count}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
