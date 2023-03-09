import { instance } from '../config';

const languageApi = {
  language(languageValue: string | null) {
    const value = languageValue
      ? `${languageValue}-${languageValue!.toUpperCase()}`
      : `en-US`;

    return instance.get(`configuration/languages?language=${value}`);
  },
};

export { languageApi };
