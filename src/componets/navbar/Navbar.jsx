import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row text-center gap-5 justify-center py-4 text-white text-sm items-center bg-gray-800">
        ✨ Discover Your Dream Property with Estatein
        <a
          href="https://www.instagram.com/oluwakoretimi1"
          target="_blank"
          rel="noopener noreferrer"
          className="underline animate-pulse hover:text-gray-300"
        >
          Learn More  
        </a>
      </div>

      <nav className="flex flex-wrap items-center justify-between px-4 md:px-9 bg-[#1A1A1A] text-white py-4">
        <h2 className="flex items-center gap-3 text-lg font-semibold">
          <img src={Logo} alt="Estatein Logo" className="h-8 animate-pulse" />
          Estatein
        </h2>

        <ul className="hidden md:flex gap-5">
          <li className="hover:text-gray-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/Properties">Properties</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/servicesPage">Services</Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="bg-black p-2 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>

        <button className="hidden md:block bg-black py-2 px-5 rounded shadow-sm hover:bg-gray-700">
          <Link to="/Contact">Contact Us</Link>
        </button>

        {isMobileMenuOpen && (
          <ul className="flex flex-col items-center gap-4 mt-4 bg-[#1A1A1A] text-white py-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Properties">Properties</Link>
            </li>
            <li>
              <Link to="/servicesPage">Services</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
