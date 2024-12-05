import React from 'react';

const Frequently = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 mb-8">
            Find answers to common questions about Estatein's services, property listings, and the real estate process. 
            We're here to provide clarity and assist you every step of the way.
          </p>
          <button className="bg-gray-800 text-gray-300 hover:text-white py-2 px-6 rounded-md">
            View All FAQ's
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">How do I search for properties on Estatein?</h3>
            <p className="text-gray-400 mb-6">
              Learn how to use our user-friendly search tools to find properties that match your criteria.
            </p>
            <button className="bg-gray-700 text-gray-300 hover:text-white py-2 px-4 rounded-md">
              Read More
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">What documents do I need to sell my property through Estatein?</h3>
            <p className="text-gray-400 mb-6">
              Find out about the necessary documentation for listing your property with us.
            </p>
            <button className="bg-gray-700 text-gray-300 hover:text-white py-2 px-4 rounded-md">
              Read More
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">How can I contact an Estatein agent?</h3>
            <p className="text-gray-400 mb-6">
              Discover the different ways you can get in touch with our experienced agents.
            </p>
            <button className="bg-gray-700 text-gray-300 hover:text-white py-2 px-4 rounded-md">
              Read More
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-6 mt-12">
          <button className="text-gray-400 hover:text-white text-lg">&larr;</button>
          <span className="text-gray-400">01 of 10</span>
          <button className="text-gray-400 hover:text-white text-lg">&rarr;</button>
        </div>
      </div>
    </section>
  );
};

export default Frequently;
