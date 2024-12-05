import React, { useState } from "react";
import Star from '../../assets/Star1.png'

const ValuedClients = () => {
  const clients = [
    {
      since: "2019",
      name: "ABC Corporation",
      domain: "Commercial Real Estate",
      category: "Luxury Home Development", 
      testimonial:
        "Estraten's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
      website: "#",
    },
    {
      since: "2018",
      name: "GreenTech Enterprises",
      domain: "Commercial Real Estate",
      category: "Retail Space",
      testimonial:
        "Estraten's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
      website: "#",
    },
  ];

  return (
    <section className="bg-gray-900 text-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Valued Clients</h1>
        <p className="text-gray-400 mb-8">  
          <span className='animate-pulse'>
            <img src={Star} alt="" />
          </span> 
          <br />
          At Estraten, we have had the privilege of working with a diverse range of clients
          across various industries. Here are some of the clients we've had the pleasure of
          serving.
        </p>
        <div className="grid md:grid-cols-2 gap-9 animate-fade-in-up">
          {clients.map((client, index) => (
            <ClientCard key={index} client={client} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition">
            &larr;
          </button>
          <p className="text-gray-400 animate-pulse">01 of 10</p>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition">
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

const ClientCard = ({ client }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
      <p className="text-sm text-gray-500">Since {client.since}</p>
      <h2 className="text-xl font-semibold mb-2">{client.name}</h2>
      <p className="text-gray-400 mb-2">
        <span className="font-bold">Domain:</span> {client.domain}
      </p>
      <p className="text-gray-400 mb-4">
        <span className="font-bold">Category:</span> {client.category}
      </p>
      <div className="bg-gray-700 p-4 rounded mb-4">
        <p className="text-sm italic">What They Said....</p>
        <p className="text-sm text-gray-300">
          {isExpanded ? client.testimonial : `${client.testimonial.slice(0, 50)}...`}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-400 text-sm underline mt-2"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
      <a
        href={client.website}
        className="block text-center text-white px-4 py-3 rounded hover:bg-blue-700 transition"
      >
        Visit Website
      </a>
    </div>
  );
};

export default ValuedClients;
