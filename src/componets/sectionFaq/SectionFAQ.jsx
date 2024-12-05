import React from "react";

const FAQSection = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
 
      <div className="max-w-5xl mx-auto space-y-8">
       
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <p className="text-gray-400">
              Find answers to common questions about Estatein’s services, property listings, 
              and the real estate process. We’re here to provide clarity and assist you every step of the way.
            </p>
          </div>
          <button className="text-blue-500 font-medium hover:underline">
            View All FAQ's
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-2">How do I search for properties on Estatein?</h3>
            <p className="text-sm text-gray-400">
              Learn how to use our user-friendly search tools to find properties that match your criteria.
            </p>
            <button className="mt-4 text-blue-500 hover:underline">Read More</button>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-2">What documents do I need to sell my property through Estatein?</h3>
            <p className="text-sm text-gray-400">
              Find out about the necessary documentation for listing your property with us.
            </p>
            <button className="mt-4 text-blue-500 hover:underline">Read More</button>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-2">How can I contact an Estatein agent?</h3>
            <p className="text-sm text-gray-400">
              Discover the different ways you can get in touch with our experienced agents.
            </p>
            <button className="mt-4 text-blue-500 hover:underline">Read More</button>
          </div>
        </div>

        
        <div className="flex justify-between items-center text-gray-400 text-sm">
          <p>01 of 10</p>
          <div className="flex space-x-4">
            <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <span className="sr-only">Previous</span>
              &#8592;
            </button>
            <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <span className="sr-only">Next</span>
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
