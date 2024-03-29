import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import httpClient from 'httpClient';
import applyDefaultInterceptors from 'httpClient/applyDefaultInterceptors';
import { persistor, store } from 'state/store';
import App from 'components/App';
import reportWebVitals from './reportWebVitals';
import 'styles/styles.scss';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const renderApp = (Component: Function) => {
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component />
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  );
};

applyDefaultInterceptors(store, httpClient);
renderApp(App);
