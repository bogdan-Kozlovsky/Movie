import { AppRootStateType } from '../../types';

import { ActorsType } from './types';

const selectActors = (state: AppRootStateType): ActorsType | null => state.actors.actors;

export { selectActors };
