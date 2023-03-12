import Lottie from "react-lottie";
import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import animationData from "lottie/main-chatting.json";
import styles from "./index.module.scss";
import * as req from "api";
import { login } from "store";

function Home() {
  const mainChattingOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  const dispatch = useDispatch();
  const [res, setRes] = useState("");

  useEffect(() => {
    if (res) {
      localStorage.setItem("token", res.data.accessToken);
      req
        .getUserInfo()
        .then((res) => res.json())
        .then((json) => dispatch(login(json.data)));
    }
  }, [res]);

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
            const res = req
              .loginByGoogle({
                token: credentialResponse.credential,
              })
              .then((res) => res.json())
              .then((json) => setRes(json));
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
