import React from 'react';

import preloader from '../../../../assets/icon/preloader.svg';

import s from './Initializing.module.scss';

export const InitializingLoader = (): React.ReactElement => (
  <div className={s.loader}>
    <img className={s.preloader} src={preloader} alt="preloader" />
  </div>
);
