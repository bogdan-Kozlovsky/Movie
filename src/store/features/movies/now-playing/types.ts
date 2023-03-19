import { RootMovies } from '../types';

export interface RootNowPlaying extends RootMovies {
  dates: Dates;
}
export interface Dates {
  maximum: string;
  minimum: string;
}
