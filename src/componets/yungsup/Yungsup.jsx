import React from "react";

const Features = () => {
  const features = [
    {
      icon: "🏠", // Replace with an appropriate icon or image
      title: "Find Your Dream Home",
    },
    {
      icon: "💼", // Replace with an appropriate icon or image
      title: "Unlock Property Value",
    },
    {
      icon: "🏢", // Replace with an appropriate icon or image
      title: "Effortless Property Management",
    },
    {
      icon: "💡", // Replace with an appropriate icon or image
      title: "Smart Investments, Informed Decisions",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-4xl bg-gray-700 p-4 rounded-full text-purple-500 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-center text-lg font-semibold">{feature.title}</h3>
            <a
              href="#"
              className="mt-4 text-purple-500 hover:underline flex items-center gap-1"
            >
              Learn More
              <span className="text-lg">↗</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
