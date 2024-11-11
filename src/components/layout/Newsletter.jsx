import React from 'react';

const Newsletter = () => {
  return (
    <div 
      className="flex flex-col justify-between items-start w-[348.444px] h-[601.778px] p-[28.444px] pl-[21.333px] rounded-[14.222px]"
      style={{ backgroundColor: 'var(--Primary-Color, #0C5220)' }} // Primary background color
    >
      {/* Heading and Description */}
      <h2 className="text-xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-gray-200 mb-6 text-sm">
        Stay updated with our latest events, sermons, and community news.
      </p>

      {/* Subscription Form */}
      <form className="flex flex-col space-y-4 w-full">
        <input 
          type="email" 
          placeholder="Enter your email" 
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
        />
        <button 
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
