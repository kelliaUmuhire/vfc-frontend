// /components/DonationButton.js
import React, { useState } from 'react';

export default function DonationButton() {
  const [paymentOption, setPaymentOption] = useState('');

  const handleDonation = (option) => {
    setPaymentOption(option);
    console.log(`Selected payment option: ${option}`);
    // Further payment handling logic can be added here (e.g., calling a payment API)
  };

  return (
    <div className="donation-container">
      <h2 className="text-center text-2xl font-bold mb-4">Donate Now</h2>
      <div className="payment-options flex justify-center space-x-4">
        <button
          onClick={() => handleDonation('paypal')}
          className="bg-blue-500 text-white py-2 px-6 rounded-md"
        >
          PayPal
        </button>
        <button
          onClick={() => handleDonation('mobile-money')}
          className="bg-green-500 text-white py-2 px-6 rounded-md"
        >
          Mobile Money
        </button>
        <button
          onClick={() => handleDonation('credit-debit')}
          className="bg-red-500 text-white py-2 px-6 rounded-md"
        >
          Credit/Debit Card
        </button>
      </div>
      
      {/* Display the selected payment method */}
      {paymentOption && (
        <div className="mt-4 text-center">
          <p>You selected: <strong>{paymentOption}</strong></p>
          {/* Render corresponding payment gateway component here */}
          {paymentOption === 'paypal' && <PayPalForm />}
          {paymentOption === 'mobile-money' && <MobileMoneyForm />}
          {paymentOption === 'credit-debit' && <CreditCardForm />}
        </div>
      )}
    </div>
  );
}
