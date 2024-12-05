import React from "react";
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";
import Icon1 from "../../assets/Icon1.png";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      image: Image1,
      features: ["4-Bedroom", "3-Bathroom", "Villa"],
      price: "$550,000",
    },
    {
      id: 2,
      title: "Metropolitan Haven",
      description:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
      image: Image2,
      features: ["2-Bedroom", "2-Bathroom", "Apartment"],
      price: "$350,000",
    },
    {
      id: 3,
      title: "Rustic Retreat Cottage",
      description:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.",
      image: Image3,
      features: ["3-Bedroom", "2.5-Bathroom", "Townhouse"],
      price: "$450,000",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
      
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
            <p className="text-gray-300">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments.
            </p>
          </div>
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded">
            View All Properties
          </button>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
         
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-400 mb-4">
                  {property.description}{" "}
                  <span className="text-purple-500 cursor-pointer">
                    Read More
                  </span>
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded flex items-center"
                    >
                      <img
                        src={Icon1}
                        alt=""
                        className="h-4 w-4 mr-2"
                      />
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold">{property.price}</p>
                  <button className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-10 text-gray-400">
          <span>01 of 60</span>
          <div className="flex items-center gap-2">
            <button className="bg-gray-700 p-2 rounded hover:bg-gray-600">
              ←
            </button>
            <button className="bg-gray-700 p-2 rounded hover:bg-gray-600">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <FeaturedProperties />
    </div>
  );
}

export default App;
