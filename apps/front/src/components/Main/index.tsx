import { useEffect, useState } from "react";
import Chat from "components/Chat";
import DefaultHeader from "components/DefaultHeader";
import Friends from "components/Friends";
import Tab from "./components/Tab";
import { CHAT, FRIEND, tabs } from "./data";
import styles from "./index.module.scss";

interface MainProps {
  currentURL: string;
}

function Main({ currentURL }: MainProps) {
  const [currentTab, setCurrentTab] = useState<string>(CHAT);
  const handleTab = (e: React.MouseEvent<HTMLInputElement>) => {
    setCurrentTab(e.currentTarget.id);
  };

  useEffect(() => {
    if (currentURL) {
      const urlArray = currentURL.split("/");
      const url = urlArray[urlArray.length - 1];
      setCurrentTab(url);
    }
  }, [currentURL]);

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
