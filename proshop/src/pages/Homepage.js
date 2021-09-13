import { useEffect } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { gettingAllProducts } from "../features/productSlice";

const Homepage = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products);
  console.log(productData);
  const { error, loading, products } = productData;

  useEffect(() => {
    dispatch(gettingAllProducts());
  }, [dispatch]);
  return (
    <>
      <h1>Latest Products</h1>
      {loading && <h1>Loading.....</h1>}
      {error && <h1>{error.error}</h1>}
      <div className="card">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Homepage;
