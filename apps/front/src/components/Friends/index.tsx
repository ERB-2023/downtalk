import Friend from "./Friend";
import NewFriend from "./NewFriend";

function Chat() {
  return (
    <>
      <NewFriend />
      <Friend name="크리스티나" />
      <Friend name="제이드" />
      <Friend name="홈즈" />
      <Friend name="해피" />
    </>
  );
}

export default Chat;
