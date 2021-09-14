import { createSlice } from "@reduxjs/toolkit";

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: userInfo,
    error: null,
    loading: false,
  },
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.userInfo = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = true;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
