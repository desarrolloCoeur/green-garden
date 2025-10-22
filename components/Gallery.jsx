"use client";

import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const images = [
    "/assets/gallery/1.jpg",
    "/assets/gallery/2.jpg",
    "/assets/gallery/3.jpg",
    "/assets/gallery/4.jpg",
    "/assets/gallery/5.jpg",
    "/assets/gallery/6.jpg",
    "/assets/gallery/7.jpg",
    "/assets/gallery/8.jpg",
    "/assets/gallery/9.jpg",
    "/assets/gallery/11.jpg",
    "/assets/gallery/13.jpg",
    "/assets/gallery/14.jpg",
    "/assets/gallery/15.jpg",
    "/assets/gallery/16.jpg",
    "/assets/gallery/17.jpg",
  ];

  return (
    <section className="relative md:py-1 lg:py-2 bg-[#f8f6f3] overflow-hidden">
      <div className="w-full mx-auto px-4 md:px-8 relative overflow-visible">
        <button
          onClick={scrollPrev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
        </button>

        <div className="max-w-7xl mx-auto">
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex gap-3 md:gap-4 lg:gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-[400px]"
                >
                  <div className="relative w-full h-[500px]">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Gallery image ${index + 1}`}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
