import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginUser: {},
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    isLoginHandler(state, actions) {
      if (actions.payload === "LOGOUT") {
        state.isLoginUser = initialState.isLoginUser;
      }
      state.isLoginUser = actions.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
