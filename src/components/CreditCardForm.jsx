// /components/CreditCardForm.jsx
import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

export default function CreditCardForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
      alert('Payment failed: ' + error.message);
    } else {
      console.log('Payment Method:', paymentMethod);
      setPaymentSuccess(true);
    }

    setIsProcessing(false);
  };

  return (
    <div className="credit-card-form">
      <h3 className="text-center text-xl font-bold mb-4">Donate with Credit/Debit Card</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="card" className="block mb-2">Card Information</label>
          <CardElement
            id="card"
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>

        <button
          type="submit"
          disabled={isProcessing || paymentSuccess}
          className="bg-red-500 text-white py-2 px-6 rounded-md w-full"
        >
          {isProcessing ? 'Processing...' : paymentSuccess ? 'Payment Successful' : 'Donate Now'}
        </button>
      </form>
    </div>
  );
}
