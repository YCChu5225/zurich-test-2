import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isLoginUser: {},
  userLists: null,
  isLoading: false,
  filteredUserLists: null,
  selectedName: null,
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
    userListHandler(state, actions) {
      state.userLists = actions.payload;
    },
    loadingHandler(state) {
      state.isLoading = !state.isLoading;
    },
    filterByName(state, actions) {
      state.selectedName === actions.payload
        ? (state.selectedName = initialState.selectedName)
        : (state.selectedName = actions.payload);
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
