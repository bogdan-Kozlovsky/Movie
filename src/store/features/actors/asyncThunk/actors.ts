import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { actorsApi } from '../../../../api/actors/actorsApi';
import { setActors } from '../slices';

export const getActorsByMovieId = createAsyncThunk(
  'actors',
  async (movieId: number | undefined, { dispatch }) => {
    const response: AxiosResponse<any> = await actorsApi.actorsByMovieId(movieId);

    if (response.status >= 200 && response.status < 300) {
      dispatch(setActors(response.data));
    }
  },
);
