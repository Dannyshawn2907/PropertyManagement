import React, { useState } from 'react';
import Star from '../../assets/Star1.png'


const Steps = () => {
  const steps = [
    {
      step: 'Step 01',
      title: 'Discover a World of Possibilities',
      description:
        'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.',
    },
    {
      step: 'Step 02',
      title: 'Narrowing Down Your Choices',
      description:
        'Once you’ve found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.',
    },
    {
      step: 'Step 03',
      title: 'Personalized Guidance',
      description:
        'Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.',
    },
    {
      step: 'Step 04',
      title: 'See It for Yourself',
      description:
        'Arrange viewings of the properties you’re interested in. We’ll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.',
    },
    {
      step: 'Step 05',
      title: 'Making Informed Decisions',
      description:
        'Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.',
    },
    {
      step: 'Step 06',
      title: 'Getting the Best Deal',
      description:
        'We’ll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.',
    },
  ];

  
  const [activeStep, setActiveStep] = useState(null);

  
  const toggleStep = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
       
        <div className="mb-8 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold"><span className='animate-pulse'><img src={Star} alt="" /></span> <br />Navigating the Estatein Experience</h2>
          <p className="text-gray-400">
            At Estatein, we’ve designed a straightforward process to help you find and purchase your dream property with ease. Here’s a step-by-step guide to how it all works.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg transition hover:bg-gray-700"
            >
          
              <div
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleStep(index)}
              >
                <div>
                  <p className="text-purple-400 font-bold mb-2">{step.step}</p>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <span
                  className={`text-gray-400 transform transition-transform ${
                    activeStep === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeStep === index ? 'max-h-screen p-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
