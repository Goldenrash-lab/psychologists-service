import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: "",
    error: "",
  },
  reducers: {
    signUp: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    login: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    logout: (state, { payload }) => {
      state.user = null;
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    // builder.addCase();
  },
});

export const authReducer = authSlice.reducer;
export const { signUp, login, logout } = authSlice.actions;
