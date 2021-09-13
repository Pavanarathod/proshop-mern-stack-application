import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const productsDataList = axios.get("/api/products");
      const { data } = await productsDataList;

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
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
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.error;

      state.loading = false;
    });
  },
});

export const { getProducts, setLoading, setError } = productSlice.actions;

export const gettingAllProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading());

    const { data } = await axios.get("/api/products");

    dispatch(getProducts(data));
  } catch (error) {
    dispatch(
      setError({
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    );
  }
};

export default productSlice.reducer;
