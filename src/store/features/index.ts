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

export {
  setTv,
  slicesTv,
  setPageTv,
  setTotalPagesTv,
  setTotalResultsTv,
} from './search/slices/slicesTv';

export {
  setCollection,
  setPageCollection,
  setTotalPagesCollection,
  setTotalResultsCollection,
  slicesCollection,
} from './search/slices/slicesCollection';

export { searchMovies } from './search/asyncThunk/searchMovies';
export { searchPerson } from './search/asyncThunk/searchPerson';
export { searchTv } from './search/asyncThunk/searchTv';
export { searchCollection } from './search/asyncThunk/searchCollection';
