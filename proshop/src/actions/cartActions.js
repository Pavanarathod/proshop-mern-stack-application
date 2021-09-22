import axios from "axios";
import { cartActions } from "../features/cartSlice";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch(
    cartActions.addItem({
      _id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    })
  );

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch(
    cartActions.remooveItem({
      _id: id,
    })
  );

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => async (dispatch) => {
  dispatch(cartActions.saveCartData(data));

  localStorage.setItem("shippingData", JSON.stringify(data));
};
