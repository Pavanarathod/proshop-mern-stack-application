import Product from "../components/Product";
import products from "../utils/products";

const Homepage = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <div className="card">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Homepage;
