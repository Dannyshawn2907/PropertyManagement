import React from "react";

const FormComponent = () => {
  return (
    <div className="bg-gray-900 text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Let's Make it Happen</h1>
        <p className="text-center text-gray-400 mb-8">
          Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.
        </p>
        <form className="space-y-6">
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-gray-800 text-gray-200 p-3 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-gray-800 text-gray-200 p-3 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-800 text-gray-200 p-3 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full bg-gray-800 text-gray-200 p-3 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              className="w-full bg-gray-800 text-gray-400 p-3 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            >
              <option>Select Location</option>
            </select>
            <select
              className="w-full bg-gray-800 text-gray-400 p-3 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            >
              <option>Select Property Type</option>
            </select>
            <select
              className="w-full bg-gray-800 text-gray-400 p-3 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            >
              <option>Select Budget</option>
            </select>
          </div>
       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              className="w-full bg-gray-800 text-gray-400 p-3 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            >
              <option>No. of Bedrooms</option>
            </select>
            <select
              className="w-full bg-gray-800 text-gray-400 p-3 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            >
              <option>No. of Bathrooms</option>
            </select>
          </div>
       
          <div>
            <p className="mb-2">Preferred Contact Method</p>
            <div className="flex items-center gap-4">
              <label className="flex items-center">
                <input type="radio" name="contact" className="mr-2" />
                <span>Phone</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="contact" className="mr-2" />
                <span>Email</span>
              </label>
            </div>
          </div>
    
          <textarea
            placeholder="Enter your Message here."
            rows="4"
            className="w-full bg-gray-800 text-gray-200 p-3 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          ></textarea>
      
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p>
              I agree with{" "}
              <a href="#" className="text-indigo-500">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-indigo-500">
                Privacy Policy
              </a>
            </p>
          </div>
        
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-md"
          >
            Send Your Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
