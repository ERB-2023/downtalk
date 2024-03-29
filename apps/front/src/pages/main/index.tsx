import MainComponent from "components/Main";
import { useRouter } from "next/router";

function Main() {
  const { route } = useRouter();
  return <MainComponent currentURL={route} />;
}

export default Main;
