import React, { useState } from 'react';

import { Collection } from '../collection/Collection';
import { Companies } from '../companies/Companies';
import { Keywords } from '../keywords/Keywords';
import { Movies } from '../movies/Movies';
import { Person } from '../person/Person';
import { TV } from '../tv/TV';

import styles from './styles.module.scss';
import { TabPropsType, TabsType } from './types';

const Tab = ({ label, isActive, onClick }: TabPropsType): React.ReactElement => {
  return (
    <li>
      <button
        className={isActive ? styles.tab__active : styles.tab__button}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  );
};

const tabs = [
  {
    label: 'Movies',
    content: <Movies />,
  },
  {
    label: 'People',
    content: <Person />,
  },
  {
    label: 'TV Show',
    content: <TV />,
  },
  {
    label: 'Collections',
    content: <Collection />,
  },
  {
    label: 'Companies',
    content: <Companies />,
  },
  {
    label: 'Keywords',
    content: <Keywords />,
  },
  {
    label: 'Networks',
    content: <div>Content for Tab 3</div>,
  },
] as TabsType[];

const Tabs = (): React.ReactElement => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number): void => {
    setActiveTab(index);
  };

  return (
    <div className={styles.tab}>
      <ul className={styles.tab__list_button}>
        {tabs.map((tab, index) => (
          <Tab
            key={tab.label}
            label={tab.label}
            isActive={activeTab === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </ul>
      <div className={styles.tab__content}>{tabs[activeTab].content}</div>
    </div>
  );
};

export { Tabs, Tab };
