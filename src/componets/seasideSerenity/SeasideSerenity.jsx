import React from 'react';

const InquiryForm = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl bg-gray-800 text-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Inquire About Seaside Serenity Villa</h2>
        <p className="text-gray-400 mb-6">
          Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
            <div>
              <label htmlFor="firstName" className="block text-sm text-gray-400">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="mt-1 w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white p-2"
                placeholder="Enter First Name"
              />
            </div>
         
            <div>
              <label htmlFor="lastName" className="block text-sm text-gray-400">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="mt-1 w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white p-2"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
      
          <div>
            <label htmlFor="email" className="block text-sm text-gray-400">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white p-2"
              placeholder="Enter your Email"
            />
          </div>
       
          <div>
            <label htmlFor="phone" className="block text-sm text-gray-400">
              Phone +234
            </label>
            <input
              id="phone"
              type="tel"
              className="mt-1 w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white p-2"
              placeholder="Enter Phone Number"
            />
          </div>
    
          <div>
            <label htmlFor="property" className="block text-sm text-gray-400">
              Selected Property
            </label>
            <input
              id="property"
              type="text"
              value="Seaside Serenity Villa, Malibu, California"
              readOnly
              className="mt-1 w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2"
            />
          </div>
        
          <div>
            <label htmlFor="message" className="block text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white p-2"
              placeholder="Enter your Message here."
            ></textarea>
          </div>
         
          <div className="flex items-center space-x-2">
            <input
              id="terms"
              type="checkbox"
              className="h-5 w-5 text-blue-500 border-gray-600 rounded bg-gray-700 focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-400">
              I agree with Terms of Use and Privacy Policy
            </label>
          </div>
        
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold rounded-md py-2 mt-4 animate-pulse"
          >
            Send Your Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;
