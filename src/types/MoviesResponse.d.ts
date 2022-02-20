import { Movie } from '../models/Movie';

export type MoviesResponse = {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}
