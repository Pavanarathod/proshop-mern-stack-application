import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import productReducer from "../features/productSlice";
import productDetailReducer from "../features/productDetailSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    product: productDetailReducer,
  },
});
