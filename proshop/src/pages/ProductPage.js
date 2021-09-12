import { Link } from "react-router-dom";
import products from "../utils/products";

const ProductPage = ({ match }) => {
  const product = products.find((product) => product._id === match.params.id);

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
          <button>Add To cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
