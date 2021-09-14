import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartPage = ({ match, location, history }) => {
  const { _id } = match.params;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const products = useSelector((state) => state.cart.cartItems);
  console.log(products);
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  console.log(cartItems);

  useEffect(() => {
    if (_id) {
      dispatch(addToCart(_id, qty));
    }
  }, [_id, qty, dispatch]);

  const remooveHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkout = () => {
    history.push("/login?redirect=shippping");
  };

  return (
    <div className="cart">
      <div className="cart__grid">
        {cartItems.map((item) => (
          <div key={item._id} className="cartItems">
            <div>
              <img src={item.image} alt="" className="cartImage" />
            </div>
            <div>
              <h4>{item.name}</h4>
            </div>
            <form>
              <select
                value={item.qty}
                onChange={(e) =>
                  dispatch(addToCart(item._id, Number(e.target.value)))
                }
              >
                {[...Array(item.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </form>
            <div>
              <button onClick={() => remooveHandler(item._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1>
          total items: ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
        </h1>
        <h2>
          Subtotal: (
          {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)})
        </h2>
        <button onClick={checkout}>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
