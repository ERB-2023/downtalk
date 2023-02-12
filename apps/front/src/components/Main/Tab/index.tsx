import { useState } from "react";
import styles from "./index.module.scss";

function Tab() {
  const CHAT = "chat";
  const FRIEND = "friend";
  const tabs = [
    { id: CHAT, label: "채팅방" },
    { id: FRIEND, label: "친구" },
  ];
  const [selectedTab, setSelectedTab] = useState<string>(CHAT);

  const onClickTabItem = (e: React.MouseEvent<HTMLInputElement>) => {
    setSelectedTab(e.currentTarget.id);
  };

  return (
    <div className={styles.container}>
      {tabs.map((item) => (
        <div
          key={item.id}
          id={item.id}
          onClick={onClickTabItem}
          className={`${styles.item} ${
            selectedTab === item.id ? styles.selected : ""
          }`}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default Tab;
