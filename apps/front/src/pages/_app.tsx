import type { AppProps } from "next/app";
import PageHead from "components/PageHead";
import "styles/global.scss";
import styles from "styles/Home.module.scss";

function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-props-no-spreading
  return (
    <div className={styles.container}>
      <PageHead />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
