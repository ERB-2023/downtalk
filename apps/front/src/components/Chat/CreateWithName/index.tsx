import { useState } from "react";
import Button from "components/Common/Button";
import Input from "components/Common/Input";
import MemberIcon from "components/Common/MemberIcon";
import Profile from "components/Common/Profile";
import SectionHeader from "components/SectionHeader";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

function Create() {
  const router = useRouter();
  const [chatName, setChatName] = useState<string>("");
  return (
    <div className={styles.container}>
      <SectionHeader title="채팅방 만들기" onClickLeft={() => router.back()} />
      <div className={styles.wrapper}>
        <Profile
          size="big"
          editable
          deletable={false}
          className={styles.profile}
        />
        <div className={styles.chat_name}>
          <p className={styles.label}>채팅방 이름</p>
          <Input
            length={chatName?.length}
            value={chatName}
            onChange={(e) => setChatName(e.currentTarget.value)}
            maxLength={16}
          />
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
      <Button disabled={false} onClick={() => console.log(chatName)}>
        완료
      </Button>
    </div>
  );
}

export default Create;
