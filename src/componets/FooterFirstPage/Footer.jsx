import React from "react";
import Logo from "../../assets/Logo.png";
import Tele from "../../assets/Tele.png";
import Facebook from "../../assets/Facebook.png";
import Link from "../../assets/Link.png";
import Twitter from "../../assets/Twitter.png";
import Youtub from "../../assets/Youtub.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto lg:flex px-6 lg:gap-36">
        <div className="lg:">
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-8 w-8 flex items-center justify-center">
              <img src={Logo} alt="Estatein Logo" className="h-full" />
            </div>
            <span className="text-xl font-semibold animate-pulse">
              Estatein
            </span>
          </div>
          <div className="flex items-center bg-gray-800 rounded-md p-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent flex-grow text-sm px-2 py-2 outline-none placeholder-gray-400"
            />
            <button>
              <img src={Tele} alt="Subscribe" className="h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 pt-6 lg:pt-0 lg:flex lg:gap-36">
          <div className="">
            <h3 className="text-lg font-semibold pb-1">Home</h3>
            <ul className="space-y-2 text-sm">
              <li>Hero Section</li>
              <li>Features</li>
              <li>Properties</li>
              <li>Testimonials</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold pb-1">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Our Story</li>
              <li>Our Works</li>
              <li>How It Works</li>
              <li>Our Team</li>
              <li>Our Clients</li>
              <li>Contact Form</li>
              <li>Our Offices</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold pb-1">Properties</h3>
            <ul className="space-y-2 text-sm">
              <li>Portfolio</li>
              <li>Categories</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold pb-1">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Valuation Mastery</li>
              <li>Strategic Marketing</li>
              <li>Negotiation Wizardry</li>
              <li>Closing Success</li>
              <li>Property Management</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-center md:text-left">
            ©2024 Estatein By{" "}
            <span className="animate-pulse underline text-zinc-400">
              OLUWAKORE
            </span>
            . All Rights Reserved.
            <span className="ml-4">Terms & Conditions</span>
            <div className="py-8 text-justify pl-60 ">
              <a
                href="https://www.instagram.com/oluwakoretimi1"
                target="_blank"
                rel="noopener noreferrer"
                className="underline animate-pulse hover:text-blue-500"
              >
                <p className="text-balance text-center">
                  <button>Developer Instagram Profile 🔝</button>
                </p>
              </a>
            </div>
          </p>
          <div className="flex space-x-4">
            {[Facebook, Link, Twitter, Youtub].map((icon, index) => (
              <div
                key={index}
                className="bg-gray-700 h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-600 transition"
              >
                <img src={icon} alt={`Icon ${index + 1}`} className="h-4 w-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
