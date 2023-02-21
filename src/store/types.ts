import { rootReducer } from './rootReducer';
import { store } from './store';

export type RootReducerType = typeof rootReducer;

export type AppRootStateType = ReturnType<RootReducerType>;

export type AppDispatchType = typeof store.dispatch;
