"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  ArrowRight,
  X,
} from "lucide-react";
import "yet-another-react-lightbox/styles.css";

export default function Services() {
  const services = [
    {
      title: "Áreas Recreativas",
      description:
        "Creamos espacios verdes funcionales diseñados para el disfrute familiar y comunitario. Superficies seguras y duraderas que resisten el uso intensivo.",
      features: [
        "Pasto sintético de alta resistencia",
        "Superficies seguras para niños",
        "Drenaje eficiente integrado",
        "Garantía extendida de durabilidad",
      ],
      images: [
        "/assets/services/recreative.jpg",
        "/assets/gallery/1.jpg",
        "/assets/gallery/2.jpg",
        "/assets/gallery/6.jpg",
      ],
    },
    {
      title: "Canchas Deportivas",
      description:
        "Instalación profesional de superficies deportivas con pasto sintético de última generación. Cumplimos con estándares internacionales de calidad y rendimiento.",
      features: [
        "Amortiguación profesional",
        "Drenaje de alto rendimiento",
        "Mantenimiento mínimo requerido",
      ],
      images: [
        "/assets/services/deportive.jpg",
        "/assets/gallery/4.jpg",        
        "/assets/gallery/cancha-1.jpg",   
      ],
    },
    {
      title: "Pasto Sintético Residencial",
      description:
        "Soluciones premium de pasto sintético para hogares que buscan jardines hermosos sin el mantenimiento tradicional. Aspecto natural todo el año.",
      features: [
        "Apariencia ultra realista",
        "Resistente a rayos UV",
        "Ahorro de agua significativo",
        "15 años de garantía",
      ],
      images: [
        "/assets/services/resident.jpg",
        "/assets/gallery/11.jpg",
        "/assets/gallery/13.jpg",
        "/assets/gallery/14.jpg",
      ],
    },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
  });

  const [emblaRefModal, emblaApiModal] = useEmblaCarousel({
    loop: true,
    startIndex: lightboxIndex,
  });

  useEffect(() => {
    if (emblaApiModal && lightboxOpen) {
      emblaApiModal.scrollTo(lightboxIndex);
    }
  }, [emblaApiModal, lightboxIndex, lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [lightboxOpen]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrevModal = useCallback(() => {
    if (emblaApiModal) emblaApiModal.scrollPrev();
  }, [emblaApiModal]);

  const scrollNextModal = useCallback(() => {
    if (emblaApiModal) emblaApiModal.scrollNext();
  }, [emblaApiModal]);

  const openLightbox = (images, startIndex = 0) => {
    setLightboxImages(images);
    setLightboxIndex(startIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const ServiceImageCarousel = ({ images, title }) => {
    const [emblaRefService, emblaApiService] = useEmblaCarousel({ loop: true });

    const scrollPrevService = useCallback(() => {
      if (emblaApiService) emblaApiService.scrollPrev();
    }, [emblaApiService]);

    const scrollNextService = useCallback(() => {
      if (emblaApiService) emblaApiService.scrollNext();
    }, [emblaApiService]);

    return (
      <div className="relative w-full h-full group">
        <div className="overflow-hidden h-full" ref={emblaRefService}>
          <div className="flex h-full">
            {images.map((image, idx) => (
              <div
                key={idx}
                className="flex-[0_0_100%] min-w-0 relative h-full"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${title} ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation */}
        <button
          onClick={scrollPrevService}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors opacity-0 group-hover:opacity-100 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-[#4c9d2a]" />
        </button>
        <button
          onClick={scrollNextService}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors opacity-0 group-hover:opacity-100 z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-[#4c9d2a]" />
        </button>
      </div>
    );
  };

  return (
    <div id="servicios" className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
          Nuestros <span className=" text-[#4c9d2a]">Servicios</span>
        </h2>
        <div className="w-24 h-0.5 bg-[#4c9d2a]"></div>
      </div>

      {/* Desktop Alternating Layout */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex items-stretch gap-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Green Info Card */}
              <div className="w-2/5 bg-[#4c9d2a] text-white p-10 rounded-sm flex flex-col justify-center">
                <h3 className="text-4xl font-light text-white uppercase tracking-wider mb-4">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Image with Carousel */}
              <div className="w-3/5 relative min-h-[450px] rounded-sm overflow-hidden">
                <ServiceImageCarousel
                  images={service.images}
                  title={service.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden relative">
        <div className="w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-[5vw]">
                  <div
                    className="bg-white rounded-sm overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(service.images)}
                  >
                    {/* Image */}
                    <div className="relative aspect-video">
                      <Image
                        src={service.images[0] || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <h3 className="absolute bottom-4 left-4 text-2xl font-light text-white">
                        {service.title}
                      </h3>
                      <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                        {service.images.length} fotos
                      </div>
                    </div>

                    {/* Green Info Card */}
                    <div className="bg-[#4c9d2a] text-white p-6">
                      <p className="text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <ChevronsRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span className="text-xs leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-white w-fit">
                        <span className="text-sm font-light tracking-wide">
                          VER GALERÍA
                        </span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#4c9d2a]/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#4c9d2a]/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-50"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Modal Carousel */}
          <div className="w-full h-full flex items-center justify-center px-4">
            <div className="relative w-full max-w-5xl">
              <div className="overflow-hidden" ref={emblaRefModal}>
                <div className="flex">
                  {lightboxImages.map((image, idx) => (
                    <div
                      key={idx}
                      className="flex-[0_0_100%] min-w-0 relative aspect-video"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Gallery image ${idx + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={scrollPrevModal}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={scrollNextModal}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
