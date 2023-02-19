import Image from "next/image";
import { settingsList } from "data/settingsList";
import styles from "./index.module.scss";

function Settings() {
  return (
    <div className={styles.content}>
      <div className={styles.title_section}>
        <p>환경 설정</p>
      </div>
      <div className={styles.options_list}>
        <div className={styles.options_line}>
          <p className={styles.options_subtitle}>계정</p>
        </div>
        {settingsList.map((option) => (
          <div key={option.id} className={styles.options_line}>
            <p>{option.title}</p>
            <Image
              src="/images/right_icon.svg"
              alt="right_icon"
              width={16}
              height={22}
              className={styles.options_icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Settings;
