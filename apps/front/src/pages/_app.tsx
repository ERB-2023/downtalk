import type { AppProps } from "next/app";
import "styles/global.scss";
import styles from "styles/Home.module.scss";

function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-props-no-spreading
  return (
    <div className={styles.container}>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
