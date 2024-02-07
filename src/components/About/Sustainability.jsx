import React from "react";
import box from "../../assets/box.png";
import about2 from "../../assets/about2.jpg";

const Sustainability = () => {
  return (
    <div className="w-full">
      <div className="w-[80%]  max-w-[1200px] py-8 md:mb-40 mb-8 md:my-8 my-5 mx-auto">
        <div className="flex  md:flex-row flex-col lg:gap-44 md:gap-10 gap-10">
          <div className=" md:w-[50%] w-full md:px-0 px-4 md:mb-0 mb-14">
            <div className="relative top-16   ">
              <div className="absolute -z-10 md:top-[-55px] md:left-[-55px] top-[-35px] left-[-35px]">
                <img
                  src={box}
                  alt=""
                  width={190}
                  height={170}
                  className="object-cover lg:w-[190px] lg:h-[180px] md:w-[170px] md:h-[165px] w-[170px] h-[150px] rounded-3xl"
                  loading="lazy"
                />
              </div>
              <img
                src={about2}
                alt=""
                width={520}
                height={830}
                className=" object-cover rounded-t-3xl rounded-bl-3xl rounded-br-[7.5rem]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:w-[50%] w-full  lg:mt-40 md:mt-4 mt-0 md:px-0 px-4">
            <div className="flex gap-4 items-center ">
              <div className="w-3 h-3 bg-[#f6f7eb] "></div>
              <h4 className="text-xl font-[600] text-[#EF4030]">
              Our Commitment to Sustainability

              </h4>
            </div>
            <h1 className="py-4 lg:text-[50px] md:text-[40px] text-[30px] leading-none font-[600] text-[#EF4030]">
            Cultivating with Integrity and Compassion
            </h1>
            <div className="flex flex-col gap-y-4">
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#f6f7eb] leading-tight">
              Our philosophy transcends mere commerce; it's about sharing narratives as vibrant as the spices in our jars. Through our dedication to meticulous sourcing, we've forged enduring partnerships with esteemed retailers like Spice Emporium and Spice Junction, fostering trust for over a decade.
              </p>
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#f6f7eb] leading-tight">
              In today's conscientious culinary landscape, where the journey of ingredients is as cherished as their taste, Flavour Junction shines. We are educators, stewards of the land, and a close-knit community, dedicated to upholding the tradition of ethical sourcing and reveling in the essence of fresh, aromatic spices.
              </p>
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#f6f7eb] leading-tight">
              Discover our dedication at Varanasi Spice Market, where the essence of our spices, the depth of our tales, and the warmth of Indian hospitality beckon you to join in our heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;