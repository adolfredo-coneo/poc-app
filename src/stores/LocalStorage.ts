import { Movie } from '../models/Movie';
import { User } from '../models/User';

export const setToken = (user: User) => {
  localStorage.setItem('token', JSON.stringify(user));
};

export const getToken = () => {
  const user = localStorage.getItem('token');
  return user ? JSON.parse(user) : null;
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const setLocalMovies = (movies: Array<Movie>) => {
  localStorage.setItem('movies', JSON.stringify(movies));
};

export const getLocalMovies = () => {
  const movies = localStorage.getItem('movies');
  return movies ? JSON.parse(movies) : null;
};
