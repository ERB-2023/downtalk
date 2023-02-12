import Chat from "components/Chat";
import DefaultHeader from "components/DefaultHeader";
import Friends from "components/Friends";
import styles from "./index.module.scss";
import Tab from "./Tab";

function Main() {
  return (
    <div className={styles.container}>
      <DefaultHeader />
      <div className={styles.gap} />
      <Tab />
      <div className={styles.gap} />
      {/* <Chat /> */}
      <Friends />
    </div>
  );
}

export default Main;
