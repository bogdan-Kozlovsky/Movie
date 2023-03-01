import {
  RootCollectionType,
  RootCompaniesType,
  RootMoviesType,
  RootPersonType,
  RootTvType,
} from '../../../store/features/search/types';
import { instance } from '../config';

export const searchApi = {
  movies(query: string | null, page: number) {
    return instance.get<RootMoviesType>(`search/movie?query=${query}&page=${page}`);
  },
  collection(query: string | null, page: number) {
    return instance.get<RootCollectionType>(
      `search/collection?query=${query}&page=${page}`,
    );
  },
  keyword(query: string | null, page: number) {
    return instance.get(`search/keyword?query=${query}&page=${page}`);
  },
  company(query: string | null, page: number) {
    return instance.get<RootCompaniesType>(`search/company?query=${query}&page=${page}`);
  },
  person(query: string | null, page: number) {
    return instance.get<RootPersonType>(`search/person?query=${query}&page=${page}`);
  },
  tv(query: string | null, page: number) {
    return instance.get<RootTvType>(`search/tv?query=${query}&page=${page}`);
  },
};
