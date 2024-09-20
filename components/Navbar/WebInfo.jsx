import Image from "next/image";
import Link from "next/link";

// Icons
import logo from "@/public/navbar/logo.png";
import mail from "@/public/navbar/mail.svg";
import phone from "@/public/navbar/phone.svg";
import vendor from "@/public/navbar/vendor.svg";
import arrow from "@/public/navbar/arrowdown.svg";
import language from "@/public/navbar/language.svg";
import StickBorder from "../common/StickBorder";

const WebInfo = () => {
  return (
    <div className=" flex  justify-between items-center">
      <div className=" flex items-center gap-8 ">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt=""
            className=" w-[50px] h-[68px]"
          />
        </Link>
        {/* Info Links */}
        <ul className=" text-[14px]  leading-[20px] flex gap-4 items-center   ">
          <li>
            <Link href="#">Contact Us</Link>
          </li>
          <StickBorder />

          <li>
            <Link
              target="_blank"
              className=" flex   items-center gap-[4px]"
              href="mailto:contact@bellout.com">
              <Image
                src={mail}
                alt=""
                className=" w-[15px] h-[15px]"
              />

              <span className="   leading-[20px]">contact@bellout.com</span>
            </Link>
          </li>
          <StickBorder />
          <li>
            <Link
              target="_blank"
              className=" flex items-center gap-[3px]"
              href="tel:+021300000000">
              <Image
                src={phone}
                alt=""
                className=" w-[15px] h-[15px]"
              />
              + 021300000000
            </Link>
          </li>
        </ul>
      </div>
      <div className=" flex  gap-12 items-center">
        {/* DropList Languages > UseClient */}
        <button className=" flex items-center gap-2">
          {" "}
          <Image
            src={language}
            alt=""
          />
          English
          <Image
            src={arrow}
            alt=""
          />
        </button>
        {/* BECOME A VENDOR */}
        <Link
          href="#"
          className="flex gap-3 items-center px-1 py-[6px] bg-secRed rounded-[5px] text-white">
          <Image
            src={vendor}
            alt=""
          />
          BECOME A VENDOR
        </Link>
      </div>
    </div>
  );
};

export default WebInfo;
