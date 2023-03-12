import Image from "next/image";
import styles from "./index.module.scss";

interface MemberRowProps {
  checked?: boolean;
  name: string;
  profile?: string; // 추후에 옵셔널 빼야함
}
function MemberRow({ checked = false, name }: MemberRowProps) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.profile}
        src="/images/default-profile.png"
        width={70}
        height={70}
        alt="profile"
      />
      <p className={styles.name}>{name}</p>
      {checked && (
        <Image
          className={styles.check}
          src="/images/icon-check.svg"
          width={35}
          height={35}
          alt="delete"
        />
      )}
    </div>
  );
}

export default MemberRow;
