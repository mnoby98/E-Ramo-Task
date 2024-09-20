import Image from "next/image";
import React from "react";
import logo from "@/public/navbar/logo.png";
import FooterLinks from "../footer/FooterLinks";
import MobileStore from "../footer/MobileStore";
import facebook from "@/public/footer/facebook.png";
import instagram from "@/public/footer/instagram.png";
import twitter from "@/public/footer/twitter.png";
import youtube from "@/public/footer/youtube.png";
import copyright from "@/public/footer/copyright.svg";
import Link from "next/link";

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
            <div className="  mt-[30px]">
              <button className=" mb-[29px] text-[20px] leading-6 text-white font-bold py-4 px-[21px] w-[232px] rounded-[40px] border border-[#FFC436]">
                Become a Vendor
              </button>
              <ul className="flex  items-center gap-3">
                {socialLinks.map((link) => (
                  <li key={link.link}>
                    <Link href={link.link}>
                      <Image
                        src={link.image}
                        alt=""
                        className="h-[24px] w-[24px]"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
        </div>
        <div className=" mt-6  pb-4 text-[15px] font-normal text-white flex gap-1 justify-center items-center">
          <Image
            src={copyright}
            alt=""
          />{" "}
          Copyright 2024 Bellout | Developed by{"  "}
          <span className="text-[#F79E1B]"> e-RAMO For Digital Solutions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
const socialLinks = [
  { link: "#facebook", image: facebook },
  { link: "#instagram", image: instagram },
  { link: "#youtube", image: youtube },
  { link: "#twitter", image: twitter },
];
