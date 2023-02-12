import Image from "next/image";
import styles from "./index.module.scss";

function NewChat() {
  return (
    <div className={styles.container}>
      <Image src="/images/new-icon.png" width={70} height={70} alt="new" />새
      채팅 만들기
    </div>
  );
}

export default NewChat;
