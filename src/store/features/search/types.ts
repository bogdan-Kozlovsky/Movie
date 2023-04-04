// movies

interface Genre {
  id: number;
  name: string;
}
export interface MovieDetailsType {
  adult: boolean;
  backdrop_path: string;
  genres: Genre[];
  genre_ids: number[];
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
  runtime: number;
  revenue: number;
  tagline: string;
}

export interface RootMoviesType {
  page: number;
  results: MovieDetailsType[];
  total_pages: number;
  total_results: number;
}

// person
export interface KnownForPersonType {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name: string;
  original_name: string;
  first_air_date: string;
  origin_country: string[];
}

export interface PersonDetailsType {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: KnownForPersonType[];
}

export interface RootPersonType {
  page: number;
  results: PersonDetailsType[];
  total_pages: number;
  total_results: number;
}

export interface TvDetailsType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

export interface RootTvType {
  page: number;
  results: TvDetailsType[];
  total_pages: number;
  total_results: number;
}

export interface CollectionDetailsType {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
}

export interface RootCollectionType {
  page: number;
  results: CollectionDetailsType[];
  total_pages: number;
  total_results: number;
}

export interface CompaniesDetailsType {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface RootCompaniesType {
  page: number;
  results: CompaniesDetailsType[];
  total_pages: number;
  total_results: number;
}

export interface KeywordsDetailsType {
  id: number;
  name: string;
}

export interface RootOKeywordsType {
  page: number;
  results: KeywordsDetailsType[];
  total_pages: number;
  total_results: number;
}
