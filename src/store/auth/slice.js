import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
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
  },
  extraReducers: (builder) => {
    // builder.addCase();
  },
});

export const authReducer = authSlice.reducer;
export const { signUp, login } = authSlice.actions;
