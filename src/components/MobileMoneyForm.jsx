// /components/MobileMoneyForm.jsx
import React, { useState } from 'react';

export default function MobileMoneyForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleMobileMoneyPayment = (e) => {
    e.preventDefault();
    // Logic for processing mobile money payment
    console.log(`Payment initiated for ${amount} via Mobile Money. Phone number: ${phoneNumber}`);
  };

  return (
    <div>
      <h3 className="text-xl mb-4">Pay with Mobile Money</h3>
      <form onSubmit={handleMobileMoneyPayment} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border p-2 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 rounded-md w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-6 rounded-md"
        >
          Donate Now
        </button>
      </form>
    </div>
  );
}
