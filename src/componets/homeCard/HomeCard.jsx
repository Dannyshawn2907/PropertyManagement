// import React from "react";
// import Hero from "../../assets/Hero.png";
// import Container from "../../assets/Container.png";
// import Container2 from "../../assets/Container2.png";
// import Container3 from "../../assets/Container3.png";
// import investment from "../../assets/investment.png";

// const HeroSection = () => {
//   const data = [
//     {
//       src: Container,
//       title: "Find Your Dream Home",
//     },
//     {
//       src: Container2,
//       title: "Unlock Property Value",
//     },
//     {
//       src: Container3,
//       title: "Effortless Property Management",
//     },
//     {
//       src: investment,
//       title: "Smart Investments, Informed Decisions",
//     },
//   ];

//   return (
//     <div className="bg-gray-900 text-white">
//       {/* Main Hero Section */}
//       <div className="container mx-auto px-6 py-16">
//         <div className="flex flex-col lg:flex-row items-center">
//           {/* Text Section */}
//           <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 bg-black p-8 lg:p-10 rounded-lg">
//             <h1 className="text-4xl md:text-5xl font-medium mb-6">
//               Discover Your Dream{" "}
//               <span className="block">Property with Estatein</span>
//             </h1>
//             <p className="text-gray-300 mb-8">
//               Your journey to finding the perfect property begins here. Explore
//               our listings to find the home{" "}
//               <span className="block">that matches your dreams.</span>
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
//               <button className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded">
//                 Learn More
//               </button>
//               <button className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded">
//                 Browse Properties
//               </button>
//             </div>
//             <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12">
//               {[
//                 { value: "200+", text: "Happy Customers", animate: true },
//                 {
//                   value: "10k+",
//                   text: "Properties For Clients",
//                   animate: false,
//                 },
//                 { value: "16+", text: "Years of Experience", animate: true },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className={`text-center bg-[#191919] p-6 border border-gray-300 rounded-md transition-transform duration-300 hover:scale-105 ${
//                     item.animate ? "animate-pulse" : ""
//                   }`}
//                 >
//                   <h2 className="text-2xl font-bold">{item.value}</h2>
//                   <p className="text-gray-400">{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="lg:w-1/2">
//             <div className="relative">
//               <img
//                 src={Hero}
//                 alt="Building"
//                 className="w-full rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="bg-gray-800 py-8">
//         <div className="container mx-auto flex flex-wrap justify-center gap-6 px-4">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg text-center flex flex-col items-center w-72 md:w-56"
//             >
//               <img src={item.src} alt={item.title} className="h-16 w-16 mb-4" />
//               <p className="text-gray-200">{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div>
//       <HeroSection />
//     </div>
//   );
// }

// export default App;



import React from "react";
import Hero from "../../assets/Hero.png";
import Container from "../../assets/Container.png";
import Container2 from "../../assets/Container2.png";
import Container3 from "../../assets/Container3.png";
import investment from "../../assets/investment.png";

const HeroSection = () => {
  const data = [
    {
      src: Container,
      title: "Find Your Dream Home",
    },
    {
      src: Container2,
      title: "Unlock Property Value",
    },
    {
      src: Container3,
      title: "Effortless Property Management",
    },
    {
      src: investment,
      title: "Smart Investments, Informed Decisions",
    },
  ];

  const handleLearnMoreClick = () => {
    window.open(
      "https://www.google.com/search?q=learn+more+about+how+to+keep+properties+safe&oq=Learn+more+about+how+to+keep+&gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRiPAjIHCAQQIRiPAtIBCTI2NjQ1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",
      "_blank"
    );
  };

  const handleBrowsePropertiesClick = () => {
    window.open(
      "https://www.larisarealtech.com/most-beautiful-house-in-the-world/",
      "_blank"
    );
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Main Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 bg-black p-8 lg:p-10 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              Discover Your Dream{" "}
              <span className="block">Property with Estatein</span>
            </h1>
            <p className="text-gray-300 mb-8">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home{" "}
              <span className="block">that matches your dreams.</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={handleLearnMoreClick}
                className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded"
              >
                Learn More
              </button>
              <button
                onClick={handleBrowsePropertiesClick}
                className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded"
              >
                Browse Properties
              </button>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12">
              {[
                { value: "200+", text: "Happy Customers", animate: true },
                {
                  value: "10k+",
                  text: "Properties For Clients",
                  animate: false,
                },
                { value: "16+", text: "Years of Experience", animate: true },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`text-center bg-[#191919] p-6 border border-gray-300 rounded-md transition-transform duration-300 hover:scale-105 ${
                    item.animate ? "animate-pulse" : ""
                  }`}
                >
                  <h2 className="text-2xl font-bold">{item.value}</h2>
                  <p className="text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src={Hero}
                alt="Building"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto flex flex-wrap justify-center gap-6 px-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg text-center flex flex-col items-center w-72 md:w-56"
            >
              <img src={item.src} alt={item.title} className="h-16 w-16 mb-4" />
              <p className="text-gray-200">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}

export default App;
