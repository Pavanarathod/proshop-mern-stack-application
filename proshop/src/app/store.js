import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import productReducer from "../features/productSlice";
import productDetailReducer from "../features/productDetailSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    product: productDetailReducer,
    cart: cartReducer,
  },
});
