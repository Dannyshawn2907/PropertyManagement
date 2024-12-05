import React from "react";

const PropertyDetails = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Description Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Discover your own piece of paradise with the Seaside Serenity Villa.
            With an open floor plan, breathtaking ocean views from every room,
            and direct access to a pristine sandy beach, this property is the
            epitome of coastal living.
          </p>
          <div className="flex justify-between items-center text-gray-400 border-t border-gray-700 pt-4">
            <div className="text-center">
              <div className="text-lg font-semibold text-white">04</div>
              <div className="flex items-center space-x-1">
                <span>🛏</span>
                <span>Bedrooms</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-white">03</div>
              <div className="flex items-center space-x-1">
                <span>🛁</span>
                <span>Bathrooms</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-white">2,500</div>
              <div className="flex items-center space-x-1">
                <span>📐</span>
                <span>Square Feet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Key Features and Amenities</h2>
          <ul className="space-y-4">
            {[
              "Expansive oceanfront terrace for outdoor entertaining",
              "Gourmet kitchen with top-of-the-line appliances",
              "Private beach access for morning strolls and sunset views",
              "Master suite with a spa-inspired bathroom and ocean-facing balcony",
              "Private garage and ample storage space",
            ].map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-purple-600">⚡</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
