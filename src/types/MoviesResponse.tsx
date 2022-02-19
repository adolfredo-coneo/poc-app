import { Movie } from '../models/Movie';

export interface MoviesResponse {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}
