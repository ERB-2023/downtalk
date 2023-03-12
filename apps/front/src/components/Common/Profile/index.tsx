import Image from "next/image";
import styles from "./index.module.scss";

interface ProfileProps {
  deletable: boolean;
  editable: boolean;
  size?: "small" | "big" | "extra";
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
  const imageSize = {
    small: 43,
    big: 72,
    extra: 100,
  };
  const iconSize = {
    small: 20,
    big: 24,
    extra: 24,
  };
  return (
    <div className={`${styles.container} ${className}`}>
      <Image
        src={profile || "/images/default-profile.png"}
        width={imageSize[size]}
        height={imageSize[size]}
        alt="profile"
      />
      {deletable && (
        <Image
          className={styles.icon}
          src="/images/icon-delete.svg"
          width={iconSize[size]}
          height={iconSize[size]}
          alt="delete"
        />
      )}
      {editable && (
        <Image
          className={styles.icon}
          src="/images/icon-edit.svg"
          width={iconSize[size]}
          height={iconSize[size]}
          alt="delete"
        />
      )}
    </div>
  );
}

export default Profile;
