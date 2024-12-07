import React, { useState } from "react";

const RealEstateContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Set the form as submitted
  };

  if (isSubmitted) {
    return (
      <section className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
        <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Thank You!</h1>
          <p className="text-gray-700 mb-6">
            Thank you for providing your information. We will get back to you
            shortly.
          </p>
          <a
            href="/"
            className="text-blue-800 hover:text-blue-600 underline font-medium"
          >
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">
          Real Estate Contact Form
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Please fill out the form below with your information and that of your
          estate. We will contact you as soon as possible. Thanks!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-medium"
              >
                First
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-medium"
              >
                Last
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="### ### ####"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

        
          <div>
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium"
            >
        
            </label>
            <input
              type="text"
              id="address"
              placeholder="Street Address"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-gray-700 font-medium">
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="City"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-gray-700 font-medium"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                placeholder="State"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-800 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RealEstateContactForm;
