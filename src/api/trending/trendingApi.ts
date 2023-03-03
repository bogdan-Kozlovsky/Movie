import { instance } from '../config';

const trendingApi = {
  trending(mediaType: string, timeWindow: string, languageValue: string) {
    const value = `${languageValue}-${languageValue.toUpperCase()}`;

    return instance.get(`trending/${mediaType}/${timeWindow}?language=${value}`);
  },
};

export { trendingApi };
