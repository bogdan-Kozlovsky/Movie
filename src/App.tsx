import React from 'react';

import { RoutesNavigation } from './routes/RoutesNavigation';
import { Container } from './views/components';

const App = (): React.ReactElement => {
  return (
    <Container>
      <RoutesNavigation />
    </Container>
  );
};

export default App;
