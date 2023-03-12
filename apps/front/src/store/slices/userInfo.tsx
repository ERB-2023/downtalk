import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserInfoState {
  id: string;
  name: string;
}

const initialState: UserInfoState = {};

export const userInfoSlice = createSlice({
  name: "userinfo",
  initialState,
  reducers: {
    login: (state: UserInfoState, action: PayloadAction<string>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    logout: () => {
      return {
        ...initialState,
      };
    },
  },
});

export const { logout, login } = userInfoSlice.actions;
export default userInfoSlice.reducer;
