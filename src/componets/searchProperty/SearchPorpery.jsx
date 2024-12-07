import React, { useState } from "react";

const PropertySearch = () => {
  const [dropdowns, setDropdowns] = useState({
    location: { isVisible: false, selected: null },
    propertyType: { isVisible: false, selected: null },
    pricingRange: { isVisible: false, selected: null },
    propertySize: { isVisible: false, selected: null },
    buildYear: { isVisible: false, selected: null },
  });

  const toggleDropdown = (key) => {
    setDropdowns((prev) => {
      const updatedDropdowns = {};
      Object.keys(prev).forEach((dropdownKey) => {
        updatedDropdowns[dropdownKey] = {
          ...prev[dropdownKey],
          isVisible: dropdownKey === key ? !prev[dropdownKey].isVisible : false,
        };
      });
      return updatedDropdowns;
    });
  };

  const handleOptionSelect = (key, option) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        selected: option,
        isVisible: false,
      },
    }));
  };

  const dropdownOptions = {
    location: ["New York", "Los Angeles", "Chicago", "Houston"],
    propertyType: ["Apartment", "Villa", "Townhouse"],
    pricingRange: ["$200,000 - $400,000", "$400,000 - $600,000"],
    propertySize: ["1000 sq ft", "2000 sq ft", "3000 sq ft"],
    buildYear: ["2022", "2023", "2024"],
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-10">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Property</h1>
          <p className="text-gray-300">
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey
            starts here.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search For A Property"
              className="flex-1 p-4 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-4 rounded-md">
              Find Property
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 antialiased">
            {Object.keys(dropdowns).map((key) => (
              <Dropdown
                key={key}
                title={key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())} // Format title
                options={dropdownOptions[key]}
                isVisible={dropdowns[key].isVisible}
                toggleDropdown={() => toggleDropdown(key)}
                selectedOption={dropdowns[key].selected}
                onSelect={(option) => handleOptionSelect(key, option)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// const Dropdown = ({
//   title,
//   options,
//   isVisible,
//   toggleDropdown,
//   selectedOption,
//   onSelect,
// }) => {
//   return (
//     <div className="relative">
//       <button
//         className="p-4 bg-gray-700 text-gray-200 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
//         onClick={toggleDropdown}
//       >
//         {selectedOption ? `${title}: ${selectedOption}` : title}
//       </button>
//       <div
//         className={`absolute left-0 mt-2 w-full bg-gray-800 text-gray-200 rounded-md shadow-lg transform transition-all duration-300 ${
//           isVisible
//             ? "opacity-100 scale-100"
//             : "opacity-0 scale-95 pointer-events-none"
//         }`}
//       >
//         <ul className="py-2">
//           {options.map((option, index) => (
//             <li
//               key={index}
//               className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
//               onClick={() => onSelect(option)}
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

const Dropdown = ({
  title,
  options,
  isVisible,
  toggleDropdown,
  selectedOption,
  onSelect,
}) => {
  return (
    <div className="relative">
      <button
        className="p-4 bg-gray-700 text-gray-200 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 z-10 relative"
        onClick={toggleDropdown}
      >
        {selectedOption ? `${title}: ${selectedOption}` : title}
      </button>

      <div
        className={`absolute left-0 mt-2 w-full bg-gray-800 text-gray-200 rounded-md shadow-lg z-20 transform transition-all duration-300 ${
          isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="py-2">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => onSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default PropertySearch;
