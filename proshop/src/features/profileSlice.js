import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
    error: null,
    loading: false,
  },
  reducers: {
    setUserProfile: (state, action) => {
      state.profile = action.payload;
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

export const prfileActions = profileSlice.actions;
export default profileSlice.reducer;
