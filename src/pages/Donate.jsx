import { useState } from "react";

const Donate = () => {
  const [amount, setAmount] = useState("");

  const handleDonationChange = (value) => {
    setAmount(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for donating $${amount}!`);
  };

  return (
    <div className="lg:px-0 px-6 pt-36 py-16">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold font-recoleta text-gray-800">
          Support Our Cause
        </h1>
        <p className="text-gray-600 mt-4">
          Your donation helps us make a difference in the lives of those in
          need.
        </p>
      </div>

      {/* Donation Form */}
      <form
        className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6"
        onSubmit={handleSubmit}
      >
        {/* Amount Selector */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Select Donation Amount
          </label>
          <div className="flex space-x-2">
            {["10", "20", "50", "100"].map((value) => (
              <button
                type="button"
                key={value}
                onClick={() => handleDonationChange(value)}
                className={`px-4 py-2 rounded-md ${
                  amount === value
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                ${value}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Enter custom amount"
            value={amount}
            onChange={(e) => handleDonationChange(e.target.value)}
            className="mt-4 w-full px-4 py-2 border rounded-md"
          />
        </div>

        {/* Donor Information */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        {/* Payment Information */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Payment Details
          </label>
          <input
            type="text"
            required
            placeholder="Card Number"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md"
        >
          Donate ${amount || "0"}
        </button>
      </form>
    </div>
  );
};

export default Donate;
