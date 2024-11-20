// /components/DonationButton.jsx
import React, { useState } from 'react';
import MobileMoneyForm from './MobileMoneyForm';
import CreditCardForm from './CreditCardForm';

export default function DonationButton() {
  const [paymentOption, setPaymentOption] = useState('');

  const handleDonation = (option) => {
    setPaymentOption(option);
    console.log(`Selected payment option: ${option}`);
  };

  return (
    <div className="donation-container">
      <h2 className="text-center text-2xl font-bold mb-4">Donate Now</h2>
      <div className="payment-options flex justify-center space-x-4">
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
      
      {paymentOption && (
        <div className="mt-4 text-center">
          <p>You selected: <strong>{paymentOption}</strong></p>
          {paymentOption === 'mobile-money' && <MobileMoneyForm />}
          {paymentOption === 'credit-debit' && <CreditCardForm />}
        </div>
      )}
    </div>
  );
}
