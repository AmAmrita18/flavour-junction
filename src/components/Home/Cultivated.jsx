import React from "react";
import box from "../../assets/box.png";
import home2 from "../../assets/home1.jpg";
import { FaCheck } from "react-icons/fa6";

const Cultivated = () => {
  return (
    <div className="w-full">
      <div className="w-[80%]  max-w-[1200px] md:pt-16 md:pb-16 pt-12 pb-5 mx-auto">
        <div className="flex md:flex-row flex-col lg:gap-16 md:gap-4 gap-3 ">
          <div className=" md:w-[40%] w-full md:px-0 px-4 md:mb-0 mb-16">
            <div className="relative rounded-bl-[48px] ">
              <div className="absolute -z-10 md:left-[-55px] md:bottom-[-55px] left-[-35px] bottom-[-35px]">
                <img
                  src={box}
                  alt=""
                  width={190}
                  height={180}
                  className="object-cover lg:w-[190px] lg:h-[180px] md:w-[170px] md:h-[165px] w-[170px] rounded-3xl"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  src={home2}
                  alt=""
                  width={460}
                  height={700}
                  className=" object-cover rounded-b-3xl rounded-tl-3xl rounded-tr-[7.5rem]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="md:w-[60%] w-full px-4 lg:ml-8 md:ml-4 ml-0 lg:mt-8 md:mt-4 mt-1">
            <div className="flex gap-4 items-center ">
              <div className="w-3 h-3 bg-[#f6f7eb] "></div>
              <h4 className="text-xl font-[600] leading-none text-[#EF4030]">
              Cultivated with Passion, Delivered with Joy
              </h4>
            </div>
            <h1 className="py-4 lg:text-[50px] md:text-[40px] text-[30px] leading-tight font-[600] text-[#EF4030]">
            Our Farm-to-Flavor Journey
            </h1>
            <div className="flex flex-col gap-y-4">
              <p className="lg:text-[19px] md:text-[18px] text-[15px]  font-[400] text-[#f6f7eb] leading-tight">
              Step into the vibrant realm of Flavour Junction and behold the meticulous path of our spices. From the lush fields across India, through our cutting-edge processing units, to your kitchen, we ensure every aroma and essence meets our exacting criteria.
              </p>
              <p className="lg:text-[19px] md:text-[18px] text-[15px]  font-[400] text-[#f6f7eb] leading-tight">
              Our facilities are crafted to preserve the spices' potency, boasting:
              </p>
            </div>
            <ul className="flex md:flex-row flex-col md:gap-y-0 gap-y-1 lg:gap-x-8 md:gap-x-4 gap-x-1 lg:mt-8 md:mt-4 mt-4">
              <div className="flex flex-col md:gap-y-4 gap-y-1 justify-between">
                <div className="flex  items-center  gap-4">
                  <div className="w-[14px] h-[14px] rounded-full flex items-center bg-[#f6f7eb]">
                    <FaCheck className="w-[11px] h-[11px]  text-[#393e41]" />
                  </div>
                  <li className="lg:text-[18px] md:text-[18px] text-[13px]  font-[600] text-[#EF4030] leading-tight">
                  Cool Storage Chambers
                  </li>
                </div>
                <div className="flex items-center  gap-4">
                  <div className="w-[14px] h-[14px] rounded-full flex items-center bg-[#f6f7eb]">
                    <FaCheck className="w-[11px] h-[11px]  text-[#393e41]" />
                  </div>
                  <li className="lg:text-[18px] md:text-[18px] text-[13px]  font-[600] text-[#EF4030] leading-tight">
                  Eco-friendly Packaging Zones
                  </li>
                </div>
              </div>
              <div className="flex flex-col md:gap-y-4 gap-y-1 justify-between ">
                <div className="flex items-center  gap-4">
                  <div className="w-[14px] h-[14px] rounded-full flex items-center bg-[#f6f7eb]">
                    <FaCheck className="w-[11px] h-[11px]  text-[#393e41]" />
                  </div>
                  <li className="lg:text-[18px] md:text-[18px] text-[13px]  font-[600] text-[#EF4030] leading-tight">
                  Stringent Quality Checkpoints
                  </li>
                </div>

                <div className="flex items-center  gap-4">
                  <div className="w-[14px] h-[14px] rounded-full flex items-center bg-[#f6f7eb]">
                    <FaCheck className="w-[11px] h-[11px]  text-[#393e41]" />
                  </div>
                  <li className="lg:text-[18px] md:text-[18px] text-[13px]  font-[600] text-[#EF4030] leading-tight">
                  Engagement-Centric Spice Stand
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cultivated;