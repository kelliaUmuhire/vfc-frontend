// /components/MobileMoneyForm.jsx
import React, { useState } from 'react';

export default function MobileMoneyForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    console.log(`Processing Mobile Money donation: ${amount} from ${phoneNumber}`);
    setTimeout(() => {
      setIsProcessing(false);
      alert('Mobile Money payment successful!');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="mobile-money-form space-y-4">
      <div>
        <label htmlFor="phoneNumber" className="block mb-2">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>

      <div>
        <label htmlFor="amount" className="block mb-2">Amount (NGN)</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isProcessing}
        className="bg-green-500 text-white py-2 px-6 rounded-md w-full"
      >
        {isProcessing ? 'Processing...' : 'Donate with Mobile Money'}
      </button>
    </form>
  );
}
