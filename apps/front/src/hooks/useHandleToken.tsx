import { useDispatch } from "react-redux";
import { login, logout } from "store";
import { getUserInfo } from "api";

export function useHandleToken() {
  const dispatch = useDispatch();

  const handleLoginByToken = async () => {
    let token = localStorage.getItem("token");

    if (token) {
      try {
        const res = await getUserInfo();
        dispatch(login(res.data));
      } catch (err) {
        dispatch(logout());
      }
    } else {
      dispatch(logout());
    }
  };

  return { handleLoginByToken };
}
