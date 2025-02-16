// import GalleryCarousel from "@/components/GalleryCarousel";
import LandingBanner from "@/components/LandingBanner";
import { CarouselSize } from "@/components/ShadCNCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 w-full bg-transparent backdrop-blur-md py-6 px-36 z-50">
        <h2 className="text-xl font-semibold space-x-8">
          <Link href="/about">about</Link>
          <Link href="/contact">contact</Link>
        </h2>
      </div>
      <LandingBanner />

      <div className="grid grid-cols-5 bg-[#ffffff] h-screen">
        <div className="col-span-2 px-16 py-24 items-center space-y-8">
          <h1 className="text-4xl font-bold text-[#30496c]">about me</h1>
          <p className="text-lg text-[#30496c]">
            {
              "As a third-year student in the Diploma in Dance program at LASALLE College of the Arts, I am dedicated to mastering the art of dance. My passion lies in becoming a commercial dancer and performing as a backup for world-renowned artists. I strive to hone my techniques and skills every day, embracing new styles and approaches that push my boundaries as a performer. I believe in the power of dance as a universal language that can convey emotions and connect with audiences on a profound level. My goal is to become an extraordinary performer who leaves a lasting impact through the artistry of movement. With a commitment to continuous improvement and a deep love for dance, I am ready to take on the challenges of the professional world and make my mark on the stage."
            }
          </p>
        </div>
        <div className="col-span-3 px-16 py-24 items-center space-y-8">
          <CarouselSize />
        </div>

        {/* <GalleryCarousel /> */}
      </div>
    </>
  );
}
