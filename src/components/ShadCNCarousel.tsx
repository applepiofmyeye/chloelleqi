import * as React from "react";

import { Carousel, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  "/dance-pose-1.jpg",
  "/dance-pose-2.jpg",
  "/dance-pose-3.jpg",
  // "/dance-pose-4.jpg",
  // "/dance-pose-5.jpg"
];
export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className=""
    >
      {images.map((_, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
          <div className={"p-1 flex flex-col justify-center h-[100%]"}>
            <Image
              src={`/dance-pose-${index + 1}.jpg`}
              alt="Chloe Lee Dance Pose"
              width={400}
              height={400}
              className="rounded-lg w-full transition-transform duration-100 h-[100%] object-cover"
            />
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
}
