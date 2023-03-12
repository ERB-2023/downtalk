import { useState } from "react";
import { getUserByEmailOrNickname } from "api";
import Button from "components/Common/Button";
import Profile from "components/Common/Profile";
import SearchBar from "components/Common/SearchBar";
import SectionHeader from "components/SectionHeader";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

interface UserResult {
  id: number;
  name: string;
  email: string;
  profile: string | null;
}

function Add() {
  const router = useRouter();
  const [searchMemberValue, setSearchMemberValue] = useState<string>("");
  const [userResult, setUserResult] = useState<UserResult | null | undefined>(
    undefined
  );
  const onClickSearch = async () => {
    const response = await getUserByEmailOrNickname(searchMemberValue);
    const userData = await response.json();
    setUserResult(userData.data);
  };

  return (
    <div className={styles.container}>
      <SectionHeader title="친구 추가" onClickLeft={() => router.back()} />
      <div className={styles.wrapper}>
        <p>이메일</p>
        <SearchBar
          value={searchMemberValue}
          onChange={(e) => setSearchMemberValue(e.currentTarget.value)}
          onSearchClick={onClickSearch}
        />
        {userResult && (
          <div className={styles.profile}>
            <Profile
              deletable={false}
              editable={false}
              size="extra"
              profile={userResult.profile}
            />
            <p>{userResult.name}</p>
          </div>
        )}
        {userResult === null && (
          <p className={styles.no_user}>사용자를 찾을 수 없습니다.</p>
        )}
      </div>
      <Button disabled={!userResult} onClick={() => console.log(userResult)}>
        추가
      </Button>
    </div>
  );
}

export default Add;
