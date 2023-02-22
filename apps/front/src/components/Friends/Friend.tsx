import Image from "next/image";
import styles from "./index.module.scss";

interface FriendProps {
  name: string;
}

function Friend({ name }: FriendProps) {
  return (
    <div className={styles.container}>
      <Image
        src="/images/default-profile.png"
        width={70}
        height={70}
        alt={name}
        className={styles.temp_image}
      />
      {name}
    </div>
  );
}

export default Friend;
