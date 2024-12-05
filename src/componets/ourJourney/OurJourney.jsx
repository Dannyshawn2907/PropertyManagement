import React from 'react';
import About1 from '../../assets/About1.png';
import Star from '../../assets/Star1.png'

const OurJourney = () => {
  return (
    <section className="bg-black text-white py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold"><span className='animate-pulse'><img src={Star} alt="" /></span> <br />Our Journey</h2>
          <p className="text-gray-400">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined
            to create a real estate platform that transcended the ordinary. Over the years, we’ve expanded our reach,
            forged valuable partnerships, and gained the trust of countless clients.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">200+</p>
              <p className="text-gray-400 text-sm">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">10k+</p>
              <p className="text-gray-400 text-sm">Properties For Clients</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">16+</p>
              <p className="text-gray-400 text-sm">Years of Experience</p>
            </div>
          </div>
        </div>

        
        <div className="flex items-center justify-center">
          <img
            src={About1}
            alt="A model house on hand"
            className="max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
