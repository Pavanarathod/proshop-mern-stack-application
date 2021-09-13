import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productDetail } from "../actions/productActions";

const ProductPage = ({ match }) => {
  const { _id } = match.params;
  const dispatch = useDispatch();

  const newProductData = useSelector((state) => state.product);
  const { product, error, loading } = newProductData;

  useEffect(() => {
    dispatch(productDetail(_id));
  }, [_id, dispatch]);

  return (
    <>
      {loading && <h1>loading</h1>}
      {error && <h1>{error.error}</h1>}

      <Link to="/">
        <h1>Go Back</h1>
      </Link>
      <div className="prodcut__detail__container">
        <div>
          <img src={product?.image} alt="" />
        </div>
        <div>
          <h1>{product?.name}</h1>
          <h2>{product?.price}</h2>
          <p>{product?.description}</p>
        </div>
        <div>
          <h1>{product?.price}</h1>
          <p>{product?.countInStock > 0 ? "In Stock" : "Out of Stock"}</p>
          <button>Add To cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
