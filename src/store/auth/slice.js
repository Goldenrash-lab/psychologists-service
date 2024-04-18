import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    token: "",
    error: "",
  },
  extraReducers: (builder) => {
    // builder.addCase();
  },
});

export const authReducer = authSlice.reducer;
