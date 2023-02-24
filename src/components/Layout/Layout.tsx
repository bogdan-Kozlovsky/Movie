import React, { ReactElement } from 'react';

import Header from '../Header/Header';

import styles from './styles.module.scss';

type ContainerProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ContainerProps): ReactElement => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>{children}</main>
  </div>
);

export default Layout;
