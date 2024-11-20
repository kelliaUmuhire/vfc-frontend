// /components/CreditCardForm.jsx
import React, { useState } from 'react';

export default function CreditCardForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handleCreditCardPayment = (e) => {
    e.preventDefault();
    // Logic for handling credit card payment
    console.log(`Processing payment for card: ${cardNumber}`);
  };

  return (
    <div>
      <h3 className="text-xl mb-4">Pay with Credit/Debit Card</h3>
      <form onSubmit={handleCreditCardPayment} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="border p-2 rounded-md w-full"
            required
          />
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium">Expiration Date</label>
            <input
              type="text"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className="border p-2 rounded-md w-full"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium">CVC</label>
            <input
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              className="border p-2 rounded-md w-full"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-6 rounded-md"
        >
          Donate Now
        </button>
      </form>
    </div>
  );
}
