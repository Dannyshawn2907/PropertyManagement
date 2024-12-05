import React from "react";
import Star from '../../assets/Star1.png'
import Image1 from '../../assets/ImageAbout1.png';
import Image2 from '../../assets/ImageAbout2.png';
import Image3 from '../../assets/ImageAbout3.png';
import Image4 from '../../assets/ImageAbout4.png';

const Team = () => {
  const teamMembers = [
    {
      name: "Max Mitchell",
      role: "Founder",
      img: Image1, 
      twitter: "#",
    },
    {
      name: "Sarah Johnson",
      role: "Chief Real Estate Officer",
      img: Image2,
      twitter: "#",
    },
    {
      name: "David Brown",
      role: "Head of Property Management",
      img: Image3,
      twitter: "#",
    },
    {
      name: "Michael Turner",
      role: "Legal Counsel",
      img: Image4, 
      twitter: "#",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-8 space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold"> <span className='animate-pulse'><img src={Star} alt="" /></span> <br />Meet the Estatein Team</h2>
          <p className="text-gray-400">
            At Estatein, our success is driven by the dedication and expertise of our team. Get
            to know the people behind our mission to make your real estate dreams a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500"
            >
              <div className="relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                  <p className="text-purple-400 font-bold">{member.role}</p>
                  <h3 className="text-lg font-bold">{member.name}</h3>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M24 4.557a9.946 9.946 0 01-2.828.775 4.942 4.942 0 002.165-2.724 9.868 9.868 0 01-3.127 1.195 4.93 4.93 0 00-8.391 4.482A13.978 13.978 0 011.671 3.149a4.927 4.927 0 001.527 6.573 4.903 4.903 0 01-2.231-.616v.062a4.933 4.933 0 003.946 4.829 4.934 4.934 0 01-2.224.084 4.937 4.937 0 004.604 3.416 9.884 9.884 0 01-6.105 2.104c-.396 0-.788-.023-1.175-.069a13.945 13.945 0 007.557 2.213c9.054 0 14.001-7.496 14.001-13.986 0-.213-.005-.426-.015-.637a9.936 9.936 0 002.462-2.548l.002-.003z" />
                  </svg>
                </a>
                <button className="text-gray-300 px-4 py-2 rounded-lg shadow hover:bg-purple-600 transition">
                  Say Hello 👋
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
