import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartItemsFromStorage,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      const exists = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (exists) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === exists._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
