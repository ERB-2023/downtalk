import Lottie from "react-lottie";
import { GoogleLogin } from "@react-oauth/google";
import animationData from "lottie/main-chatting.json";
import styles from "./index.module.scss";
import * as req from "api";

function Home() {
  const mainChattingOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.title}>다운채팅</p>
        <p className={styles.subtitle}>나다운 채팅방을 개설해 보세요!</p>
        <div className={styles.chatting}>
          <Lottie options={mainChattingOptions} height={254} width={254} />
        </div>
      </div>

      <div type="button" className={styles.google}>
        <GoogleLogin
          width="356px"
          onSuccess={(credentialResponse) => {
            const res = req.loginByGoogle(credentialResponse.credential);
            if (res.token) {
              localStorage.setItem("token", res.token);
            }
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
}

export default Home;
