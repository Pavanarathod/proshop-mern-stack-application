import { Link } from "react-router-dom";
const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <nav>
      <ul>
        <li>
          {step1 ? <Link to="/login">Signin</Link> : <a href="#">Sign IN</a>}
        </li>
        <li>
          {step2 ? (
            <Link to="/shipping">Shipping</Link>
          ) : (
            <a href="#">Shipping</a>
          )}
        </li>
        <li>
          {step1 ? <Link to="/payment">Payment</Link> : <a href="#">Payment</a>}
        </li>
        <li>
          {step1 ? (
            <Link to="/placeorder">Placeorder</Link>
          ) : (
            <a href="#">Placeorder</a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default CheckoutSteps;
