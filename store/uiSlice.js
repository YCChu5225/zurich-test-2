import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    isLoginHandler(state) {
      state.isLogin = !state.isLogin;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
