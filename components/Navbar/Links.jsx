import Image from "next/image";
import Link from "next/link";

import search from "@/public/navbar/search.svg";
import noification from "@/public/navbar/noification.png";
import reload from "@/public/navbar/reload.png";
import user from "@/public/navbar/user.svg";
import cart from "@/public/navbar/cart.png";
import StickBorder from "../common/StickBorder";
import CategoriesButton from "./CategoriesButton";

const Links = () => {
  return (
    <div className="grid grid-cols-12 items-center text-[20px] font-semibold leading-5 mt-8">
      {/* DropList Button and Pages */}
      <div className="col-span-7 flex items-center gap-8">
        {/* DropDown List */}
        <CategoriesButton />
        {/* Pages */}
        <ul className="flex items-center gap-[22px] font-semibold text-[20px] text-[#232323]">
          <li>
            <Link
              href=""
              className="text-secRed">
              Home
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="">
              About Us
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="">
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {/* Search and Notification */}
      <div className="col-span-5 text-right flex items-center justify-end gap-5">
        {/* Search */}
        <div className="w-full max-w-[294px] relative">
          <input
            placeholder="Search your product"
            className="focus:outline-none placeholder:leading-normal placeholder:text-[#AEA9A9] placeholder:font-medium text-[14px] w-full rounded-[25px] border border-secRed pl-3 pr-9 py-[11px]"
          />
          <button className="absolute right-3 top-[50%] translate-y-[-50%]">
            <Image
              src={search}
              alt="search"
            />
          </button>
        </div>
        {/* Notifications */}
        <div className="flex gap-2 items-center">
          <button>
            <Image
              src={noification}
              alt=""
              className="h-5 w-5"
            />
          </button>
          <StickBorder />
          <button>
            <Image
              src={cart}
              alt=""
              className="h-5 w-5"
            />
          </button>
          <StickBorder />
          <button>
            <Image
              src={reload}
              alt=""
              className="h-5 w-5"
            />
          </button>
          <StickBorder />
          <button className="w-[120px] flex items-center justify-end gap-2 text-[12px]">
            <Image
              src={user}
              alt=""
              className="h-5 w-5"
            />
            Hello, Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Links;
