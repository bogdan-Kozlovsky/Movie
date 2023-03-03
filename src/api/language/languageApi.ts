import { instance } from '../config';

const languageApi = {
  language(languageValue: string) {
    const value = `${languageValue}-${languageValue.toUpperCase()}`;

    return instance.get(`configuration/languages?language=${value}`);
  },
};

export { languageApi };
