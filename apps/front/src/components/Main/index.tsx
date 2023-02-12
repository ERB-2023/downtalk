import { useState } from "react";
import Chat from "components/Chat";
import DefaultHeader from "components/DefaultHeader";
import Friends from "components/Friends";
import styles from "./index.module.scss";
import Tab from "./Tab";

function Main() {
  const CHAT = "chat";
  const FRIEND = "friend";
  const tabs = [
    { id: CHAT, label: "채팅방" },
    { id: FRIEND, label: "친구" },
  ];
  const [currentTab, setCurrentTab] = useState<string>(CHAT);
  const handleTab = (e: React.MouseEvent<HTMLInputElement>) => {
    setCurrentTab(e.currentTarget.id);
  };
  return (
    <div className={styles.container}>
      <DefaultHeader />
      <div className={styles.gap} />
      <Tab tabs={tabs} currentTab={currentTab} handleTab={handleTab} />
      <div className={styles.gap} />
      {currentTab === CHAT && <Chat />}
      {currentTab === FRIEND && <Friends />}
    </div>
  );
}

export default Main;
