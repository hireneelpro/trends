import { Fragment } from "react";
import "./checkout-heading.scss"
const CheckOutHeading = () => {
  return (
    <Fragment>
      <span>Product</span>
      <span>Description</span>
      <span>Quantity</span>
      <span>Price</span>
      <span>Remove</span>
    </Fragment>
  );
};

export default CheckOutHeading;
