import Image from "next/image";
import google from "@/public/footer/google.png";
import app from "@/public/footer/app.png";
import Link from "next/link";

const MobileStore = () => {
  return (
    <div className=" flex flex-col gap-3 mt-[13px]   ">
      <h2 className=" text-white font-medium text-[16px] leading-[23px]">
        Download App
      </h2>
      <Link href="#">
        <Image
          src={app}
          alt=""
          className=" w-[142px] h-[44px]"
        />
      </Link>
      <Link href="#">
        <Image
          src={google}
          alt=""
          className=" w-[142px] h-[44px]"
        />
      </Link>
    </div>
  );
};

export default MobileStore;
