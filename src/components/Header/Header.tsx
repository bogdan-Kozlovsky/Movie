import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import LanguageSelect from '../LanguageSelect/LanguageSelect';

import styles from './styles.module.scss';

const Header = (): React.ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (): void => {
    setIsVisible(!isVisible);
  };

  const activeStyle = {
    textDecoration: 'underline',
  };
  const activeClassName = 'underline';

  return (
    <div className={styles.header}>
      <div>
        <div className="container">
          <button className={styles.button} onClick={handleClick}>
            open
          </button>
        </div>
        <LanguageSelect />

        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Login
            </NavLink>
          </li>
          {/* <li> */}
          {/*  <NavLink */}
          {/*    to="/home" */}
          {/*    className={({ isActive }) => (isActive ? activeClassName : undefined)} */}
          {/*  > */}
          {/*    Home */}
          {/*  </NavLink> */}
          {/* </li> */}
        </ul>

        {/* <div className={`${styles.block} ${isVisible ? styles.visible : ''}`}> */}
        {/*  <div className="container"> */}
        {/*    <input type="text" placeholder="Пошук..." /> */}
        {/*    <button>Пошук</button> */}
        {/*  </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Header;
