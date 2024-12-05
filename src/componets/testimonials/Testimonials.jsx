import React from "react";
import Profile from "../../assets/Profile.png";
import Profile2 from "../../assets/Profile2.png";
import Profile3 from "../../assets/Profile3.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Wade Warren",
      location: "USA, California",
      feedback:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      rating: 5,
      image: Profile,
    },
    {
      id: 2,
      name: "Emelie Thomson",
      location: "USA, Florida",
      feedback:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      rating: 5,
      image: Profile2,
    },
    {
      id: 3,
      name: "John Mans",
      location: "USA, Nevada",
      feedback:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      rating: 5,
      image: Profile3,
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <p className="text-gray-300">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Estatein for their real
              estate needs.
            </p>
          </div>
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded">
            View All Testimonials
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 rounded-lg shadow-lg p-6"
            >
              {/* Ratings */}
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <svg
                    key={index}
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73-1.64 7.03z" />
                  </svg>
                ))}
              </div>
              {/* Feedback */}
              <p className="text-gray-300 mb-4">{testimonial.feedback}</p>
              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-10 text-gray-400">
          <span className="animate-pulse">01 of 10</span>
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
      <Testimonials />
    </div>
  );
}

export default App;
