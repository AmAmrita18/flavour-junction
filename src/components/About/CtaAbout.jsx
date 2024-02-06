import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import ctaImage from "/hero1.jpg";

const CtaAbout = () => {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url('${ctaImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <div className="w-[80%] h-full mx-auto max-w-[1200px] flex flex-col justify-center items-center">
        <h1 className="lg:text-7xl md:text-6xl text-5xl leading-tight text-center mt-24 text-[#f6f7eb] font-[600]">
          View Our Products
        </h1>
        <p className="lg:text-[19px] text-center md:px-20 px-4 pt-6 md:text-[18px] text-[15px] font-[400] text-[#f6f7eb] leading-tight">Step into a world of sensory delight at Flavor Junction, where our extensive array of spices awaits your exploration. From the vibrant hues of turmeric to the smoky richness of cumin, each jar tells a story of India's diverse culinary landscape. Immerse yourself in our aromatic offerings and elevate your dishes to new heights of flavor.</p>

        <Link to="/products" className="text-[#f6f7eb] bg-[#EF4030] transition-all duration-700 ease-in-out  hover:scale-95   flex items-center gap-3 mt-8 px-8  py-5 rounded-full font-[600] text-[17px]">
          Explore Now<GoArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default CtaAbout;