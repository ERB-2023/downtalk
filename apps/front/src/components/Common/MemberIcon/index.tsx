import Image from "next/image";
import Profile from "../Profile";
import styles from "./index.module.scss";

interface MemberIconProps {
  deletable?: boolean;
  name: string;
  profile?: string; // 추후에 옵셔널 빼야함
}
function MemberIcon({ deletable = true, name }: MemberIconProps) {
  return (
    <div className={styles.container}>
      <Profile deletable={deletable} />
      <p className={styles.name}>{name}</p>
    </div>
  );
}

export default MemberIcon;
