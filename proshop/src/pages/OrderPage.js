import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getOrderDetails } from "../actions/orderActions";

const OrderPage = ({ match }) => {
  const dispatch = useDispatch();
  const orderDetailsData = useSelector((state) => state.orderDetails);
  const { orders, loading, error } = orderDetailsData;
  console.log(orders);

  useEffect(() => {
    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, match.params.id]);
  return <div></div>;
};

export default OrderPage;
