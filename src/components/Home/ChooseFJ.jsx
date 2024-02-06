import React from "react";

const ChooseFJ = () => {
  return (
    <div className="w-full">
      <div className="w-[80%]  max-w-[1200px] pt-8 py-8 lg:my-20 md:my-14 my-5 mx-auto">
        <div className="flex flex-col items-center justify-center lg:mt-20 md:mt-4 mt-1">
          <div className="flex gap-4 items-center ">
            <div className="w-3 h-3 bg-[#f6f7eb] "></div>
            <h4 className="text-xl font-[600] text-[#EF4030]">
              Why choose Flavour Junction
            </h4>
          </div>
          <h1 className="py-4 lg:text-[50px] md:text-[40px] text-[30px]  text-center font-[600] leading-tight text-[#EF4030] ">
          Flavour Junction's Guarantee:<br />
          Embracing True Essence & Aromatic Freshness

          </h1>
          <div className="flex flex-col mt-6 gap-y-4">
            <p className="lg:text-[19px] md:text-[18px] text-[15px] text-center font-[400] md:mx-[7.75rem] mx-0 text-[#f6f7eb] leading-tight">
            Though our renown may precede us, we believe the authentic MasalaMania experience is best savored firsthand.

              <br />
              We extend a hearty invitation to explore our bustling stall at Kerela's spice market. Here, you can connect with our passionate team, immerse yourself in the irresistible aromas of our spices, and grasp why our patrons are drawn back time and again.
            </p>
            <p className="lg:text-[19px] md:text-[18px] text-[15px] text-center font-[400] text-[#f6f7eb] leading-tight">
            Our steadfast dedication to sourcing locally and delivering unparalleled quality isn't merely a statement; it's a commitment we uphold each day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseFJ;
