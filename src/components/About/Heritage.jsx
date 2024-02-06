/* eslint-disable react/no-unescaped-entities */
import React from "react";
import box from "../../assets/box.png";
import about1 from "../../assets/about1.jpg";

import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Heritage = () => {
  return (
    <div className="w-full">
      <div className="w-[80%]  max-w-[1200px] py-8 lg:my-20 md:my-10 my-5 mx-auto">
        <div className="flex md:flex-row flex-col-reverse lg:gap-44 md:gap-10 gap-10">
          <div className="md:w-[50%] w-full lg:mt-40 md:mt-4 mt-0 md:px-0 px-4">
            <div className="flex gap-4 items-center ">
              <div className="w-3 h-3 bg-[#f6f7eb] "></div>
              <h4 className="text-xl font-[600] text-[#EF4030]">
              India's Spice Heritage
              </h4>
            </div>
            <h1 className="py-4 lg:text-[50px] md:text-[40px] text-[30px] leading-none font-[600] text-[#EF4030]">
            A Legacy of Aromatic Splendor
            </h1>
            <div className="flex flex-col gap-y-4">
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#f6f7eb] leading-tight">
              At Flavour Junction, we are more than just spice merchants; we are stewards of India's rich culinary legacy. For over three decades, we've journeyed across the vast expanse of India, sourcing the finest spices from the heartlands to the hinterlands. Our story, which began in 1985 with a vision by Mr. Ramesh Patel, is one of dedication, reverence for tradition, and a deep-rooted connection to the communities we serve.
              </p>
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#f6f7eb] leading-tight">
              Our approach blends age-old techniques with innovative methods to responsibly cultivate spices, honoring the land and preserving its bounty for generations to come. At the core of MasalaMania lies our mission not only to sell spices but also to enlighten and share the narratives behind each flavor we offer.
              </p>
            </div>
            <Link to="/about" className="text-[#f6f7eb] bg-[#EF4030] transition-all duration-700 ease-in-out hover:scale-95  flex items-center w-[230px] gap-3 mt-8 px-8 py-5 rounded-full font-[600] md:text-[17px] text-[15px]">
              Read About Us <GoArrowRight className="w-6 h-6" />
            </Link>
          </div>
          <div className=" md:w-[50%] w-full md:px-0 px-4 md:mb-0 mb-14">
            <div className="relative top-16   ">
              <div className="absolute -z-10 md:top-[-65px] md:right-[-55px] top-[-55px] right-[-35px]">
                <img
                  src={box}
                  alt=""
                  width={190}
                  height={170}
                  className="object-cover lg:w-[190px] lg:h-[180px] md:w-[170px] md:h-[165px] w-[170px] h-[150px] rounded-3xl"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  src={about1}
                  alt=""
                  width={520}
                  height={830}
                  className=" object-cover rounded-t-3xl rounded-br-3xl rounded-bl-[7.5rem]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heritage;