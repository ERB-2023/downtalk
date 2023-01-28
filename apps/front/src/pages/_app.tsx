/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PageHead from "components/PageHead";
import "styles/global.scss";
import styles from "styles/Home.module.scss";

function App({ Component, pageProps }: AppProps) {
  return (
     <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
      <div className={styles.container}>
        <PageHead />
        <Component {...pageProps} />
      </div>
     </GoogleOAuthProvider>
  );
}

export default App;
