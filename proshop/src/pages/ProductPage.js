import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductPage = ({ match }) => {
  const { _id } = match.params;
  // const product = products.find((product) => product._id === match.params.id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(`/api/products/${_id}`);
      setProduct(data);
    };

    getProducts();
  }, [_id]);

  return (
    <>
      <Link to="/">
        <h1>Go Back</h1>
      </Link>
      <div className="prodcut__detail__container">
        <div>
          <img src={product.image} alt="" />
        </div>
        <div>
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
          <p>{product.description}</p>
        </div>
        <div>
          <h1>{product.price}</h1>
          <p>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</p>
          <button>Add To cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
