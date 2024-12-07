import React from "react";

const InvestmentSection = () => {
  return (
    <section className="bg-black text-white py-12 px-6">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Smart Investments, Informed Decisions
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Building a real estate portfolio requires a strategic approach.
          Estatein's Investment Advisory Service empowers you to make smart
          investments and informed decisions.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-gray-900 rounded-lg shadow-md p-6">
          <div className="text-purple-500 text-3xl mb-4">
            <i className="fas fa-chart-line"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Market Insight</h3>
          <p className="text-gray-400 text-sm">
            Stay ahead of market trends with our expert Market Analysis. We
            provide in-depth insights into real estate market conditions.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900 rounded-lg shadow-md p-6">
          <div className="text-purple-500 text-3xl mb-4">
            <i className="fas fa-chart-pie"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">ROI Assessment</h3>
          <p className="text-gray-400 text-sm">
            Make investment decisions with confidence. Our ROI Assessment
            services evaluate the potential returns on your investments.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-900 rounded-lg shadow-md p-6">
          <div className="text-purple-500 text-3xl mb-4">
            <i className="fas fa-cogs"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Customized Strategies</h3>
          <p className="text-gray-400 text-sm">
            Every investor is unique, and so are their goals. We develop
            Customized Investment Strategies tailored to your specific needs.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-900 rounded-lg shadow-md p-6">
          <div className="text-purple-500 text-3xl mb-4">
            <i className="fas fa-balance-scale"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Diversification Mastery</h3>
          <p className="text-gray-400 text-sm">
            Diversify your real estate portfolio effectively. Our experts guide
            you in spreading your investments across various property types and
            locations.
          </p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-900 rounded-lg shadow-md p-6 mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4">
          Unlock Your Investment Potential
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          Explore our Property Management Service categories and let us handle
          the complexities while you enjoy the benefits of property ownership.
        </p>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-md text-sm">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default InvestmentSection;
