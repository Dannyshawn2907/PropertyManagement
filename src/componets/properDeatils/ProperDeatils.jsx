import React from "react";

const PropertyDetails = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 ">

      <div className="max-w-4xl mx-auto space-y-6">
       
        <div className="p-6 bg-gray-800 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold">Total Initial Costs</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-400">Listing Price</p>
              <p className="text-lg font-medium">$1,250,000</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Additional Fees</p>
              <p className="text-lg font-medium ">$29,700</p>
              <p className="text-xs text-gray-500">
                Property transfer tax, legal fees, inspection, insurance
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Down Payment</p>
              <p className="text-lg font-medium">$250,000</p>
              <p className="text-xs text-gray-500">20%</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Mortgage Amount</p>
              <p className="text-lg font-medium">$1,000,000</p>
              <p className="text-xs text-gray-500">If applicable</p>
            </div>
          </div>
          <button className="mt-4 text-sm text-blue-500 hover:underline">
            Learn More
          </button>
        </div>

       
        <div className="p-6 bg-gray-800 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold">Monthly Expenses</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-400">Property Taxes</p>
              <p className="text-lg font-medium">$1,250</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Homeowners' Association Fee
              </p>
              <p className="text-lg font-medium">$300</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Mortgage Payment</p>
              <p className="text-lg font-medium">
                Varies based on terms and interest rate
              </p>
              <p className="text-xs text-gray-500">If applicable</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Property Insurance</p>
              <p className="text-lg font-medium">$100</p>
              <p className="text-xs text-gray-500">Approximate monthly cost</p>
            </div>
          </div>
          <button className="mt-4 text-sm text-blue-500 hover:underline">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
