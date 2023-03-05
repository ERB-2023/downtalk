import Image from "next/image";
import styles from "./index.module.scss";

interface ProfileProps {
  deletable: boolean;
  editable: boolean;
  size?: "small" | "big";
  profile?: string; // 추후에 옵셔널 빼야함
  className?: string | undefined;
}
function Profile({
  deletable,
  editable,
  size = "small",
  profile,
  className,
}: ProfileProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Image
        src={profile || "/images/default-profile.png"}
        width={size === "small" ? 43 : 72}
        height={size === "small" ? 43 : 72}
        alt="profile"
      />
      {deletable && (
        <Image
          className={styles.icon}
          src="/images/icon-delete.svg"
          width={size === "small" ? 20 : 24}
          height={size === "small" ? 20 : 24}
          alt="delete"
        />
      )}
      {editable && (
        <Image
          className={styles.icon}
          src="/images/icon-edit.svg"
          width={size === "small" ? 20 : 24}
          height={size === "small" ? 20 : 24}
          alt="delete"
        />
      )}
    </div>
  );
}

export default Profile;
