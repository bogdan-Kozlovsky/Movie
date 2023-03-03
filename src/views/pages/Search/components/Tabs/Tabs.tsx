import React, { useState } from 'react';

import { Movies, Person, TV, Collection, Companies, Keywords } from '..';
import { Tab } from '../../../../components';

import styles from './styles.module.scss';
import { TabsType } from './types';

const tabs = [
  {
    label: 'Movies',
    content: <Movies />,
  },
  {
    label: 'People',
    content: <Person />,
  },
  // {
  //   label: 'TV Show',
  //   content: <TV />,
  // },
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

export { Tabs };
