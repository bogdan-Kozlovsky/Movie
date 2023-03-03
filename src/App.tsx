import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from './hooks';
import { RoutesNavigation } from './routes/RoutesNavigation';
import { getToken } from './store/features';
import { selectAppInitialized } from './store/features/global/selectors';
import { Container } from './views/components';

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
    <Container>
      <RoutesNavigation />
    </Container>
  );
};

export default App;
