import { GoogleLogin } from "@react-oauth/google";
import { Button } from "ui";
import styles from "styles/Home.module.scss";

export default function Web() {
  return (
    <div>
      <h1 className={styles.test}>Web</h1>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <Button />
    </div>
  );
}
