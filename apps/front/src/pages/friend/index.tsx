import MainComponent from "components/Main";
import { useRouter } from "next/router";

function MainFriend() {
  const { route } = useRouter();
  return <MainComponent currentURL={route} />;
}

export default MainFriend;
