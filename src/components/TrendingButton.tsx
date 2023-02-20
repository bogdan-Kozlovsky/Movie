import React, { useState, useRef, useEffect } from 'react';

import styles from './styles.module.scss';

const data = [{ value: 'All' }, { value: 'Movie' }, { value: 'TV' }, { value: 'Person' }];

const TrendingButton: React.FC<any> = ({ setValue }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const handleMenuClick = (type: string): void => {
    setValue(type);
    // Do something with the selected type
    setIsOpen(false);
  };

  return (
    <div className={styles.trending__button}>
      <button
        className={styles.trending__button__toggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        Trending
      </button>
      {isOpen &&
        data.map(({ value }) => (
          <button
            key={value}
            className={styles.menu__item}
            onClick={() => handleMenuClick(value.toLowerCase())}
          >
            {value}
          </button>
        ))}
    </div>
  );
};

export default TrendingButton;
