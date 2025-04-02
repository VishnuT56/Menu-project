
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black px-4 md:px-10 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-10 mr-2 ml-2 md:ml-10" />
        <span className="text-white text-xl font-bold">
          <span className="text-blue-500">DEEP NET</span> <br/><span className="text-gray-400">SOFT</span>
        </span>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navigation Links */}
      <ul className={`md:flex md:space-x-6 absolute md:static bg-black md:bg-transparent top-16 left-0 w-full md:w-auto p-5 md:p-0 transition-all ${isOpen ? "block" : "hidden"}`}>
        <li><Link to="/home" className="block py-2 text-white hover:text-blue-500">HOME</Link></li>
        <li><Link to="/" className="block py-2 text-blue-500 font-semibold">MENU</Link></li>
        <li><Link to="/reservation" className="block py-2 text-white hover:text-blue-500">MAKE A RESERVATION</Link></li>
        <li><Link to="/contact" className="block py-2 text-white hover:text-blue-500">CONTACT US</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
