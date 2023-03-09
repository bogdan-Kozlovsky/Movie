import React from 'react';

import { RoutesNavigation } from './routes/RoutesNavigation';
import { Layout } from './views/components';

const App = (): React.ReactElement => {
  return (
    <Layout>
      <RoutesNavigation />
    </Layout>
  );
};

export default App;
