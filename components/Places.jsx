"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"

export default function Places() {
  const locations = [
    "HERMOSILLO",
    "OBREGÓN",
    "NAVOJOA",
    "MOCHIS",
    "GUASAVE",
    "CULIACÁN",
    "MAZATLÁN",
    "GUADALAJARA",
    "CIUDAD GUZMÁN",
    "SANTA ROSALÍA",
    "MULEGÉ",
    "LORETO",
    "LA PAZ",
    "CABO SAN LUCAS",
    "SAN JOSÉ DEL CABO",
  ]

  return (
    <section className="py-16 md:py-24 bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight">
                Nuestra <span className="font-bold text-[#7CB342]">Presencia</span>
              </h2>
              <div className="w-16 h-1 bg-[#7CB342] mt-4" />
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">
              Contamos con presencia en las principales ciudades del noroeste y occidente de México, brindando servicios
              de calidad en pasto sintético para satisfacer las necesidades de nuestros clientes.
            </p>

            {/* Locations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group transition-transform duration-300 hover:translate-x-2"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7CB342]/10 flex items-center justify-center group-hover:bg-[#7CB342] transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-[#7CB342] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-gray-700 font-medium">{location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Map Image */}
          <div className="relative h-[400px] md:h-[600px] rounded-sm overflow-hidden">
            <Image
              src="/assets/map.png"
              alt="Mapa de cobertura en México"
              fill
              className="object-contain"
            />   
          </div>
        </div>
      </div>
    </section>
  )
}
