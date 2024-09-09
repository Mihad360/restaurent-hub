import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../hooks/useCart";
import useAxiossecure from "../hooks/useAxiossecure";

const Paymentform = () => {

  const [error, setError] = useState("");
  const [clientSecret, setClientsecret] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiossecure()
  const [cart] = useCart();
  const totalprice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(()=>{
    axiosSecure.post('/create-payment-intent', {price: totalprice})
    .then(res => {
      console.log(res.data.clientSecret)
      setClientsecret(res.data.clientSecret)
    })
  },[axiosSecure,totalprice])

  const handlesubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
  };

  return (
    <div>
      <form
        onSubmit={handlesubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2 text-center"
            htmlFor="card-element"
          >
            Payment Details
          </label>
          <div className="border-2 border-amber-600 rounded-lg p-4 bg-gray-50">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="text-center mt-5">
          <button
            className="btn bg-amber-600 hover:bg-amber-400 text-white font-semibold text-lg py-2 px-4 rounded-lg w-full"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
        <p className="text-red-600 pt-2">{error}</p>
      </form>
    </div>
  );
};

export default Paymentform;
