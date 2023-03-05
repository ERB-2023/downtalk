import Input from "components/Common/Input";
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
      </div>
      {/* 대충 만든 임시 헤더 교체 필요 */}
      <div className={styles.wrapper}>
        <Profile
          size="big"
          editable
          deletable={false}
          className={styles.profile}
        />
        <div className={styles.chat_name}>
          <p>채팅방 이름</p>
          <Input />
        </div>
        <div className={styles.members}>
          <MemberIcon
            name="멤버 추가"
            deletable={false}
            profile="/images/new-icon-big-plus.png"
          />
          <MemberIcon name="크리스티나" />
          <MemberIcon name="제이드" />
        </div>
      </div>
    </div>
  );
}

export default Create;
