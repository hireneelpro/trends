import {
    CardElement, useStripe, useElements
} from "@stripe/react-stripe-js";
import Button from "../button/button";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()


    const paymentHandler = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        //  =====Backend payment request ========//
        const response = await fetch('/.netlify/functions/create-payment-intent.js', {
            method: 'post',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: 10000 })
        }).then(res => res.json())
        console.log(response);
        const { paymentIntent: { client_secret } } = response;

        console.log(client_secret)

        const paymentResult = await stripe.confirmCardPayment(client_secret,
            {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: 'Hiren Patel'
                    }
                }
            })
        if (paymentResult.error) {
            alert(paymentResult.error)
        }
        else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('payment Successful')
            }
        }
    }




return (
    <PaymentFormContainer>
        <FormContainer onSubmit={paymentHandler}>
            <h4>Card Payment:</h4>
            <CardElement />
            <Button buttonType='inverted'>Pay Now</Button>
        </FormContainer>
    </PaymentFormContainer>

)

}
export default PaymentForm