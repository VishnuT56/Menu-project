import React from "react";
import { FaPhoneAlt,  FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (

    <footer className="bg-black text-white py-4">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      
      {/* Connect With Us */}
      <div className="border rounded-lg p-4">
        <h3 className="text-blue-400 font-bold">CONNECT WITH US</h3>
        <div className="flex items-center justify-center space-x-2 mt-2">
          <FaPhoneAlt className="text-yellow-400" />
          <span className="text-xs md:text-base">+91 9567843340</span>
        </div>
      </div>

      {/* Logo Section */}
      <div className="border rounded-lg p-4 flex flex-col items-center">
        <img src={logo} alt=" " className="w-10 -mt-9 mb-5 ml-1 items-center" />
        <div className="text-lg md:text-2xl font-bold text-blue-400">DEEP <span className="text-gray-400">NET</span> <span className="text-gray-600">SOFT</span></div>
      </div>

      {/* Find Us */}
      <div className="border rounded-lg p-4">
        <h3 className="text-blue-400 font-bold">FIND US</h3>
        <div className="flex items-center justify-center space-x-2 mt-2 text-xs md:text-base">
          <FaMapMarkerAlt className="text-yellow-400" />
          <span>First floor, Geo Infopark, Infopark EXPY, Kakkanad</span>
        </div>
      </div>
    </div>

   
        {/* Bottom Bar*/}
        <div className="border-t border-gray-700 mt-6 pt-4 text-gray-400 justify-start ">
            <p>© 2024 Deepnetsoft Solutions. All rights reserved.</p>
            <div className="flex text-end justify-end space-x-4 mt-3">
              <a href="#" className="hover:text-white">Terms & Conditions</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
       

  </div>
</footer>
  );
}
