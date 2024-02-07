import React from "react";
import box from "../../assets/box.png";
import home3 from "../../assets/home2.png";

const Collections = () => {
  return (
    <div className="w-full">
      <div className="w-[80%]  max-w-[1200px] pt-8 pb-8 lg:my-20 md:my-10 my-5 mx-auto">
        <div className="flex md:flex-row flex-col-reverse lg:gap-28 md:gap-8 gap-4">
          <div className="md:w-[55%] w-full md:px-0 px-4 lg:mt-12 md:mt-4 mt-0">
            <div className="flex gap-4 items-center ">
              <div className="w-3 h-3 bg-[#f6f7eb] "></div>
              <h4 className="text-xl font-[600] text-[#EF4030]">
              Flavour Junction's Exquisite Collection
              </h4>
            </div>
            <h1 className="py-4  lg:text-[50px] md:text-[40px] text-[30px]  leading-none lg:pr-10 md:pr-0 pr-0 font-[600] text-[#EF4030]">
            A Fusion of Timeless Tastes and Modern Flair
            </h1>
            <div className="flex flex-col gap-y-4">
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#f6f7eb] leading-tight">
              At Flavour Junction, we infuse traditional flavours with contemporary flair to offer you an unmatched culinary journey. Our seasoned artisans are constantly refining their skills to select the finest spices from across India. It's not just a transaction; it's an intimate exploration into the soul of Indian gastronomic tradition.
              </p>
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#f6f7eb] leading-tight">
              In our bustling market, we're more than mere merchants; we're storytellers, guardians of a vibrant spice legacy. Our stall is a trove of aromatic treasures, ready to elevate your next culinary escapade.
              </p>
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#f6f7eb] leading-tight">
              Indulge in the authentic flavours of India. Let Flavour Junction be your gateway to crafting unforgettable dishes and forging lasting memories, one flavour at a time.
              </p>
            </div>
          </div>
          <div className=" md:w-[45%]  w-full md:px-0 px-4 md:mb-0 mb-14">
            <div className="relative rounded-tl-[48px] ">
                <img
                  src={home3}
                  alt=""
                  width={565}
                  height={830}
                  className=" object-cover rounded-b-3xl rounded-tr-3xl rounded-tl-[7.5rem]"
                  loading="lazy"
                />
               <div className="absolute -z-10 md:right-[-55px] md:bottom-[-55px]  right-[-35px] bottom-[-35px]">
                <img
                  src={box}
                  alt=""
                  width={190}
                  height={170}
                  className="object-cover lg:w-[190px] lg:h-[180px] md:w-[170px] md:h-[165px] w-[160px] h-[140px] rounded-3xl"
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

export default Collections;