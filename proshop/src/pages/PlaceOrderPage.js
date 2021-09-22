import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { createOrder } from "../actions/orderActions";
import { useEffect } from "react";

const PlaceOrderPage = ({ history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const orderCreate = useSelector((state) => state.orders);

  const { orders, success, error, loading } = orderCreate;
  console.log(orders);

  const placeOrder = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod || "PayPal",
        itemsPrice: 500,
        shippingPrice: 1000,
        taxPrice: 1000,
        totalPrice: 5000,
      })
    );
  };

  useEffect(() => {
    if (success) {
      history.push(`/orders/${orders._id}`);
    }
  }, [history, success, orders]);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />

      <h2>Shipping</h2>
      <h4>
        Address : {cart.shippingAddress.address} ,{cart.shippingAddress.country}
      </h4>

      <h1>Payment Method</h1>

      <p>Paypal</p>

      <button onClick={placeOrder}>PlaceOrder</button>
    </div>
  );
};

export default PlaceOrderPage;
