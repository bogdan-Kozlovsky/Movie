import React, { useEffect } from 'react';

import { InitializingLoader } from './components/InitializingLoader/InitializingLoader';
import Layout from './components/Layout/Layout';
import { useAppSelector } from './hooks/useAppSelector';
import { useAppDispatch } from './hooks/useDispatch';
import { RoutesNav } from './routes/Routes';
import { getToken } from './store/features/authentication/asyncThunk/getToken';
import { selectAppInitialized } from './store/features/global/selectors';

const App = (): React.ReactElement => {
  const initialized = useAppSelector(selectAppInitialized);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getToken());
  }, []);

  // if (!initialized) {
  //   return <InitializingLoader />;
  // }

  return (
    <Layout>
      <RoutesNav />
    </Layout>
  );
};

export default App;
