import { orderActions } from "../features/orderSlice";
import axios from "axios";
import { orderDetailActions } from "../features/orderDetailSlice";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch(orderActions.setLoading());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/orders`, order, config);

    dispatch(orderActions.createOrder(data));
  } catch (error) {
    dispatch(
      orderActions.setError({
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    );
  }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(orderDetailActions.setLoading());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/${id}`, config);
    dispatch(orderDetailActions.getOrderDetails(data));
  } catch (error) {
    dispatch(
      orderDetailActions.setError({
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    );
  }
};
