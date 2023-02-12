import Chat from "components/Chat";
import DefaultHeader from "components/DefaultHeader";
import styles from "./index.module.scss";
import Tab from "./Tab";

function Main() {
  return (
    <div className={styles.container}>
      <DefaultHeader />
      <div className={styles.gap} />
      <Tab />
      <div className={styles.gap} />
      <Chat />
    </div>
  );
}

export default Main;
