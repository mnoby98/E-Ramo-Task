import React from "react";

const Subscribe = () => {
  return (
    <div>
      <h3 className="text-white mb-3 text-[12px]  font-semibold">
        We Are Ready To Help!
      </h3>
      <div className="flex">
        <input
          placeholder="Enter Your Email"
          className="  w-[272px]  placeholder-[#545454] px-[26px] py-[6.5px]  bg-[#F3F1F1]  rounded-l-sm"
        />
        <button className=" bg-[#F40000] rounded-r-sm font-medium text-white text-[12px] px-1 py-[6.5px]">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
