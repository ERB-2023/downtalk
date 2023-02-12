import Image from "next/image";
import styles from "./index.module.scss";

function Chatting() {
  const chatting = {
    name: "아름다운 채팅",
    count: 40,
  };
  return (
    <div className={styles.container}>
      <Image
        src=""
        width={70}
        height={70}
        alt={chatting.name}
        className={styles.temp_image}
      />
      {chatting.name} ({chatting.count})
    </div>
  );
}

export default Chatting;
