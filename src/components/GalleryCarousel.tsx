import Image from "next/image";
import React from "react";
import "./GalleryCarousel.css";

export default function GalleryCarousel() {
  return (
    <div className="relative px-6 py-24 overflow-hidden col-span-3">
      <div className="grid grid-flow-col auto-cols-[350px] gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
        <div className="image-container snap-center flex items-center flex-col justify-center">
          <Image
            src={"/dance-pose-1.jpg"}
            alt="Chloe Lee Dance Pose 1"
            width={400}
            height={400}
            className="rounded-lg w-full transition-transform duration-300"
          />
        </div>
        <div className="image-container snap-center flex items-center flex-col justify-center">
          <Image
            src={"/dance-pose-2.jpg"}
            alt="Chloe Lee Dance Pose 2"
            width={400}
            height={400}
            className="rounded-lg w-full transition-transform duration-300"
          />
        </div>
        <div className="image-container snap-center flex items-center flex-col justify-center">
          <Image
            src={"/dance-pose-3.jpg"}
            alt="Chloe Lee Dance Pose 3"
            width={400}
            height={400}
            className="rounded-lg w-full transition-transform duration-300"
          />
        </div>
        {/* Add more images as needed */}
      </div>
    </div>
  );
}
