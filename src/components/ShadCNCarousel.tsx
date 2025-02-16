import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
      <CarouselContent>
        {images.map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Image
                src={`/dance-pose-${index + 1}.jpg`}
                alt="Chloe Lee Dance Pose"
                width={400}
                height={400}
                className="rounded-lg w-full transition-transform duration-300"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" text-[#8e5b3652]" />
      <CarouselNext className="text-[#8e5b36]" />
    </Carousel>
  );
}
