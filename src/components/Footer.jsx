import React from "react";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full ">
      <div className="w-[80%] max-w-[1200px] px-4 py-8 mx-auto">
        <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-5 justify-between border-b border-[#eb5e28] md:py-20 py-6 items-center  ">
          <ul className="flex lg:gap-x-14 md:gap-x-10 gap-x-[0.65rem] lg:text-[18px] md:[text-15px] text-[10px] font-[500] text-[#f6f7eb] leading-6">
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <Link to="/">HOME</Link>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <Link to="/about">ABOUT US</Link>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <Link to="/products">PRODUCTS</Link>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
          <h1 className="text-[#f6f7eb] tracking-[0.3em]  md:text-[20px] text-[17px] font-[600]">
            FLAVOUR JUNCTION
          </h1>
        </div>

        <div className="flex py-16 mb-2">
          <div className="w-[35%] flex md:flex-row flex-col md:my-0 my-auto gap-5  items-center">
            <div className="w-7 cursor-pointer h-7 rounded-full flex items-center justify-center border border-[#EF4030]">
              <TiSocialFacebook className="text-[#f6f7eb] text-lg" />
            </div>
            <div className="w-7 h-7 cursor-pointer rounded-full flex items-center justify-center border border-[#EF4030]">
              <IoLogoInstagram className="text-[#f6f7eb] text-xs" />
            </div>
          </div>

          <div className="w-[65%] flex justify-end border-l border-[#EF4030]">
            <p className="lg:text-[19px] md:text[18px] text-[16px] w-[70%] text-end font-[400] text-[#f6f7eb] leading-tight">
            Embark on a Culinary Voyage with Flavour Junction: A Heritage of Spice Fusion Crafted from India's Rich Culinary Legacy. Bringing You Unique Flavors and Spice Stories for Over 40 Years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;