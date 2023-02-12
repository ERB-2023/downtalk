import { useState } from "react";
import styles from "./index.module.scss";

interface TabProps {
  tabs: {
    id: string;
    label: string;
  }[];
  currentTab: string;
  handleTab: (e: React.MouseEvent<HTMLInputElement>) => void;
}
function Tab({ tabs, currentTab, handleTab }: TabProps) {
  return (
    <div className={styles.container}>
      {tabs.map((item) => (
        <div
          key={item.id}
          id={item.id}
          onClick={handleTab}
          className={`${styles.item} ${
            currentTab === item.id ? styles.selected : ""
          }`}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default Tab;
