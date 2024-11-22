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
      <h3 className="text-lg mb-4 text-[#1B8B3B]">STAY IN THE SPIRIT</h3>
      <p className="text-white mb-6 text-2xl">
        <span className="font-recoleta opacity-40">
          We would love to keep in touch.
        </span>{" "}
        <span className="font-recoleta">
          Kindly subscribe to our newsletter
        </span>
      </p>
      <form className="w-full">
        <input
          type="text"
          placeholder="Enter your name"
          className="p-3 w-full mb-4 text-white rounded-xl border border-gray-400 focus:outline-none bg-transparent"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 w-full mb-4 text-white rounded-xl border border-gray-400 focus:outline-none bg-transparent"
        />
        <button
          type="submit"
          className="w-fit bg-secondary text-[#0C5220] font-recoleta py-2.5 px-6 uppercase rounded hover:bg-gray-100 transition duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
