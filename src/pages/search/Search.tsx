import React from 'react';

import { Tabs } from './components/tabs/Tabs';
import styles from './styles.module.scss';

const Search = (): React.ReactElement => {
  return (
    <section className={styles.search}>
      <Tabs />
    </section>
  );
};

export { Search };
