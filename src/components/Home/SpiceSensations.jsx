import React from "react";
import box from "../../assets/box.png";
import home1 from "../../assets/home3.jpg";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const SpiceSensations = () => {
  return (
    <div className="w-full">
      <div className="w-[80%]  max-w-[1200px] py-8 lg:my-20 md:my-10 my-5 mx-auto">
        <div className="flex md:flex-row flex-col lg:gap-44 md:gap-10 gap-10">
          <div className=" md:w-[50%] w-full md:mb-0 mb-8 md:px-0 px-4 ">
            <div className="relative top-16  rounded-tl-[48px] ">
              <div className="absolute -z-10  md:left-[-55px] md:top-[-55px] left-[-35px] top-[-35px]">
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
                src={home1}
                alt=""
                width={520}
                height={830}
                className=" object-cover rounded-t-3xl rounded-bl-3xl rounded-br-[7.5rem]"
                loading="lazy"
              />
              </div>
            </div>
          </div>
          <div className="md:w-[50%] w-full md:px-0 px-2 lg:mt-16  md:mt-8 mt-3">
            <div className="flex gap-4 items-center ">
              <div className="w-3 h-3 bg-[#f6f7eb] "></div>
              <h4 className="text-xl font-[600] text-[#EF4030]">
              India's Spice Sensations

              </h4>
            </div>
            <h1 className="py-4 lg:text-[50px] md:text-[40px] text-[30px] leading-none font-[600] text-[#EF4030]">
            From Farm to Flavour Tale
            </h1>
            <div className="flex flex-col gap-y-4">
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#f6f7eb] leading-tight">
              Selecting the perfect spice source is paramount for infusing your dishes with authentic taste and richness. At Flavour Junction, we aren't just about business; we're guardians of a culinary legacy deeply woven into the fabric of India. Since 1985, we've been curating a vibrant array of spices, each one representing the essence of India's diverse flavours.
              </p>
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#f6f7eb] leading-tight">
              We've cultivated enduring partnerships with local spice growers across the country, ensuring that every spice blend on our shelves and in leading markets reflects our unwavering commitment to quality.
              </p>
              
            </div>

            <Link to="/about" className="text-[#f6f7eb] w-[230px] bg-[#EF4030] transition-all duration-700 ease-in-out hover:scale-95  flex items-center gap-3 mt-8 px-8 py-5 rounded-full font-[600] text-[17px]">
              Read About Us <GoArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiceSensations;