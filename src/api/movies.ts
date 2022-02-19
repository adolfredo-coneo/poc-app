export const fetchMovies = (page = 1) =>
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
  ).then((res) => res.json());
