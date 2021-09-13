import { createSlice } from "@reduxjs/toolkit";

const productDetailSlice = createSlice({
  name: "productInfo",
  initialState: {
    product: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProductDetails: (state, action) => {
      state.product = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const productDetailActions = productDetailSlice.actions;

export default productDetailSlice.reducer;
