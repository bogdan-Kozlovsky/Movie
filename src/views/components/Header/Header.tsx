import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../../../assets/icon/logo.svg';
import { PATHS } from '../../../enums';
import { LanguageSelect } from '../LanguageSelect';

import { AvatarMenu } from './AvatarMenu';
import DropdownMenu from './dropdownMenu/DropdownMenu';
import styles from './styles.module.scss';

const Header = (): React.ReactElement => {
  const dropdownItemsMovie = [
    { label: 'Популярні', path: PATHS.POPULAR },
    { label: 'Зараз у ефірі', path: '#' },
    { label: 'Очікувані', path: '#' },
    { label: 'Рейтингові', path: '#' },
  ];

  const dropdownItemsSerials = [
    { label: 'Популярні', path: '#' },
    { label: 'Сьогодні у ефірі', path: '#' },
    { label: 'Зараз по телевізору', path: '#' },
    { label: 'Рейтингові', path: '#' },
  ];

  const dropdownItemsPerson = [{ label: 'Популярні', path: '#' }];

  return (
    <div className={styles.header}>
      <div>
        <div className="container">
          <div className={styles.header__wrapper}>
            <div className={styles.header__wrapper_navigate}>
              <NavLink to={PATHS.HOME}>
                <img className={styles.header__logo} src={logo} alt="Logo" />
              </NavLink>
              <ul className={styles.dropdown__list}>
                <DropdownMenu buttonText="Фільми" items={dropdownItemsMovie} />

                <DropdownMenu buttonText="Серіали" items={dropdownItemsSerials} />

                <DropdownMenu buttonText="Персони" items={dropdownItemsPerson} />
              </ul>
            </div>
            <div className={styles.header__wrapper_right}>
              <LanguageSelect />

              <AvatarMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
