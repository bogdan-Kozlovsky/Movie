import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { PATHS } from '../../../enums';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { selectSetIsLoginUser, setLoginUser } from '../../../store';

import styles from './styles.module.scss';

const Login = (): React.ReactElement => {
  const [username, setUsername] = useState('Bogdan_Frontend');
  const [password, setPassword] = useState('Bogdan04Bogdan');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLoginUser = useAppSelector(selectSetIsLoginUser);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const requestToken = localStorage.getItem('requestToken');
    const data = { username, password, request_token: requestToken };

    dispatch(setLoginUser(data));
  };

  if (isLoginUser) {
    navigate(PATHS.HOME);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export { Login };
