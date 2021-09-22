import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const shippingAddressFromStorage = localStorage.getItem("shippingData")
  ? JSON.parse(localStorage.getItem("shippingData"))
  : {};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
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

    remooveItem: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      let newCartItem = [...state.cartItems];

      if (index >= 0) {
        newCartItem.splice(index, 1);
      }

      state.cartItems = newCartItem;
    },

    saveCartData: (state, action) => {
      state.shippingAddress = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
