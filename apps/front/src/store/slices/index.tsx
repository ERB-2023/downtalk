import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer, { login, logout } from "store/slices/userInfo";

export default configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
});

export { userInfoReducer };

export { login, logout };
