import Image from "next/image";
import styles from "./index.module.scss";

function Chatting() {
  const chatting = {
    name: "아름다운 채팅",
    count: 40,
  };
  return (
    <div className={styles.container}>
      <div className={styles.temp_image} />
      {/* TODO: 이미지 컴포넌트로 교체 */}
      {chatting.name} ({chatting.count})
    </div>
  );
}

export default Chatting;
