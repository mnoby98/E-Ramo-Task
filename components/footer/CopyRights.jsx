import React from "react";
import copyright from "@/public/footer/copyright.svg";
import Image from "next/image";

const CopyRights = () => {
  return (
    <div className=" mt-6  pb-4 text-[15px] font-normal text-white flex gap-1 justify-center items-center">
      <Image
        src={copyright}
        alt=""
      />{" "}
      Copyright 2024 Bellout | Developed by{"  "}
      <span className="text-[#F79E1B]"> e-RAMO For Digital Solutions</span>
    </div>
  );
};

export default CopyRights;
