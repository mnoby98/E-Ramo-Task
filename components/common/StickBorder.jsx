import React from "react";

const StickBorder = ({ h = "h-[11px]" }) => {
  return <div className={`${h} w-[1px] bg-[#B5B5B5] `} />; // " | "
};

export default StickBorder;
