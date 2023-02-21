import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { AppRootStateType } from '../store/types';

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
