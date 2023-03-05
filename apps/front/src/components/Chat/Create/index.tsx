import MemberIcon from "components/Common/MemberIcon";
import SearchBar from "components/Common/SearchBar";
import styles from "./index.module.scss";

function Create() {
  return (
    <div className={styles.container}>
      <div>채팅방 만들기</div>
      <div className={styles.wrapper}>
        <SearchBar />
        <div className={styles.members}>
          <MemberIcon name="크리스티나" />
          <MemberIcon name="제이드" />
        </div>
      </div>
    </div>
  );
}

export default Create;
