import React, { useState } from 'react';

import { authenticationApi } from '../../../../api';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { logoutAccount, selectSetIsLoginUser } from '../../../../store';
import { selectAccount } from '../../../../store/features/account/selectors';
import { setIsLoginUser } from '../../../../store/features/authentication/slices';

import styles from './styles.module.scss';

const AvatarMenu = (): React.ReactElement => {
  const account = useAppSelector(selectAccount);
  const isLoginAccount = useAppSelector(selectSetIsLoginUser);

  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const handleInnerClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  // const handleClickOutside = (e: MouseEvent): void => {
  //   if (ref.current && !ref.current.contains(e.target as Node)) {
  //     setIsOpen(false);
  //   }
  // };
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

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  return (
    <div className={styles.avatar}>
      {account && (
        <img
          onClick={handleToggle}
          className={styles.avatar__img}
          src={`https://www.gravatar.com/avatar/${account.avatar.gravatar.hash}`}
          alt="Avatar"
        />
      )}
      {isOpen && (
        <div className={styles.avatar__wrapper} onClick={handleClose}>
          <div onClick={handleInnerClick} className={styles.avatar__content}>
            <span>{account && account.username}</span>
            <hr />
            {isLoginAccount ? (
              <button onClick={onLogoutAccountClick}>logout</button>
            ) : (
              <button onClick={handleAuthentication}>login</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export { AvatarMenu };
