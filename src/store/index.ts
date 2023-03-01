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

export {
  setCollection,
  setPageCollection,
  setTotalPagesCollection,
  setTotalResultsCollection,
  slicesCollection,
} from './features/search/slices/slicesCollection';

export {
  slicesKeywords,
  setKeywords,
  setPageKeywords,
  setTotalPagesKeywords,
  setTotalResultsKeywords,
} from './features/search/slices/slicesKeywords';

export { searchMovies } from './features/search/asyncThunk/searchMovies';
export { searchPerson } from './features/search/asyncThunk/searchPerson';
export { searchTv } from './features/search/asyncThunk/searchTv';
export { searchCollection } from './features/search/asyncThunk/searchCollection';
export { searchCompanies } from './features/search/asyncThunk/searchCompanies';
export { searchKeywords } from './features/search/asyncThunk/searchKeywords';
