import React from "react";
import box from "../../assets/box.png";
import home4 from "../../assets/contact1.jpg";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

import { IoLocationOutline } from "react-icons/io5";

const GetInTouch = () => {
  return (
    <div className="w-full">
      <div className="w-[80%]  max-w-[1200px] lg:pt-8 md:pt-0 pt-0 lg:pb-24 md:pb-16 pb-4 md:my-12 my-0 mx-auto">
        <div className="flex md:flex-row flex-col lg:gap-28 md:gap-12 gap-3">
          <div className=" md:w-[44%] w-full md:px-0 px-4 md:mb-0 mb-8">
            <div className="relative  top-16  rounded-tl-[48px] ">
              <div className="absolute -z-10 md:left-[-55px] md:top-[-55px] left-[-35px] top-[-35px]">
                <img
                  src={box}
                  alt=""
                  width={190}
                  height={170}
                  className="object-cover lg:w-[190px] lg:h-[180px] md:w-[170px] md:h-[165px] w-[160px] h-[140px] rounded-3xl"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  src={home4}
                  alt=""
                  width={620}
                  height={840}
                  className=" object-cover  rounded-t-3xl rounded-bl-3xl rounded-br-[7.5rem]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="md:w-[56%] w-full md:px-0 px-6 mt-24">
            <div className="flex gap-4 items-center ">
              <div className="w-3 h-3 bg-[#f6f7eb] "></div>
              <h4 className="text-xl font-[600] text-[#EF4030]">
              Spice up your conversations with Flavour Junction
              </h4>
            </div>
            <h1 className="py-4 lg:text-[50px] md:text-[40px] text-[30px]  leading-none font-[600] text-[#EF4030]">
              Get in touch with us
            </h1>
            <div className="flex flex-col gap-y-4">
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] pr-8 text-[#f6f7eb] lg:mb-14 md:mb-6 mb-3 leading-tight">
              Delve into the depths of our spice world. Connect with us for tailored service and explore the flavours that define Flavour Junction.
              </p>
            </div>

            <div className="flex flex-col gap-y-8 md:mt-0 mt-4 ">
              <div className="flex flex-row items-center gap-4">
                <div className="md:w-14 w-10 md:h-14 h-10 cursor-pointer bg-[#f6f7eb] flex items-center justify-center rounded-full">
                  <IoCallOutline className="text-[#EF4030] text-2xl" />
                </div>
                <div className="flex flex-col ">
                  <h2 className="md:text-[17px] text-[14px] font-[400] text-[#f6f7eb] leading-tight">
                  Have inquiries? Give us a call at:
                  </h2>
                  <p className="lg:text-[19px] md:text-[18px] text-[11px] font-[200] text-[#EF4030] leading-tight">
                  +91 XXXXX84340
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4">
                <div className="md:w-14 w-10 md:h-14 h-10 cursor-pointer bg-[#f6f7eb] flex items-center justify-center rounded-full">
                  <IoMailOutline className="text-[#EF4030] text-2xl" />
                </div>
                <div className="flex flex-col ">
                  <h2 className="md:text-[17px] text-[14px] font-[400] text-[#f6f7eb] leading-tight">
                    Email us your queries:
                  </h2>
                  <p className="lg:text-[19px] md:text-[18px] text-[11px] font-[200] text-[#EF4030] leading-tight">
                    info@flavourjunction.shop
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4">
                <div className="md:w-14 w-10 md:h-14 h-10 cursor-pointer bg-[#f6f7eb] flex items-center justify-center rounded-full">
                  <IoLocationOutline className="text-[#EF4030] text-2xl" />
                </div>
                <div className="flex flex-col">
                  <h2 className="md:text-[17px] text-[14px] font-[400] text-[#f6f7eb] leading-tight">
                    Visit our stall:
                  </h2>
                  <p className="lg:text-[19px] md:text-[18px] text-[11px] font-[200] text-[#EF4030] leading-tight">
                    Stall Number 4, Varanasi Spice Market
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;