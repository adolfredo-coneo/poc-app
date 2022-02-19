import React, { createContext, useContext, useState } from 'react';

import { Movie } from '../../models/Movie';
import { MoviesContextType } from '../../types/MoviesContext';
import { setLocalMovies } from '../LocalStorage';

const MoviesContext = createContext<MoviesContextType | null>(null);

const MoviesProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<Array<Movie> | []>([]);

  const addFavorites = (movies: Array<Movie>) => {
    setMovies(movies);
  };

  const addFavorite = (movie: Movie) => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
    setLocalMovies(newMovies);
  };

  const removeFavorite = (movie: Movie) => {
    const newMovies = movies.filter((m) => m.id !== movie.id);
    setMovies(newMovies);
    setLocalMovies(newMovies);
  };

  const value = { movies, addFavorite, removeFavorite, addFavorites };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MoviesContext);

  if (context === null) {
    throw new Error('useMovies must be used within an MoviesProvider');
  }

  return context;
};

export default MoviesProvider;
