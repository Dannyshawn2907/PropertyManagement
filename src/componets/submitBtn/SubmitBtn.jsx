import React from "react";
import { useLocation } from "react-router-dom";

const ThankYouPage = () => {
  const location = useLocation();
  const firstName = location.state?.firstName || "Guest";

  return (
    <section className="bg-blue-50 min-h-screen flex items-center justify-center px-4">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg max-w-md">
        <h1 className="text-4xl font-bold text-blue-800 animate-bounce">
          Thank You!
        </h1>
        <p className="text-gray-700 mt-4">
          Thank you, <span className="font-bold">{firstName}</span>, for
          providing your information. We will get back to you shortly!
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="text-blue-800 hover:text-blue-600 underline font-medium"
          >
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThankYouPage;
