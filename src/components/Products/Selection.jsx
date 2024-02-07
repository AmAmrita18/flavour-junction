import React from "react";
import product1 from "../../assets/1cinnamon.jpg";
import product2 from "../../assets/2fennel-seed.jpg";
import product3 from "../../assets/3bay-leaf.jpg";
import product4 from "../../assets/4paprica.jpg";
import product5 from "../../assets/5garlic.jpg";
import product6 from "../../assets/6MUSTARD.jpg";
import product7 from "../../assets/7pepper.jpg";
import product8 from "../../assets/8turmeric.jpg";
import product9 from "../../assets/9saffron.jpg";
import product10 from "../../assets/10oregano.jpg";
import product11 from "../../assets/11cardamom.jpg";
import product12 from "../../assets/12ginger.jpg";
import product13 from "../../assets/13cloves.jpg";
import product14 from "../../assets//14cumin.jpg";
import product15 from "../../assets/15coriander.jpg";
const Selection = () => {
  return (
    <div className="w-full">
      <div className="w-[80%]  max-w-[1200px] py-8 mx-auto">
        <div className="flex flex-col items-center justify-center md:mt-24 mt-8">
          <div className="flex gap-4 items-center ">
            <div className="w-3 h-3 bg-[#f6f7eb]"></div>
            <h4 className="text-xl font-[600] text-[#EF4030]">
            Our Spice Selection
            </h4>
          </div>
          <h1 className="py-4 lg:text-[50px] md:text-[40px] text-[30px] text-center font-[600] lg:mx-32 mx-auto leading-tight text-[#EF4030] ">
          Spice up your culinary journey with our handpicked selection, bringing the vibrant flavours of India straight to your kitchen.
          </h1>
        </div>

        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-y-20 md:gap-y-12 gap-y-6 lg:mt-40 md:mt-24 mt-10">
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product1}
              width={390}
              height={480}
              className="object-cover aspect-square rounded-3xl"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0 w-full   h-[100px] rounded-2xl bg-[#EF4030] flex items-center ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl text-[#f6f7eb] font-[600] ml-6">Cinnamon</h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product2}
              width={390}
              height={480}
              className="object-cover aspect-square rounded-3xl"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#EF4030] flex items-center ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl text-[#f6f7eb] font-[600] ml-6">Fennel Seeds</h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto  transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product3}
              width={390}
              height={480}
              className="object-cover aspect-square rounded-3xl"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#EF4030] flex items-center ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl text-[#f6f7eb] font-[600] ml-6">
                Bay Leaf
              </h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product4}
              width={390}
              height={480}
              className="object-cover aspect-square rounded-3xl"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#EF4030] flex items-center ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl text-[#f6f7eb] font-[600] ml-6">
                Paprica
              </h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product5}
              width={390}
              height={480}
              className="object-cover aspect-square rounded-3xl"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#EF4030] flex items-center ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl text-[#f6f7eb] font-[600] ml-6">Garlic</h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product6}
              width={390}
              height={480}
              className="object-cover aspect-square rounded-3xl"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#EF4030] flex items-center ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl text-[#f6f7eb] font-[600] ml-6">Musturd</h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product7}
              width={390}
              height={480}
              className="object-cover aspect-square rounded-3xl"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#EF4030] flex items-center ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl text-[#f6f7eb] font-[600] ml-6">Pepper</h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product8}
              width={390}
              height={480}
              className="object-cover aspect-square rounded-3xl"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#EF4030] flex items-center ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl text-[#f6f7eb] font-[600] ml-6">Turmeric</h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product9}
              width={390}
              height={480}
              className="object-cover aspect-square rounded-3xl"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#EF4030] flex items-center ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl text-[#f6f7eb] font-[600] ml-6">
                Saffron
              </h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product10}
              width={390}
              height={480}
              className="object-cover aspect-square rounded-3xl"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#EF4030] flex items-center ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl text-[#f6f7eb] font-[600] ml-6">
                Oregano
              </h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product11}
              width={390}
              height={480}
              className="object-cover aspect-square rounded-3xl"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#EF4030] flex items-center ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl text-[#f6f7eb] font-[600] ml-6">
                Cardamom
              </h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product12}
              width={390}
              height={480}
              className="object-cover aspect-square rounded-3xl"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#EF4030] flex items-center ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl text-[#f6f7eb] font-[600] ml-6">
                Ginger
              </h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product13}
              width={390}
              height={480}
              className="object-cover aspect-square rounded-3xl"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#EF4030] flex items-center ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl text-[#f6f7eb] font-[600] ml-6">
                Cloves
              </h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product14}
              width={390}
              height={480}
              className="object-cover aspect-square rounded-3xl"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#EF4030] flex items-center ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl text-[#f6f7eb] font-[600] ml-6">
                Cumin
              </h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product15}
              width={390}
              height={480}
              className="object-cover aspect-square rounded-3xl"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#EF4030] flex items-center ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl text-[#f6f7eb] font-[600] ml-6">
                Coriander
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;