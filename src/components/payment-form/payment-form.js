import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectUser } from "../../store/user/user.selector";
import Button from "../button/button";
import "./payment-form.styles.scss";
import { setCartItems } from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const user = useSelector(selectUser);
  const [isProcessing, setIsProcessing] = useState(false);
  const dispatch = useDispatch();

  const paymentHandler = async (e) => {
    console.log("hello");
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);
    //  =====Backend payment request ========//
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      headers: {
        "content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());
    console.log(response);

    const {
      paymentIntent: { client_secret },
    } = response;

    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user ? user.displayName : "guest",
        },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        dispatch(setCartItems([]));
        alert("payment Successful");
      }
    }
    setIsProcessing(false);
    elements.getElement(CardElement).clear();
  };

  return (
    <form className="payment-form" onSubmit={paymentHandler}>
      <h4>Card Payment</h4>
      <div className="card-container">
        <CardElement />
      </div>

      <Button buttonType="google" loading={isProcessing}>
        Pay Now
      </Button>
    </form>
  );
};
export default PaymentForm;
