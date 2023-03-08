import React from 'react';

import { authenticationApi } from '../../../api';
import logo from '../../../assets/icon/logo.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { logoutAccount, selectSetIsLoginUser } from '../../../store';
import { setIsLoginUser } from '../../../store/features/authentication/slices';

import DropdownMenu from './dropdownMenu/DropdownMenu';
import styles from './styles.module.scss';

const Header = (): React.ReactElement => {
  const isLoginAccount = useAppSelector(selectSetIsLoginUser);

  const dispatch = useAppDispatch();

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

  const onLogoutAccountClick = (): void => {
    const sessionId = localStorage.getItem('session_id');

    if (sessionId) {
      dispatch(logoutAccount(sessionId));
      dispatch(setIsLoginUser(false));
    }
  };

  const getRequestToken = async (): Promise<void> => {
    const response = await authenticationApi.fetchToken();

    localStorage.setItem('token', response.data.request_token);

    return response.data.request_token;
  };

  const handleAuthentication = async (): Promise<void> => {
    try {
      const requestToken = await getRequestToken();

      window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000`;
    } catch (error) {
      console.error(error);
    }
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
            {isLoginAccount ? (
              <button onClick={onLogoutAccountClick}>logout</button>
            ) : (
              <button onClick={handleAuthentication}>login</button>
            )}
          </div>
          {/* <LanguageSelect /> */}
        </div>
      </div>
    </div>
  );
};

export { Header };
