import React from 'react';
import Star from '../../assets/Star1.png'
import About1 from '../../assets/ContainerAbout1.png';
import About2 from '../../assets/ContainerAbout2.png';
import About3 from '../../assets/ContainerAbout3.png';

const OurValues = () => {
  const values = [
    {
      title: 'Trust',
      description: 'Trust is the cornerstone of every successful real estate transaction.',
      icon: <img src={About1} alt="" />,
    },
    {
      title: 'Excellence',
      description: 'We set the bar high for ourselves. From the properties we list to the services we provide.',
      icon: <img src={About2} alt="" />, 
    },
    {
      title: 'Client-Centric',
      description: 'Your dreams and needs are at the center of our universe. We listen, understand.',
      icon: <img src={About3} alt="" />,
    },
    {
      title: 'Our Commitment',
      description: 'We are dedicated to providing you with the highest level of service, professionalism, and support.',
      icon: <img src={About1} alt="" />, 
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold"> <span className='animate-pulse'><img src={Star} alt="" /></span> <br />Our Values</h2>
          <p className="text-gray-400">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined
            to create a real estate platform that transcended the ordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg flex space-x-4 items-start hover:bg-gray-700 transition"
            >
              <div className="text-purple-500 text-2xl">{value.icon}</div>
              <div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-gray-400 mt-2">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
