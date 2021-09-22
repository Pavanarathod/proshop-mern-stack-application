import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingPage = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        address,
        city,
        postalCode,
        country,
      })
    );

    history.push("/payment");
  };

  return (
    <div>
      <h1>Shipping</h1>
      <CheckoutSteps step1 step2 />
      <form onSubmit={submitHandler}>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="address"
          required
        />
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="City"
          required
        />
        <input
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          type="text"
          placeholder="Posttal conde"
          required
        />
        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          type="text"
          placeholder="address"
          required
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default ShippingPage;
