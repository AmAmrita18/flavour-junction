import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import ctaImage from "/hero1.jpg";

const Cta = () => {
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
          View our Products
        </h1>

        <Link to="/products" className="text-[#393e41] bg-[#EF4030] transition-all duration-700 ease-in-out  hover:scale-95   flex items-center gap-3 mt-8 px-8  py-5 rounded-full font-[600] text-[17px]">
          Explore Now <GoArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Cta;