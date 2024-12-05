import React from "react";

const RealEstateBanner = () => {
  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="banner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-8 md:mb-9">
          <h1 className="text-3xl font-bold mb-4">
            Start Your Real Estate Journey Today
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
       
        <div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 Flex">
            Explore Properties
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RealEstateBanner;
