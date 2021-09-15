import { createSlice } from "@reduxjs/toolkit";

const updateProfileSlice = createSlice({
  name: "profileUpdate",
  initialState: {
    updateProfile: {},
    error: null,
    loading: false,
    success: false,
  },
  reducers: {
    setUserProfile: (state, action) => {
      state.updateProfile = action.payload;
      state.loading = false;
      state.success = true;
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.success = false;
    },

    setLoading: (state) => {
      state.loading = true;
      state.success = false;
    },
  },
});

export const updateActions = updateProfileSlice.actions;

export default updateProfileSlice.reducer;
