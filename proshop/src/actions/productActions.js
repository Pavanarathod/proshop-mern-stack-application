import axios from "axios";
import { productDetailActions } from "../features/productDetailSlice";

export const productDetail = (id) => async (dispatch) => {
  try {
    dispatch(productDetailActions.setLoading());
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch(productDetailActions.getProductDetails(data));
  } catch (error) {
    dispatch(
      productDetailActions.setError({
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    );
  }
};
