import Image from "next/image";
import styles from "./index.module.scss";

interface MemberIconProps {
  deletable?: boolean;
  name: string;
  profile?: string; // 추후에 옵셔널 빼야함
}
function MemberIcon({ deletable = true, name }: MemberIconProps) {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <Image
          src="/images/default-profile.png"
          width={43}
          height={43}
          alt="profile"
        />
        {deletable && (
          <Image
            className={styles.delete}
            src="/images/icon-delete.svg"
            width={20}
            height={20}
            alt="delete"
          />
        )}
      </div>
      <p className={styles.name}>{name}</p>
    </div>
  );
}

export default MemberIcon;
