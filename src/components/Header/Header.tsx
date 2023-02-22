import React, { useState } from 'react';

import LanguageSelect from '../LanguageSelect/LanguageSelect';

import styles from './styles.module.scss';

const Header = (): React.ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.header}>
      <div>
        <div className="container">
          <button className={styles.button} onClick={handleClick}>
            open
          </button>
        </div>
        <LanguageSelect />

        <div className={`${styles.block} ${isVisible ? styles.visible : ''}`}>
          <div className="container">
            <input type="text" placeholder="Пошук..." />
            <button>Пошук</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
