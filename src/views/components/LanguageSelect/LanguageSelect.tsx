import React, { useEffect, useRef, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../hooks';
import { getLanguage, setLanguageValue } from '../../../store';
import {
  selectLanguages,
  selectLanguageValue,
} from '../../../store/features/language/selectors';

import styles from './styles.module.scss';

const LanguageSelect = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const selectedLanguage = useAppSelector(selectLanguageValue);
  const languages = useAppSelector(selectLanguages);

  const [searchValue, setSearchValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const filteredLanguages = languages.filter(({ english_name: englishName, name }) => {
    return (
      englishName.toLowerCase().includes(searchValue.toLowerCase()) ||
      name.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  const handleButtonClick = (): void => {
    setIsOpen(!isOpen);
    if (!isOpen && searchRef.current) {
      searchRef.current.focus();
    }
  };

  const handleOptionClick = (language: string): void => {
    dispatch(setLanguageValue(language));
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(getLanguage(selectedLanguage));
  }, []);

  return (
    <div className={styles.language}>
      <button className={styles.language__button} onClick={handleButtonClick}>
        {selectedLanguage}
      </button>
      <div
        className={`${styles.language__options} ${isOpen ? styles.language__open : ''}`}
      >
        <div className={styles.language__option_search}>
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            ref={searchRef}
            placeholder="Search language"
          />
          <ul className={styles.language__option_list}>
            {filteredLanguages.map(({ english_name: englishName, iso_639_1: value }) => (
              <li
                key={value}
                className={`${styles.language__option} ${
                  value === selectedLanguage ? styles.selected : ''
                }`}
                onClick={() => handleOptionClick(value)}
              >
                {`${englishName} (${value}-${value.toUpperCase()})`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { LanguageSelect };
