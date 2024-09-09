import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Paymentform from "./Paymentform";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)

const Payment = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-bold text-amber-600 pt-5">
          PAYMENT
        </h1>
        <div className="bg-gray-200 rounded-lg p-5 mt-6">
          <Elements stripe={stripePromise}>
            <Paymentform></Paymentform>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
