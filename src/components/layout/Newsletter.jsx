import React from 'react';

const Newsletter = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center bg-gray-100 p-6 md:p-10">
      {/* Newsletter Section */}
      <div className="w-full md:w-1/4 md:mr-8 mb-6 md:mb-0">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-4">Stay updated with the latest news, sermons, and events.</p>
        <form className="flex flex-col space-y-3">
          <input 
            type="email" 
            placeholder="Enter your email" 
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
          <button 
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
