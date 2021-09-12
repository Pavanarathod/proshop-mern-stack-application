import { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    getProducts();
  }, []);
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
