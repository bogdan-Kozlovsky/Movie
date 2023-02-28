export {
  slicesPerson,
  setTotalResultsPerson,
  setTotalPagesPerson,
  setPagePerson,
  setPerson,
} from './search/slices/slicesPerson';

export {
  slicesMovies,
  setPageMovies,
  setTotalPagesMovies,
  setTotalResultsMovies,
  setMovies,
} from './search/slices/slicesMovies';

export { searchMovies } from './search/asyncThunk/searchMovies';
export { searchPerson } from './search/asyncThunk/searchPerson';
