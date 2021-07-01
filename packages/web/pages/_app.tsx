import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { worker, store } from '@what-is-grass/shared';

if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') {
    worker().start({ onUnhandledRequest: 'bypass' });
  }
}

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default CustomApp;
