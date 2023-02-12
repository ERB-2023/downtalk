import Image from "next/image";
import styles from "./index.module.scss";

function DefaultHeader() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/downchat-logo.png"
        width={40}
        height={40}
        alt="logo"
      />
      <Image
        src="/images/setting-icon.svg"
        width={20}
        height={20}
        alt="setting"
        className={styles.setting}
      />
    </div>
  );
}

export default DefaultHeader;
