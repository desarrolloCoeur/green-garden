import Image from "next/image"

export default function Services() {
  const services = [
    {
      title: "Muros Verdes",
      description: "Diseño e instalación de jardines verticales que transforman espacios urbanos en oasis naturales.",
      image: "/assets/services/wall.jpg",
    },
    {
      title: "Áreas Recreativas",
      description: "Espacios verdes funcionales diseñados para el disfrute familiar y comunitario.",
      image: "/assets/services/recreative.jpg",
    },
    {
      title: "Canchas Deportivas",
      description: "Instalación profesional de superficies deportivas de alta calidad con pasto sintético.",
      image: "/assets/services/deportive.jpg",
    },
    {
      title: "Pasto Sintético Residencial",
      description: "Soluciones de pasto sintético premium para hogares, creando jardines de bajo mantenimiento.",
      image: "/assets/services/resident.jpg",
    },
  ]

  return (
    <div id="servicios" className="w-full bg-[#f8f6f3] py-24">
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-sm text-[#4c9d2a] tracking-wider uppercase mb-4">Nuestros Servicios</p>
          <h2 className="text-5xl md:text-7xl text-gray-900 leading-tight">
            Transformando
            <br />
            <span className="text-[#4c9d2a]">Espacios Verdes</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />    
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#4c9d2a] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>

                {/* Decorative Line */}
                <div className="mt-6 h-1 w-16 bg-[#4c9d2a] group-hover:w-24 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
