import Image from "next/image";
import Link from "next/link";
import facebook from "@/public/footer/facebook.png";
import instagram from "@/public/footer/instagram.png";
import twitter from "@/public/footer/twitter.png";
import youtube from "@/public/footer/youtube.png";

const Social = () => {
  return (
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
  );
};

export default Social;
const socialLinks = [
  { link: "#facebook", image: facebook },
  { link: "#instagram", image: instagram },
  { link: "#youtube", image: youtube },
  { link: "#twitter", image: twitter },
];
