/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";
import PageHead from "components/PageHead";
import "styles/global.scss";
import styles from "styles/Home.module.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <PageHead />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
