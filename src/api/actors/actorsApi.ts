import { instance } from '../config';

const actorsApi = {
  popular(languageValue: string | null) {
    return instance.get(`movie//credits?language=${languageValue}`);
  },
  actorsByMovieId(movieId: number | undefined) {
    return instance.get(`movie/${movieId}/credits`);
  },
};

export { actorsApi };
