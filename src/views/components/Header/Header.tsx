import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../../../assets/icon/logo.svg';

import styles from './styles.module.scss';

const Header = (): React.ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

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

  const handleClick = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.header}>
      <div>
        <div className="container">
          <div className={styles.header__wrapper}>
            <img className={styles.header__logo} src={logo} alt="Logo" />

            {/* <ul className={styles.dropdown__list}> */}
            {/* <DropdownMenu */}
            {/*  buttonText="Фільми" */}
            {/*  items={dropdownItemsMovie} */}
            {/*  onItemClick={handleItemMovie} */}
            {/* /> */}

            {/* <DropdownMenu */}
            {/*  buttonText="Серіали" */}
            {/*  items={dropdownItemsSerials} */}
            {/*  onItemClick={handleItemSerials} */}
            {/* /> */}

            {/* <DropdownMenu */}
            {/*  buttonText="Персони" */}
            {/*  items={dropdownItemsPerson} */}
            {/*  onItemClick={handleItemPerson} */}
            {/* /> */}
            {/* </ul> */}
          </div>
          {/* <LanguageSelect /> */}

          <ul>
            <li>
              <NavLink to="/">Login</NavLink>
            </li>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
          </ul>

          {/* search isVisible */}
          {/* <div> */}
          {/*  <button className={styles.button} onClick={handleClick}> */}
          {/*    open */}
          {/*  </button> */}

          {/*  <div className={`${styles.block} ${isVisible ? styles.visible : ''}`}> */}
          {/*    <div className="container"> */}
          {/*      <input type="text" placeholder="Пошук..." /> */}
          {/*      <button>Пошук</button> */}
          {/*    </div> */}
          {/*  </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export { Header };
