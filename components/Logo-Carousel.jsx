"use client"

import Marquee from "react-fast-marquee"

export default function LogoCarousel() {
  const logos = [
    { name: "Company 1", src: "/assets/clients/1.png", scale: 1.0 },
    { name: "Company 2", src: "/assets/clients/2.png", scale: 1.0 },
    { name: "Company 3", src: "/assets/clients/3.png", scale: 1.0 },
    { name: "Company 4", src: "/assets/clients/4.png", scale: 1.0 },
    { name: "Company 5", src: "/assets/clients/5.png", scale: 1.3 },
    { name: "Company 6", src: "/assets/clients/6.png", scale: 1.2 },
    { name: "Company 7", src: "/assets/clients/7.png", scale: 1.5 },
    { name: "Company 8", src: "/assets/clients/8.png", scale: 1.5 },
    { name: "Company 9", src: "/assets/clients/9.png", scale: 1.5 },
    { name: "Company 10", src: "/assets/clients/10.png", scale: 1.7 },
  ]

  return (
    <section className="pb-16 bg-[#f8f6f3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h3 className="text-md uppercase tracking-widest text-[#4c9d2a] font-black mb-4">
          Nuestros Clientes
        </h3>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f8f6f3] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8f6f3] to-transparent z-10 pointer-events-none" />

        {/* Marquee scroll */}
        <Marquee gradient={false} speed={80} pauseOnHover={true} className="flex items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-12 hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                className="h-50 w-50 object-contain opacity-60 hover:opacity-100 transition-opacity"
                style={{ transform: `scale(${logo.scale})` }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
