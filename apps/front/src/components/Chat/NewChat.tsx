import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

function NewChat() {
  const router = useRouter();
  return (
    <div
      className={styles.container}
      onClick={() => router.push("create/chat")}
    >
      <Image src="/images/new-icon.png" width={70} height={70} alt="new" />새
      채팅 만들기
    </div>
  );
}

export default NewChat;
