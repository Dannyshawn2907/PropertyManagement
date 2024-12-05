import React from "react";

const PricingDetails = () => {
  return (
    <div className="bg-slate-800 text-white px-4 py-6 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Comprehensive Pricing Details
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-300">
          At Estatein, transparency is key. We want you to have a clear
          understanding of all costs associated with your property investment.
          Below, we break down the pricing for Seaside Serenity Villa to help
          you make an informed decision.
        </p>
        <div className="bg-gray-800 text-gray-300 mt-6 p-4 rounded-md">
          <h2 className="font-semibold">Note</h2>
          <p className="text-sm md:text-base lg:text-lg mt-2">
            The figures provided above are estimates and may vary depending on
            the property, location, and individual circumstances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
