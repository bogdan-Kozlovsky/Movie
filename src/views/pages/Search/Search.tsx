import React from 'react';

import { Tabs } from './components';
import styles from './styles.module.scss';

const Search = (): React.ReactElement => {
  return (
    <section className={styles.search}>
      <div className="container">
        <Tabs />
      </div>
    </section>
  );
};

export { Search };
