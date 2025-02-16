// import GalleryCarousel from "@/components/GalleryCarousel";
import About from "@/components/About";
import LandingBanner from "@/components/LandingBanner";
import { MessageForm } from "@/components/MessageForm";
// import { CarouselSize } from "@/components/ShadCNCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 w-full bg-[#8e5b36]/50 backdrop-blur-md py-6 px-36 z-50">
        <h2 className="text-xl font-semibold space-x-8">
          <Link href="/about">about</Link>
          <Link href="/contact">contact</Link>
        </h2>
      </div>
      <LandingBanner />
      <About />
      <div className="px-16 py-24 items-center space-y-8 bg-white text-[#30496c]">
        <h1 className="text-4xl font-bold ">Contact</h1>
        <p>Please fill out the form below to get in touch.</p>
        <div className="w-1/2">
          <MessageForm />
        </div>
      </div>
    </>
  );
}
