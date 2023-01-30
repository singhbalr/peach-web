import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '../redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>
  </Provider>
);

export default MyApp;
