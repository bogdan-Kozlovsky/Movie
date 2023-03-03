import React from 'react';

import styles from './tab.module.scss';

type TabPropsType = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const Tab = ({ label, isActive, onClick }: TabPropsType): React.ReactElement => {
  return (
    <li>
      <button className={isActive ? styles.active : styles.tab__button} onClick={onClick}>
        {label}
      </button>
    </li>
  );
};

export { Tab };
