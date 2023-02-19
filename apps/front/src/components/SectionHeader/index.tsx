import Image from "next/image";
import styles from "./index.module.scss";

type sectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: sectionHeaderProps) => {
  return (
    <div className={styles.content}>
      <Image
        src="/images/left_icon.svg"
        alt="left_icon"
        width={16}
        height={22}
        className={styles.options_icon}
      />
      <p>{title}</p>
    </div>
  );
};

export default SectionHeader;
