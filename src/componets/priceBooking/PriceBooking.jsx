import React from "react";

const PricingBreakdown = () => {
  return (
    <div className=" bg-gray-900 text-white px-4 py-8 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold">Listing Price</h2>
          <p className="text-4xl md:text-5xl font-bold mt-2">$1,250,000</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-md mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg md:text-xl font-semibold">Additional Fees</h3>
            <button className="text-sm md:text-base text-blue-400 underline">
              Learn More
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-semibold">$25,000</p>
              <p className="text-sm text-gray-400">
                Property Transfer Tax: Based on the sale price and local
                regulations
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">$3,000</p>
              <p className="text-sm text-gray-400">
                Legal Fees: Approximate cost for legal services, including title
                transfer
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">$500</p>
              <p className="text-sm text-gray-400">
                Home Inspection: Recommended for due diligence
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">$1,200</p>
              <p className="text-sm text-gray-400">
                Property Insurance: Annual cost for comprehensive property
                insurance
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">Varies</p>
              <p className="text-sm text-gray-400">
                Mortgage Fees: If applicable, consult with your lender for
                specific details
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg md:text-xl font-semibold">Monthly Costs</h3>
            <button className="text-sm md:text-base text-blue-400 underline">
              Learn More
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-semibold">$1,250</p>
              <p className="text-sm text-gray-400">
                Property Taxes: Approximate monthly property tax based on the
                sale price and local rates
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">$300</p>
              <p className="text-sm text-gray-400">
                Homeowners’ Association Fee: Monthly fee for common area
                maintenance and security
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBreakdown;
