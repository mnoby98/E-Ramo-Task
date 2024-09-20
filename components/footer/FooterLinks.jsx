import Image from "next/image";
import Link from "next/link";
import React from "react";

import location from "@/public/footer/location.svg";
import mail from "@/public/footer/mail.svg";
import phone from "@/public/footer/phone.svg";
const FooterLinks = () => {
  return (
    <>
      <div>
        <h2 className=" text-white mb-8  font-semibold text-[20px] leading-6">
          {serviceLinks.header}
        </h2>
        <ul className=" text-treGray">
          {serviceLinks.links.map((service) => (
            <li key={service.label}>
              <Link
                href={service.link}
                className=" font-medium mb-1 text-[16px] leading-6">
                {service.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className=" text-white mb-8  font-semibold text-[20px] leading-6">
          {companyLinks.header}
        </h2>
        <ul className=" text-treGray">
          {companyLinks.links.map((item) => (
            <li key={item.label}>
              <Link
                href={item.link}
                className=" font-medium mb-1 text-[16px] leading-6">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className=" text-white mb-8  font-semibold text-[20px] leading-6">
          Store Infomation
        </h2>
        <ul className=" text-treGray">
          <li className="mb-3 flex items-start gap-2">
            <Image
              src={location}
              alt=""
            />
            <Link
              href={"#"}
              className=" font-medium  text-[16px] leading-6">
              Megashop - Demo Store
              <br /> 570 - Union Trade Center
            </Link>
          </li>
          <li className="mb-3 flex items-center gap-3">
            <Image
              src={phone}
              alt=""
            />
            <Link
              href={"#"}
              className=" font-medium   text-[16px] leading-6">
              + 02 1300000000
            </Link>
          </li>
          <li className="mb-3 flex items-center gap-3">
            <Image
              src={mail}
              alt=""
            />
            <Link
              href={"#"}
              className=" font-medium  text-[16px] leading-6">
              contact@bellout.com
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;
const serviceLinks = {
  header: "Service us",
  links: [
    { link: "#", label: "Contact us" },
    { link: "#", label: "About Us" },
    { link: "#", label: "Privacy policy" },
    { link: "#", label: "Terms & Conditions" },
    { link: "#", label: "FAQ" },
  ],
};
const companyLinks = {
  header: "Our Company",
  links: [
    { link: "#", label: "All Products" },
    { link: "#", label: "All orders" },
    { link: "#", label: "Payment Methods" },
    { link: "#", label: "Blog" },
  ],
};
