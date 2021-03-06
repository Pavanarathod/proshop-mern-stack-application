import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt="" className="cart__image" />
      </Link>
      <div>
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default Product;
