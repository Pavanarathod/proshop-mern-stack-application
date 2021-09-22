import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentPage = ({ history }) => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(savePaymentMethod(paymentMethod));

    history.push("/placeorder");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3 />

      <form onSubmit={submitHandler}>
        <h1>Select payment</h1>
        <input
          type="radio"
          value="PayPal"
          name="paymentmethond"
          checked
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <button>Placeorder</button>
      </form>
    </div>
  );
};

export default PaymentPage;
