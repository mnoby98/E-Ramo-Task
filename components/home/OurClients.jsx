"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Logos
import oppo from "@/public/ourclients/oppo.png";
import apple from "@/public/ourclients/apple.png";
import samsung from "@/public/ourclients/samsung.png";
import LG from "@/public/ourclients/LG.png";
import xiaomi from "@/public/ourclients/xiaomi.png";
import vivo from "@/public/ourclients/vivo.png";
import tecno from "@/public/ourclients/tecno.png";
import realme from "@/public/ourclients/realme.png";
import Nokia from "@/public/ourclients/Nokia.png";
import lenovo from "@/public/ourclients/lenovo.png";
import infinix from "@/public/ourclients/infinix.png";
import Huawei from "@/public/ourclients/Huawei.png";
import htc from "@/public/ourclients/htc.png";

const OurClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const logos = [
    { src: apple, width: 28, height: 34, alt: "Apple" },
    { src: samsung, width: 99, height: 33, alt: "Samsung" },
    { src: realme, width: 91, height: 28, alt: "Realme" },
    { src: Nokia, width: 79, height: 13, alt: "Nokia" },
    { src: oppo, width: 74, height: 18, alt: "Oppo" },
    { src: xiaomi, width: 31, height: 31, alt: "Xiaomi" },
    { src: lenovo, width: 84, height: 28, alt: "Lenovo" },
    { src: LG, width: 65, height: 31, alt: "LG" },
    { src: infinix, width: 72, height: 28, alt: "Infinix" },
    { src: htc, width: 55, height: 18, alt: "HTC" },
    { src: tecno, width: 83, height: 16, alt: "Tecno" },
    { src: vivo, width: 83, height: 23, alt: "Vivo" },
    { src: Huawei, width: 39, height: 38, alt: "Huawei" },
  ];

  return (
    <section>
      <h2 className="text-[20px] mb-10 font-bold text-primary">
        Our Beloved Clients
      </h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center">
            <Image
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
              priority // Use priority to ensure images are optimized
              className="mx-auto"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurClients;
