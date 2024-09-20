"use client";
import Image from "next/image";
import { useState } from "react";
import arrow from "@/public/navbar/arrowdownwhite.svg";
import list from "@/public/navbar/list.svg";

const CategoriesButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    "Grocery",
    "Furniture",
    "Phone",
    "Beauty",
    "Appliances",
    "Accessories",
    "Clothes",
    "Electronics",
    "Books",
  ];
  return (
    <div className="relative">
      <button
        className="text-[16px] flex items-center justify-center lg:justify-normal gap-4 bg-secRed rounded-sm lg:rounded-[12px] w-10 h-10 lg:w-fit lg:h-fit lg:py-[12px] lg:px-5 text-white"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <Image
          src={list}
          alt=""
          className=" w-6 h-6  "
        />
        <span className="hidden lg:flex gap-4">
          Browse Category{" "}
          <Image
            src={arrow}
            alt=""
            className={`transform ${
              isDropdownOpen ? "rotate-180" : ""
            } transition-transform`}
          />
        </span>
      </button>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 w-fit lg:w-full bg-white border border-gray-200 rounded-b-md shadow-lg z-10">
          <ul className="pt-9 pb-2">
            {categories.map((category, index) => (
              <li
                key={index}
                className="px-4 text-[20px] font-bold py-2 mb-9 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                {category}
                {(category === "Beauty" || category === "Clothes") && (
                  <span className="text-gray-400">&#62;</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoriesButton;
