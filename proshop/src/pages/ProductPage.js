import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productDetail } from "../actions/productActions";

const ProductPage = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const { _id } = match.params;
  const dispatch = useDispatch();
  const newProductData = useSelector((state) => state.product);

  const { product, error, loading } = newProductData;

  useEffect(() => {
    dispatch(productDetail(_id));
  }, [_id, dispatch]);

  const addToCart = () => {
    history.push(`/cart/${_id}?qty=${qty}`);
  };

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
          {product.countInStock > 0 && (
            <form>
              <p>Quantity</p>

              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </form>
          )}
          <button
            onClick={addToCart}
            style={{
              padding: "10px 15px",
              backgroundColor: "black",
              color: "white",
              marginTop: "10px",
            }}
          >
            Add To cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
