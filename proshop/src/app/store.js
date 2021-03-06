import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import productReducer from "../features/productSlice";
import productDetailReducer from "../features/productDetailSlice";
import cartReducer from "../features/cartSlice";
import userReducer from "../features/userSlice";
import registerReducer from "../features/registerSlice";
import ProfileReducer from "../features/profileSlice";
import updateProfileReducer from "../features/updateProfileSlice";
import createOrderReducer from "../features/orderSlice";
import orderDetailReducer from "../features/orderDetailSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    product: productDetailReducer,
    cart: cartReducer,
    user: userReducer,
    register: registerReducer,
    profile: ProfileReducer,
    updateProfile: updateProfileReducer,
    orders: createOrderReducer,
    orderDetails: orderDetailReducer,
  },
});
