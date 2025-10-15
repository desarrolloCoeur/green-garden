"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"
import { ChevronLeft, ChevronRight, ChevronsRight, ArrowRight } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Muros Verdes",
      description:
        "Transformamos espacios urbanos con jardines verticales que combinan diseño innovador y naturaleza. Nuestros muros verdes mejoran la calidad del aire y crean ambientes únicos.",
      features: [
        "Diseño personalizado según espacio",
        "Sistemas de riego automatizado",
        "Plantas de bajo mantenimiento",
        "Instalación profesional certificada",
      ],
      image: "/assets/services/wall.jpg",
    },
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
      image: "/assets/services/recreative.jpg",
    },
    {
      title: "Canchas Deportivas",
      description:
        "Instalación profesional de superficies deportivas con pasto sintético de última generación. Cumplimos con estándares internacionales de calidad y rendimiento.",
      features: ["Amortiguación profesional", "Drenaje de alto rendimiento", "Mantenimiento mínimo requerido"],
      image: "/assets/services/deportive.jpg",
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
      image: "/assets/services/resident.jpg",
    },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div id="servicios" className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-4xl md:text-6xl font-light text-black mb-4">
          Nuestros <span className="font-semibold text-[#4c9d2a]">Servicios</span>
        </h2>
        <div className="w-24 h-0.5 bg-[#4c9d2a]"></div>
      </div>

      {/* Desktop Alternating Layout */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex items-stretch gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Green Info Card */}
              <div className="w-2/5 bg-[#4c9d2a] text-white p-10 rounded-sm flex flex-col justify-center">
                <p className="text-base leading-relaxed mb-8">{service.description}</p>

                <div className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Image */}
              <div className="w-3/5 relative min-h-[450px] group rounded-sm overflow-hidden">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute inset-0 flex flex-col items-center justify-end pb-20">
                  <h3 className="text-4xl md:text-5xl font-light text-white text-center uppercase tracking-wider px-8">
                    {service.title}
                  </h3>
                </div>

                {/* CTA Button */}
                <a
                  href="#contacto"
                  className="absolute bottom-6 right-6 flex items-center gap-3 text-white group/btn hover:scale-105 transition-transform"
                >
                  <span className="text-base font-light tracking-wide">CONOCER MÁS</span>
                  <div className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-[#4c9d2a] transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </a>
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
                  <div className="bg-white rounded-sm overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-video">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <h3 className="absolute bottom-4 left-4 text-2xl font-light text-white">{service.title}</h3>
                    </div>

                    {/* Green Info Card */}
                    <div className="bg-[#4c9d2a] text-white p-6">
                      <p className="text-sm leading-relaxed mb-6">{service.description}</p>

                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <ChevronsRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span className="text-xs leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <a
                        href="#contacto"
                        className="flex items-center gap-2 text-white hover:gap-3 transition-all w-fit"
                      >
                        <span className="text-sm font-light tracking-wide">CONOCER MÁS</span>
                        <ArrowRight className="w-5 h-5" />
                      </a>
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
    </div>
  )
}
