import { instance } from '../config';

const trendingApi = {
  trending(mediaType: string, timeWindow: string, languageValue: string | null) {
    const value = languageValue
      ? `${languageValue}-${languageValue!.toUpperCase()}`
      : `en-US`;

    return instance.get(`trending/${mediaType}/${timeWindow}?language=${value}`);
  },
};

export { trendingApi };
