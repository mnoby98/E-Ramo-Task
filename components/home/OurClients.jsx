import Image from "next/image";
import React from "react";
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
  return (
    <section>
      <h2 className="text-[20px] mb-10 font-bold text-primary  ">
        Our Beloved Clients
      </h2>
      <ul className="  flex items-center justify-between">
        <li>
          <Image
            src={apple}
            alt=""
            className=" w-[28px] h-[34px]"
          />
        </li>
        <li>
          <Image
            src={samsung}
            alt=""
            className=" w-[99px] h-[33px]"
          />
        </li>
        <li>
          <Image
            src={realme}
            alt=""
            className=" w-[91px] h-[28px]"
          />
        </li>
        <li>
          <Image
            src={Nokia}
            alt=""
            className=" w-[79px] h-[13px]"
          />
        </li>
        <li>
          <Image
            src={oppo}
            alt=""
            className=" w-[74px] h-[18px]"
          />
        </li>
        <li>
          <Image
            src={xiaomi}
            alt=""
            className=" w-[31px] h-[31px]"
          />
        </li>
        <li>
          <Image
            src={lenovo}
            alt=""
            className=" w-[84px] h-[28px]"
          />
        </li>
        <li>
          <Image
            src={LG}
            alt=""
            className=" w-[65px] h-[31px]"
          />
        </li>
        <li>
          <Image
            src={infinix}
            alt=""
            className=" w-[72px] h-[28px]"
          />
        </li>
        <li>
          <Image
            src={htc}
            alt=""
            className=" w-[55px] h-[18px]"
          />
        </li>
        <li>
          <Image
            src={tecno}
            alt=""
            className=" w-[83px] h-[16px]"
          />
        </li>
        <li>
          <Image
            src={vivo}
            alt=""
            className=" w-[83px] h-[23px]"
          />
        </li>
        <li>
          <Image
            src={Huawei}
            alt=""
            className=" w-[39px] h-[38px]"
          />
        </li>
      </ul>
    </section>
  );
};

export default OurClients;
