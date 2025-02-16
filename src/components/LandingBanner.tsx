import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import InstaIcon from "../../public/instagram.svg";
import TiktokIcon from "../../public/tiktok.svg";

export default function LandingBanner() {
  return (
    <div className="flex items-center justify-between bg-[#8e5b36]">
      <Image
        src={"/insta-pic-2.jpg"}
        alt="Instagram Picture 2"
        width={400}
        height={800}
        className="w-1/2"
      />
      <div className="flex flex-col justify-between h-[100%] space-y-24 w-1/2">
        <div className="text-center space-y-4">
          <h1 className={`text-8xl`}>Chloe Lee</h1>
          <h2 className={` text-2xl font-bold text-center`}>
            Dancer, Instructor, LASELLE 2025
          </h2>
        </div>
        <div className="flex justify-between items-center px-32">
          <div className="flex space-x-2">
            <MapPin className="width-9 height-9" />
            <p className="text-xl font-bold">Singapore</p>
          </div>
          <div className="flex space-x-8">
            <Image
              src={InstaIcon}
              alt="Instagram Logo"
              width={32}
              height={32}
            />
            <Image
              src={TiktokIcon}
              alt="Instagram Logo"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
