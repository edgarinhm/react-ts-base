import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { useSession } from 'hooks';
import RouteFromPath from 'components/Routes/RouteFromPath';
import routes from '../routes';

const App = () => {
  const { authenticated } = useSession();

  return (
    <>
      <Helmet>
        <title>React Base</title>
      </Helmet>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
            <RouteFromPath key={`route${index}`} {...route} authenticated={authenticated} />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
