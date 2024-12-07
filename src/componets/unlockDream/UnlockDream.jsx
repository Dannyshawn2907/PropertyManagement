import React from "react";

const UnlockPropertyValue = () => {
  const handleLearnMoreClick = () => {
    window.open("https://www.google.com/search?q=Unlock+Property+Value", "_blank");
  };

  return (
    <section className="bg-black text-white py-12 px-6">
   
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Unlock Property Value
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Selling your property should be a rewarding experience, and at Estatein, we make sure it is. 
          Our Property Selling Service is designed to maximize the value of your property, ensuring you 
          get the best deal possible. Explore the categories below to see how we can help you at every 
          step of your selling journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
    
        <div className="bg-gray-900 rounded-lg shadow-md p-6">
          <div className="text-purple-500 text-3xl mb-4">
          
            <i className="fas fa-chart-line"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Valuation Mastery</h3>
          <p className="text-gray-400 text-sm">
            Discover the true worth of your property with our expert valuation services.
          </p>
        </div>

      
        <div className="bg-gray-900 rounded-lg shadow-md p-6">
          <div className="text-purple-500 text-3xl mb-4">
            <i className="fas fa-bullhorn"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Strategic Marketing</h3>
          <p className="text-gray-400 text-sm">
            Selling a property requires more than just a listing; it demands a strategic marketing approach.
          </p>
        </div>

      
        <div className="bg-gray-900 rounded-lg shadow-md p-6">
          <div className="text-purple-500 text-3xl mb-4">
            <i className="fas fa-handshake"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Negotiation Wizardry</h3>
          <p className="text-gray-400 text-sm">
            Negotiating the best deal is an art, and our negotiation experts are masters of it.
          </p>
        </div>


           
        <div className="bg-gray-900 rounded-lg shadow-md p-6">
          <div className="text-purple-500 text-3xl mb-4">
            <i className="fas fa-bullhorn"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Strategic Marketing</h3>
          <p className="text-gray-400 text-sm">
          Your journey to finding the perfect property begins here. Explore
          our listings to find the home
          </p>
        </div>

        
        <div className="bg-gray-900 rounded-lg shadow-md p-6 md:col-span-2 lg:col-span-1">
          <div className="text-purple-500 text-3xl mb-4">
            <i className="fas fa-clipboard-check"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Closing Success</h3>
          <p className="text-gray-400 text-sm">
            A successful sale is not complete until the closing. We guide you through the intricate closing process.
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-md p-6 flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">
            Unlock the Value of Your Property Today
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.
          </p>
          <button
            onClick={handleLearnMoreClick}
            className="self-start bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-sm"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default UnlockPropertyValue;
