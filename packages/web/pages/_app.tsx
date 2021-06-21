import App from 'next/app';
import { worker } from '@what-is-grass/shared';

if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') {
    worker().start({ onUnhandledRequest: 'bypass' });
  }
}

export default App;
