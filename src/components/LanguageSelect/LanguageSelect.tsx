import React, { useEffect, useRef, useState } from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useDispatch';
import { getLanguage } from '../../store/features/language/asyncThunk/getLanguage';
import {
  selectLanguages,
  selectLanguageValue,
} from '../../store/features/language/selectors';
import { setLanguageValue } from '../../store/features/language/slices';

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
        </div>
        {filteredLanguages.map(({ english_name: englishName, iso_639_1: value }) => (
          <div
            key={value}
            className={`${styles.language__option} ${
              value === selectedLanguage ? styles.selected : ''
            }`}
            onClick={() => handleOptionClick(value)}
          >
            {`${englishName} (${value}-${value.toUpperCase()})`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelect;
