import { useState } from "react";
import MemberIcon from "components/Common/MemberIcon";
import MemberRow from "components/Common/MemberRow";
import SearchBar from "components/Common/SearchBar";
import SectionHeader from "components/SectionHeader";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

function Create() {
  const router = useRouter();
  const [searchMemberValue, setSearchMemberValue] = useState<string>("");
  return (
    <div className={styles.container}>
      <SectionHeader title="채팅방 만들기" onClickLeft={() => router.back()} />
      {/* TODO: 섹션 헤더에 다음 버튼 추가하기 */}
      <div className={styles.wrapper}>
        <SearchBar
          value={searchMemberValue}
          onChange={(e) => setSearchMemberValue(e.currentTarget.value)}
        />
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
