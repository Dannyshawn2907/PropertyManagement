import React from "react";

const UnlockPropertyValue = () => {
  const features = [
    {
      icon: "📊",
      title: "Valuation Mastery",
      description:
        "Discover the true worth of your property with our expert valuation services.",
    },
    {
      icon: "🎯", 
      title: "Strategic Marketing",
      description:
        "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
    },
    {
      icon: "🤝", 
      title: "Negotiation Wizardry",
      description:
        "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Unlock Property Value</h2>
          <p className="text-lg text-gray-400">
            Selling your property should be a rewarding experience, and at
            Estatein, we make sure it is. Our Property Selling Service is
            designed to maximize the value of your property, ensuring you get
            the best deal possible. Explore the categories below to see how we
            can help you at every step of your selling journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div
                className="text-5xl text-purple-500 mb-4 animate-bounce"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: "1.5s",
                }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnlockPropertyValue;
