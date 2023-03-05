import MemberIcon from "components/Common/MemberIcon";
import MemberRow from "components/Common/MemberRow";
import Profile from "components/Common/Profile";
import SearchBar from "components/Common/SearchBar";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

function Create() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div>
        <button onClick={() => router.back()}>{`<`}</button>
        채팅방 만들기
        <button>{`>`}</button>
      </div>
      {/* 대충 만든 임시 헤더 교체 필요 */}
      <div className={styles.wrapper}>
        <SearchBar />
        <div className={styles.members}>
          <MemberIcon name="크리스티나" />
          <MemberIcon name="제이드" />
        </div>
      </div>
      <MemberRow name="christina" checked />
      <MemberRow name="christina" />
    </div>
  );
}

export default Create;
