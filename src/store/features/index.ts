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

export {
  slicesCompanies,
  setCompanies,
  setPageCompanies,
  setTotalPagesCompanies,
  setTotalResultsCompanies,
} from './search/slices/slicesCompanies';

export {
  slicesKeywords,
  setKeywords,
  setPageKeywords,
  setTotalPagesKeywords,
  setTotalResultsKeywords,
} from './search/slices/slicesKeywords';

export {
  searchKeywords,
  searchCompanies,
  searchCollection,
  searchPerson,
  searchMovies,
  searchTv,
} from './search/asyncThunk';

export { createSessionUser, getToken, logoutAccount } from './authentication';
export { account, setAccount, getAccount } from './account';
export { setIsLoginUser, slicesAuthentication } from './authentication';
export { language, getLanguage, setLanguages, setLanguageValue } from './language';
export { movie, setMovieDetails, movieDetails } from './movie';
export {
  getTrending,
  setMediaType,
  trending,
  setTimeWindow,
  setTrending,
} from './trending';

export { setRandomPosterPath } from './global';

export {
  setPopular,
  popular,
  getPopular,
  setPagePopular,
  setTotalPagesPopular,
} from './popular';

export {
  setNowPlaying,
  setTotalPagesNowPlaying,
  nowPlaying,
  setPageNowPlaying,
  getNowPlaying,
} from './movies';
