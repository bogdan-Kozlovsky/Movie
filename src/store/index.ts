export {
  slicesPerson,
  setTotalResultsPerson,
  setTotalPagesPerson,
  setPagePerson,
  setPerson,
} from './features/search/slices/slicesPerson';

export {
  slicesMovies,
  setPageMovies,
  setTotalPagesMovies,
  setTotalResultsMovies,
  setMovies,
} from './features/search/slices/slicesMovies';

export {
  setTv,
  slicesTv,
  setPageTv,
  setTotalPagesTv,
  setTotalResultsTv,
} from './features/search/slices/slicesTv';

export { searchMovies } from './features/search/asyncThunk/searchMovies';
export { searchPerson } from './features/search/asyncThunk/searchPerson';
export { searchTv } from './features/search/asyncThunk/searchTv';
