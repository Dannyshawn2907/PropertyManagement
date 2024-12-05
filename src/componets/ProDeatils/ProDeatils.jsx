import React from "react";
import ProD from "../../assets/ProD1.png";
import ProD2 from "../../assets/ProD2.png";

const PropertyGallery = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 py-8">
 
      <div className="flex flex-col md:flex-row justify-between items-center text-center pb-8 font-extrabold">
        <h4 className="text-lg md:text-xl">Seaside Serenity Villa</h4>
        <div className="text-base md:text-lg pr-0 md:pr-12 mt-2 md:mt-0">
          Price: $200,000,000.00
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl text-center md:text-left">
            Seaside Serenity Villa
          </h1>
          <div className="flex items-center space-x-2 text-gray-400 mt-2 md:mt-0">
            <span className="animate-pulse">📍</span>
            <span>Malibu, California</span>
          </div>
        </div>

     
        <div className="font-bold text-center pb-5 text-lg">
          Danny Gallery Super⚡
        </div>

       
        <div className="flex overflow-x-scroll space-x-4 mb-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="flex-none w-32 h-32 bg-gray-800 rounded-lg animate-pulse"
            >
              <img
                src={ProD2}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden border border-gray-700">
            <img
              src={ProD}
              alt="Main Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-700">
            <img
              src={ProD2}
              alt="Main Image 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4 mt-6">
          <button className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700">
            ←
          </button>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === 0 ? "bg-purple-600" : "bg-gray-600"
                }`}
              ></div>
            ))}
          </div>
          <button className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;
