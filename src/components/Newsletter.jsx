import React from "react";

const Newsletter = () => {
  return (
    <div
      className="flex flex-col items-start p-6 rounded-lg"
      style={{
        width: "348.444px",
        height: "601.778px",
        backgroundColor: "#0C5220",
        borderRadius: "14.222px",
      }}
    >
      <h3 className="text-white text-xl font-bold mb-4">
        Subscribe to our Newsletter
      </h3>
      <p className="text-white mb-6">
        Stay updated with the latest news, events, and sermons.
      </p>
      <form className="w-full">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 w-full mb-4 text-[#0C5220] rounded border-none focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-white text-[#0C5220] font-bold py-3 rounded hover:bg-gray-100 transition duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
