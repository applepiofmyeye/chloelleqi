"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];
type CarouselProps = {
  opts?: Parameters<typeof useEmblaCarousel>[0];
  setApi?: (api: CarouselApi) => void;
};

const CarouselContext = React.createContext<{
  api: CarouselApi | null;
  selectedIndex: number;
  scrollTo: (index: number) => void;
} | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context)
    throw new Error("useCarousel must be used within a <Carousel />");
  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ opts, setApi, className, children, ...props }, ref) => {
  const [emblaRef, api] = useEmblaCarousel({
    ...opts,
  });
  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const isScrollingRef = React.useRef(false);
  const wheelTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    setApi?.(api);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, setApi]);

  // Revamped wheel scrolling implementation
  React.useEffect(() => {
    if (!api || !viewportRef.current) return;

    const viewport = viewportRef.current;
    let accumulatedDelta = 0;
    const deltaThreshold = 50; // Accumulate delta until this threshold

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (isScrollingRef.current) return;

      // Accumulate delta values
      accumulatedDelta += event.deltaX;

      // Clear previous timeout if it exists
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }

      // Set a timeout to reset accumulated delta
      wheelTimeoutRef.current = setTimeout(() => {
        accumulatedDelta = 0;
      }, 200);

      // Check if we've reached the threshold in either direction
      if (Math.abs(accumulatedDelta) >= deltaThreshold) {
        isScrollingRef.current = true;

        const direction = accumulatedDelta > 0 ? 1 : -1;
        accumulatedDelta = 0;

        const nextIndex = selectedIndex + direction;
        const totalSlides = api.scrollSnapList().length;

        if (nextIndex >= 0 && nextIndex < totalSlides) {
          api.scrollTo(nextIndex);
        }

        // Reset scrolling state after animation completes
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 500);
      }
    };

    viewport.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
      viewport.removeEventListener("wheel", handleWheel);
    };
  }, [api, selectedIndex]);

  return (
    <CarouselContext.Provider
      value={{ api, selectedIndex, scrollTo: (index) => api?.scrollTo(index) }}
    >
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div
          ref={(el) => {
            emblaRef(el);
            viewportRef.current = el;
          }}
          className="overflow-hidden"
        >
          <div className="flex">{children}</div>
        </div>
        <CarouselDots />
      </div>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = "Carousel";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("basis-full shrink-0 px-2", className)}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselDots = () => {
  const { api, selectedIndex, scrollTo } = useCarousel();
  if (!api) return null;

  return (
    <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 flex space-x-2">
      {Array.from({ length: api.scrollSnapList().length }).map((_, i) => (
        <button
          key={i}
          className={cn(
            "w-[6px] h-[6px] rounded-full bg-[#182344]/50",
            selectedIndex === i && "bg-[#182344]"
          )}
          onClick={() => scrollTo(i)}
        />
      ))}
    </div>
  );
};

export { Carousel, CarouselItem };
