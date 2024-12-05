import React from 'react';
import Star from '../../assets/Star1.png'

const OurAchievements = () => {
  const achievements = [
    {
      title: '3+ Years of Excellence',
      description:
        'With over 3 years in the industry, we’ve amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.',
    },
    {
      title: 'Happy Clients',
      description:
        'Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.',
    },
    {
      title: 'Industry Recognition',
      description:
        'We’ve earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.',
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold"> <span className='animate-pulse'><img src={Star} alt="" /></span> <br />Our Achievements</h2>
          <p className="text-gray-400">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined
            to create a real estate platform that transcended the ordinary.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:bg-gray-700 transition"
            >
              <h3 className="text-xl font-bold mb-4">{achievement.title}</h3>
              <p className="text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
