import React from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useDispatch';
import { selectTimeWindow } from '../../store/features/trending/selectors';
import { setTimeWindow } from '../../store/features/trending/slices';

import styles from './styles.module.scss';

const Selector = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const timeWindow = useAppSelector(selectTimeWindow);

  const handleSelection = (timeWindow: string): void => {
    dispatch(setTimeWindow(timeWindow));
  };

  return (
    <div className={styles.selector}>
      <div
        className={`${styles.day} ${timeWindow === 'day' ? styles.active : ''}`}
        onClick={() => handleSelection('day')}
      >
        Day
      </div>
      <div
        className={`${styles.week} ${timeWindow === 'week' ? styles.active : ''}`}
        onClick={() => handleSelection('week')}
      >
        Week
      </div>
    </div>
  );
};

export default Selector;
