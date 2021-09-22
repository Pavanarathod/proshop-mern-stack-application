import { createSlice } from "@reduxjs/toolkit";

const orderDetailSlice = createSlice({
  name: "orderInfo",
  initialState: {
    orders: {
      orderItems: [],
      shippingAddress: [],
    },
    loading: false,
    error: null,
  },
  reducers: {
    getOrderDetails: (state, action) => {
      state.orders = action.payload;
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

export const orderDetailActions = orderDetailSlice.actions;

export default orderDetailSlice.reducer;
