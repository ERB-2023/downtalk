import Link from "next/link";
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
        <Link href={`/${item.id}`} key={item.id}>
          <div
            id={item.id}
            onClick={handleTab}
            className={`${styles.item} ${
              currentTab === item.id ? styles.selected : ""
            }`}
          >
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Tab;
