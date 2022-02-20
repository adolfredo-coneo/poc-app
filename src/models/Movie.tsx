export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ExtendedMovie extends Movie {
  belongs_to_collection: belongs_to_collection;
  budget: number;
  genres: Array<genre>;
  homepage: string;
  imdb_id: string;
  production_companies: Array<production_companies>;
  production_countries: Array<production_countries>;
  revenue: number;
  runtime: number;
  spoken_languages: Array<spoken_languages>;
  status: string;
  tagline: string;
}

type belongs_to_collection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type genre = {
  id: number;
  name: string;
};

type production_companies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type production_countries = {
  iso_3166_1: string;
  name: string;
};

type spoken_languages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
