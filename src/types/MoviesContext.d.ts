import { Movie } from '../models/Movie';

export type MoviesContextType = {
  movies: Array<Movie>;
  addFavorite: (movie: Movie) => void;
  removeFavorite: (movie: Movie) => void;
  addFavorites: (movies: Array<Movie>) => void;
}
