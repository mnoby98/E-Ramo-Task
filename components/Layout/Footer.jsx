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
      <div className="     max-w-screen-xl mx-auto">
        <div className="flex  gap-[153px]">
          {/* logo */}
          <Image
            src={logo}
            alt=""
            className=" w-[115px] py-[15px] h-[185px]"
          />
          {/* Links */}
          <FooterLinks />
        </div>
        <div className="flex    gap-[350px]">
          <div className=" flex gap-[130px]">
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
