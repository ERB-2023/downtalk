import { useEffect } from "react";
import { useHandleToken } from "hooks";

const UserInfo = (props: any) => {
  const { handleLoginByToken } = useHandleToken();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      handleLoginByToken();
    }
  }, []);

  return props.children;
};

export default UserInfo;
