import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useDispatch';
import { getToken, setLoginUser } from '../../store/features';
import { selectSetIsLoginUser } from '../../store/features/authentication/selectors';
import { PATHS } from '../../utils/enum';

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

  useEffect(() => {
    dispatch(getToken());
  }, []);

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
