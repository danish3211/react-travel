import React from "react";
import { AiFillPhone, AiFillClockCircle } from "react-icons/ai";
import { MdModeOfTravel } from "react-icons/md";
const Topbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <MdModeOfTravel size={40} className="text-[var(--primary-dark)] mr-2" />
        <h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
      </div>

      <div className="flex">
        <div className="hidden md:flex  items-center  px-6">
          <AiFillClockCircle size={20} className="mr-2 text-[var(--primary-dark)]"/>
          <p className="text-sm text-gray-800">9AM - 5PM</p>
        </div>

        <div className="hidden md:flex  items-center  px-6">
          <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]"/>
          <p className="text-sm text-gray-800">9106757579</p>
        </div>
        <button>get a free quoto</button>
      </div>
    </div>
  );
};

export default Topbar;
