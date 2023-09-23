import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsChatSquareDots } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillGooglePlusCircle,
} from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-slate-600/50">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="#Deals">Deals</a>
        </li>
        <li>
          <a href="#booking">booking</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer">
          <AiFillFacebook className="mx-4" />
        </a>

        <a href="https://instagram.com/danish_shaikh321?igshid=MjEwN2IyYWYwYw=="           
        target="_blank"
        rel="noopener noreferrer">
        <AiFillInstagram className="mx-4" /></a>

        <a href=""
         target="_blank"
         rel="noopener noreferrer">
        <AiFillTwitterSquare className="mx-4" /></a>

        <a href=""
            target="_blank"
             rel="noopener noreferrer">
        <AiFillGooglePlusCircle className="mx-4" /></a>
      </div>
      {/* hamburger icons */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      {/* mobile menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 top-0 w-full left-0 h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2x1 py-8">
            <a href="/">home</a>
          </li>
          <li className="text-2x1 py-8">
            <a href="#Deals">Deals</a>
          </li>
          <li className="text-2x1 py-8">
            <a href="#booking">booking</a>
          </li>
          <li className="text-2x1 py-8">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2x1 py-8">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
