import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";

const CartPage = ({ match, location, history }) => {
  const { _id } = match.params;
  const products = useSelector((state) => state.cart.cartItems);
  console.log(products);
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (_id) {
      dispatch(addToCart(_id, qty));
    }
  }, [_id, qty, dispatch]);

  return <div></div>;
};

export default CartPage;
