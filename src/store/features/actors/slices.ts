import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ActorsType } from './types';

type initialStateType = {
  actors: ActorsType | null;
};

const slices = createSlice({
  name: 'actors',
  initialState: {
    actors: null,
  },
  reducers: {
    setActors(state: initialStateType, action: PayloadAction<ActorsType>) {
      state.actors = action.payload;
    },
  },
});

export const actors = slices.reducer;
export const { setActors } = slices.actions;
