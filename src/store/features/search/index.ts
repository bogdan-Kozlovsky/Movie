export {
  slicesPerson,
  setTotalResultsPerson,
  setTotalPagesPerson,
  setPagePerson,
  setPerson,
} from './slices/slicesPerson';

export {
  slicesMovies,
  setPageMovies,
  setTotalPagesMovies,
  setTotalResultsMovies,
  setMovies,
} from './slices/slicesMovies';

export {
  setTv,
  slicesTv,
  setPageTv,
  setTotalPagesTv,
  setTotalResultsTv,
} from './slices/slicesTv';

export {
  setCollection,
  setPageCollection,
  setTotalPagesCollection,
  setTotalResultsCollection,
  slicesCollection,
} from './slices/slicesCollection';

export {
  slicesCompanies,
  setCompanies,
  setPageCompanies,
  setTotalPagesCompanies,
  setTotalResultsCompanies,
} from './slices/slicesCompanies';

export { searchMovies } from './asyncThunk/searchMovies';
export { searchPerson } from './asyncThunk/searchPerson';
export { searchTv } from './asyncThunk/searchTv';
export { searchCollection } from './asyncThunk/searchCollection';
export { searchCompanies } from './asyncThunk/searchCompanies';
