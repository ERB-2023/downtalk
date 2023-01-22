import type { AppProps } from 'next/app';
import 'styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default App;
