import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: {},
    error: null,
    loading: false,
    success: false,
  },
  reducers: {
    createOrder: (state, action) => {
      state.loading = false;
      state.success = true;
      state.orders = action.payload;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
