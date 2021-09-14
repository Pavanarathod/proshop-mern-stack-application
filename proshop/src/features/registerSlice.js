import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    userReg: null,
    error: null,
    loading: false,
  },
  reducers: {
    registerUser: (state, action) => {
      state.userReg = action.payload;
      state.loading = false;
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

export const registerAction = registerSlice.actions;

export default registerSlice.reducer;
