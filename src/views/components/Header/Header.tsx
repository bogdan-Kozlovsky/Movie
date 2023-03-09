import React from 'react';

import logo from '../../../assets/icon/logo.svg';
import { LanguageSelect } from '../LanguageSelect';

import { AvatarMenu } from './AvatarMenu';
import DropdownMenu from './dropdownMenu/DropdownMenu';
import styles from './styles.module.scss';

const Header = (): React.ReactElement => {
  const dropdownItemsMovie = [
    { label: 'Популярні', value: '#' },
    { label: 'Зараз у ефірі', value: '#' },
    { label: 'Очікувані', value: '#' },
    { label: 'Рейтингові', value: '#' },
  ];

  const dropdownItemsSerials = [
    { label: 'Популярні', value: '#' },
    { label: 'Сьогодні у ефірі', value: '#' },
    { label: 'Зараз по телевізору', value: '#' },
    { label: 'Рейтингові', value: '#' },
  ];

  const dropdownItemsPerson = [{ label: 'Популярні', value: '#' }];

  const handleItemMovie = (link: string): void => {
    console.log(`Link clicked: ${link}`);
  };

  const handleItemSerials = (link: string): void => {
    console.log(`Link clicked: ${link}`);
  };

  const handleItemPerson = (link: string): void => {
    console.log(`Link clicked: ${link}`);
  };

  return (
    <div className={styles.header}>
      <div>
        <div className="container">
          <div className={styles.header__wrapper}>
            <div className={styles.header__wrapper_navigate}>
              <img className={styles.header__logo} src={logo} alt="Logo" />

              <ul className={styles.dropdown__list}>
                <DropdownMenu
                  buttonText="Фільми"
                  items={dropdownItemsMovie}
                  onItemClick={handleItemMovie}
                />

                <DropdownMenu
                  buttonText="Серіали"
                  items={dropdownItemsSerials}
                  onItemClick={handleItemSerials}
                />

                <DropdownMenu
                  buttonText="Персони"
                  items={dropdownItemsPerson}
                  onItemClick={handleItemPerson}
                />
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
