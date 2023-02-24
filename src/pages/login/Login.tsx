import React, { useState } from 'react';

import { useAppDispatch } from '../../hooks/useDispatch';
import { setLoginUser } from '../../store/features/authentication/asyncThunk/setLoginUser';

import styles from './styles.module.scss';

const Login = (): React.ReactElement => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const requestToken = localStorage.getItem('requestToken');
    const data = { username, password, request_token: requestToken };

    dispatch(setLoginUser(data));
  };

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
