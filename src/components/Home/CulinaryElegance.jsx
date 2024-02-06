import React from "react";
import box from "../../assets/box.png";
import home4 from "../../assets/home4.jpg";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

import { IoLocationOutline } from "react-icons/io5";

const CulinaryElegance = () => {
  return (
    <div className="w-full">
      <div className="w-[80%]  max-w-[1200px] lg:pt-8 md:pt-0 pt-0 lg:pb-24 md:pb-16 pb-14 md:my-12 my-0 mx-auto">
        <div className="flex md:flex-row flex-col lg:gap-28 md:gap-12 gap-3">
          <div className=" md:w-[44%] w-full md:px-0 px-4 md:mb-0 mb-8">
            <div className="relative  top-16  rounded-tl-[48px] ">
              <div className="absolute -z-10 md:left-[-55px] md:bottom-[-55px] left-[-35px] bottom-[-35px]">
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
                  src={home4}
                  alt=""
                  width={565}
                  height={830}
                  className=" object-cover rounded-t-3xl rounded-bl-3xl rounded-br-[7.5rem]"
                  loading="lazy"
                />
                
              </div>
            </div>
          </div>
          <div className="md:w-[56%] w-full md:px-0 px-6 mt-16">
            <div className="flex gap-4 items-center ">
              <div className="w-3 h-3 bg-[#f6f7eb] "></div>
              <h4 className="text-xl font-[600] text-[#EF4030]">
              Spice Emporium's Culinary Elegance
              </h4>
            </div>
            <h1 className="py-4 lg:text-[50px] md:text-[40px] text-[30px]  leading-none font-[600] text-[#EF4030]">
            A Symphony of Time-Honored Flavors            </h1>
            <div className="flex flex-col gap-y-4">
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] pr-8 text-[#f6f7eb]  leading-tight">
              At Spice Emporium, we marry the richness of tradition with the elegance of modernity, presenting you with an unparalleled gastronomic odyssey. Our seasoned connoisseurs tirelessly refine their expertise to curate the most exquisite spices from every corner of India. It's not just a mere transaction; it's a heartfelt journey delving into the essence of Indian culinary heritage.
              </p>
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] pr-8 text-[#f6f7eb] lg:mb-14 md:mb-6 mb-3 leading-tight">
              Savor the authentic allure of India's spices. Let Spice Emporium be your portal to crafting unforgettable culinary masterpieces and weaving enduring culinary memories, one spice at a time.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulinaryElegance;