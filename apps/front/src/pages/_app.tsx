/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE } from "data/google";
import PageHead from "components/PageHead";
import UserInfo from "components/UserInfo";
import "styles/global.scss";
import styles from "styles/Home.module.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={GOOGLE.CLIENT_ID}>
        <UserInfo>
          <div className={styles.container}>
            <PageHead />
            <Component {...pageProps} />
          </div>
        </UserInfo>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
