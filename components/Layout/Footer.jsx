import Image from "next/image";
import React from "react";
import logo from "@/public/navbar/logo.png";
import FooterLinks from "../footer/FooterLinks";
import MobileStore from "../footer/MobileStore";

import CopyRights from "../footer/CopyRights";
import Subscribe from "../footer/Subscribe";
import Social from "../footer/Social";

const Footer = () => {
  return (
    <footer className=" bg-primary  pt-8 ">
      <div className="    lg:px-0 px-6 md:px-16  lg:max-w-screen-xl mx-auto">
        <div className=" grid grid-cols-2 lg:flex  flex-wrap md:gap-10 lg:gap-[153px]">
          {/* logo */}
          <Image
            src={logo}
            alt=""
            className=" w-[115px] py-[15px] h-[185px]"
          />
          {/* Links */}
          <FooterLinks />
        </div>
        <div className="flex   flex-wrap md:gap-10 lg:gap-[375px]">
          <div className=" grid grid-cols-2 lg:flex   md:gap-[130px]">
            <MobileStore />
            <Social />
          </div>
          <Subscribe />
        </div>
        <CopyRights />
      </div>
    </footer>
  );
};

export default Footer;
