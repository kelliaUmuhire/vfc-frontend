import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg w-full">
      {/* Heading and Description */}
      <h2 className="text-lg font-bold text-gray-700 mb-4">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-gray-600 mb-6 text-sm">
        Stay updated with our latest events, sermons, and community news.
      </p>

      {/* Subscription Form */}
      <form className="flex flex-col space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
