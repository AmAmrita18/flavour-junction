import React from "react";

const Copyright = () => {
  return (
    <div className="w-full bg-[#EF4030]">
      <div className="w-[80%] max-w-[1200px] px-4 py-8  mx-auto">
        <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-2 justify-between">
          <h1 className="text-[#393e41] text-center lg:text-[19px] md:text-[18px] text-[11px] font-[400]">
            © Flavour Junction 2024 – All Rights Reserved.
          </h1>
          <h1 className="text-[#393e41] text-center lg:text-[19px] md:text-[18px] text-[11px] font-[400]">
            Made With Love in{" "}
            <span className="border-b border-[#393e41]">Bharat.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
