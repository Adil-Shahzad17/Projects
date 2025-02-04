import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const pexelsSlice = createSlice({
  name: "pexels",
  initialState,
  reducers: {
    login: (state, action) => {
      (state.status = true), (state.userData = action.payload.userData);
    },
    logout: (state) => {
      (state.status = false), (state.userData = null);
    },
  },
});

export const { login, logout } = pexelsSlice.actions;

export default pexelsSlice.reducer;
