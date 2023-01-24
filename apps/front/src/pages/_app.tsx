import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "styles/global.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
};

export default App;
